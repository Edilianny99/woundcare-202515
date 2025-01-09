"use client";
import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	Radio,
	RadioGroup,
	Text,
	Image as ChakraImage,
	Textarea,
	Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import { CloseIcon } from "@chakra-ui/icons";
import { Conversation } from "@/interfaces/chat/conversation.interface";
import { getMyConversation } from "@/services/patient/conversation.service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import routes from "@/utils/routes";
import {
	createImageMessage,
	createTextMessage,
} from "@/services/messages/messages.service";
import { answerMessage } from "@/utils/dailyCaresAnswers";
import { createWoundEvolution } from "@/services/wound-evolution/wound-evolution.service";

function SecondForm() {
	const [files, setFiles] = useState<File[]>([]);
	const [filesToShow, setFilesToShow] = useState<string[]>([]);
	const [painValue, setPainValue] = useState<number>(0);
	const [swellingRedness, setSwellingRedness] = useState<string>("");
	const [hasFever, setHasFever] = useState<string>("");
	const [chillsShaking, setChillsShaking] = useState<string>("");
	const [hasSecretion, setHasSecretion] = useState<string>("");
	const [secretionType, setSecretionType] = useState<string>("");
	const [hasCleanBandagesOn, setHasCleanBandagesOn] = useState<string>("");
	const [dailyDescription, setDailyDescription] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [conversation, setConversation] = useState<Conversation | null>(null);
	const router = useRouter();

	useEffect(() => {
		const fetchConversation = async () => {
			try {
				const conversation = await getMyConversation();
				setConversation(conversation);
			} catch (error) {
				toast.error("Usted no tiene un caso médico activo.");
				router.push(routes.patientHomePage);
			}
		};
		fetchConversation();
	}, [router]);

	const allAnswersProvided =
		hasFever && swellingRedness && hasSecretion && chillsShaking;
	const allFilesUploaded = files.length > 0;
	const uploadPhoto = true;
	const canSubmit =
		allAnswersProvided && (uploadPhoto ? allFilesUploaded : true);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;
		const selectedFiles = event.target.files[0];
		setFiles([...files, selectedFiles]);

		const reader = new FileReader();
		reader.onload = () => {
			setFilesToShow([...filesToShow, reader.result as string]);
		};
		reader.readAsDataURL(selectedFiles);
	};

	const handleFileRemove = (index: number) => {
		setFiles(files.filter((file, i) => i !== index));
		setFilesToShow(filesToShow.filter((file, i) => i !== index));
	};

	const handleSubmit = async () => {
		setLoading(true);
		if (!conversation || !canSubmit) {
			setLoading(false);
			return;
		}
		const message = answerMessage({
			painValue: painValue.toString(),
			swellingRedness,
			hasFever,
			chillsShaking,
			hasSecretion,
			secretionType,
			hasCleanBandagesOn,
			dailyDescription,
		});

		try {
			await createTextMessage(message, conversation.id);
			const imagePromises = files.map((file) =>
				createImageMessage(file, conversation.id)
			);
			const imageResponses = await Promise.all(imagePromises);
			const images = imageResponses
				.filter((res) => res.image)
				.map((res) => res.image);
			const imagesCsv = images.join(", ");
			const payload = {
				medicalFileId: conversation.medicalFileId,
				questionaire: [
					{ key: "wound-photo", answer: imagesCsv },
					{ key: "pain-value", answer: painValue.toString() },
					{ key: "swelling-redness", answer: swellingRedness },
					{ key: "has-fever", answer: hasFever },
					{ key: "chills-shaking", answer: chillsShaking },
					{ key: "has-secretion", answer: hasSecretion },
					{ key: "secretion-type", answer: secretionType },
					{ key: "has-clean-bandages-on", answer: hasCleanBandagesOn },
					{ key: "daily-description", answer: dailyDescription },
				],
			};
			await createWoundEvolution(payload);
			toast.success("Formulario enviado correctamente");
			router.push(routes.patientHomePage);
		} catch (error: any) {
			toast.error("Hubo un error al enviar el formulario");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Flex w="100vw" h="13vh" justify="space-between" pr="3vh">
				<Arrow />
				<Flex w="65vw" direction="column" align="flex-end" justify="center">
					<Heading
						fontWeight="bold"
						color="#4F1964"
						fontSize="30px"
						mt="6vh"
						mb="1vh"
						mr="10px"
					>
						Valoracion de la herida
					</Heading>
					<Box w="55vw" h="2px" bg="#AD8EB1" />
				</Flex>
			</Flex>
			<Flex
				w="100vw"
				pl="20px"
				pr="20px"
				mb="30px"
				direction="column"
				align="center"
			>
				{/* NOTE: Upload Image */}
				<>
					<Text
						fontSize="22px"
						fontWeight="bold"
						paddingTop="20px"
						paddingLeft="20px"
						color="#3B3B3B"
					>
						Tómale foto a la herida
					</Text>
					<input
						style={{ display: "none" }}
						id="fileUpload"
						type="file"
						accept="image/jpeg, image/jpg, image/png"
						capture="environment"
						multiple
						onChange={handleFileChange}
					/>
					<label
						htmlFor="fileUpload"
						style={{
							display: "flex",
							marginTop: "20px",
							backgroundColor: "#AD8EB1",
							width: "80vw",
							height: "20vh",
							borderRadius: "15px",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: "20px",
							boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
							cursor: "pointer",
						}}
					>
						<Image
							src="/dailyCare/camera.png"
							alt="upload"
							width={120}
							height={120}
						/>
					</label>
				</>
				{/* NOTE: Uploaded Images */}
				<Box width={"100vw"} overflowX={"scroll"} whiteSpace={"nowrap"}>
					{filesToShow.map((file, index) => (
						<Box
							key={index}
							display={"inline-block"}
							marginX={2}
							position={"relative"}
						>
							<Box
								position={"absolute"}
								right={2}
								width={8}
								height={8}
								top={0}
								padding={2}
								backgroundColor={"white"}
								borderRadius={9999}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								onClick={() => handleFileRemove(index)}
							>
								<CloseIcon />
							</Box>
							<ChakraImage boxSize={"150px"} src={`${file}`} alt="Image" />
						</Box>
					))}
				</Box>
				<Box w="100%" h="2px" bg="#AD8EB1" />
				{/* NOTE: ¿Tiene dolor en la herida? */}
				<Flex
					w="100%"
					mb="20px"
					mt="20px"
					direction="row"
					justify="space-between"
				>
					<Image
						src="/dailyCare/pain.png"
						alt="fever"
						width={105}
						height={105}
					/>
					<Box display="flex" flexDirection="column" justifyContent="center">
						<Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
							¿Tiene dolor en la herida?
						</Text>
						<input
							type="range"
							min={0}
							max={10}
							step={1}
							value={painValue}
							onChange={(event) => {
								setPainValue(Number(event.target.value));
							}}
						/>
					</Box>
				</Flex>
				<Box w="100%" h="2px" bg="#AD8EB1" />
				{/* NOTE: ¿Tiene hinchazón o enrojecimiento en el área de la herida? */}
				<Flex
					w="100%"
					mb="20px"
					mt="20px"
					direction="row"
					justify="space-between"
				>
					<Box display="flex" flexDirection="column" justifyContent="center">
						<Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
							¿Tiene hinchazón o enrojecimiento en el área de la herida?
						</Text>
						<RadioGroup
							display="flex"
							flexDirection="column"
							onChange={setSwellingRedness}
						>
							<Radio value="true" size="lg" colorScheme="purple">
								Si
							</Radio>
							<Radio value="false" size="lg" colorScheme="purple">
								No
							</Radio>
						</RadioGroup>
					</Box>
					<Image
						src="/dailyCare/swollen.png"
						alt="fever"
						width={105}
						height={105}
					/>
				</Flex>
				<Box w="100%" h="2px" bg="#AD8EB1" />
				{/* NOTE: ¿Tiene fiebre o ha notado un aumento de la temperatura corporal? */}
				<Flex
					w="100%"
					mb="20px"
					mt="20px"
					direction="row"
					justify="space-between"
				>
					<Image
						src="/dailyCare/fever.png"
						alt="fever"
						width={105}
						height={105}
					/>
					<Box display="flex" flexDirection="column" justifyContent="center">
						<Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
							¿Tiene fiebre o ha notado un aumento de la temperatura corporal?
						</Text>
						<RadioGroup
							display="flex"
							flexDirection="column"
							onChange={setHasFever}
						>
							<Radio value="true" size="lg" colorScheme="purple">
								Si
							</Radio>
							<Radio value="false" size="lg" colorScheme="purple">
								No
							</Radio>
						</RadioGroup>
					</Box>
				</Flex>
				<Box w="100%" h="2px" bg="#AD8EB1" />
				{/* NOTE: ¿Siente escalofríos o temblores? */}
				<Flex
					w="100%"
					mb="20px"
					mt="20px"
					direction="row"
					justify="space-between"
				>
					<Box display="flex" flexDirection="column" justifyContent="center">
						<Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
							¿Siente escalofríos o temblores?
						</Text>
						<RadioGroup
							display="flex"
							flexDirection="column"
							onChange={setChillsShaking}
						>
							<Radio value="true" size="lg" colorScheme="purple">
								Si
							</Radio>
							<Radio value="false" size="lg" colorScheme="purple">
								No
							</Radio>
						</RadioGroup>
					</Box>
					<Image
						src="/dailyCare/alergies.png"
						alt="fever"
						width={105}
						height={105}
					/>
				</Flex>
				<Box w="100%" h="2px" bg="#AD8EB1" />
				{/* NOTE: Tiene algún tipo de secreción (pus o sangre) en la herida */}
				<Flex
					w="100%"
					mb="20px"
					mt="20px"
					direction="row"
					justify="space-between"
				>
					<Image
						src="/dailyCare/wound.png"
						alt="fever"
						width={105}
						height={105}
					/>
					<Box display="flex" flexDirection="column" justifyContent="center">
						<Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
							Tiene algún tipo de secreción (pus o sangre) en la herida
						</Text>
						<RadioGroup
							display="flex"
							flexDirection="column"
							onChange={setHasSecretion}
						>
							<Radio value="true" size="lg" colorScheme="purple">
								Si
							</Radio>
							<Radio value="false" size="lg" colorScheme="purple">
								No
							</Radio>
						</RadioGroup>
					</Box>
				</Flex>
				<Box w="100%" h="2px" bg="#AD8EB1" />
				{/* TODO: Imagen de Vendaje */}
				{/* NOTE: ¿El vendaje está en su lugar y limpio? */}
				<Flex
					w="100%"
					mb="20px"
					mt="20px"
					direction="row"
					justify="space-between"
				>
					<Box display="flex" flexDirection="column" justifyContent="center">
						<Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
							¿El vendaje está en su lugar y limpio?
						</Text>
						<RadioGroup
							display="flex"
							flexDirection="column"
							onChange={setHasCleanBandagesOn}
						>
							<Radio value="true" size="lg" colorScheme="purple">
								Si
							</Radio>
							<Radio value="false" size="lg" colorScheme="purple">
								No
							</Radio>
						</RadioGroup>
					</Box>
					<Image
						src="/dailyCare/alergies.png"
						alt="fever"
						width={105}
						height={105}
					/>
				</Flex>
				<Box w="100%" h="2px" bg="#AD8EB1" />
				{/* NOTE: Tiene algún tipo de secreción (pus o sangre) en la herida */}
				<Flex w="100%" mb="20px" mt="20px" direction="row" justify="center">
					<Box display="flex" flexDirection="column" justifyContent="center">
						<Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
							Descripción de Cuidado (Opcional)
						</Text>
						<Textarea
							placeholder="Ingrese una descripción adicional de su cuidado de ser necesario..."
							value={dailyDescription}
							onChange={(event) => {
								setDailyDescription(event.target.value);
							}}
						/>
					</Box>
				</Flex>
				<Box w="100%" h="2px" bg="#AD8EB1" />
				<Button
					w="80vw"
					h="6vh"
					bg="#4F1964"
					borderRadius="15px"
					mt="20px"
					color="white"
					fontSize="24px"
					fontWeight="bold"
					boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
					_disabled={{
						bg: "#cccccc",
						color: "#666666",
						cursor: "not-allowed",
					}}
					isDisabled={!canSubmit}
					onClick={handleSubmit}
					isLoading={loading}
				>
					Enviar
				</Button>
			</Flex>
		</>
	);
}

export default SecondForm;

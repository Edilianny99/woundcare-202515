"use client";
import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Radio,
	RadioGroup,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Text,
	Textarea,
	Image as ChakraImage,
} from "@chakra-ui/react";
import Image from "next/image";
import { CloseIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Arrow from "@/components/Arrow";

function WoundCareForm() {
	const [painLevel, setPainLevel] = useState<number>(0); // Nivel de dolor
	const [swelling, setSwelling] = useState<string>(""); // Hinchazón
	const [fever, setFever] = useState<string>(""); // Fiebre
	const [chills, setChills] = useState<string>(""); // Escalofríos
	const [secretion, setSecretion] = useState<string>(""); // Secreción
	const [secretionType, setSecretionType] = useState<string | null>(null); // Tipo de secreción
	const [bandageStatus, setBandageStatus] = useState<string>(""); // Estado del vendaje
	const [dailyCare, setDailyCare] = useState<string>(""); // Descripción opcional
	const [files, setFiles] = useState<File[]>([]);
	const [filesToShow, setFilesToShow] = useState<string[]>([]);
	const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el modal

	const router = useRouter();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;
		const selectedFiles = Array.from(event.target.files);
		setFiles([...files, ...selectedFiles]);

		selectedFiles.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				setFilesToShow((prev) => [...prev, reader.result as string]);
			};
			reader.readAsDataURL(file);
		});
	};

	const handleFileRemove = (index: number) => {
		setFiles(files.filter((_, i) => i !== index));
		setFilesToShow(filesToShow.filter((_, i) => i !== index));
	};

	const handleSecretionChange = (value: string) => {
		setSecretion(value);
		if (value === "Si") {
			onOpen(); // Abre el modal si selecciona "Sí"
		} else {
			setSecretionType(null); // Limpia el tipo si selecciona "No"
		}
	};

	const handleSecretionTypeSelect = (type: string) => {
		setSecretionType(type);
		onClose(); // Cierra el modal después de seleccionar
	};

	const handleSubmit = async () => {
		if (!files.length) {
			toast.error("Debe cargar al menos una foto de la herida.");
			return;
		}
		// Lógica de envío
		const submissionData = {
			painLevel,
			swelling,
			fever,
			chills,
			secretion,
			secretionType,
			bandageStatus,
			dailyCare,
			files,
			timestamp: new Date().toISOString(),
		};

		try {
			// Aquí iría la lógica de envío al backend
			console.log(submissionData);
			toast.success("Formulario enviado correctamente.");
			router.push("/success-page");
		} catch (error) {
			toast.error("Hubo un error al enviar el formulario.");
		}
	};

	return (
		<Flex direction="column" align="center" p={4}>
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
						Cuidados diarios
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
				{/* Campo 1: Foto */}
				<Box w="100%" py={4} borderBottom="1px solid #E2E8F0">
					<Text fontWeight="bold" fontSize="16px" color="#4F1964" mb={2}>
						Tome una foto actual de su herida:
					</Text>

					{/* Botón estilizado para tomar foto */}
					<label htmlFor="file-upload">
						<Flex
							as="button"
							bg="#4F1964"
							color="white"
							w="100%"
							h="50px"
							align="center"
							justify="center"
							borderRadius="8px"
							cursor="pointer"
							_hover={{ bg: "#3A124A" }}
							_active={{ bg: "#290C36" }}
						>
							Tomar Foto
						</Flex>
					</label>

					{/* Input para activar la cámara */}
					<input
						id="file-upload"
						type="file"
						accept="image/*"
						capture="environment" // Activa la cámara trasera
						onChange={handleFileChange}
						style={{ display: "none" }}
					/>

					{/* Vista previa de las fotos tomadas */}
					<Flex overflowX="scroll" mt={4}>
						{filesToShow.map((file, index) => (
							<Box position="relative" key={index} marginRight={2}>
								<ChakraImage boxSize="100px" src={file} alt="Wound" />
								<CloseIcon
									position="absolute"
									top={0}
									right={0}
									onClick={() => handleFileRemove(index)}
									cursor="pointer"
									bg="white"
									borderRadius="50%"
									boxShadow="0px 4px 6px rgba(0, 0, 0, 0.2)"
								/>
							</Box>
						))}
					</Flex>
				</Box>

				<Box w="100%" h="2px" bg="#AD8EB1" mt={4} />

				{/* Campo 2: Escala EVA */}
				<Text fontWeight="bold" mt={4}>
					Nivel de dolor (0 - Sin dolor, 10 - Dolor más intenso):
				</Text>
				<Slider
					value={painLevel}
					min={0}
					max={10}
					step={1}
					onChange={setPainLevel}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
				<Text>Dolor actual: {painLevel}</Text>

				<Box w="100%" h="2px" bg="#AD8EB1" mt={4} />
				{/* Campo 3: Hinchazón */}
				<Text fontWeight="bold" mt={4}>
					¿Hay hinchazón o enrojecimiento?
				</Text>
				<RadioGroup onChange={setSwelling} mt={3}>
					<Radio value="Si" size="lg" colorScheme="purple" marginRight={3}>
						Sí
					</Radio>
					<Radio value="No" size="lg" colorScheme="purple">
						No
					</Radio>
				</RadioGroup>

				<Box w="100%" h="2px" bg="#AD8EB1" mt={4} />
				{/* Campo 4: Fiebre */}
				<Text fontWeight="bold" mt={4}>
					¿Tiene fiebre o ha notado un aumento de temperatura?
				</Text>
				<RadioGroup onChange={setFever} mt={3}>
					<Radio value="Si" size="lg" colorScheme="purple" marginRight={3}>
						Sí
					</Radio>
					<Radio value="No" size="lg" colorScheme="purple">
						No
					</Radio>
				</RadioGroup>

				<Box w="100%" h="2px" bg="#AD8EB1" mt={4} />
				{/* Campo 5: Escalofríos */}
				<Text fontWeight="bold" mt={4}>
					¿Siente escalofríos o temblores?
				</Text>
				<RadioGroup onChange={setChills} mt={3}>
					<Radio value="Si" size="lg" colorScheme="purple" marginRight={3}>
						Sí
					</Radio>
					<Radio value="No" size="lg" colorScheme="purple">
						No
					</Radio>
				</RadioGroup>

				<Box w="100%" h="2px" bg="#AD8EB1" mt={4} />

				{/* Campo 6: Secreción */}
				<Flex direction="column" align="center" p={4}>
					<Text fontWeight="bold" mt={4}>
						¿La herida tiene secreción?
					</Text>
					<RadioGroup onChange={handleSecretionChange} mt={3}>
						<Radio value="Si" size="lg" colorScheme="purple" marginRight={3}>
							Sí
						</Radio>
						<Radio value="No" size="lg" colorScheme="purple">
							No
						</Radio>
					</RadioGroup>

					{/* Modal para elegir el tipo de secreción */}
					<Modal isOpen={isOpen} onClose={onClose} isCentered>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader textAlign="center" fontWeight="bold" color="#4F1964">
								Seleccione el tipo de secreción
							</ModalHeader>
							<ModalBody>
								<Flex
									direction="row"
									justify="space-around"
									wrap="wrap"
									gap={4}
								>
									{/* Opción: Seroso */}
									<Box
										textAlign="center"
										cursor="pointer"
										onClick={() => handleSecretionTypeSelect("Seroso")}
									>
										<Image
											src="/images/seroso.png" // Cambia esta ruta por la de tu imagen
											alt="Seroso"
											width={100}
											height={100}
										/>
										<Text mt={2}>Seroso</Text>
									</Box>
									{/* Opción: Purulento */}
									<Box
										textAlign="center"
										cursor="pointer"
										onClick={() => handleSecretionTypeSelect("Purulento")}
									>
										<Image
											src="/images/purulento.png" // Cambia esta ruta por la de tu imagen
											alt="Purulento"
											width={100}
											height={100}
										/>
										<Text mt={2}>Purulento</Text>
									</Box>
									{/* Opción: Sanguinolento */}
									<Box
										textAlign="center"
										cursor="pointer"
										onClick={() => handleSecretionTypeSelect("Sanguinolento")}
									>
										<Image
											src="/images/sanguinolento.png" // Cambia esta ruta por la de tu imagen
											alt="Sanguinolento"
											width={100}
											height={100}
										/>
										<Text mt={2}>Sanguinolento</Text>
									</Box>
									{/* Opción: Serosanguinolento */}
									<Box
										textAlign="center"
										cursor="pointer"
										onClick={() =>
											handleSecretionTypeSelect("Serosanguinolento")
										}
									>
										<Image
											src="/images/serosanguinolento.png" // Cambia esta ruta por la de tu imagen
											alt="Serosanguinolento"
											width={100}
											height={100}
										/>
										<Text mt={2}>Serosanguinolento</Text>
									</Box>
								</Flex>
							</ModalBody>
							<ModalFooter>
								<Button colorScheme="purple" onClick={onClose}>
									Cancelar
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>

					{/* Resumen del tipo de secreción seleccionado */}
					{secretionType && (
						<Box mt={4} p={4} bg="#F2F2F2" borderRadius="md">
							<Text>
								Tipo de secreción seleccionado:{" "}
								<Text as="span" fontWeight="bold" color="#4F1964">
									{secretionType}
								</Text>
							</Text>
						</Box>
					)}
				</Flex>

				<Box w="100%" h="2px" bg="#AD8EB1" mt={4} />

				{/* Campo 7: Vendaje */}
				<Text fontWeight="bold" mt={4}>
					¿El vendaje está limpio y en su lugar?
				</Text>
				<RadioGroup onChange={setBandageStatus} mt={3}>
					<Radio value="Si" size="lg" colorScheme="purple" marginRight={3}>
						Sí
					</Radio>
					<Radio value="No" size="lg" colorScheme="purple">
						No
					</Radio>
				</RadioGroup>

				<Box w="100%" h="2px" bg="#AD8EB1" mt={4} />

				{/* Campo 8: Comentarios */}
				<Text fontWeight="bold" mt={4}>
					Información adicional (opcional):
				</Text>
				<Textarea
					value={dailyCare}
					onChange={(e) => setDailyCare(e.target.value)}
					maxLength={150}
					placeholder="Escribe aquí..."
				/>

				{/* Botón de envío */}
				<Button
					mt={6}
					colorScheme="purple"
					isDisabled={!files.length}
					onClick={handleSubmit}
				>
					Enviar
				</Button>
			</Flex>
		</Flex>
	);
}

export default WoundCareForm;

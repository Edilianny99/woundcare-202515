"use client";
import Arrow from "@/components/Arrow";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
	Nurse,
	TheMedicalFile,
	ThePatientInfo,
} from "@/interfaces/nurse/nurse.interface";
import {
	getMe,
	getPatientInfo,
	getPatientMedicalFile,
} from "@/services/nurse/nurse.service";
import ModalBandageChange from "./ModalBandageChange";
import AlertDialogDischarge from "./AlertDialogDischarge";
import ModalMedicine from "./ModalMedicine";
import Loader from "@/components/Loader";
import { fetchAPIPDF } from "@/utils/api";
import { toast } from "react-toastify";
import { PersonalData } from "./personal-data";

function MedicalFilePatient() {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const [medicalFile, setMedicalFile] = useState<TheMedicalFile>();
	const [patientInfo, setPatientInfo] = useState<ThePatientInfo>();
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenM, setIsOpenM] = useState(false);
	const [nurse, setNurse] = useState<Nurse>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMedicalFile = async () => {
			if (id !== null) {
				const response = await getPatientMedicalFile(id);
				setMedicalFile(response);
				setIsLoading(false);
			}
		};
		fetchMedicalFile();
	}, [id]);

	const downloadPdf = async (medicalFileId: number) => {
		try {
			const response = await fetchAPIPDF<BlobPart>(
				`/medical-file/export-pdf/${medicalFileId}`,
				"GET"
			);

			const file = new Blob([response], { type: "application/pdf" });
			const link = document.createElement("a");

			link.href = URL.createObjectURL(file);
			link.download = `Historia_clinica_${medicalFileId}.pdf`;
			link.click();

			URL.revokeObjectURL(link.href);

			toast.success("Historia clínica descargada correctamente");
			return response;
		} catch (error) {
			toast.error("Error al descargar la historia clínica");
		}
	};

	useEffect(() => {
		const fetchPatientInfo = async () => {
			if (id !== null) {
				const response = await getPatientInfo(id);
				setPatientInfo(response);
			}
		};
		fetchPatientInfo();
	}, [id]);

	useEffect(() => {
		const fetchNurse = async () => {
			const response = await getMe();
			setNurse(response);
		};

		fetchNurse();
	}, []);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const handleOpenModalM = () => {
		setIsOpenM(true);
	};

	const handleCloseModalM = () => {
		setIsOpenM(false);
	};

	return isLoading ? (
		<Box width={"100vw"} flexGrow={1} position={"relative"}>
			<Loader />
		</Box>
	) : (
		<>
			<Box as="main" flex={1}>
				<Arrow />
				<Flex
					marginTop={-16}
					marginRight={6}
					flexDirection="column"
					alignItems="flex-end"
				>
					<Heading
						as="h1"
						color="#033e5c"
						borderBottom={"2px solid #419ebd"}
						paddingX="10px"
					>
						Información del Paciente
					</Heading>
					{/* TODO: Que el estado venga del servidor */}
					<Text color="#033e5c95" marginTop={"4px"} fontWeight={"bold"}>
						Estado: Abierto
					</Text>
					<Flex
						direction={"row"}
						justifyContent={"flex-end"}
						mt={"10px"}
						mb={"0.25rem"}
					>
						<Button
							borderRadius="10.25rem"
							color="white"
							bg={"#419ebd"}
							fontSize={"14px"}
							mr={"10px"}
							boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							onClick={handleOpenModalM}
						>
							+
							<Image
								src="/medicine/capsule.png"
								alt="menu"
								width={20}
								height={20}
								style={{ cursor: "pointer" }}
							/>
						</Button>
						<Button
							borderRadius="10.25rem"
							color="white"
							bg={"#419ebd"}
							fontSize={"14px"}
							boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							onClick={handleOpenModal}
						>
							+ Asignar cambio de vendaje
						</Button>
					</Flex>
					<Button
						borderRadius="10.25rem"
						color="white"
						bg={"#419ebd"}
						fontSize={"14px"}
						boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						onClick={() => downloadPdf(medicalFile?.id as number)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path
								fill="#ffffff"
								fill-rule="evenodd"
								d="M5 16.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-2a.75.75 0 0 1 1.5 0v2A1.75 1.75 0 0 1 18 20.75H6A1.75 1.75 0 0 1 4.25 19v-2a.75.75 0 0 1 .75-.75"
								clip-rule="evenodd"
							/>
							<path
								fill="#ffffff"
								d="M10.738 3.75a.99.99 0 0 0-.988.906a37 37 0 0 0-.082 5.27q-.37.02-.74.047l-1.49.109a.76.76 0 0 0-.585 1.167a15.6 15.6 0 0 0 4.032 4.258l.597.429a.89.89 0 0 0 1.036 0l.597-.429a15.6 15.6 0 0 0 4.032-4.258a.76.76 0 0 0-.585-1.167l-1.49-.109a42 42 0 0 0-.74-.047a37 37 0 0 0-.081-5.27a.99.99 0 0 0-.989-.906z"
							/>
						</svg>
						Descargar historia completa
					</Button>
				</Flex>
				<Flex w="100vw" h="13vh" align="center" pr="6vw" pl="6vw">
					{patientInfo?.genre === "FEMALE" ? (
						<Image
							src="/profile/female_user.png"
							alt="female_user"
							width={80}
							height={80}
						/>
					) : (
						<Image
							src="/profile/male_user.png"
							alt="male_user"
							width={80}
							height={80}
						/>
					)}

					<Heading
						as="h2"
						fontSize="1.5rem"
						fontWeight="bold"
						color="#033e5c"
						ml="10px"
					>
						{patientInfo?.user.fullname}
					</Heading>
				</Flex>
				<hr
					style={{
						borderTop: "2px #419ebd solid",
						margin: "1rem",
					}}
				/>
				<Box padding={"0 1rem"}>
					<PersonalData
						patientInfo={patientInfo}
						medicalFileDate={medicalFile?.date}
					/>
					{/* TODO: xd */}
					{/* <AlertDialogDischarge idPatient={patientInfo?.nationalId} />
					<ModalBandageChange
						isOpen={isOpen}
						onClose={handleCloseModal}
						idNurse={nurse?.nationalId}
						idPatient={patientInfo?.nationalId}
					/>
					<ModalMedicine
						isOpen={isOpenM}
						onClose={handleCloseModalM}
						idMedicalFile={medicalFile?.id}
					/> */}
					{/* TODO: Historial Clinico */}
					<Heading
						as="h2"
						color="#033e5c"
						paddingX="0.25rem"
						marginY={"0.75rem"}
						fontSize={"1.25rem"}
					>
						Historial Clínico
					</Heading>
					<hr
						style={{
							borderTop: "2px #419ebd solid",
							margin: "0 0 0.75rem",
						}}
					/>
				</Box>
			</Box>
		</>
	);
}

export default MedicalFilePatient;

"use client";
import Arrow from "@/components/Arrow";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
	Nurse,
	PatientInfoWithMedFiles,
} from "@/interfaces/nurse/nurse.interface";
import {
	getMe,
	getPatientInfoWithMedFile,
} from "@/services/nurse/nurse.service";
import ModalBandageChange from "./ModalBandageChange";
import AlertDialogDischarge from "./AlertDialogDischarge";
import ModalMedicine from "./ModalMedicine";
import Loader from "@/components/Loader";
import { PersonalData } from "./personal-data";
import { MedicalFileBox } from "./medical-file-box";
import routes from "@/utils/routes";

function MedicalFilePatient() {
	const [isLoading, setIsLoading] = useState(true);
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const [patientInfo, setPatientInfo] = useState<PatientInfoWithMedFiles>();
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenM, setIsOpenM] = useState(false);
	const [nurse, setNurse] = useState<Nurse>();

	const fetchPatientInfo = useCallback(async () => {
		if (id !== null) {
			const response = await getPatientInfoWithMedFile(id);
			setPatientInfo(response);
		}
	}, [id]);

	const fetchNurse = async () => {
		const response = await getMe();
		setNurse(response);
	};

	useEffect(() => {
		fetchPatientInfo();
		fetchNurse();
		setIsLoading(false);
	}, [fetchPatientInfo]);

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
		<Box as="main" flex={1}>
			<Arrow goBackUrl={routes.nursePatientsList} />
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
				<Text color="#033e5c95" marginTop={"4px"} fontWeight={"bold"}>
					Estado: {patientInfo?.status === "ACTIVE" ? "Abierto" : "Cerrado"}
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

				<Flex direction={"column"} px="0.5rem" gap={1}>
					<Heading
						as="h2"
						fontSize="1.5rem"
						fontWeight="bold"
						color="#033e5c"
						ml="10px"
					>
						{patientInfo?.user.fullname}
						<AlertDialogDischarge idPatient={patientInfo?.nationalId} />
					</Heading>
				</Flex>
			</Flex>
			<hr
				style={{
					borderTop: "2px #419ebd solid",
					margin: "1rem",
					boxShadow: "0rem 0.25rem 0.5rem #033e5c65",
				}}
			/>
			<Box padding={"0 1rem"}>
				{patientInfo && <PersonalData patientInfo={patientInfo} />}
				<ModalBandageChange
					isOpen={isOpen}
					onClose={handleCloseModal}
					idNurse={nurse?.nationalId}
					idPatient={patientInfo?.nationalId}
				/>
				<ModalMedicine
					isOpen={isOpenM}
					onClose={handleCloseModalM}
					idMedicalFile={patientInfo?.MedicalFile[0].id}
				/>
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
						boxShadow: "0rem 0.25rem 0.5rem #033e5c65",
					}}
				/>
				{patientInfo?.MedicalFile.map((medFile) => (
					<MedicalFileBox medicalFileShort={medFile} key={medFile.id} />
				))}
			</Box>
		</Box>
	);
}

export default MedicalFilePatient;

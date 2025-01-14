"use client";
import Arrow from "@/components/Arrow";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
	TheMedicalFile,
	ThePatientInfo,
} from "@/interfaces/doctor/doctor.interface";
import {
	getPatientInfo,
	getPatientMedicalFile,
} from "@/services/doctor/doctor.service";
import Loader from "@/components/Loader";

function DoctorMedicalFilePatient() {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const [medicalFile, setMedicalFile] = useState<TheMedicalFile>();
	const [patientInfo, setPatientInfo] = useState<ThePatientInfo>();
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

	useEffect(() => {
		const fetchPatientInfo = async () => {
			if (id !== null) {
				const response = await getPatientInfo(id);
				setPatientInfo(response);
			}
		};
		fetchPatientInfo();
	}, [id]);

	const calculateAge = (birthDate: string) => {
		const dob = new Date(birthDate);
		const today = new Date();
		let age = today.getFullYear() - dob.getFullYear();
		const m = today.getMonth() - dob.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
			age--;
		}
		return age;
	};

	const formatDate = (dateString: string | undefined) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("en-GB");
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
					<Text color="#033e5c" marginTop={"4px"}>
						Nº Historia: {medicalFile?.id}
					</Text>
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
						fontSize="x-large"
						fontWeight="bold"
						color="#033e5c"
						ml="10px"
					>
						{patientInfo?.user.fullname}
					</Heading>
				</Flex>
				<Flex direction={"column"} paddingX={"30px"} paddingBottom={"30px"}>
					<Text
						fontWeight={"bold"}
						fontSize={"18px"}
						color={"#3B3B3B"}
						marginBottom={"10px"}
					>
						Información del paciente:
					</Text>
					<Flex direction={"row"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Nombre:</Text>
						<Text marginLeft={"5px"}>{patientInfo?.user.fullname}</Text>
					</Flex>
					<Flex direction={"row"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Edad:</Text>
						<Text marginLeft={"5px"}>
							{patientInfo?.birthDate
								? calculateAge(patientInfo.birthDate)
								: "N/A"}{" "}
							años
						</Text>
					</Flex>
					<Flex direction={"row"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Género:</Text>
						<Text marginLeft={"5px"}>
							{patientInfo?.genre === "FEMALE" ? "Femenino" : "Masculino"}
						</Text>
					</Flex>
					<Flex direction={"row"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Fecha de ingreso:</Text>
						<Text marginLeft={"5px"}>{formatDate(medicalFile?.date)}</Text>
					</Flex>
					<Flex direction={"row"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>C.I:</Text>
						<Text marginLeft={"5px"}>{patientInfo?.nationalId}</Text>
					</Flex>
					<Text
						fontWeight={"bold"}
						fontSize={"18px"}
						color={"#3B3B3B"}
						marginTop={"20px"}
						marginBottom={"10px"}
					>
						Antecedentes médicos:
					</Text>
					{patientInfo?.medicalRecords ? (
						patientInfo.medicalRecords.length > 0 ? (
							patientInfo.medicalRecords.map((record, index) => (
								<li key={index}>{record}</li>
							))
						) : (
							<p>No hay antecedentes médicos.</p>
						)
					) : (
						<p>No hay antecedentes médicos.</p>
					)}
					<Text
						fontWeight={"bold"}
						fontSize={"18px"}
						color={"#3B3B3B"}
						marginTop={"20px"}
						marginBottom={"10px"}
					>
						Motivo de la consulta:
					</Text>
					{medicalFile?.description ? (
						<li>{medicalFile.description}</li>
					) : (
						<p>No hay motivo de consulta.</p>
					)}
					<Text
						fontWeight={"bold"}
						fontSize={"18px"}
						color={"#3B3B3B"}
						marginTop={"20px"}
						marginBottom={"10px"}
					>
						Historia de la enfermedad actual:
					</Text>
					{medicalFile?.medicalHistory ? (
						medicalFile.medicalHistory.length > 0 ? (
							medicalFile.medicalHistory.map((record, index) => (
								<li key={index} style={{ marginTop: "5px" }}>
									{record}
								</li>
							))
						) : (
							<p>No hay historia de enfermedad actual.</p>
						)
					) : (
						<p>No hay historia de enfermedad actual.</p>
					)}
					<Text
						fontWeight={"bold"}
						fontSize={"18px"}
						color={"#3B3B3B"}
						marginBottom={"10px"}
						marginTop={"20px"}
					>
						Evaluación física:
					</Text>
					<Flex direction={"column"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Estado general:</Text>
						<Text marginLeft={"5px"}>{medicalFile?.physicalExam[0]}</Text>
					</Flex>
					<Flex direction={"column"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Signos vitales:</Text>
						<Text marginLeft={"5px"}>{medicalFile?.physicalExam[1]}</Text>
					</Flex>
					<Flex direction={"column"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Herida:</Text>
						<Text marginLeft={"5px"}>{medicalFile?.physicalExam[2]}</Text>
					</Flex>
					<Text
						fontWeight={"bold"}
						fontSize={"18px"}
						color={"#3B3B3B"}
						marginTop={"20px"}
						marginBottom={"10px"}
					>
						Tratamientos previos:
					</Text>
					{medicalFile?.previousTreatment ? (
						medicalFile.previousTreatment.length > 0 ? (
							medicalFile.previousTreatment.map((record, index) => (
								<li key={index}>{record}</li>
							))
						) : (
							<p>No hay tratamientos previos.</p>
						)
					) : (
						<p>No hay tratamientos previos.</p>
					)}
					<Text
						fontWeight={"bold"}
						fontSize={"18px"}
						color={"#3B3B3B"}
						marginBottom={"10px"}
						marginTop={"20px"}
					>
						Resultados de laboratorio:
					</Text>
					<Flex direction={"column"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Glucosa en ayunas:</Text>
						<Text marginLeft={"5px"}>{medicalFile?.labResults[0]}</Text>
					</Flex>
					<Flex direction={"column"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Hemoglobina glucosilada (HbA1C):</Text>
						<Text marginLeft={"5px"}>{medicalFile?.labResults[1]}</Text>
					</Flex>
					<Flex direction={"column"} marginBottom={"5px"}>
						<Text fontWeight={"500"}>Cultivo de la herida:</Text>
						<Text marginLeft={"5px"}>{medicalFile?.labResults[2]}</Text>
					</Flex>
					<Text
						fontWeight={"bold"}
						fontSize={"18px"}
						color={"#3B3B3B"}
						marginTop={"20px"}
						marginBottom={"10px"}
					>
						Plan de cuidados:
					</Text>
					{medicalFile?.carePlan ? (
						medicalFile.carePlan.length > 0 ? (
							medicalFile.carePlan.map((record, index) => (
								<li key={index} style={{ marginTop: "5px" }}>
									{record}
								</li>
							))
						) : (
							<p>No hay plan de cuidados.</p>
						)
					) : (
						<p>No hay plan de cuidados.</p>
					)}
				</Flex>
			</Box>
		</>
	);
}

export default DoctorMedicalFilePatient;

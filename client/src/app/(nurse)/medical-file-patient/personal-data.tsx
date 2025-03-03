import { ThePatientInfo } from "@/interfaces/doctor/doctor.interface";
import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
	patientInfo: ThePatientInfo;
}

export function PersonalData({ patientInfo }: Props) {
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

	return (
		<Flex
			direction={"column"}
			paddingX={"2rem"}
			paddingBottom={"2rem"}
			borderRadius={"0.75rem"}
			boxShadow={"0rem 0.25rem 0.5rem #033e5c65"}
		>
			<Text
				fontWeight={"bold"}
				fontSize={"1rem"}
				color={"#3B3B3B"}
				marginTop={"0.75rem"}
				marginBottom={"0.5rem"}
			>
				Datos Personales
			</Text>
			<Box padding={"0 0.5rem"}>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>Nombre:</Text>
					<Text marginLeft={"0.25rem"}>{patientInfo?.user.fullname}</Text>
				</Flex>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>C.I:</Text>
					<Text marginLeft={"0.25rem"}>{patientInfo?.nationalId}</Text>
				</Flex>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>Género:</Text>
					<Text marginLeft={"0.25rem"}>
						{patientInfo?.genre === "FEMALE" ? "Femenino" : "Masculino"}
					</Text>
				</Flex>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>Edad:</Text>
					<Text marginLeft={"0.25rem"}>
						{patientInfo?.birthDate
							? calculateAge(patientInfo.birthDate)
							: "N/A"}{" "}
						años
					</Text>
				</Flex>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>Peso:</Text>
					<Text marginLeft={"0.25rem"}>{patientInfo?.weight}</Text>
				</Flex>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>Altura:</Text>
					<Text marginLeft={"0.25rem"}>{patientInfo?.height}</Text>
				</Flex>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>Tipo de Sangre:</Text>
					<Text marginLeft={"0.25rem"}>{patientInfo?.bloodType}</Text>
				</Flex>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>Dirección:</Text>
					<Text marginLeft={"0.25rem"}>{patientInfo?.address}</Text>
				</Flex>
				<Flex direction={"row"} marginBottom={"0.25rem"} fontSize={"0.75rem"}>
					<Text fontWeight={"bold"}>Nro de Teléfono:</Text>
					<Text marginLeft={"0.25rem"}>
						{patientInfo?.cellPhoneNumber
							? patientInfo.cellPhoneNumber
							: patientInfo?.phoneNumber}
					</Text>
				</Flex>
			</Box>
			<hr
				style={{
					borderTop: "2px #419ebd solid",
					margin: "1rem 0",
					boxShadow: "0rem 0.25rem 0.5rem #033e5c65",
				}}
			/>
			<Text
				fontWeight={"bold"}
				fontSize={"1rem"}
				color={"#3B3B3B"}
				marginBottom={"0.5rem"}
			>
				Alergias
			</Text>
			<Box padding={"0 0.5rem"}>
				{patientInfo.allergies.length > 0 ? (
					patientInfo.allergies.map((record, index) => (
						<li key={index}>{record}</li>
					))
				) : (
					<p style={{ fontSize: "0.75rem" }}>
						No tiene ninguna alergia reconocida.
					</p>
				)}
			</Box>
			<hr
				style={{
					borderTop: "2px #419ebd solid",
					margin: "1rem 0",
					boxShadow: "0rem 0.25rem 0.5rem #033e5c65",
				}}
			/>
			<Text
				fontWeight={"bold"}
				fontSize={"1rem"}
				color={"#3B3B3B"}
				marginBottom={"0.5rem"}
			>
				Enfermedades Existentes
			</Text>
			<Box padding={"0 0.5rem"}>
				{patientInfo?.medicalRecords.length > 0 ? (
					patientInfo?.medicalRecords.map((record, index) => (
						<li key={index}>{record}</li>
					))
				) : (
					<p style={{ fontSize: "0.75rem" }}>
						No se ha registrado ninguna enfermedad existente.
					</p>
				)}
			</Box>
		</Flex>
	);
}

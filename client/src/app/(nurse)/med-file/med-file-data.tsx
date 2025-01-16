import { TheMedicalFile } from "@/interfaces/doctor/doctor.interface";
import { Flex, Box, Text } from "@chakra-ui/react";

interface Props {
	medicalFile: TheMedicalFile;
}

export function MedFileData({ medicalFile }: Props) {
	const formatDate = (dateString: string | undefined) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("en-GB");
	};

	return (
		<Flex
			direction={"column"}
			paddingX={"2rem"}
			paddingY={"2rem"}
			borderRadius={"0.75rem"}
			boxShadow={"0rem 0.25rem 0.5rem #033e5c65"}
		>
			<Flex>
				<Box
					color={"white"}
					background={"#033e5c"}
					padding={"0.25rem 0.5rem"}
					rounded={"0.5rem"}
				>
					{formatDate(medicalFile.date)}
				</Box>
			</Flex>
			<Text
				fontWeight={"bold"}
				fontSize={"1rem"}
				color={"#3B3B3B"}
				marginTop={"0.75rem"}
				marginBottom={"0.5rem"}
			>
				Motivo de la Consulta
			</Text>
			<Box padding={"0 0.5rem"}>{medicalFile.description}</Box>
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
				Historia de la Enfermedad Actual
			</Text>
			<Box padding={"0 0.5rem"}>
				{medicalFile?.previousTreatment.length > 0 ? (
					medicalFile?.previousTreatment.map((record, index) => (
						<li key={index}>{record}</li>
					))
				) : (
					<p style={{ fontSize: "0.75rem" }}>
						No se ha proporcionado información.
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
				Antecedentes Médicos
			</Text>
			<Box padding={"0 0.5rem"}>
				{medicalFile?.medicalHistory.length > 0 ? (
					medicalFile?.medicalHistory.map((record, index) => (
						<li key={index}>{record}</li>
					))
				) : (
					<p style={{ fontSize: "0.75rem" }}>
						No se ha proporcionado información.
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
				Resultados de Laboratorio
			</Text>
			<Box padding={"0 0.5rem"}>
				{medicalFile?.labResults.length > 0 ? (
					medicalFile?.labResults.map((record, index) => (
						<li key={index}>{record}</li>
					))
				) : (
					<p style={{ fontSize: "0.75rem" }}>
						No se ha proporcionado información.
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
				Evaluación Física
			</Text>
			<Box padding={"0 0.5rem"}>
				{medicalFile?.physicalExam.length > 0 ? (
					medicalFile?.physicalExam.map((record, index) => (
						<li key={index}>{record}</li>
					))
				) : (
					<p style={{ fontSize: "0.75rem" }}>
						No se ha proporcionado información.
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
				Plan de Cuidados
			</Text>
			<Box padding={"0 0.5rem"}>
				{medicalFile?.carePlan.length > 0 ? (
					medicalFile?.carePlan.map((record, index) => (
						<li key={index}>{record}</li>
					))
				) : (
					<p style={{ fontSize: "0.75rem" }}>
						No se ha proporcionado información.
					</p>
				)}
			</Box>
		</Flex>
	);
}

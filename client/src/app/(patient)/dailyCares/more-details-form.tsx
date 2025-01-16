import { Box, Grid, Text } from "@chakra-ui/react";
import {
	edemaLevelTypes,
	granulationTissueTypes,
	necroticTissueTypes,
	secretionQualitiesTypes,
	secretionQuantityTypes,
	surroundingSkinStatesTypes,
	woundAspectsTypes,
	woundDepthTypes,
	woundExtensionTypes,
} from "./wound-evolution-questionaire";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SecondQuestionaireAnswers } from "@/utils/dailyCaresAnswers";

interface Props {
	changeSecondQuestionaire: (answers: SecondQuestionaireAnswers) => void;
}

export function MoreDetailsForm({
	changeSecondQuestionaire: setSecondQuestionaire,
}: Props) {
	const [woundAspect, setWoundAspect] = useState<string>("");
	const [woundExtension, setWoundExtension] = useState<string>("");
	const [woundDepth, setWoundDepth] = useState<string>("");
	const [secretionQuality, setSecretionQuality] = useState<string>("");
	const [secretionQuantity, setSecretionQuantity] = useState<string>("");
	const [necroticTissue, setNecroticTissue] = useState<string>("");
	const [granulationTissue, setGranulationTissue] = useState<string>("");
	const [edemaLevel, setEdemaLevel] = useState<string>("");
	const [surroundingSkin, setSurrodingSkin] = useState<string>("");

	const updateSecondQuestionaire = useCallback(() => {
		setSecondQuestionaire({
			edemaLevel,
			granulationTissue,
			necroticTissue,
			secretionQuantity,
			surroundingSkin,
			woundAspect,
			woundDepth,
			woundExtension,
			secretionQuality,
		});
	}, [
		setSecondQuestionaire,
		edemaLevel,
		granulationTissue,
		necroticTissue,
		secretionQuantity,
		surroundingSkin,
		woundAspect,
		woundDepth,
		woundExtension,
		secretionQuality,
	]);

	useEffect(() => {
		updateSecondQuestionaire();
	}, [updateSecondQuestionaire]);

	return (
		<>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Aspecto de la Herida */}
			{/* TO DO: Agregar condicional para el formulario de si tiene tejido necrotico */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Aspecto de la herida
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{woundAspectsTypes.map((item, index) => (
						<Box
							key={index}
							style={{
								width: "7rem",
								aspectRatio: "1/1",
								cursor: "pointer",
								border: "0.1rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.5rem",
								textAlign: "center",
								display: "flex",
								placeItems: "center",
								justifyContent: "center",
								color: woundAspect === item.type ? "#fff" : "#000",
								userSelect: "none",
								backgroundColor: woundAspect === item.type ? "#419ebd" : "#fff",
							}}
							onClick={() => {
								setWoundAspect(item.type);
								updateSecondQuestionaire();
							}}
						>
							{item.type}
						</Box>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Extensión de la herida (cm) */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Extensión de la herida (cm)
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{woundExtensionTypes.map((item, index) => (
						<Box
							key={index}
							style={{
								width: "7rem",
								aspectRatio: "1/1",
								cursor: "pointer",
								border: "0.1rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.5rem",
								textAlign: "center",
								display: "flex",
								placeItems: "center",
								color: woundExtension === item.type ? "#fff" : "#000",
								userSelect: "none",
								backgroundColor:
									woundExtension === item.type ? "#419ebd" : "#fff",
							}}
							onClick={() => {
								setWoundExtension(item.type);
								updateSecondQuestionaire();
							}}
						>
							{item.type} ({item.text})
						</Box>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Profundidad de la herida (cm) */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Profundidad de la herida (cm)
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{woundDepthTypes.map((item, index) => (
						<Box
							key={index}
							style={{
								width: "7rem",
								aspectRatio: "1/1",
								cursor: "pointer",
								border: "0.1rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.5rem",
								textAlign: "center",
								display: "flex",
								justifyItems: "center",
								alignItems: "center",
								color: woundDepth === item.type ? "#fff" : "#000",
								userSelect: "none",
								backgroundColor: woundDepth === item.type ? "#419ebd" : "#fff",
							}}
							onClick={() => {
								setWoundDepth(item.type);
								updateSecondQuestionaire();
							}}
						>
							{item.type} ({item.text})
						</Box>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Calidad de la secreción */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Calidad de la secreción
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{secretionQualitiesTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border: "0.25rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.25rem",
								opacity: secretionQuality === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setSecretionQuality(item.type);
								updateSecondQuestionaire();
							}}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Cantidad de la secreción */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Cantidad de secreción
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{secretionQuantityTypes.map((item, index) => (
						<Box
							key={index}
							style={{
								width: "7rem",
								aspectRatio: "1/1",
								cursor: "pointer",
								border: "0.1rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.5rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
								color: secretionQuantity === item.type ? "#fff" : "#000",
								userSelect: "none",
								backgroundColor:
									secretionQuantity === item.type ? "#419ebd" : "#fff",
							}}
							onClick={() => {
								setSecretionQuantity(item.type);
								updateSecondQuestionaire();
							}}
						>
							{item.type}
						</Box>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Nivel de tejido necrótico */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Nivel de tejido necrótico
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{necroticTissueTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border: "0.25rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.25rem",
								opacity: necroticTissue === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setNecroticTissue(item.type);
								updateSecondQuestionaire();
							}}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Nivel de tejido de granulación */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Nivel de tejido de granulación
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{granulationTissueTypes.map((item, index) => (
						<Box
							key={index}
							style={{
								width: "7rem",
								aspectRatio: "1/1",
								cursor: "pointer",
								border: "0.1rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.5rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
								color: granulationTissue === item.type ? "#fff" : "#000",
								userSelect: "none",
								backgroundColor:
									granulationTissue === item.type ? "#419ebd" : "#fff",
							}}
							onClick={() => {
								setGranulationTissue(item.type);
								updateSecondQuestionaire();
							}}
						>
							{item.type}
						</Box>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Nivel de edema */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Nivel de edema
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{edemaLevelTypes.map((item, index) => (
						<Box
							key={index}
							style={{
								width: "7rem",
								aspectRatio: "1/1",
								cursor: "pointer",
								border: "0.1rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.5rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
								color: edemaLevel === item.type ? "#fff" : "#000",
								userSelect: "none",
								backgroundColor: edemaLevel === item.type ? "#419ebd" : "#fff",
							}}
							onClick={() => {
								setEdemaLevel(item.type);
								updateSecondQuestionaire();
							}}
						>
							{item.type}
						</Box>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#419ebd" />
			{/* NOTE: Estado de la piel circundante */}
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Text
					fontWeight="bold"
					color="#3B3B3B"
					fontSize="14px"
					w="75vw"
					mb="0.5rem"
				>
					Estado de la piel circundante
				</Text>
				<Grid
					gap={2}
					templateColumns="repeat(2, 1fr)"
					mb="20px"
					placeItems={"center"}
				>
					{surroundingSkinStatesTypes.map((item, index) => (
						<Box
							key={index}
							style={{
								width: "7rem",
								aspectRatio: "1/1",
								cursor: "pointer",
								border: "0.1rem solid #419ebd",
								borderRadius: "1rem",
								padding: "0.5rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
								color: surroundingSkin === item.type ? "#fff" : "#000",
								userSelect: "none",
								backgroundColor:
									surroundingSkin === item.type ? "#419ebd" : "#fff",
							}}
							onClick={() => {
								setSurrodingSkin(item.type);
								updateSecondQuestionaire();
							}}
						>
							{item.type}
						</Box>
					))}
				</Grid>
			</Box>
		</>
	);
}

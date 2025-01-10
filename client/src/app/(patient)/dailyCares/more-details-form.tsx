import { Box, Grid, Text } from "@chakra-ui/react";
import {
	secretionTypes,
	woundAspectsTypes,
} from "./wound-evolution-questionaire";
import Image from "next/image";
import { useState } from "react";
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

	function updateSecondQuestionaire() {
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
	}

	return (
		<>
			<Box w="100%" h="2px" bg="#AD8EB1" />
			{/* NOTE: Aspecto de la Herida */}
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
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									woundAspect === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								opacity: woundAspect === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setWoundAspect(item.type);
								updateSecondQuestionaire();
							}}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#AD8EB1" />
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									woundExtension === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								opacity: woundExtension === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setWoundExtension(item.type);
								updateSecondQuestionaire();
							}}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#AD8EB1" />
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									woundDepth === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								opacity: woundDepth === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setWoundDepth(item.type);
								updateSecondQuestionaire();
							}}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#AD8EB1" />
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									secretionQuality === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
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
			<Box w="100%" h="2px" bg="#AD8EB1" />
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									secretionQuantity === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								opacity: secretionQuantity === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setSecretionQuantity(item.type);
								updateSecondQuestionaire();
							}}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#AD8EB1" />
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									necroticTissue === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
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
			<Box w="100%" h="2px" bg="#AD8EB1" />
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									granulationTissue === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								opacity: granulationTissue === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setGranulationTissue(item.type);
							}}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#AD8EB1" />
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									edemaLevel === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								opacity: edemaLevel === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setEdemaLevel(item.type);
								updateSecondQuestionaire();
							}}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#AD8EB1" />
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								border:
									surroundingSkin === item.type
										? "0.25rem solid #7f5ad4"
										: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								opacity: surroundingSkin === item.type ? 1 : 0.6,
							}}
							onClick={() => {
								setSurrodingSkin(item.type);
							}}
						/>
					))}
				</Grid>
			</Box>
		</>
	);
}

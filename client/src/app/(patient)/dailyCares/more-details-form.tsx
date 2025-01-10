import { Box, Grid, Text } from "@chakra-ui/react";
import { secretionTypes } from "./wound-evolution-questionaire";
import Image from "next/image";

export function MoreDetailsForm() {
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
					{secretionTypes.map((item, index) => (
						<Image
							key={index}
							src={item.src}
							alt={`secretion type ${item.type}`}
							width={105}
							height={105}
							style={{
								cursor: "pointer",
								// border:
								// 	secretionType === item.type
								// 		? "0.25rem solid #7f5ad4"
								// 		: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								// opacity: secretionType === item.type ? 1 : 0.6,
							}}
							// onClick={() => {
							// 	setSecretionType(item.type);
							// }}
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
								// border:
								// 	secretionType === item.type
								// 		? "0.25rem solid #7f5ad4"
								// 		: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								// opacity: secretionType === item.type ? 1 : 0.6,
							}}
							// onClick={() => {
							// 	setSecretionType(item.type);
							// }}
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
								// border:
								// 	secretionType === item.type
								// 		? "0.25rem solid #7f5ad4"
								// 		: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								// opacity: secretionType === item.type ? 1 : 0.6,
							}}
							// onClick={() => {
							// 	setSecretionType(item.type);
							// }}
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
								// border:
								// 	secretionType === item.type
								// 		? "0.25rem solid #7f5ad4"
								// 		: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								// opacity: secretionType === item.type ? 1 : 0.6,
							}}
							// onClick={() => {
							// 	setSecretionType(item.type);
							// }}
						/>
					))}
				</Grid>
			</Box>
			<Box w="100%" h="2px" bg="#AD8EB1" />
			{/* NOTE: Cantidad de secreción */}
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
								// border:
								// 	secretionType === item.type
								// 		? "0.25rem solid #7f5ad4"
								// 		: "0.25rem solid #e2e8f0",
								borderRadius: "0.25rem",
								padding: "0.25rem",
								// opacity: secretionType === item.type ? 1 : 0.6,
							}}
							// onClick={() => {
							// 	setSecretionType(item.type);
							// }}
						/>
					))}
				</Grid>
			</Box>
		</>
	);
}

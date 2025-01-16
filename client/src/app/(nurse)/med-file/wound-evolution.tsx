import { WoundEvolution } from "@/interfaces/doctor/doctor.interface";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Text,
} from "@chakra-ui/react";
import { QuestionaireKeys } from "@/app/(patient)/dailyCares/wound-evolution-questionaire";

interface Props {
	woundEvolution: WoundEvolution[];
}

export function WoundEvolutionAccordion({ woundEvolution }: Props) {
	const formatDate = (dateString: string | undefined) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("en-GB");
	};

	return (
		<Accordion allowMultiple>
			{woundEvolution.length > 0 ? (
				woundEvolution.map((evolution, index) => (
					<>
						<AccordionItem
							key={index}
							bg="#419ebd"
							p="10px"
							borderRadius="10px"
							w="90vw"
							color="white"
							fontWeight="bold"
							boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							mb="20px"
						>
							<AccordionButton>
								<Box flex="1" textAlign="center">
									{formatDate(evolution.date)}
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel
								pb={4}
								bg="white"
								color="#3B3B3B"
								fontWeight="400"
								borderRadius="10px"
							>
								{evolution.questionaire.map((question, index) => (
									<>
										{question.key === "wound-photo" && (
											<Flex
												direction={"row"}
												flexWrap={"wrap"}
												marginBottom={"0.25rem"}
												gap={2}
												justifyContent={"center"}
												key={index + "are"}
											>
												{question.answer.split(", ").map((photo, index) => (
													// eslint-disable-next-line @next/next/no-img-element
													<img
														key={index}
														src={photo}
														alt="wound"
														width="200px"
														height="200px"
														style={{ borderRadius: "0.75rem" }}
													/>
												))}
											</Flex>
										)}
										{question.key !== "wound-photo" && (
											<Flex
												direction={"row"}
												marginBottom={"0.25rem"}
												fontSize={"0.75rem"}
												key={index}
											>
												<Text fontWeight={"bold"}>
													{
														QuestionaireKeys[
															question.key as keyof typeof QuestionaireKeys
														]
													}
												</Text>
												<Text marginLeft={"0.25rem"}>{question.answer}</Text>
											</Flex>
										)}
									</>
								))}
							</AccordionPanel>
						</AccordionItem>
					</>
				))
			) : (
				<p style={{ fontSize: "0.75rem", margin: "1rem 1rem" }}>
					No se ha registrado el estado de la herida aún.
				</p>
			)}
		</Accordion>
	);
}

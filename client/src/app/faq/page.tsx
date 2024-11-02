"use client";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
} from "@chakra-ui/react";
import { faq } from "./questions";

function myPage() {
	return (
		<Box as="main" width="100vw" minHeight="100vh" padding={5}>
			<Box
				as="article"
				fontSize={15}
				display="flex"
				flexDirection="column"
				gap={6}
			>
				<Heading as="h1" fontSize={"1.25rem"}>
					Preguntas frecuentes
				</Heading>
				<Accordion allowMultiple>
					{faq.map((item, index) => (
						<AccordionItem key={index} borderColor={"purple"}>
							<h2>
								<AccordionButton>
									<Box as="span" flex="1" textAlign="left" fontSize={"1rem"}>
										{item.question}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4} fontSize={"0.75rem"}>
								{item.answer}
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</Box>
		</Box>
	);
}

export default myPage;

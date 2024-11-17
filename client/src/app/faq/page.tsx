import { faq } from "./questions";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Arrow from "@/components/Arrow";

function myPage() {
	return (
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
						color="#4F1964"
						borderBottom={"2px solid #AD8EB1"}
						paddingX="10px"
					>
						Preguntas Frecuentes
					</Heading>
				</Flex>
				<Flex
					w="100vw"
					pl="20px"
					pr="20px"
					mb="30px"
					mt="30px"
					direction="column"
					align="center"
				>
					<Accordion allowToggle>
						{faq.map((item, index) => (
							<AccordionItem
								key={index}
								bg="#AD8EB1"
								p="10px"
								borderRadius="10px"
								w="90vw"
								color="white"
								fontWeight="bold"
								boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
								mb="20px"
							>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										{item.question}
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
									{item.answer}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</Flex>
			</Box>
		</>
	);
}

export default myPage;

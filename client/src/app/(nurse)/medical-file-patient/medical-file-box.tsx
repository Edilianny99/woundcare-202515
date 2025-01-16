import { Flex, Text } from "@chakra-ui/react";

export function MedicalFileBox() {
	return (
		<Flex
			direction={"column"}
			bg="white"
			p={4}
			borderRadius="md"
			marginBottom={"1.25rem"}
			boxShadow={"0rem 0.25rem 0.5rem #033e5c65"}
			alignItems={"center"}
		>
			<Text
				color={"#033e5c"}
				fontWeight={"bold"}
				borderBottom={"2px solid #419ebd"}
				width={"fit-content"}
				fontSize={"1.25rem"}
			>
				05/07/2023
			</Text>
			<Text
				color="#033e5c95"
				marginTop={"0.25rem"}
				fontWeight={"700"}
				fontSize={"0.75rem"}
			>
				Estado: Cerrado
			</Text>
		</Flex>
	);
}

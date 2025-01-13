import { Card, CardBody, Text, Image } from "@chakra-ui/react";
import React from "react";

function InfographyBox({
	imageSrc,
	title,
}: {
	imageSrc: string;
	title: string;
}) {
	return (
		<>
			<Card
				height={{ base: "200px", md: "400px" }}
				width={"100%"}
				_hover={{
					boxShadow: "0 0 10px 2px #033e5c",
					transition: "box-shadow 0.3s",
				}}
				display="flex"
				flexDir="column"
				alignItems="center"
				borderRadius={5}
			>
				<Image
					src={imageSrc}
					alt={title}
					objectFit="cover"
					width="100%"
					height="100%"
					borderRadius={5}
				/>
			</Card>
			<Text m={2} fontWeight="bold" color="#3B3B3B" fontSize="16px">
				{title}
			</Text>
		</>
	);
}

export default InfographyBox;

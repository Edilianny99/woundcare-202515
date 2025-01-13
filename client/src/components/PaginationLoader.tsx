import { Spinner } from "@chakra-ui/react";
import React from "react";

function PaginationLoader() {
	return (
		<Spinner
			thickness="2px"
			speed="0.65s"
			emptyColor="gray.200"
			color="#033e5c"
			size="md"
		/>
	);
}

export default PaginationLoader;

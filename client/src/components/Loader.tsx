import { Spinner } from "@chakra-ui/react";
import React from "react";

function Loader() {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#4F1964"
      size="xl"
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
    />
  );
}

export default Loader;

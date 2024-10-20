import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Working() {
  return (
    <Box
      as={"main"}
      width={"100vw"}
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      padding={6}
    >
      <Box
        as="section"
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        py={6}
      >
        <Image
          src={"/worker-nurse.png"}
          alt="Enfermera"
          width={400}
          height={400}
        />
      </Box>
      <Box as="section" flex={1}>
        <Heading as={"h1"} textColor={"#4F1964"} textAlign={"center"} mb={10}>
          Seguimos trabajando!!!
        </Heading>
        <Text fontSize={22} fontWeight={500} textAlign={"center"}>
          Nuestra plataforma aún no se encuentra disponible para computadoras.
          Sin embargo puede acceder a ella desde su dispositivo móvil Android o
          iOS
        </Text>
      </Box>
    </Box>
  );
}

export default Working;

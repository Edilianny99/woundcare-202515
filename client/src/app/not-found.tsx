import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      as="main"
      width={"100vw"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading as={"h1"} textColor={"#4F1964"}>
        Página no encontrada
      </Heading>
      <Box
        width={"100vw"}
        height={"100vw"}
        position={"relative"}
        maxWidth={"500px"}
        maxHeight={"500px"}
        as="section"
      >
        <Image src={"/confused-nurse.png"} alt="nurse" fill />
      </Box>
      <Text textAlign={"center"} fontSize={18} fontWeight={500}>
        No hemos encontrado la página que buscas.
      </Text>
      <Text textAlign={"center"} my={5} fontSize={18} fontWeight={500}>
        Puedes volver a la página anterior o visitar nuestra página de inicio.
      </Text>
      <Link
        href={"/"}
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "#4F1964",
          padding: "10px",
          borderRadius: "8px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        Página de inicio
      </Link>
    </Box>
  );
}

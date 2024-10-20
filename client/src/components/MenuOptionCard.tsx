import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MenuOptionCard({
  imageSrc,
  src,
  title,
}: {
  imageSrc: string;
  src: string;
  title: string;
}) {
  return (
    <Link style={{ height: 100, width: "100%", maxWidth: "350px" }} href={src}>
      <Card
        height={"100%"}
        width={"100%"}
        _hover={{
          boxShadow: "0 0 10px 2px #4F1964",
          transition: "box-shadow 0.3s",
        }}
        display="flex"
        flexDir="row"
        alignItems="center"
      >
        <CardHeader height={90} width={"35%"} minWidth={24} position="relative">
          <Image src={imageSrc} alt="title" fill />
        </CardHeader>
        <CardBody
          textAlign={"center"}
          fontWeight={"bold"}
          color={"#4F1964"}
          fontSize={{ base: "large", sm: "larger" }}
          whiteSpace={"normal"}
        >
          <Text>{title}</Text>
        </CardBody>
      </Card>
    </Link>
  );
}

export default MenuOptionCard;

"use client";
import { timeAgo } from "@/utils/timeAgo";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

function ConversationsCard({
  name,
  message,
  date,
  link,
  medicalFileId,
}: {
  name: string;
  message: string | null;
  date: Date | null | string;
  link: string;
  medicalFileId: number;
}) {
  return (
    <Link href={link}>
      <Card
        display="flex"
        flexDir="row"
        alignItems="center"
        width={"100%"}
        height={"80px"}
        boxShadow={"none"}
        borderBottom={"2px solid #AD8EB1"}
        backgroundColor={"transparent"}
        borderRadius={0}
      >
        <CardHeader
          height={"60px"}
          width={"60px"}
          borderRadius={14}
          backgroundColor={"#4F1964"}
          padding={0}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={"user.svg"} alt="user image" height={40} width={40} />
        </CardHeader>
        <CardBody
          flex={3}
          height={"60px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          paddingY={0}
          width={"100%"}
        >
          <Heading as={"h3"} fontSize={18}>
            <LinesEllipsis
              text={`HC ${medicalFileId} - ${name}`}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
              style={{
                width: "100%",
              }}
            />
          </Heading>
          {message ? (
            <LinesEllipsis
              text={message}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="letters"
              style={{
                fontSize: "16px",
                color: "#3B3B3B",
                width: "100%",
              }}
            />
          ) : date ? (
            <Text fontSize={"18px"} color={"#3B3B3B"}>
              Imagen
            </Text>
          ) : (
            <></>
          )}
        </CardBody>
        <CardFooter
          flex={1}
          height={"100%"}
          padding={0}
          fontSize={14}
          color={"#8E8E8E"}
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
        >
          {date && timeAgo(date)}
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ConversationsCard;

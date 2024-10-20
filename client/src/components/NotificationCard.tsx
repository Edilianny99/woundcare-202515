"use client";
import { Notification } from "@/interfaces/notification/notification.interface";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import LinesEllipsis from "react-lines-ellipsis";
import Image from "next/image";
import Link from "next/link";
import {
  notificationImages,
  notificationRoutes,
  notificationTitles,
} from "@/hooks/notification";
import { useState } from "react";
import { timeAgo } from "@/utils/timeAgo";

function NotificationCard({ notification }: { notification: Notification }) {
  const link = notificationRoutes.get(notification.type) || "/";
  const imageSrc = notificationImages.get(notification.type) || "";

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandedClick = () => {
    setIsExpanded(!isExpanded);
  };

  return [
    "POST_BANDAGE_CHANGE",
    "MONITORING_SIGNS_AND_SYMPTOMS",
    "DISCHARGE",
  ].includes(notification.type) ? (
    <Link style={{ maxHeight: "85px", width: "100%" }} href={link}>
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
        justifyContent={"space-between"}
        paddingX={2}
        paddingY={2}
        backgroundColor={notification.read ? "#F9EDEF" : "white"}
      >
        <CardHeader
          height={"40px"}
          width={"40px"}
          position={"relative"}
          backgroundColor={"#AD8EB1"}
          borderRadius={100}
        >
          <Image
            src={imageSrc}
            alt="Notification image"
            fill
          ></Image>
        </CardHeader>
        <CardBody
          flex={3}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          paddingY={0}
          width={"100%"}
        >
          <Heading as={"h3"} fontSize={14}>
            {notificationTitles.get(notification.type)}
          </Heading>
          <LinesEllipsis
            text={notification.message}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            style={{
              fontSize: "11px",
              color: "#3B3B3B",
              width: "100%",
            }}
          />
        </CardBody>
        <CardFooter
          flex={1}
          height={"100%"}
          padding={0}
          fontSize={9}
          color={"#8E8E8E"}
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
        >
          {timeAgo(notification.date)}
        </CardFooter>
      </Card>
    </Link>
  ) : (
    <Card
      maxHeight={isExpanded ? "" : "85px"}
      width={"100%"}
      _hover={{
        boxShadow: "0 0 10px 2px #4F1964",
        transition: "box-shadow 0.3s",
      }}
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent={"space-between"}
      paddingX={2}
      paddingY={2}
      onClick={handleExpandedClick}
      cursor={"pointer"}
      backgroundColor={notification.read ? "#F9EDEF" : "white"}
    >
      <CardHeader
        height={"40px"}
        width={"40px"}
        position={"relative"}
        backgroundColor={"#AD8EB1"}
        borderRadius={100}
      >
        <Image
          src={imageSrc}
          alt="Notification image"
          fill
        ></Image>
      </CardHeader>
      <CardBody
        flex={3}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        paddingY={0}
        width={"100%"}
      >
        <Heading as={"h3"} fontSize={14}>
          {notificationTitles.get(notification.type)}
        </Heading>
        {isExpanded ? (
          <Text fontSize={"11px"} color={"#3B3B3B"} width={"100%"}>
            {notification.message}
          </Text>
        ) : (
          <LinesEllipsis
            text={notification.message}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            style={{
              fontSize: "11px",
              color: "#3B3B3B",
              width: "100%",
            }}
          />
        )}
      </CardBody>
      <CardFooter
        flex={1}
        height={"100%"}
        padding={0}
        fontSize={9}
        color={"#8E8E8E"}
        textAlign={"center"}
        display={"flex"}
        alignItems={"center"}
      >
        {timeAgo(notification.date)}
      </CardFooter>
    </Card>
  );
}

export default NotificationCard;

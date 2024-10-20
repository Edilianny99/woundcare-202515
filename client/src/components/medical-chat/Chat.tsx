"use client";
import React, { RefObject, useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import MessageCard from "../MessageCard";
import { Message } from "@/interfaces/chat/messages.interface";
import { Conversation } from "@/interfaces/chat/conversation.interface";
import { GenreEnum, RoleEnum } from "@/interfaces/common/role.type";

function Chat({
  messages,
  conversation,
  inView,
}: {
  messages: Message[];
  conversation: Conversation | null;
  inView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || messages.length <= 10)
      ref?.current?.lastElementChild?.scrollIntoView();
  }, [messages]);

  return (
    <Flex flexDirection={"column"} gap={4} height={"100%"} ref={ref}>
      {messages &&
        conversation &&
        [...messages].reverse().map((message) => {
          let img: string = "";
          if (message.userId === conversation.userId) {
            if (conversation.user.role === RoleEnum.PATIENT) {
              img =
                conversation.user.patient[0].genre === GenreEnum.MALE
                  ? "/chat/malePhoto.png"
                  : "/chat/femalePhoto.png";
            } else if (conversation.user.role === RoleEnum.DOCTOR) {
              img =
                conversation.user.doctor[0].genre === GenreEnum.MALE
                  ? "/chat/malePhoto.png"
                  : "/chat/femalePhoto.png";
            }
          } else {
            img = "/chat/nursePhoto.png";
          }
          return (
            <MessageCard
              key={message.id}
              name={
                message.userId === conversation.userId
                  ? conversation.user.fullname
                  : conversation.nurse.user.fullname
              }
              message={message.text}
              messageImage={message.image}
              owner={message.owner}
              img={img}
            />
          );
        })}
    </Flex>
  );
}

export default Chat;

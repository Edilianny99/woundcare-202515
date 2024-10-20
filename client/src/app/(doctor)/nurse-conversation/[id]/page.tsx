"use client";
import DoctorArrow from "@/components/DoctorArrow";
import Loader from "@/components/Loader";
import Chat from "@/components/medical-chat/Chat";
import PaginationLoader from "@/components/PaginationLoader";
import { Conversation } from "@/interfaces/chat/conversation.interface";
import { Message } from "@/interfaces/chat/messages.interface";
import { getConversation } from "@/services/doctor/conversation.service";
import { getMessages } from "@/services/doctor/messages.service";
import { manager } from "@/socket";
import routes from "@/utils/routes";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";

function NurseConversation() {
  const params = useParams<{ id: string }>();
  const id: number = parseInt(params.id);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [totalMessages, setTotalMessages] = useState(0);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socket = manager.socket("/", {
    auth: {
      token: JSON.parse(
        JSON.parse(localStorage.getItem("persist:auth") || "").token
      ),
    },
  });

  const fetchConversation = async () => {
    try {
      const conversation = await getConversation(id);
      setConversation(conversation);
    } catch (error: any) {
      if (error.status === 401) {
        toast.error("Usted no forma parte de esta conversación");
      } else {
        toast.error("Ha ocurrido un error al cargar la conversación");
      }
    }
  };

  const fetchMessages = async () => {
    try {
      const newMessages = await getMessages(id, page, 10);
      setMessages([...messages, ...newMessages.items]);
      if (page === 1) setTotalMessages(newMessages.meta.totalItems);
      setPage(page + 1);
    } catch (error) {
      toast.error("Ha ocurrido un error al cargar los mensajes");
    } finally {
      setLoading(false);
    }
  };

  const addMessage = (data: any) => {
    setMessages((prevMessages) => {
      if (prevMessages.some((message) => message.id === data.message.id))
        return prevMessages;
      return [
        {
          text: data.message.text,
          conversationId: data.message.conversationId,
          createdAt: data.message.createdAt,
          id: data.message.id,
          owner: data.message.userId === conversation?.userId,
          userId: data.message.userId,
          image: data.message.image,
        },
        ...prevMessages,
      ];
    });
  };

  const sendMessage = () => {
    socket.emit("send-message", {
      conversationId: conversation?.id,
      text: message,
    });
    setMessage("");
  };

  useEffect(() => {
    if (!conversation) {
      fetchConversation();
      return;
    }

    socket.on("connection", () => {
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    socket.on("on-message", (data) => {
      if (data.message.conversationId !== id) {
        toast.info("Ha llegado un nuevo mensaje");
      } else {
        addMessage(data);
        setTotalMessages(totalMessages + 1);
      }
    });

    return () => {
      socket.off("connect", () => {
        console.log("Cleaning");
      });
      socket.off("disconnect", () => {
        console.log("Cleaning");
      });
      socket.off("on-message");
    };
  }, [conversation]);

  useEffect(() => {
    if (inView || page === 1) fetchMessages();
  }, [inView]);

  return loading ? (
    <Box width={"100vw"} flexGrow={1} position={"relative"}>
      <Loader />
    </Box>
  ) : (
    <Box
      as="main"
      display={"flex"}
      flexDirection={"column"}
      paddingBottom={6}
      maxHeight={"100vh"}
      flexGrow={1}
    >
      <DoctorArrow link={routes.doctorMessages} />
      <Flex as="section" flexDirection={"column"} paddingX={6} flexGrow={1}>
        <Flex
          marginTop={-20}
          marginRight={6}
          flexDirection="column"
          alignItems="flex-end"
        >
          <Heading
            as="h1"
            color="#4F1964"
            borderBottom={"2px solid #AD8EB1"}
            paddingRight={2}
            paddingLeft={20}
          >
            Mensajes
          </Heading>
        </Flex>
        <Box
          flexGrow={1}
          maxHeight={"65vh"}
          paddingY={4}
          marginY={4}
          overflowY={"scroll"}
        >
          {!(totalMessages <= messages.length) && (
            <Box ref={ref} display={"flex"} justifyContent={"center"}>
              <PaginationLoader />
            </Box>
          )}
          <Chat
            conversation={conversation}
            messages={messages}
            inView={inView}
          />
        </Box>
        <Flex gap={4}>
          <Input
            placeholder="Escribe tu mensaje aquí"
            backgroundColor={"#E6E6E6"}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (message) sendMessage();
              }
            }}
          />
          <Box
            w={10}
            h={10}
            borderRadius="35px"
            bg="#AD8EB1"
            p={1}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            cursor={"pointer"}
            onClick={() => {
              if (message) sendMessage();
            }}
          >
            <Image src="/send.svg" alt="arrow" width={24} height={24} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NurseConversation;

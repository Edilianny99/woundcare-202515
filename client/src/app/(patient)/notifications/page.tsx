"use client";
import Arrow from "@/components/Arrow";
import NotificationCard from "@/components/NotificationCard";
import PaginationLoader from "@/components/PaginationLoader";
import { Notification } from "@/interfaces/notification/notification.interface";
import {
  getMyNotifications,
  readAllNotifications,
  readNotification,
} from "@/services/notifications/notifications.service";
import routes from "@/utils/routes";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";

function NotificationsPage() {
  const [page, setPage] = useState(1);
  const [totalNotifications, setTotalNotifications] = useState<number>(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { ref, inView } = useInView();

  const readAll = async () => {
    try {
      await readAllNotifications();
      setNotifications((prevNotifications) =>
        prevNotifications.map((prevNotification) => ({
          ...prevNotification,
          read: true,
        }))
      );
    } catch (error) {
      toast.error("Ha ocurrido un error");
    }
  };

  const readOneNotification = async (notificationId: number) => {
    try {
      const notification = await readNotification(notificationId);
      setNotifications((prevNotifications) =>
        prevNotifications.map((prevNotification) =>
          prevNotification.id === notification.id
            ? notification
            : prevNotification
        )
      );
    } catch (error) {
      toast.error("No se pudo marcar la notificación como leída");
    }
  };

  const fetchUserNotifications = async () => {
    try {
      const newNotifications = await getMyNotifications(page, 10);
      setNotifications([...notifications, ...newNotifications.items]);
      if (page === 1) setTotalNotifications(newNotifications.meta.totalItems);
      setPage(page + 1);
    } catch (error) {
      toast.error("Ha ocurrido un error");
    }
  };

  useEffect(() => {
    if (inView || page === 1) fetchUserNotifications();
  }, [inView]);
  return (
    <Box as="main" flex={1}>
      <Arrow />
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
          paddingX="10px"
        >
          Notificaciones
        </Heading>
      </Flex>
      <Button
        fontWeight={500}
        fontSize={12}
        padding={0}
        backgroundColor="transparent"
        marginLeft={4}
        marginTop={4}
        onClick={() => readAll()}
        _hover={{}}
      >
        Marcar todo como leído
      </Button>
      <Box width="100%" paddingX={4} marginBottom={4}>
        <Flex
          width="100%"
          padding={2}
          flexDirection="column"
          alignItems="center"
          gap={2}
          backgroundColor="rgba(97, 48, 116, 0.5)"
          borderRadius={10}
          maxHeight="65vh"
          overflowY="scroll"
        >
          {notifications.map((notification) => (
            <Box
              width="100%"
              key={notification.id}
              onClick={() => {
                if (!notification.read) readOneNotification(notification.id);
              }}
            >
              <NotificationCard notification={notification} />
            </Box>
          ))}
          {!(totalNotifications === notifications.length) && (
            <Box ref={ref}>
              <PaginationLoader />
            </Box>
          )}
          {!(notifications.length > 0) && (
            <Text textColor={"white"}>No hay notificaciones</Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default NotificationsPage;

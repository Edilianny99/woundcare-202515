"use client";
import MenuOptionCard from "@/components/MenuOptionCard";
import NotificationCard from "@/components/NotificationCard";
import { Notification } from "@/interfaces/notification/notification.interface";
import {
  getMyNotifications,
  readNotification,
} from "@/services/notifications/notifications.service";
import routes from "@/utils/routes";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function HomePage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchMyNotifications = async () => {
      try {
        const notifications = await getMyNotifications(1, 3);
        setNotifications(notifications.items);
      } catch (error) {
        toast.error("No se pudieron cargar las notificaciones");
      }
    };
    fetchMyNotifications();
  }, []);

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

  return (
    <Box as="main" flexGrow={1} paddingY={10}>
      <Box
        as="article"
        height={"100%"}
        width={"100vw"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        paddingX={4}
        gap={4}
      >
        <Box
          as="section"
          width={"100%"}
          maxWidth={"350px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          padding={4}
          backgroundColor={"rgba(97, 48, 116, 0.5)"}
          borderRadius={10}
        >
          <Heading
            as={"h2"}
            alignSelf={"flex-start"}
            fontSize={20}
            color={"white"}
          >
            Notificaciones
          </Heading>
          {notifications.map((notification) => (
            <Box
              key={notification.id}
              onClick={() => {
                if (!notification.read) readOneNotification(notification.id);
              }}
            >
              <NotificationCard notification={notification} />
            </Box>
          ))}
          {!(notifications.length > 0) && (
            <Box
              height={"100%"}
              width={"100%"}
              backgroundColor={"#F9EDEF"}
              paddingX={2}
              paddingY={2}
              borderRadius={5}
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="center"
              _hover={{
                boxShadow: "0 0 10px 2px #4F1964",
                transition: "box-shadow 0.3s",
              }}
            >
              <Text textColor={"grey"}>No hay notificaciones</Text>
            </Box>
          )}
          <Link
            href={routes.notifications}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "white",
              alignSelf: "center",
            }}
          >
            Ver más
          </Link>
        </Box>
        <Box
          as="section"
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={4}
        >
          <MenuOptionCard
            imageSrc="/homePage/medicines.svg"
            src={routes.patientMedicines}
            title="Medicamentos"
          />
          <MenuOptionCard
            imageSrc="/homePage/daily-cares.svg"
            src={routes.patientDailyCares}
            title="Cuidados diarios"
          />
          <MenuOptionCard
            imageSrc="/homePage/messages.svg"
            src={routes.patientMessages}
            title="Mensajes"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;

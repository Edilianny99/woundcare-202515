"use client";
import {
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import routes from "@/utils/routes";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <>
      <Flex
        w="100vw"
        h="60px"
        align="flex-end"
        justify="space-between"
        p="10px"
        pl="20px"
        pr="20px"
        bg="#4F1964"
      >
        <Heading as="h1" fontWeight="bold" color="white" fontSize="28px">
          WoundCare
        </Heading>
        <Image
          src="/menu.png"
          alt="menu"
          width={30}
          height={30}
          onClick={onOpen}
          style={{ cursor: "pointer" }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent p="20px" bg="#4F1964" h={"min-content"}>
          <Box h="auto">
          <DrawerCloseButton
            display="flex"
            alignSelf="flex-end"
            color="white"
          />
          <DrawerHeader>
            <Heading as="h2" fontWeight="bold" color="white" fontSize="28px">
              WoundCare
            </Heading>
            <Box w="100%" h="2px" bg="white" />
          </DrawerHeader>
          <DrawerBody style={{ marginTop: "20px" }}>
          <Link href={routes.patientProfile} onClick={onClose}>
            <Flex direction="row" align="center" mb="10px">
              <Image src="/profile/user.png" alt="user" width={35} height={25} />
              <Heading
                as="h3"
                fontWeight="bold"
                color="white"
                fontSize="large"
                ml="5px"
                cursor="pointer"
              >
                Perfil
              </Heading>
            </Flex>
            </Link>
            <Link href={routes.patientFrequentlyAskedQuestions} onClick={onClose}>
            <Flex direction="row" align="center" mb="10px">
              <Image
                src="/FAQ.png"
                alt="Preguntas Frecuentes"
                width={35}
                height={25}
              />
              <Heading
                as="h3"
                fontWeight="bold"
                color="white"
                fontSize="large"
                ml="5px"
                cursor="pointer"
              >
                Preguntas Frecuentes
              </Heading>
            </Flex>
            </Link>
            <Flex
              direction="row"
              align="center"
              mb="10px"
              style={{ marginLeft: "3px" }}
            >
              <Image src="/logout.png" alt="Logout" width={35} height={25} />
              <Heading
                as="h3"
                fontWeight="bold"
                color="white"
                fontSize="large"
                ml="5px"
                cursor="pointer"
                onClick={() => {
                  dispatch(logout());
                  router.push("/login");
                }}
              >
                Cerrar sesión
              </Heading>
            </Flex>
          </DrawerBody>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBar;

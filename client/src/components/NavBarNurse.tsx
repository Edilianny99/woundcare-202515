"use client";
import { Heading, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";

function NavBarNurse() {
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
          src="/logout.png"
          alt="Logout"
          width={35}
          height={25}
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(logout());
            router.push("/login");
          }}
        />
      </Flex>
    </>
  );
}

export default NavBarNurse;

"use client";
import Loader from "@/components/Loader";
import MenuOptionCard from "@/components/MenuOptionCard";
import { Nurse } from "@/interfaces/nurse/nurse.interface";
import { getMe } from "@/services/nurse/nurse.service";
import routes from "@/utils/routes";
import { Box, Flex, Heading, Divider } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function NurseHomePage() {
  const [nurse, setNurse] = useState<Nurse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNurse = async () => {
      try {
        const nurse = await getMe();
        setNurse(nurse);
      } catch (error) {
        toast.error("No se pudo cargar la información de la enfermera");
      } finally {
        setIsLoading(false);
      }
    };
    fetchNurse();
  }, []);

  return isLoading ? (
    <Box width={"100vw"} flexGrow={1} position={"relative"}>
      <Loader />
    </Box>
  ) : (
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
          minHeight={"100px"}
          maxWidth={"350px"}
          display={"flex"}
          alignItems={"center"}
          gap={2}
          textColor={"#4F1964"}
        >
          {nurse?.genre === "FEMALE" ? (<><Image
            src={"/nurseHomePage/nursePhoto.png"}
            width={90}
            height={90}
            alt="nurse"
          />
          <Flex flexDirection={"column"} gap={2}>
            <Heading as={"h2"} fontSize={24}>
              Enfermera {nurse?.user.fullname}
            </Heading>
            <Heading as={"h1"} fontSize={16}>
              Centro Médico: {nurse?.medicalCenter}
            </Heading>
          </Flex></>) :(<><Image
            src={"/nurseHomePage/male_nurse.png"}
            width={90}
            height={90}
            alt="nurse"
          />
          <Flex flexDirection={"column"} gap={2}>
            <Heading as={"h2"} fontSize={24}>
              Enfermero {nurse?.user.fullname}
            </Heading>
            <Heading as={"h1"} fontSize={16}>
              Centro Médico: {nurse?.medicalCenter}
            </Heading>
          </Flex></>)}
        </Box>
        <Box w="100%" h="2px" bg="#AD8EB1" marginBottom={6} />
        <Box
          as="section"
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={4}
        >
          <MenuOptionCard
            imageSrc="/nurseHomePage/patientsList.svg"
            src={routes.nursePatientsList}
            title="Lista de pacientes"
          />
          <MenuOptionCard
            imageSrc="/nurseHomePage/doctorsList.svg"
            src={routes.nurseDoctorsList}
            title="Lista de especialistas"
          />
          <MenuOptionCard
            imageSrc="/homePage/messages.svg"
            src={routes.nurseMessages}
            title="Mensajes"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default NurseHomePage;

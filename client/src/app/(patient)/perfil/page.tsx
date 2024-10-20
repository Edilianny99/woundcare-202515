"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, {useState, useEffect, use} from "react";
import Image from "next/image";
import ModalComponent from "./modalComponent";
import { getPatientMe } from "@/services/patient/patient.service";
import { Patient } from "@/interfaces/patient/patient.interface";
import { toast } from "react-toastify";
import Arrow from "@/components/Arrow";

function Perfil() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [patient, setPatient] = useState({} as Patient);

  const openModal = (type: string) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const data = await getPatientMe();
        setPatient(data);
      } catch (error) {
        toast.error("Error al cargar la información del paciente");
      }
    }
    fetchMe();
  }, [])

  return (
    <>
      {/* Header*/}
      <Flex w="100vw" h="13vh" justify="space-between" pr="3vh">
      <Arrow/>
        <Flex w="65vw" direction="column" align="flex-end" justify="center">
        <Heading
            fontWeight="bold"
            color="#4F1964"
            fontSize="30px"
            mt="6vh"
            mb="1vh"
            mr="10px"
          >
            Perfil
          </Heading>
          <Box  w="55vw" h="2px" bg="#AD8EB1" />
        </Flex>
      </Flex>
      <Flex w="100vw" h="13vh" justify="space-between" align="center" pr="6vw" pl="6vw">
        <Image
          src="/profile/female_user.png"
          alt="female_user"
          width={80}
          height={80}
        />
        <Heading as="h2" fontSize="x-large" fontWeight="bold" color="#4F1964" ml="10px">
         {patient.user?.fullname}
        </Heading>
      </Flex>
      {/* Personal information*/}
      <Text fontWeight="bold" color="#3B3B3B" fontSize="20px" ml="25px" mt="10px">Información personal: </Text>
      <Flex direction="column" w="100vw" h="auto" pl="25px" pr="25px">
      <Flex direction="row" justify="space-between" align="center" w="88vw" h="8vh">
      <Flex direction="row" align="center">
            <Box  w="5vh" h="5vh" bg="#4F1964" borderRadius="10px" p="5px" display="flex" justifyContent="center" alignItems="center">
              <Image src="/profile/user.png" alt="user" width={35} height={25} />
            </Box>
            <Text color="#3B3B3B" fontSize="18px" ml="10px">Alergias conocidas</Text>
          </Flex>
          <Box
            w="4vh" h="4vh" bg="#4F1964" p="8px" borderRadius="10px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" cursor="pointer" _hover={{ bg: "#371145" }}
            onClick={() => openModal("Alergias conocidas")}
          >
            <Image
              src="/profile/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1"/>
        <Flex direction="row" justify="space-between" align="center" w="88vw" h="8vh">
          <Flex direction="row" align="center">
            <Box  w="5vh" h="5vh" bg="#4F1964" borderRadius="10px" p="5px" display="flex" justifyContent="center" alignItems="center">
              <Image src="/profile/drop.png" alt="drop" width={35} height={25} />
            </Box>
            <Text as="h3" color="#3B3B3B" fontSize="18px" ml="10px">
              Grupo sanguíneo
            </Text>
          </Flex>
          <Box
            w="4vh" h="4vh" bg="#4F1964" p="8px" borderRadius="10px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" cursor="pointer" _hover={{ bg: "#371145" }}
            onClick={() => openModal("Grupo sanguíneo")}
          >
            <Image
              src="/profile/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex direction="row" justify="space-between" align="center" w="88vw" h="8vh">
          <Flex direction="row" align="center">
            <Box  w="5vh" h="5vh" bg="#4F1964" borderRadius="10px" p="5px" display="flex" justifyContent="center" alignItems="center">
              <Image
                src="/profile/h&w.svg"
                alt="height&weight"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" color="#3B3B3B" fontSize="18px" ml="10px">
              Peso y altura
            </Text>
          </Flex>
          <Box w="4vh" h="4vh" bg="#4F1964" p="8px" borderRadius="10px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" cursor="pointer" _hover={{ bg: "#371145" }} onClick={() => openModal("Peso y altura")}>
            <Image
              src="/profile/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex direction="row" justify="space-between" align="center" w="88vw" h="8vh">
          <Flex direction="row" align="center">
            <Box  w="5vh" h="5vh" bg="#4F1964" borderRadius="10px" p="5px" display="flex" justifyContent="center" alignItems="center">
              <Image
                src="/profile/health.png"
                alt="health"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" color="#3B3B3B" fontSize="18px" ml="10px">
              Enfermedades existentes
            </Text>
          </Flex>
          <Box
            w="4vh" h="4vh" bg="#4F1964" p="8px" borderRadius="10px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" cursor="pointer" _hover={{ bg: "#371145" }}
            onClick={() => openModal("Enfermedades existentes")}
          >
            <Image
              src="/profile/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex direction="row" justify="space-between" align="center" w="88vw" h="8vh">
          <Flex direction="row" align="center">
            <Box  w="5vh" h="5vh" bg="#4F1964" borderRadius="10px" p="5px" display="flex" justifyContent="center" alignItems="center">
              <Image
                src="/profile/phone.png"
                alt="phone"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" color="#3B3B3B" fontSize="18px" ml="10px">
              Número de teléfono
            </Text>
          </Flex>
          <Box
            w="4vh" h="4vh" bg="#4F1964" p="8px" borderRadius="10px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" cursor="pointer" _hover={{ bg: "#371145" }}
            onClick={() => openModal("Número de teléfono")}
          >
            <Image
              src="/profile/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex direction="row" justify="space-between" align="center" w="88vw" h="8vh">
          <Flex direction="row" align="center">
            <Box  w="5vh" h="5vh" bg="#4F1964" borderRadius="10px" p="5px" display="flex" justifyContent="center" alignItems="center">
              <Image
                src="/profile/location.png"
                alt="location"
                width={30}
                height={30}
              />
            </Box>
            <Text as="h3" color="#3B3B3B" fontSize="18px" ml="10px">
              Dirección
            </Text>
          </Flex>
          <Box w="4vh" h="4vh" bg="#4F1964" p="8px" borderRadius="10px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" cursor="pointer" _hover={{ bg: "#371145" }} onClick={() => openModal("Dirección")}>
            <Image
              src="/profile/arrowRight.png"
              alt="arrowRight"
              width={40}
              height={40}
            />
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
      </Flex>
      <ModalComponent patient={patient} isOpen={isOpen} onClose={closeModal} type={modalType} setPatient={setPatient}/>
    </>
  );
}

export default Perfil;

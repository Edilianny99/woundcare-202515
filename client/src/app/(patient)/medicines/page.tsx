"use client"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { getPrescriptions } from "@/services/patient/patient.service";
import { Prescription } from "@/interfaces/patient/patient.interface";
import Arrow from "@/components/Arrow";

function Medicines() {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

useEffect(() => {
  const fetchPrescriptions = async () => {
    const data = await getPrescriptions();
    setPrescriptions(data);
  };

  fetchPrescriptions();
}, []);

  return (
    <>
      <Flex w="100vw" h="13vh" justify="space-between" pr="3vh" mb="30px">
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
            Medicamentos
          </Heading>
          <Box w="55vw" h="2px" bg="#AD8EB1" />
        </Flex>
      </Flex>
        {prescriptions?.map((medicine, index) => (
        <Flex
          key={index}
          w="100vw"
          pl="20px"
          pr="20px"
          direction="column"
          align="center"
        >
          <Flex
            direction="row"
            w="100vw"
            h="10vh"
            pl="20px"
            pr="20px"
            justify="space-between"
            align="center"
          >
            <Flex direction="row" align="center">
              <Flex
                backgroundColor="#4F1964"
                w="60px"
                h="60px"
                rounded="10px"
                justify="center"
                align="center"
              >
                <Image
                  src="/medicine/capsule.png"
                  alt="arrow"
                  width={10}
                  height={10}
                />
              </Flex>
              <Flex direction="column" ml="20px" color="#3B3B3B">
                <Text fontWeight="bold" fontSize="large">
                  {medicine.medicineName}
                </Text>
                <Text fontWeight="300" fontSize="large">
                  {medicine.dose} mg
                </Text>
              </Flex>
            </Flex>
            <Text color="#8E8E8E" fontSize="large">
               Cada {medicine.lapse} horas
            </Text>
          </Flex>
          <Box w="100%" h="2px" bg="#AD8EB1" mb="5px" />
        </Flex>
      ))}
      
    </>
  );
}

export default Medicines;

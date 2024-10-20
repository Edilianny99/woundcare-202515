"use client";
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Arrow from '../../../components/Arrow'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Doctor } from '@/interfaces/nurse/nurse.interface'
import { getDoctorInfo } from '@/services/nurse/nurse.service'
import Loader from '../../../components/Loader'

function DoctorInfo() {
    const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [doctoInfo, setDoctorInfo] = useState<Doctor>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDoctorInfo = async () => {
          if (id !== null) {
            const response = await getDoctorInfo(id); 
            setDoctorInfo(response);
            setIsLoading(false);
          }
        };
        fetchDoctorInfo();
      }, []);

      const calculateAge = (birthDate: string) => {
        const dob = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
          age--;
        }
        return age;
      }

  return isLoading ? (
    <Box width={"100vw"} flexGrow={1} position={"relative"}>
      <Loader />
    </Box>
  ) : (
    <>
    <Box as="main" flex={1}>
        <Arrow />
        <Flex
          marginTop={-16}
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
            Especialista
          </Heading>
        </Flex>
        <Flex w="100vw" h="13vh" align="center" pr="6vw" pl="6vw">
          {doctoInfo?.genre === 'FEMALE' ? (
            <Image
            src="/profile/female_user.png"
            alt="female_user"
            width={80}
            height={80}
          />
            ) : (
              <Image
            src="/profile/male_user.png"
            alt="male_user"
            width={80}
            height={80}
          />
            )}
          
          <Heading
            as="h2"
            fontSize="x-large"
            fontWeight="bold"
            color="#4F1964"
            ml="10px"
          >
            {doctoInfo?.user.fullname}
          </Heading>
        </Flex>
        <Flex direction={"column"} paddingX={"30px"} paddingBottom={"30px"}>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"10px"}
          >
            Información del especialista:
          </Text>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Nombre:</Text>
            <Text marginLeft={"5px"}>{doctoInfo?.user.fullname}</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Edad:</Text>
            <Text marginLeft={"5px"}>{doctoInfo?.birthDate ? calculateAge(doctoInfo.birthDate) : 'N/A'} años</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Género:</Text>
            <Text marginLeft={"5px"}>{doctoInfo?.genre === 'FEMALE' ? 'Femenino' : 'Masculino'}</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>C.I:</Text>
            <Text marginLeft={"5px"}>{doctoInfo?.nationalId}</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Centro médico:</Text>
            <Text marginLeft={"5px"}>{doctoInfo?.medicalCenter}</Text>
          </Flex>
          <Flex direction={"row"} marginBottom={"5px"}>
            <Text fontWeight={"500"}>Correo:</Text>
            <Text marginLeft={"5px"}>{doctoInfo?.user.email}</Text>
          </Flex>
          </Flex>
          </Box>       
          </>
  )
}

export default DoctorInfo
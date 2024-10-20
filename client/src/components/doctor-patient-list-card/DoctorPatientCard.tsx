import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";

interface PatientCardProps {
    fullName: string;
    nationalId: string;
  }

const DoctorPatientCard: React.FC<PatientCardProps> = ({ fullName, nationalId }) => {
    const router = useRouter();

    const handleViewMedicalFile = () => {
        router.push(`/doctor-medical-file-patient?id=${nationalId}`);
    }
  return (
    <Flex direction={"column"}>
          <Flex justifyContent={"space-between"}>
          <Flex> 
          <Box backgroundColor="#4F1964" width={"50px"} height={"50px"} borderRadius={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image
          src="/profile/user.png"
          alt="menu"
          width={30}
          height={30}
          style={{ cursor: "pointer" }}
        />
          </Box>
          <Text color="#3B3B3B" alignSelf={"center"} marginLeft={"10px"} fontWeight={"500"}>{fullName}</Text>
          </Flex>
          <Box backgroundColor="#4F1964" width={"30px"} height={"30px"} borderRadius={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"} alignSelf={"center"}>
          <Image
          src="/profile/arrowRight.png"
          alt="menu"
          width={10}
          height={10}
          style={{ cursor: "pointer" }}
          onClick={ handleViewMedicalFile}
        />
          </Box>
          </Flex> 
          <Box w="100%" h="2px" bg="#AD8EB1" marginBottom={3} marginTop={3}/>
          </Flex>
  )
}

export default DoctorPatientCard
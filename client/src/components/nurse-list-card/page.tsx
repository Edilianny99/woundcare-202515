import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";

interface NurseCardProps {
    fullName: string;
  }

const NurseCard: React.FC<NurseCardProps> = ({ fullName }) => {
  const router = useRouter();

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
          </Flex> 
          <Box w="100%" h="2px" bg="#AD8EB1" marginBottom={3} marginTop={3}/>
          </Flex>
  )
}

export default NurseCard
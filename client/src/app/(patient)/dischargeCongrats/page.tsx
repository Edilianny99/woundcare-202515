import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

function dischargeCongrats() {
  return (
    <Box style={{padding: "20px", display: "flex", flexDirection: "column"}}>
    <Image src="/dischargeCongrats/heart.png" alt="heart" width={90} height={90} />
    <Flex direction="row" justify="flex-end" mt="-30px">
    <Image src="/dischargeCongrats/cross.png" alt="heart" width={110} height={110} />
    </Flex>
    <Text fontWeight="bold" color="#4F1964" fontSize="xx-large" mt="1vh" mb="3vh" textAlign="center">¡Felicidades por completar su tratamiento exitosamente!</Text>
    <Image src="/dischargeCongrats/nurses.png" alt="heart" width="100vw" />
    <Text fontWeight="600" color="#3B3B3B" fontSize="large" mt="3vh" textAlign="center">De parte de todo el equipo de salud, esperamos que tu recuperación haya sido completa y exitosa</Text>
    </Box>
  )
}

export default dischargeCongrats
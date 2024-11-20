"use client";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import Arrow from "@/components/Arrow";
import InfographyBox from "@/components/InfographyBox";
import ImageModal from "./ImageModal";

function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  return (
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
            Educación
          </Heading>
        </Flex>
        <Flex
          w="100vw"
          pl="20px"
          pr="20px"
          mb="30px"
          mt="30px"
          direction="column"
          align="center"
        >
          <Box>
            <Text mb={6} color="#3B3B3B" fontSize={{sm: "14px", md: "18px"}}>
              Conozca más acerca de la heridas de díficil cicatrización por medio de infografías{" "}
            </Text>
            <SimpleGrid my={2} columns={{ base: 2, md: 2, sm: 1 }} spacing={4}>
              <Box onClick={() => handleOpenModal("/infographics/alimentacion.png")}>
                <InfographyBox
                  imageSrc="/infographics/alimentacion.png"
                  title="Alimentación que ayuda a la cicatrización"
                />
              </Box>
              <Box onClick={() => handleOpenModal("/infographics/factores.png")}>
                <InfographyBox
                  imageSrc="/infographics/factores.png"
                  title="Factores que afectan a la cicatrización"
                />
              </Box>
              <Box onClick={() => handleOpenModal("/infographics/fases.png")}>
                <InfographyBox
                  imageSrc="/infographics/fases.png"
                  title="Fases de la cicatrización de heridas"
                />
              </Box>
              <Box onClick={() => handleOpenModal("/infographics/tecnicas.png")}>
                <InfographyBox
                  imageSrc="/infographics/tecnicas.png"
                  title="Consejos para el cuidado adecuado de heridas"
                />
              </Box>
            </SimpleGrid>

            <ImageModal isOpen={isOpen} onClose={handleCloseModal} src={selectedImage} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Education;
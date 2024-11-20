import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import React from "react";
import Arrow from "@/components/Arrow";
import InfographyBox from "@/components/InfographyBox";
import ImageModal from "./ImageModal";


function Education() {
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
            <Text fontSize={14}>
              Conozca más acerca de la heridas de díficil cicatrización  por medio de infografías {" "}
            </Text>
            <SimpleGrid columns={{ base: 2, md: 2, sm: 1 }} spacing={3}>
              <Box p={2}>
                <InfographyBox
                  imageSrc="/infographics/alimentacion.png"
                  title="Alimentación que ayuda a la cicatrización"
                />
              </Box>
              <Box p={2}>
                <InfographyBox
                  imageSrc="/infographics/factores.png"
                  title="Factores que afectan a la cicatrización"
                />
              </Box>
              <Box p={2}>
                <InfographyBox
                  imageSrc="/infographics/fases.png"
                  title="Fases de la cicatrización de heridas"
                />
              </Box>
              <Box p={2}>
                <InfographyBox
                  imageSrc="/infographics/tecnicas.png"
                  title="Consejos para el cuidado adecuado de heridas"
                />
              </Box>
            </SimpleGrid>

            <ImageModal src="/infographics/fases.png" width={500} height={500}/>

          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Education;
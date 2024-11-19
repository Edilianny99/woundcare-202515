import {
    Accordion,
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Text
} from "@chakra-ui/react";
import React from "react";
import Arrow from "@/components/Arrow";
import InfographyBox from "@/components/InfographyBox";

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
                            Conozca más acerca de la heridas de díficil cicatrización{" "}
                        </Text>
                        <SimpleGrid columns={{ base: 2, md: 2, sm: 1 }} spacing={3}>
                            <Box p={2}>
                                <InfographyBox
                                    imageSrc="/homePage/medicines.svg"
                                    title="Cuidados de heridas"
                                />
                            </Box>
                            <Box p={2}>
                                <InfographyBox
                                    imageSrc="/homePage/medicines.svg"
                                    title="Infografia Seguimiento de signos y sintomas"
                                />
                            </Box>
                            <Box p={2}>
                                <InfographyBox
                                    imageSrc="/homePage/medicines.svg"
                                    title="Cuidados de heridas"
                                />
                            </Box>
                            <Box p={2}>
                                <InfographyBox
                                    imageSrc="/homePage/medicines.svg"
                                    title="Infografia Seguimiento de signos y sintomas"
                                />
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

export default Education;
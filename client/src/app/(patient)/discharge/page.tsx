"use client";
import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import Arrow from "@/components/Arrow";

function Discharge() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [answer5, setAnswer5] = useState<string>("");

  const allAnswersProvided =
    answer1 && answer2 && answer3 && answer4 && answer5;

  const handleSubmit = () => {
    const answers = {
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
    };
  };

  return (
    <>
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
            Alta del paciente
          </Heading>
          <Box w="55vw" h="2px" bg="#AD8EB1" />
        </Flex>
      </Flex>
      <Flex
        w="100vw"
        pl="20px"
        pr="20px"
        mb="30px"
        direction="column"
        align="center"
      >
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Image
            src="/discharge/nurse.png"
            alt="nurse"
            width={105}
            height={105}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginLeft={5}
          >
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
              Estimado/a paciente:
            </Text>
            <Text fontSize={14}>
              Le pedimos de manera más comedida que responda la siguiente
              encuesta de satisfacción, sobre esta herramienta que utilizó
              durante el proceso de cicatrización de su herida.{" "}
            </Text>
          </Box>
        </Flex>
        <Text color={"#4F1964"} fontWeight={500}>
          Por favor, deberá seleccionar la opción que describa su experiencia
          con el uso de esta aplicación.
        </Text>
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="600" color="#3B3B3B" fontSize="16px">
              La herramienta me ayudó en el proceso de cicatrización de mi
              herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              marginTop={3}
              onChange={setAnswer1}
            >
              <Radio value="Muy satisfecho" size="lg" colorScheme="purple">
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme="purple">
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme="purple">
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme="purple">
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme="purple">
                Muy insatisfecho
              </Radio>
            </RadioGroup>
            <Box w="100%" h="2px" bg="#AD8EB1" mt="15px" mb="15px" />
            <Text fontWeight="600" color="#3B3B3B" fontSize="16px">
              La herramienta es fácil de usar:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              marginTop={3}
              onChange={setAnswer2}
            >
              <Radio value="Muy satisfecho" size="lg" colorScheme="purple">
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme="purple">
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme="purple">
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme="purple">
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme="purple">
                Muy insatisfecho
              </Radio>
            </RadioGroup>
            <Box w="100%" h="2px" bg="#AD8EB1" mt="15px" mb="15px" />
            <Text fontWeight="600" color="#3B3B3B" fontSize="16px">
              La herramienta tiene recursos que me ayudaron a responder mis
              dudas:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              marginTop={3}
              onChange={setAnswer3}
            >
              <Radio value="Muy satisfecho" size="lg" colorScheme="purple">
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme="purple">
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme="purple">
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme="purple">
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme="purple">
                Muy insatisfecho
              </Radio>
            </RadioGroup>
            <Box w="100%" h="2px" bg="#AD8EB1" mt="15px" mb="15px" />
            <Text fontWeight="600" color="#3B3B3B" fontSize="16px">
              Necesito ayuda de personal experto para utilizar esta aplicación:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              marginTop={3}
              onChange={setAnswer4}
            >
              <Radio value="Muy satisfecho" size="lg" colorScheme="purple">
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme="purple">
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme="purple">
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme="purple">
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme="purple">
                Muy insatisfecho
              </Radio>
            </RadioGroup>
            <Box w="100%" h="2px" bg="#AD8EB1" mt="15px" mb="15px" />
            <Text fontWeight="600" color="#3B3B3B" fontSize="16px">
              Volvería a utilizar esta herramienta:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              marginTop={3}
              onChange={setAnswer5}
            >
              <Radio value="Muy satisfecho" size="lg" colorScheme="purple">
                Muy satisfecho
              </Radio>
              <Radio value="Satisfecho" size="lg" colorScheme="purple">
                Satisfecho
              </Radio>
              <Radio value="Neutral" size="lg" colorScheme="purple">
                Neutral
              </Radio>
              <Radio value="Insatisfecho" size="lg" colorScheme="purple">
                Insatisfecho
              </Radio>
              <Radio value="Muy insatisfecho" size="lg" colorScheme="purple">
                Muy insatisfecho
              </Radio>
            </RadioGroup>
          </Box>
        </Flex>
        <Link href="/dischargeCongrats">
          <Button
            w="80vw"
            h="6vh"
            bg="#4F1964"
            borderRadius="15px"
            mt="20px"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            _disabled={{
              bg: "#cccccc",
              color: "#666666",
              cursor: "not-allowed",
            }}
            isDisabled={!allAnswersProvided}
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Link>
      </Flex>
    </>
  );
}

export default Discharge;

"use client";
import Arrow from "@/components/Arrow";
import { createDoctor } from "@/services/nurse/nurse.service";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function RegisterDoctor() {
const router = useRouter();

  type Genre = "MALE" | "FEMALE";
  const toast = useToast();
  const [id, setId] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [medicalCenter, setMedicalCenter] = useState<string>("");
  const formattedBirthDate = birthDate ? new Date(birthDate).toISOString() : "";
  const isFormValid = id && fullName && email && password && genre && birthDate && medicalCenter;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //Validations
  const [isIdValid, setIsIdValid] = useState<boolean>(true);
  const [isFullNameValid, setIsFullNameValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isBirthDateValid, setIsBirthDateValid] = useState<boolean>(true);
  const isDateValid = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    return !isNaN(date.getTime()) && date <= now;
  };

  useEffect(() => {
    setIsIdValid(/^[0-9]{9,11}$/.test(id));
    setIsFullNameValid(fullName.trim().split(" ").length >= 3);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    setIsBirthDateValid(isDateValid(birthDate));
  }, [id, fullName, email, birthDate]);

  //Function
  const handleSubmit = async () => {
    setIsSubmitted(true);
    if (isFormValid && isIdValid && isFullNameValid && isEmailValid && isBirthDateValid) {
      const Doctor = {
        nationalId: id,
        fullname: fullName,
        email: email,
        password: password,
        genre: genre as Genre,
        birthDate: formattedBirthDate,
        medicalCenter: medicalCenter,
      }
      try {
        setLoading(true);
        await createDoctor(Doctor);
        toast({
          title: "Success",
          description: "Especialista registrado con éxito",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push(`/nurse-home-page`);
      } catch (error: any) {
        setLoading(false);
        if (error.status === 409) {
          toast({
            title: "Error",
            description: "Ya existe un usuario con esa cédula de identidad",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error",
            description: "Ha ocurrido un error al registrar el especialista",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      }
    } else {
      toast({
        title: "Error",
        description: "Debe completar todos los campos",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
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
          Registrar especialista
        </Heading>
      </Flex>
      <Flex
        direction={"column"}
        paddingX={"30px"}
        paddingBottom={"30px"}
        marginTop={"20px"}
      >
        <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
          Cédula de identidad
        </Text>
        <FormControl isInvalid={!isIdValid && isSubmitted}>
          <Input
            type="text"
            placeholder="Cédula de identidad"
            backgroundColor={"white"}
            marginBottom={"20px"}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <FormErrorMessage marginTop={"-8px"}>
            Por favor, introduce un valor válido
          </FormErrorMessage>
        </FormControl>
        <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
          Nombre completo
        </Text>
        <FormControl isInvalid={!isFullNameValid && isSubmitted}>
        <Input
          type="text"
          placeholder="Nombre completo"
          backgroundColor={"white"}
          marginBottom={"20px"}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <FormErrorMessage marginTop={"-8px"}>
            Por favor, introduce su nombre completo
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!isEmailValid && isSubmitted}>
        <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
          Correo electrónico
        </Text>
        <Input
          type="text"
          placeholder="Correo electrónico"
          backgroundColor={"white"}
          marginBottom={"20px"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormErrorMessage marginTop={"-8px"}>
            Por favor, introduce un correo electrónico válido
          </FormErrorMessage>
        </FormControl>
        <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
          Contraseña
        </Text>
        <Input
          type="text"
          placeholder="Contraseña"
          backgroundColor={"white"}
          marginBottom={"20px"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
          Género
        </Text>
        <Select
          placeholder="Género"
          marginBottom={"20px"}
          backgroundColor="white"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="FEMALE">Femenino</option>
          <option value="MALE">Masculino</option>
        </Select>
        <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
          Fecha de nacimiento
        </Text>
        <FormControl isInvalid={!isBirthDateValid && isSubmitted}>
        <Input
          type="date"
          placeholder="Fecha de nacimeinto"
          backgroundColor={"white"}
          marginBottom={"20px"}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <FormErrorMessage marginTop={"-8px"}>
            Por favor, introduce una fecha válida
          </FormErrorMessage>
        </FormControl>
        <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
          Centro médico
        </Text>
        <Input
          type="text"
          placeholder="Centro médico"
          backgroundColor={"white"}
          marginBottom={"20px"}
          value={medicalCenter}
          onChange={(e) => setMedicalCenter(e.target.value)}
        />
        <Button
          w="100%"
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
          onClick={handleSubmit}
          isDisabled={!isFormValid}
          isLoading={loading}
        >
          Registrar especialista
        </Button>
      </Flex>
    </Box>
  );
}

export default RegisterDoctor;

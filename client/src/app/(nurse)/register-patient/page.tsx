"use client";
import Arrow from "@/components/Arrow";
import { createPatient } from "@/services/nurse/nurse.service";
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AllergiesInputComponent,
  DiseasesInputComponent,
  SelectComponent,
  SubmitButtonComponent,
  TextFieldComponent,
  TextFieldComponent2,
} from "./inputsForm";
import { useRouter } from "next/navigation";

function RegisterPatient() {
  const [isLoading, setIsLoading] = useState(false);
  type Genre = "MALE" | "FEMALE";
  type BloodType =
    | "A_POSITIVE"
    | "A_NEGATIVE"
    | "B_POSITIVE"
    | "B_NEGATIVE"
    | "AB_POSITIVE"
    | "AB_NEGATIVE"
    | "O_POSITIVE"
    | "O_NEGATIVE";

  type PatientStatus = "ACTIVE" | "INACTIVE";
  const router = useRouter();

  //Constants
  const [id, setId] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genre, setGenre] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);
  const [inputDisease, setInputDisease] = useState("");
  const [medicalRecord, setMedicalRecord] = useState<string[]>([]);

  //Validations
  const isIdValid = /^[0-9]{9,11}$/.test(id);
  const isFullNameValid = fullname.trim().split(" ").length >= 3;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isDateValid = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    return !isNaN(date.getTime()) && date <= now;
  };
  const isBirthDateValid = isDateValid(birthDate);
  const isPhoneNumberValid = /^[0-9-\s]{7,11}$/.test(phoneNumber);
  const isCellPhoneNumberValid = /^\+?[0-9-\s]{9,16}$/.test(cellPhoneNumber);
  const isWeightValid = (weight: string) => {
    const weightNumber = Number(weight);
    return !isNaN(weightNumber) && weightNumber > 0 && weightNumber < 500;
  };

  const isHeightValid = (height: string) => {
    const heightNumber = Number(height);
    return !isNaN(heightNumber) && heightNumber > 0 && heightNumber < 300;
  };

  const isWeightInputValid = isWeightValid(weight);
  const isHeightInputValid = isHeightValid(height);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();
  const formattedBirthDate = birthDate ? new Date(birthDate).toISOString() : "";

  //Functions
  const handleAddClick = () => {
    if (inputValue) {
      setAllergies((prevAllergies) => [...prevAllergies, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteClick = (index: number) => {
    setAllergies((prevAllergies) =>
      prevAllergies.filter((_, i) => i !== index)
    );
  };

  const handleAddClickDisease = () => {
    if (inputDisease) {
      setMedicalRecord((prevDiseases) => [...prevDiseases, inputDisease]);
      setInputDisease("");
    }
  };

  const handleDeleteClickDisease = (index: number) => {
    setMedicalRecord((prevDiseases) =>
      prevDiseases.filter((_, i) => i !== index)
    );
  };

  const isFormValid =
    id &&
    fullname &&
    email &&
    password &&
    genre &&
    birthDate &&
    address &&
    phoneNumber &&
    cellPhoneNumber &&
    bloodType &&
    weight &&
    height;

  const handleSubmit = async () => {
    setIsSubmitted(true);
    setIsLoading(true);
    if (
      isFormValid &&
      isIdValid &&
      isFullNameValid &&
      isEmailValid &&
      isBirthDateValid &&
      isPhoneNumberValid &&
      isCellPhoneNumberValid &&
      isWeightInputValid &&
      isHeightInputValid
    ) {
      const patient = {
        nationalId: id,
        fullname,
        email,
        password,
        genre: genre as Genre,
        birthDate: formattedBirthDate,
        adress: address,
        phoneNumber,
        cellPhoneNumber,
        bloodType: bloodType as BloodType,
        weight: Number(weight),
        height: Number(height),
        allergies,
        medicalRecord,
        status: "INACTIVE" as PatientStatus,
        photo: "a",
      };
      try {
        await createPatient(patient);
        toast({
          title: "Success",
          description: "Paciente registrado con éxito",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsLoading(false);
        router.push(`/create-medical-file?id=${patient.nationalId}`);
      } catch (error: any) {
        if (error.status === 409) {
          toast({
            title: "Error",
            description:
              "Ya existe un usuario con esa cédula de identidad o ese correo electrónico",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
        } else {
          toast({
            title: "Error",
            description: "Ha ocurrido un error al registrar el paciente",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
        }
      }
    } else {
      toast({
        title: "Error",
        description: "Por favor, llena todos los campos correctamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };
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
            Registrar paciente
          </Heading>
        </Flex>
        <Flex display={"flex"} flexDirection={"column"} padding={"30px"}>
          <TextFieldComponent
            label="Cédula de identidad:"
            placeholder="Cédula de identidad"
            isInvalid={isSubmitted && !isIdValid}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextFieldComponent
            label="Nombre completo:"
            placeholder="Nombre completo"
            isInvalid={isSubmitted && !isFullNameValid}
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextFieldComponent
            label="Correo:"
            placeholder="Correo electrónico"
            isInvalid={isSubmitted && !isEmailValid}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextFieldComponent2
            label="Contraseña:"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SelectComponent
            label="Género:"
            placeholder="Selecciona un género"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="MALE">Masculino</option>
            <option value="FEMALE">Femenino</option>
          </SelectComponent>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Fecha de nacimiento:
          </Text>
          <FormControl isInvalid={isSubmitted && !isBirthDateValid}>
            <Input
              placeholder="Fecha de nacimiento"
              marginBottom={"20px"}
              backgroundColor="white"
              type="date"
              value={birthDate}
              onChange={(e) => setbirthDate(e.target.value)}
            />
            {isSubmitted && !isBirthDateValid && (
              <FormErrorMessage marginTop={"-8px"}>
                Por favor, introduce una fecha de nacimiento válida
              </FormErrorMessage>
            )}
          </FormControl>
          <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">
            Dirección:
          </Text>
          <Textarea
            placeholder="Dirección"
            marginBottom={"20px"}
            backgroundColor="white"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextFieldComponent
            label="Número de teléfono:"
            placeholder="Número de teléfono"
            isInvalid={isSubmitted && !isPhoneNumberValid}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextFieldComponent
            label="Teléfono celular:"
            placeholder="Número de celular"
            isInvalid={isSubmitted && !isCellPhoneNumberValid}
            value={cellPhoneNumber}
            onChange={(e) => setCellPhoneNumber(e.target.value)}
          />
          <SelectComponent
            label="Tipo de sangre:"
            placeholder="Selecciona un tipo de sangre"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
          >
            <option value="A_POSITIVE">A+</option>
            <option value="A_NEGATIVE">A-</option>
            <option value="B_POSITIVE">B+</option>
            <option value="B_NEGATIVE">B-</option>
            <option value="AB_POSITIVE">AB+</option>
            <option value="AB_NEGATIVE">AB-</option>
            <option value="O_POSITIVE">O+</option>
            <option value="O_NEGATIVE">O-</option>
          </SelectComponent>
          <TextFieldComponent
            label="Peso:"
            placeholder="Peso"
            isInvalid={isSubmitted && !isWeightInputValid}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <TextFieldComponent
            label="Altura:"
            placeholder="Altura"
            isInvalid={isSubmitted && !isHeightInputValid}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <AllergiesInputComponent
            inputValue={inputValue}
            setInputValue={setInputValue}
            allergies={allergies}
            handleAddClick={handleAddClick}
            handleDeleteClick={handleDeleteClick}
          />
          <DiseasesInputComponent
            inputDisease={inputDisease}
            setInputDisease={setInputDisease}
            medicalRecord={medicalRecord}
            handleAddClickDisease={handleAddClickDisease}
            handleDeleteClickDisease={handleDeleteClickDisease}
          />
          <SubmitButtonComponent
            isFormValid={!!isFormValid}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Flex>
      </Box>
    </>
  );
}

export default RegisterPatient;

import { Patient } from "@/interfaces/patient/patient.interface";
import {
  editAddress,
  editCellPhoneNumber,
  editWeight_Height,
} from "@/services/patient/patient.service";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  Input,
  Textarea,
  Flex,
  useToast
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import AllergyList from "./modalTypes/AllergyList";
import BloodTypeList from "./modalTypes/BloodTypeList";
import MedicalRecordsList from "./modalTypes/MedicalRecordsList";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  patient: Patient;
  setPatient: React.Dispatch<React.SetStateAction<Patient>>;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  type,
  patient,
  setPatient
}) => {
  const [allergies, setAllergies] = useState<string[]>([]);
  const [diseases, setDiseases] = useState<string[]>([]);
  const [weight, setWeight] = useState<number>(patient.weight);
  const [height, setHeight] = useState<number>(patient.height);
  const [cellPhoneNumber, setCellPhoneNumber] = useState<string>(patient.cellPhoneNumber);
  const [phoneNumber, setPhoneNumber] = useState<string>(patient.cellPhoneNumber);
  const [address, setAddress] = useState<string>(patient.address);

  const toast = useToast();

  const handleSubmit = async () => {
    if (type === "Peso y altura"){
      if (weight > 300 || weight < 0 || height > 300 || height < 0 || weight === 0 || height === 0){
        toast({
          title: "Por favor, ingrese un peso y altura válidos",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      await editWeight_Height(weight, height);
      setPatient({...patient, weight, height});
      onClose();
    } else if (type === "Número de teléfono"){
      if (cellPhoneNumber.length > 16 || cellPhoneNumber.length < 9 || phoneNumber.length > 11 || phoneNumber.length < 7 || cellPhoneNumber === "" || phoneNumber === "" || isNaN(Number(cellPhoneNumber)) || isNaN(Number(phoneNumber))){
        toast({
          title: "Por favor, ingrese un número de teléfono válido",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      await editCellPhoneNumber(cellPhoneNumber, phoneNumber);
      setPatient({...patient, cellPhoneNumber, phoneNumber});
      onClose();
    } else if (type === "Dirección"){
      if (address === ""){
        toast({
          title: "Por favor, ingrese una dirección válida",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      await editAddress(address);
      setPatient({...patient, address});
      onClose();
    }
  }

  useEffect(() => {
    const fetchPatientData = () => {
    setWeight(patient.weight);
    setHeight(patient.height);
    setCellPhoneNumber(patient.cellPhoneNumber);
    setAddress(patient.address);
    setPhoneNumber(patient.phoneNumber);
  };
  if(patient)
    fetchPatientData();
  }, [patient, onClose]);

  useEffect(() => {
  if(patient){
    setAllergies(patient.allergies);
    setDiseases(patient.medicalRecords);
  }
  }, [patient]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent sx={{ backgroundColor: "#F9EDEF", maxW: "90vw", margin: "auto"}}>
        <ModalHeader>{type}</ModalHeader>
        <ModalBody>
          <Box w="100%" h="2px" bg="#4F1964" mt="-10px" mb="10px" />
          {type === "Alergias conocidas" ? (
            <>
              <AllergyList allergies={allergies}/>
            </>
          ) : type === "Grupo sanguíneo" ? (
            <>
              <BloodTypeList bloodType={patient.bloodType} />
            </>
          ) : type === "Peso y altura" ? (
            <>
              <Text marginBottom="10px">
                Por favor, ingrese su peso (kg) y altura (cm)
              </Text>
              <Text marginBottom="10px" fontWeight="500">Peso</Text>
              <Input
                backgroundColor="white"
                placeholder="Peso"
                marginBottom="10px"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
              <Text marginBottom="10px" fontWeight="500">Altura</Text>
              <Input
                backgroundColor="white"
                placeholder="Altura"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
              <Flex direction="row" justify="flex-end">
                <Button
                  mt={5}
                  bg="#4F1964"
                  color="white"
                  mr={3}
                  onClick={handleSubmit}
                >
                  Guardar
                </Button>
              </Flex>
            </>
          ) : type === "Enfermedades existentes" ? (
            <>
            <MedicalRecordsList diseases={diseases}/>
            </>
          ) : type === "Número de teléfono" ? (
            <>
              <Text marginBottom="10px">
                Por favor, ingrese su numero de teléfono celular
              </Text>
              <Input
                type="tel"
                backgroundColor="white"
                placeholder="Número de teléfono"
                marginBottom="10px"
                value={cellPhoneNumber}
                onChange={(e) => setCellPhoneNumber(String(e.target.value))}
              />
              <Text marginBottom="10px">
                Por favor, ingrese su numero de teléfono fijo
              </Text>
              <Input
                type="tel"
                backgroundColor="white"
                placeholder="Número de teléfono"
                marginBottom="10px"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(String(e.target.value))}
              />
              <Flex direction="row" justify="flex-end">
                <Button
                  mt={5}
                  bg="#4F1964"
                  color="white"
                  mr={3}
                  onClick={handleSubmit}
                >
                  Guardar
                </Button>
              </Flex>
            </>
          ) : type === "Dirección" ? (
            <>
              <Text marginBottom="10px">Por favor, ingrese su dirección</Text>
              <Textarea
                backgroundColor="white"
                placeholder="Dirección"
                marginBottom="10px"
                value={address}
                onChange={(e) => setAddress(String(e.target.value))}
              />
              <Flex direction="row" justify="flex-end">
                <Button
                  mt={5}
                  bg="#4F1964"
                  color="white"
                  mr={3}
                  onClick={handleSubmit}
                >
                  Guardar
                </Button>
              </Flex>
            </>
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button
            borderColor="#4F1964"
            bg="#F9EDEF"
            borderWidth="2px"
            color="#4F1964"
            mr={3}
            onClick={onClose}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;

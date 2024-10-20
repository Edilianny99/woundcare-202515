import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Button,
  Box,
  Input,
  useToast,
} from "@chakra-ui/react";
import { createBandageChange } from "@/services/nurse/nurse.service";

interface ModalBandageChangeProps {
  isOpen: boolean;
  onClose: () => void;
  idNurse: string | undefined;
  idPatient: string | undefined;
}

const ModalBandageChange: React.FC<ModalBandageChangeProps> = ({
  isOpen,
  onClose,
  idNurse,
  idPatient,
}) => {
  const [date, setDate] = useState<string>("");
  const selectedDate = new Date(date);
  const formattedDate = date ? new Date(date).toISOString() : "";
  const currentDate = new Date();
  const toast = useToast();

  const handleSubmit = async () => {
    if (!date) {
      toast({
        title: "Debe seleccionar una fecha",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    if (date && idNurse && idPatient) {
      if (selectedDate < currentDate) {
        toast({
          title: "La fecha seleccionada no puede ser del pasado",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      const bandageChange = {
        date: formattedDate,
        nurseId: idNurse,
        patientId: idPatient,
      };
      try {
        await createBandageChange(bandageChange);
        toast({
          title: "Cambio de vendaje asignado",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setDate("");
        onClose();
      } catch (error: any) {
        if (error.status === 400) {
          toast({
            title: "Error al asignar cambio de vendaje",
            description: "Ya hay un cambio de vendaje asignado para esta fecha",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else{
        toast({
          title: "Error al asignar cambio de vendaje",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        onClose();
        setDate("");
      }}
    }
  };

  const handleClose = () => {
    onClose();
    setDate("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={"90%"}>
        <ModalHeader>Asignar cambio de vendaje</ModalHeader>
        <Box
          width={"90%"}
          height={"2px"}
          backgroundColor={"#4F1964"}
          alignSelf={"center"}
        />
        <ModalBody>
          <Text>Programe un cambio de vendaje para su paciente</Text>
          <Text
            fontWeight={"bold"}
            fontSize={"18px"}
            color={"#3B3B3B"}
            marginBottom={"5px"}
            marginTop={"10px"}
          >
            Fecha
          </Text>
          <Input
            placeholder="Fecha"
            type="date"
            marginBottom={"20px"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            bg="#4F1964"
            borderRadius="10px"
            color="white"
            fontSize="18px"
            fontWeight="bold"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            onClick={handleSubmit}
          >
            Guardar
          </Button>
          <Button
            borderColor={"#4F1964"}
            borderWidth={"2px"}
            borderRadius="10px"
            color="#4F1964"
            fontSize="18px"
            fontWeight="bold"
            marginLeft={"10px"}
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBandageChange;

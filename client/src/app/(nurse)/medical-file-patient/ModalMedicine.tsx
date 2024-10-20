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
import { createPrescription } from "@/services/nurse/nurse.service";


interface ModalMedicalProps {
  isOpen: boolean;
  onClose: () => void;
  idMedicalFile: number | undefined;
}

const ModalMedicine: React.FC<ModalMedicalProps> = ({
  isOpen,
  onClose,
  idMedicalFile,
}) => {
  const toast = useToast();
  const [medicineName, setMedicineName] = useState<string>("");
  const [medicineDescription, setMedicineDescription] = useState<string>("");
  const [medicineDose, setMedicineDose] = useState<number>(0);
  const [medicineLapse, setMedicineLapse] = useState<number>(0);

  const handleSubmit = async () => {
    if (!medicineName || !medicineDescription || medicineLapse == 0 || !idMedicalFile) {
        toast({
          title: "Debe completar todos los campos",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      const prescription = {
          medicalFileId: idMedicalFile,
          medicineName: medicineName,
          medicineDescription: medicineDescription,
          dose: medicineDose,
          lapse: medicineLapse,
      };
    try {
        await createPrescription(prescription);
        toast({
            title: "Medicamento asignado",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
            setMedicineName("");
            setMedicineDescription("");
            setMedicineDose(0);
            setMedicineLapse(0);
          onClose();
    } catch (error: any) {
        if (error.status === 400) {
            toast({
              title: "Error al asignar medicamento",
              description: "Ya hay un medicamento asignado con ese nombre",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          } else{
          toast({
            title: "Error al asignar medicamento",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          setMedicineName("");
            setMedicineDescription("");
            setMedicineDose(0);
            setMedicineLapse(0);
          onClose();       
        }}
    }
    const handleClose = () => {
        onClose();
        setMedicineName("");
            setMedicineDescription("");
            setMedicineDose(0);
            setMedicineLapse(0);
      };


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={"90%"}>
        <ModalHeader>Asignar medicamentos</ModalHeader>
        <Box
          width={"90%"}
          height={"2px"}
          backgroundColor={"#4F1964"}
          alignSelf={"center"}
        />
        <ModalBody>
          <Text>Asigne un medicamento a su paciente</Text>
          <Text
            fontWeight={"bold"}
            fontSize={"16px"}
            color={"#3B3B3B"}
            marginBottom={"5px"}
            marginTop={"10px"}
          >
            Nombre del medicamento
          </Text>
          <Input
            placeholder="Nombre del medicamento"
            marginBottom={"20px"}
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
          <Text
            fontWeight={"bold"}
            fontSize={"16px"}
            color={"#3B3B3B"}
            marginBottom={"5px"}
            marginTop={"10px"}
          >
            Descripción del medicamento
          </Text>
          <Input
            placeholder="Descripción del medicamento"
            marginBottom={"20px"}
            value={medicineDescription}
            onChange={(e) => setMedicineDescription(e.target.value)}
          />
          <Text
            fontWeight={"bold"}
            fontSize={"16px"}
            color={"#3B3B3B"}
            marginBottom={"5px"}
            marginTop={"10px"}
          >
            Dosis del medicamento 
          </Text>
            <Input
                placeholder="Dosis del medicamento"
                marginBottom={"20px"}
                value={medicineDose}
                onChange={(e) => setMedicineDose(Number(e.target.value))}
            />
            <Text
            fontWeight={"bold"}
            fontSize={"16px"}
            color={"#3B3B3B"}
            marginBottom={"5px"}
            marginTop={"10px"}
          >
            Frecuencia del medicamento (horas)
          </Text>
            <Input
                placeholder="Dosis del medicamento"
                marginBottom={"20px"}
                value={medicineLapse}
                onChange={(e) => setMedicineLapse(Number(e.target.value))}
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

export default ModalMedicine;

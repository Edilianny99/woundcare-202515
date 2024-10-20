import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Text,
  Box,
  useToast
} from "@chakra-ui/react";
import { dischargePatient } from "@/services/nurse/nurse.service";
import { useRouter } from "next/navigation";

interface AlertDialogDischargeProps {
    idPatient: string | undefined;
    }

const AlertDialogDischarge: React.FC<AlertDialogDischargeProps>= ({idPatient}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
const toast = useToast();
const router = useRouter();

  const handleDischarge = async () => {
    if (idPatient){
        try {
            await dischargePatient(idPatient);
            toast({
                title: "El paciente ha sido dado de alta correctamente",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              onClose();
              router.push(`/nurse-home-page`);
        } catch (error: any) {
            toast({
                title: "Error al dar de alta al paciente",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            onClose();
        }
    }}

  return (
    <>
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
        onClick={onOpen}
      >
        Dar de alta
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"90%"}>
          <ModalHeader>Dar de alta al paciente</ModalHeader>
          <Box
            width={"90%"}
            height={"2px"}
            backgroundColor={"#4F1964"}
            alignSelf={"center"}
          />
          <ModalBody>
            <Text>
              ¿Está seguro de que desea dar de alta a este paciente? Esta acción
              no puede ser revertida.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#4F1964"
              borderRadius="10px"
              color="white"
              fontSize="18px"
              fontWeight="bold"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                onClick={handleDischarge}
            >
              Dar de alta
            </Button>
            <Button
              borderColor={"#4F1964"}
              borderWidth={"2px"}
              borderRadius="10px"
              color="#4F1964"
              fontSize="18px"
              fontWeight="bold"
              marginLeft={"10px"}
              onClick={onClose}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AlertDialogDischarge;

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
	useToast,
} from "@chakra-ui/react";
import { dischargePatient } from "@/services/nurse/nurse.service";
import { useRouter } from "next/navigation";

interface AlertDialogDischargeProps {
	idPatient: string | undefined;
}

const AlertDialogDischarge: React.FC<AlertDialogDischargeProps> = ({
	idPatient,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const router = useRouter();

	const handleDischarge = async () => {
		if (idPatient) {
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
		}
	};

	return (
		<>
			<Button
				w="fit-content"
				h="2rem"
				bg="#033e5c"
				px={8}
				borderRadius="1rem"
				color="white"
				fontSize="1.5rem"
				fontWeight="700"
				background={"#419ebd"}
				boxShadow="0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
				onClick={onOpen}
			>
				Dar de Alta
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent width={"90%"}>
					<ModalHeader>Dar de alta al paciente</ModalHeader>
					<Box
						width={"90%"}
						height={"2px"}
						backgroundColor={"#033e5c"}
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
							bg="#033e5c"
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
							borderColor={"#033e5c"}
							borderWidth={"2px"}
							borderRadius="10px"
							color="#033e5c"
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
};

export default AlertDialogDischarge;

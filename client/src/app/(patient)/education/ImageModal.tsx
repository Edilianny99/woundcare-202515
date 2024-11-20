import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image, Box } from "@chakra-ui/react";
import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent width={"90%"}>
            <ModalCloseButton/>
                <Box
                    width={"90%"}
                    height={"4px"}
                    alignSelf={"center"}
                />
                <ModalBody>
                    <Image width={600} height={800} src={src} alt="Infographic" />
                </ModalBody>
            </ModalContent>
        </Modal>
  );
};

export default ImageModal;
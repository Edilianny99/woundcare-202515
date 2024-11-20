import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    src: string;
}

function ImageModal({ isOpen, onClose, src }: ImageModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent width={"90%"}>
                <Box
                    width={"90%"}
                    height={"4px"}
                    alignSelf={"center"}
                />
                <ModalBody>
                    <Image width={800} height={800} src={src} alt="Infographic" />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ImageModal;
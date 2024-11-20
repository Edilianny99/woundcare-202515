import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import Image from 'next/image';

function ImageModal( src: string ) {
  return (
    <Modal isOpen={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={src} alt="Infographic" width={500} height={500} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ImageModal;
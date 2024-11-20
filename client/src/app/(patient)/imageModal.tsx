import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import Image from 'next/image';

function imageModal( src: string, isOpen: boolean ) {
  return (
    <Modal isOpen={isOpen}>
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

export default imageModal;
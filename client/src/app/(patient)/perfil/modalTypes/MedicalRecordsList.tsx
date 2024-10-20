import { HStack, Tag } from "@chakra-ui/react";
import React from "react";

interface MedicalRecordsListProps {
  diseases: string[];
}

const MedicalRecordsList: React.FC<MedicalRecordsListProps> = ({
  diseases,
}) => {
  return (
    <>
      <HStack spacing={4} align="start" marginTop="20px" wrap="wrap">
        {diseases.length > 0 ? (
          diseases.map((value, index) => (
            <Tag backgroundColor="#AD8EB1" key={index}>
              {value}
            </Tag>
          ))
        ) : (
          <p>No hay enfermedades registradas</p>
        )}
      </HStack>
    </>
  );
};

export default MedicalRecordsList;

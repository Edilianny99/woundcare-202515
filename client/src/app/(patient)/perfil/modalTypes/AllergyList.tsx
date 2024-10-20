import { HStack, Tag } from "@chakra-ui/react";
import React from "react";

interface AllergyListProps {
  allergies: string[];
}

const AllergyList: React.FC<AllergyListProps> = ({ allergies }) => {

  return (
    <>
      <HStack spacing={4} align="start" marginTop="20px" wrap="wrap">
        {allergies.length > 0 ? (
          allergies.map((value, index) => (
            <Tag backgroundColor="#AD8EB1" key={index}>
              {value}
            </Tag>
          ))
        ) : (
          <p>No hay alergias registradas</p>
        )}
      </HStack>
    </>
  );
};

export default AllergyList;
import { Text } from "@chakra-ui/react";
import React from "react";

interface BloodTypeProps {
  bloodType: string;
}

const BloodTypeList: React.FC<BloodTypeProps> = ({ bloodType }) => {
  const displayBloodType = () => {
    switch (bloodType) {
      case "A_POSITIVE":
        return "A+";
      case "A_NEGATIVE":
        return "A-";
      case "B_POSITIVE":
        return "B+";
      case "B_NEGATIVE":
        return "B-";
      case "AB_POSITIVE":
        return "AB+";
      case "AB_NEGATIVE":
      case "O_POSITIVE":
        return "O+";
      case "O_NEGATIVE":
        return "O-";
      default:
        return bloodType;
    }
  };

  return (
    <Text marginBottom="10px">Su grupo sanguíneo es: <strong>{displayBloodType()}</strong></Text>
  );
};

export default BloodTypeList;
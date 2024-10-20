import { Button, Flex, FormControl, FormErrorMessage, HStack, Input, Select, Tag, TagCloseButton, Text, Textarea } from "@chakra-ui/react";

interface TextFieldComponentProps {
  label: string;
  placeholder: string;
  isInvalid: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface TextFieldComponentProps2 {
    label: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  interface SelectComponentProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
  }
  interface AllergiesInputComponentProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    allergies: string[];
    handleAddClick: () => void;
    handleDeleteClick: (index: number) => void;
  }
  interface DiseaseInputComponentProps {
    inputDisease: string;
    setInputDisease: (value: string) => void;
    medicalRecord: string[];
    handleAddClickDisease: () => void;
    handleDeleteClickDisease: (index: number) => void;
  }
  interface SubmitButtonComponentProps {
    isFormValid: boolean;
    handleSubmit: () => void;
    isLoading: boolean;
  }
export const TextFieldComponent: React.FC<TextFieldComponentProps> = ({ label, placeholder, isInvalid, value, onChange }) => (
  <>
    <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">{label}</Text>
    <FormControl isInvalid={isInvalid}>
      <Input
        placeholder={placeholder}
        marginBottom={"20px"}
        backgroundColor="white"
        value={value}
        onChange={onChange}
      />
      {isInvalid && (
        <FormErrorMessage marginTop={"-8px"}>
          Por favor, introduce un valor válido
        </FormErrorMessage>
      )}
    </FormControl>
  </>
);
export const TextFieldComponent2: React.FC<TextFieldComponentProps2> = ({ label, placeholder, value, onChange }) => (
    <>
      <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">{label}</Text>
        <Input
          placeholder={placeholder}
          marginBottom={"20px"}
          backgroundColor="white"
          value={value}
          onChange={onChange}
        />
    </>
  );
// SelectComponent.jsx
export const SelectComponent: React.FC<SelectComponentProps> = ({ label, placeholder, value, onChange, children }) => (
    <>
    <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">{label}</Text>
      <Select
        placeholder={placeholder}
        marginBottom={"20px"}
        backgroundColor="white"
        value={value}
        onChange={onChange}
      >
        {children}
      </Select>
      </> 
  );

  // AllergiesInputComponent.jsx
  export const AllergiesInputComponent: React.FC<AllergiesInputComponentProps> = ({ inputValue, setInputValue, allergies, handleAddClick, handleDeleteClick }) => {
    return (
        <>
        <Text fontWeight="bold" color="#3B3B3B" fontSize="16px">Alergias conocidas:</Text>
        <HStack spacing={4}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            backgroundColor="white"
            placeholder="Alergia"
          />
          <Button bg="#4F1964" color="white" onClick={handleAddClick}>+</Button>
        </HStack>
        <HStack spacing={4} align="start" marginTop="20px" wrap="wrap">
          {allergies.map((value:any, index:any) => (
            <Tag backgroundColor="#AD8EB1" key={index}>
              {value}
              <TagCloseButton onClick={() => handleDeleteClick(index)} />
            </Tag>
          ))}
        </HStack>
        </>
    );
  };
 // DiseasesInputComponent.jsx
 export const DiseasesInputComponent: React.FC<DiseaseInputComponentProps> = ({ inputDisease, setInputDisease, medicalRecord, handleAddClickDisease, handleDeleteClickDisease }) => {
    return (
        <>
        <Text
            fontWeight="bold"
            color="#3B3B3B"
            fontSize="16px"
            marginTop={"20px"}
          >
            Enfermedades existentes:
          </Text>
          <HStack spacing={4}>
            <Input
              value={inputDisease}
              onChange={(e) => setInputDisease(e.target.value)}
              backgroundColor="white"
              placeholder="Enfermedad"
            />
            <Button bg="#4F1964" color="white" onClick={handleAddClickDisease}>
              +
            </Button>
          </HStack>
          <HStack spacing={4} align="start" marginTop="20px" wrap="wrap">
            {medicalRecord.map((value: any, index: any) => (
              <Tag backgroundColor="#AD8EB1" key={index}>
                {value}
                <TagCloseButton
                  onClick={() => handleDeleteClickDisease(index)}
                />
              </Tag>
            ))}
          </HStack>
        </>
    );
  };

  // SubmitButtonComponent.jsx
export const SubmitButtonComponent: React.FC<SubmitButtonComponentProps> = ({ isFormValid, handleSubmit, isLoading }) => (
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
      _disabled={{
        bg: "#cccccc",
        color: "#666666",
        cursor: "not-allowed",
      }}
      isDisabled={!isFormValid}
      onClick={handleSubmit}
      isLoading={isLoading}
      loadingText="Cargando..."
    >
      Registrar paciente
    </Button>
  );
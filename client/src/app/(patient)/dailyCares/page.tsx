"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Image as ChakraImage,
} from "@chakra-ui/react";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import { CloseIcon } from "@chakra-ui/icons";
import { Conversation } from "@/interfaces/chat/conversation.interface";
import { getMyConversation } from "@/services/patient/conversation.service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import routes from "@/utils/routes";
import {
  createImageMessage,
  createTextMessage,
} from "@/services/messages/messages.service";
import { answerMessage } from "@/utils/dailyCaresAnswers";

function DailyCares() {
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [answer5, setAnswer5] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [filesToShow, setFilesToShow] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const conversation = await getMyConversation();
        setConversation(conversation);
      } catch (error) {
        toast.error("Usted no tiene un caso médico activo.");
        router.push(routes.patientHomePage);
      }
    };
    fetchConversation();
  }, []);

  const allAnswersProvided =
    answer1 && answer2 && answer3 && answer4 && answer5;
  const allFilesUploaded = files.length > 0;
  const uploadPhoto =
    [answer1, answer2, answer3, answer4, answer5].filter(
      (answer) => answer === "Si"
    ).length >= 2;
  const canSubmit =
    allAnswersProvided && (uploadPhoto ? allFilesUploaded : true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const selectedFiles = event.target.files[0];
    setFiles([...files, selectedFiles]);

    const reader = new FileReader();
    reader.onload = () => {
      setFilesToShow([...filesToShow, reader.result as string]);
    };
    reader.readAsDataURL(selectedFiles);
  };

  const handleFileRemove = (index: number) => {
    setFiles(files.filter((file, i) => i !== index));
    setFilesToShow(filesToShow.filter((file, i) => i !== index));
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!conversation || !canSubmit) {
      setLoading(false);
      return;
    }
    const message = answerMessage({
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
    });

    try {
      await createTextMessage(message, conversation.id);
      files.forEach(async (file) => {
        await createImageMessage(file, conversation.id);
      });
      router.push(routes.patientHomePage);
    } catch (error: any) {
      toast.error("Hubo un error al enviar el formulario");
      setLoading(false);
    }
  };
  return (
    <>
      <Flex w="100vw" h="13vh" justify="space-between" pr="3vh">
        <Arrow />
        <Flex w="65vw" direction="column" align="flex-end" justify="center">
          <Heading
            fontWeight="bold"
            color="#4F1964"
            fontSize="30px"
            mt="6vh"
            mb="1vh"
            mr="10px"
          >
            Cuidados diarios
          </Heading>
          <Box w="55vw" h="2px" bg="#AD8EB1" />
        </Flex>
      </Flex>
      <Flex
        w="100vw"
        pl="20px"
        pr="20px"
        mb="30px"
        direction="column"
        align="center"
      >
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Image
            src="/dailyCare/fever.png"
            alt="fever"
            width={105}
            height={105}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene temperatura mayor de 38º C:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer1}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene hinchazón en el área de la herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer2}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
          <Image
            src="/dailyCare/swollen.png"
            alt="fever"
            width={105}
            height={105}
          />
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Image
            src="/dailyCare/wound.png"
            alt="fever"
            width={105}
            height={105}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene algún tipo de secreciones (pus o sangre) en la herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer3}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene enrojecimiento alrededor de la herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer4}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
          <Image
            src="/dailyCare/alergies.png"
            alt="fever"
            width={105}
            height={105}
          />
        </Flex>
        <Box w="100%" h="2px" bg="#AD8EB1" />
        <Flex
          w="100%"
          mb="20px"
          mt="20px"
          direction="row"
          justify="space-between"
        >
          <Image
            src="/dailyCare/pain.png"
            alt="fever"
            width={105}
            height={105}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight="bold" color="#3B3B3B" fontSize="16px" w="60vw">
              Tiene dolor en el sitio de la herida:
            </Text>
            <RadioGroup
              display="flex"
              flexDirection="column"
              onChange={setAnswer5}
            >
              <Radio value="Si" size="lg" colorScheme="purple">
                Si
              </Radio>
              <Radio value="No" size="lg" colorScheme="purple">
                No
              </Radio>
            </RadioGroup>
          </Box>
        </Flex>
        {uploadPhoto && (
          <>
            <Box w="100%" h="2px" bg="#AD8EB1" />
            <Text
              fontSize="22px"
              fontWeight="bold"
              paddingTop="20px"
              paddingLeft="20px"
              color="#3B3B3B"
            >
              Toma fotos de tu herida desde diferentes ángulos
            </Text>
            <input
              style={{ display: "none" }}
              id="fileUpload"
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              capture="environment"
              multiple
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileUpload"
              style={{
                display: "flex",
                marginTop: "20px",
                backgroundColor: "#AD8EB1",
                width: "80vw",
                height: "20vh",
                borderRadius: "15px",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              }}
            >
              <Image
                src="/dailyCare/camera.png"
                alt="upload"
                width={120}
                height={120}
              />
            </label>
            <Box width={"100vw"} overflowX={"scroll"} whiteSpace={"nowrap"}>
              {filesToShow.map((file, index) => (
                <Box
                  key={index}
                  display={"inline-block"}
                  marginX={2}
                  position={"relative"}
                >
                  <Box
                    position={"absolute"}
                    right={2}
                    width={8}
                    height={8}
                    top={0}
                    padding={2}
                    backgroundColor={"white"}
                    borderRadius={9999}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onClick={() => handleFileRemove(index)}
                  >
                    <CloseIcon />
                  </Box>
                  <ChakraImage boxSize={"150px"} src={`${file}`} alt="Image" />
                </Box>
              ))}
            </Box>
          </>
        )}
        <Button
          w="80vw"
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
          isDisabled={!canSubmit}
          onClick={handleSubmit}
          isLoading={loading}
        >
          Enviar
        </Button>
      </Flex>
    </>
  );
}

export default DailyCares;

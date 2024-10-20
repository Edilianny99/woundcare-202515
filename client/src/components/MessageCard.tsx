import { Box, Flex, Text, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function MessageCard({
  name,
  message,
  messageImage,
  img,
  owner,
}: {
  name: string;
  message: string | null;
  messageImage: string | null;
  img: string;
  owner: boolean;
}) {
  return (
    <Flex
      gap={4}
      justifyContent={"flex-end"}
      flexDirection={owner ? "row" : "row-reverse"}
    >
      <Box
        backgroundColor={owner ? "#AD8EB1" : "#ffffff"}
        display={"flex"}
        alignItems={"center"}
        padding={2}
        borderRadius={10}
        maxWidth={"75%"}
        wordBreak={"break-word"}
        position={"relative"}
      >
        {messageImage && <ChakraImage src={messageImage} alt="imagen" />}
        {message && (
          <Text>
            <strong>{name} </strong>
            {message.split(/(?=\d+\.)/).map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Text>
        )}
      </Box>
      <Box
        width={12}
        height={12}
        borderRadius={100}
        alignSelf={"flex-end"}
        position={"relative"}
      >
        <Image src={img} alt="imagen" fill />
      </Box>
    </Flex>
  );
}

export default MessageCard;

import NurseConversations from "@/components/doctor-conversations/NurseConversations";
import DoctorArrow from "@/components/DoctorArrow";
import routes from "@/utils/routes";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function DoctorConversations() {
  return (
    <Box as="main" flex={1}>
      <DoctorArrow link={routes.doctorHomePage} />
      <Flex
        marginTop={-16}
        marginRight={6}
        flexDirection="column"
        alignItems="flex-end"
      >
        <Heading
          as="h1"
          color="#4F1964"
          borderBottom={"2px solid #AD8EB1"}
          paddingRight={2}
          paddingLeft={32}
        >
          Mensajes
        </Heading>
      </Flex>
      <Box as="article" padding={6}>
        <NurseConversations />
      </Box>
    </Box>
  );
}

export default DoctorConversations;

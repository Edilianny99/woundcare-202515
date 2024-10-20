"use client";
import Arrow from "@/components/Arrow";
import DoctorsConversationsTab from "@/components/nurse-conversations/DoctorsConversationsTab";
import PatientsConversationsTab from "@/components/nurse-conversations/PatientsConversationsTab";
import {
  Box,
  Flex,
  Heading,
  SystemStyleObject,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";

function NurseConversationsPage() {
  const tabStyle: SystemStyleObject = {
    border: "2px solid #AD8EB1",
    borderRadius: 10,
    width: "40%",
    color: "#AD8EB1",
    fontWeight: 500,
    fontSize: "1.1rem",
    padding: "0",
  };

  const selectedTabStyle: SystemStyleObject = {
    ...tabStyle,
    color: "white",
    backgroundColor: "#AD8EB1",
  };

  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Box as="main" flex={1}>
      <Arrow />
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
        <Tabs
          variant="unstyled"
          index={tabIndex}
          onChange={(index) => setTabIndex(index)}
        >
          <TabList display={"flex"} justifyContent={"center"} gap={6}>
            <Tab sx={tabStyle} _selected={selectedTabStyle}>
              Pacientes
            </Tab>
            <Tab sx={tabStyle} _selected={selectedTabStyle}>
              Especialistas
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PatientsConversationsTab />
            </TabPanel>
            <TabPanel>
              <DoctorsConversationsTab key={tabIndex} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default NurseConversationsPage;

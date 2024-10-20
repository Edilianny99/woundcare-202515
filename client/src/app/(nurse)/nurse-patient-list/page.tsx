"use client";
import Arrow from "@/components/Arrow";
import PatientCard from "@/components/patient-list-card/PatientCard";
import { Patients } from "@/interfaces/nurse/nurse.interface";
import {
  getDoctors,
  getPatientsActive,
  getPatientsInactive,
} from "@/services/nurse/nurse.service";
import {
  Box,
  Flex,
  Heading,
  Text,
  useToast,
  SystemStyleObject,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import routes from "@/utils/routes";
import { useInView } from "react-intersection-observer";
import PaginationLoader from "@/components/PaginationLoader";
import Loader from "@/components/Loader";

function PatientList() {
  const [pageA, setPageA] = useState(1);
  const [totalPatientsA, setTotalPatientsA] = useState<number>(0);
  const [patientsA, setPatientsA] = useState<Patients[]>([]);
  const [pageI, setPageI] = useState(1);
  const [totalPatientsI, setTotalPatientsI] = useState<number>(0);
  const [patientsI, setPatientsI] = useState<Patients[]>([]);
  const { ref, inView } = useInView();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [doctorExist, setDoctorExist] = useState<boolean>(false);

  const fetchPatientsA = async () => {
    const fetchDoctors = await getDoctors();
    if (fetchDoctors.items.length === 0) {
      toast({
        title: "Debe registrar un especialista antes de registrar a los pacientes",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      try {
        setDoctorExist(true);
        const patientsList = await getPatientsActive(pageA, 10);
        setPatientsA([...patientsA, ...patientsList.items]);
        setIsLoading(false);
        if (pageA === 1) setTotalPatientsA(patientsList.meta.totalItems);
        setPageA(pageA + 1);
      } catch (error) {
        toast({
          title: "Error al cargar los pacientes",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  useEffect(() => {
    if (inView || pageA === 1) {
      fetchPatientsA();
    }
  }, [inView, pageA]);

  const fetchPatientsI = async () => {
    try {
      const patientsList = await getPatientsInactive(pageI, 10);
      setPatientsI([...patientsI, ...patientsList.items]);
      setIsLoading(false);
      if (pageI === 1) setTotalPatientsI(patientsList.meta.totalItems);
      setPageI(pageI + 1);
    } catch (error) {
      toast({
        title: "Error al cargar los pacientes",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (inView || pageI === 1) {
      fetchPatientsI();
    }
  }, [inView, pageI]);

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

  return isLoading ? (
    <Box width={"100vw"} flexGrow={1} position={"relative"}>
      <Loader />
    </Box>
  ) : (
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
          paddingX="10px"
        >
          Lista de pacientes
        </Heading>
      </Flex>
      <Flex
        direction={"column"}
        paddingX={"30px"}
        paddingBottom={"30px"}
        marginTop={"20px"}
      >
        <Flex
          direction={"row"}
          marginBottom={"10px"}
          justifyContent={"flex-end"}
        >
          {doctorExist ? (
            <Link href={routes.nurseRegisterPatient}>
              <Text color="#4F1964">+ Registrar paciente nuevo</Text>
            </Link>
          ) : (
            <span>
              <Text color="#8e8e8e">+ Registrar paciente nuevo</Text>
            </span>
          )}
        </Flex>
        <Box as="article">
          <Tabs variant="unstyled">
            <TabList display={"flex"} justifyContent={"center"} gap={6}>
              <Tab sx={tabStyle} _selected={selectedTabStyle}>
                Activos
              </Tab>
              <Tab sx={tabStyle} _selected={selectedTabStyle}>
                Inactivos
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {patientsA?.map((patient) => (
                  <PatientCard
                    key={patient.nationalId}
                    fullName={patient.user.fullname}
                    nationalId={patient.nationalId}
                    status={patient.status}
                  />
                ))}
                {!(totalPatientsA === patientsA.length) && (
                  <Box ref={ref}>
                    <PaginationLoader />
                  </Box>
                )}
                {!(patientsA.length > 0) && (
                  <Flex justifyContent="center" marginTop={4}>
                    <Text color="#4F1964">No hay pacientes activos</Text>
                  </Flex>
                )}
              </TabPanel>
              <TabPanel>
                <Text fontWeight="500" marginBottom={"15px"} fontSize={"14px"}>
                  Haz click en la flecha para crearle un nuevo caso médico al
                  paciente
                </Text>
                {patientsI?.map((patient) => (
                  <PatientCard
                    key={patient.nationalId}
                    fullName={patient.user.fullname}
                    nationalId={patient.nationalId}
                    status={patient.status}
                  />
                ))}
                {!(totalPatientsI === patientsI.length) && (
                  <Box ref={ref}>
                    <PaginationLoader />
                  </Box>
                )}
                {!(patientsI.length > 0) && (
                  <Flex justifyContent="center" marginTop={4}>
                    <Text color="#4F1964">No hay pacientes inactivos</Text>
                  </Flex>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
}

export default PatientList;

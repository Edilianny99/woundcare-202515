"use client"
import Arrow from '@/components/Arrow'
import Loader from '@/components/Loader';
import PaginationLoader from '@/components/PaginationLoader';
import DoctorPatientCard from '@/components/doctor-patient-list-card/DoctorPatientCard';
import { Patients } from '@/interfaces/doctor/doctor.interface';
import { getPatients } from '@/services/doctor/doctor.service';
import { Box, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

function PatientListDoctor() {
    const [pageA, setPageA] = useState(1);
  const [totalPatientsA, setTotalPatientsA] = useState<number>(0);
  const [patientsA, setPatientsA] = useState<Patients[]>([]);
  const { ref, inView } = useInView();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);

    const fetchPatientsA = async () => {
        try {
          const patientsList = await getPatients(pageA, 10);
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
    
      useEffect(() => {
        if (inView || pageA === 1) {
          fetchPatientsA();
        }
      }, [inView, pageA]);

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
        <Box as="article">
        {patientsA?.map((patient) => (
                  <DoctorPatientCard
                    key={patient.nationalId}
                    fullName={patient.user.fullname}
                    nationalId={patient.nationalId}
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
           </Box>
           </Flex>
           </Box> 
  )
}

export default PatientListDoctor
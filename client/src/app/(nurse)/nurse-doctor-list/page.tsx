"use client";
import Arrow from "@/components/Arrow";
import { Box, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import routes from "@/utils/routes";
import { Doctor } from "@/interfaces/nurse/nurse.interface";
import { getDoctors } from "@/services/nurse/nurse.service";
import DoctorCard from "@/components/doctor-list-card/page";
import { useInView } from "react-intersection-observer";
import PaginationLoader from "@/components/PaginationLoader";
import Loader from "@/components/Loader";

function DoctorList() {
  const [page, setPage] = useState(1);
  const [totalDoctor, setTotalPatientsA] = useState<number>(0);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const { ref, inView } = useInView();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const response = await getDoctors(page, 10);
      setDoctors([...doctors, ...response.items]);
      setIsLoading(false);
      if (page === 1) setTotalPatientsA(response.meta.totalItems);
      setPage(page + 1);
    } catch (error) {
      toast({
        title: "Error al cargar los especialistas",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    if (inView || page === 1) {
      fetchDoctors();
    }
  }, [inView, page]);
  return isLoading ? (
    <Box width={"100vw"} flexGrow={1} position={"relative"}>
      <Loader/>
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
          Lista de especialistas
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
          <Link href={routes.nurseRegisterDoctor}>
            <Text color="#4F1964">+ Registrar especialista</Text>
          </Link>
        </Flex>
        {doctors?.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard
              key={doctor.nationalId}
              nationalId={doctor.nationalId}
              fullName={doctor.user.fullname}
            />
          ))
        ) : (
          <Text marginTop="10px">No hay especialistas registrados</Text>
        )}
        {!(totalDoctor === doctors.length) && (
          <Box ref={ref}>
            <PaginationLoader />
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default DoctorList;

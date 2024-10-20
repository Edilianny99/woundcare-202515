"use client";
import Arrow from "@/components/Arrow";
import { Box, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import routes from "@/utils/routes";
import DoctorCard from "@/components/doctor-list-card/page";
import { useInView } from "react-intersection-observer";
import PaginationLoader from "@/components/PaginationLoader";
import Loader from "@/components/Loader";
import { Nurses } from "@/interfaces/admin/admin.interface";
import { getNurses } from "@/services/admin/admin.service";
import NurseCard from "@/components/nurse-list-card/page";

function AdminHomePage() {
  const [page, setPage] = useState(1);
  const [totalNurses, setTotalNurses] = useState<number>(0);
  const [nurses, setNurses] = useState<Nurses[]>([]);
  const { ref, inView } = useInView();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const fetchNurses = async () => {
    try {
      const response = await getNurses(page, 10);
      setNurses([...nurses, ...response.items]);
      setIsLoading(false);
      if (page === 1) setTotalNurses(response.meta.totalItems);
      setPage(page + 1);
    } catch (error) {
      toast({
        title: "Error al cargar los enfermeros",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    if (inView || page === 1) {
      fetchNurses();
    }
  }, [inView, page]);
  return isLoading ? (
    <Box width={"100vw"} flexGrow={1} position={"relative"}>
      <Loader/>
    </Box>
  ) : (
    <Box as="main" flex={1}>
      <Flex
        marginTop={10}
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
          Lista de enfermeros
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
          <Link href={routes.adminRegisterNurse}>
            <Text color="#4F1964">+ Registrar enfermeros</Text>
          </Link>
        </Flex>
        {nurses?.length > 0 ? (
          nurses.map((nurse) => (
            <NurseCard
              key={nurse.nationalId}
              fullName={nurse.user.fullname}
            />
          ))
        ) : (
          <Text marginTop="10px">No hay enfermeros registrados</Text>
        )}
        {!(totalNurses === nurses.length) && (
          <Box ref={ref}>
            <PaginationLoader />
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default AdminHomePage;

import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function DoctorArrow({ link }: { link: string }) {
  return (
    <Box
      w="18vh"
      h="18vh"
      bg="#AD8EB1"
      pt="2vh"
      pl="2vh"
      sx={{ clipPath: "circle(66.4% at 1% 1%)" }}
    >
      <Box
        w={12}
        h={12}
        borderRadius="35px"
        bg="white"
        p="5px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        justifyContent="center"
      >
        <Link href={link}>
          <Image
            src="/arrow.png"
            alt="arrow"
            width={10}
            height={10}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default DoctorArrow;

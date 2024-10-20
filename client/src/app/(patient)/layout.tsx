"use client";
import { useAppSelector } from "@/store/store";
import { useRoleRouter } from "@/hooks/useRoleRouter";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import Loader from "@/components/Loader";
import Working from "@/components/Working";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = useAppSelector((state) => state.auth);
  const roleRouter = useRoleRouter();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const breakpoint = 1400;

  useEffect(() => {
    if (!auth.authState) {
      router.push("/login");
    } else if (auth.role !== "PATIENT") {
      const redirectFunction = roleRouter.get(auth.role);
      if (redirectFunction) {
        redirectFunction();
      } else {
        router.push("/login");
      }
    } else {
      setIsLoading(false);
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLoading ? (
    <Box width={"100vw"} height={"100vh"} position={"relative"}>
      <Loader />
    </Box>
  ) : (
    <>
      {width < breakpoint ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          minHeight={"100vh"}
          width={"100vw"}
        >
          <NavBar />
          {children}
        </Box>
      ) : (
        <Working />
      )}
    </>
  );
}

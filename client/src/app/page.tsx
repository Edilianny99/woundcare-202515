"use client";
import Loader from "@/components/Loader";
import { useRoleRouter } from "@/hooks/useRoleRouter";
import { useAppSelector } from "@/store/store";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const auth = useAppSelector((state) => state.auth);
  const roleRouter = useRoleRouter();
  const router = useRouter();

  useEffect(() => {
    let redirectFunction;
    if (auth.authState) {
      redirectFunction = roleRouter.get(auth.role);
    } else {
      router.push("/login");
    }
    if (redirectFunction) {
      redirectFunction();
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <Box as={"main"} width={"100vw"} height={"100vh"} position={"relative"}>
      <Loader />
    </Box>
  );
}

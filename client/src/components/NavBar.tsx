"use client";
import {
	Box,
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Heading,
	Flex,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/store/store";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import routes from "@/utils/routes";

function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);

	const dispatch = useAppDispatch();
	const router = useRouter();

	return (
		<>
			<Flex
				w="100vw"
				h="60px"
				align="flex-end"
				justify="space-between"
				p="10px"
				pl="20px"
				pr="20px"
				bg="#033e5c"
			>
				<Heading as="h1" fontWeight="bold" color="white" fontSize="28px">
					WoundCare
				</Heading>
				<Image
					src="/menu.png"
					alt="menu"
					width={30}
					height={30}
					onClick={onOpen}
					style={{ cursor: "pointer" }}
				/>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent p="20px" bg="#033e5c" h={"min-content"}>
					<Box h="auto">
						<DrawerCloseButton
							display="flex"
							alignSelf="flex-end"
							color="white"
						/>
						<DrawerHeader>
							<Heading as="h2" fontWeight="bold" color="white" fontSize="28px">
								WoundCare
							</Heading>
							<Box w="100%" h="2px" bg="white" />
						</DrawerHeader>
						<DrawerBody style={{ marginTop: "20px" }}>
							<Link href={routes.patientProfile} onClick={onClose}>
								<Flex direction="row" align="center" mb="10px">
									<Image
										src="/profile/user.png"
										alt="user"
										width={35}
										height={25}
									/>
									<Heading
										as="h3"
										fontWeight="bold"
										color="white"
										fontSize="large"
										ml="5px"
										cursor="pointer"
									>
										Perfil
									</Heading>
								</Flex>
							</Link>
							<Link href={routes.patientEducation} onClick={onClose}>
								<Flex direction="row" align="center" mb="10px">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="40"
										viewBox="0 0 24 24"
									>
										<path
											fill="#ffffff"
											fill-rule="evenodd"
											d="M4 8a4.5 4.5 0 0 1 4.5-4.5h10A1.5 1.5 0 0 1 20 5v15a1 1 0 0 1-1 1H7.5a3.5 3.5 0 0 1-3.465-3H4zm14.5 7.5h-11a2 2 0 1 0 0 4h11zM8.25 8A.75.75 0 0 1 9 7.25h7a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 8M9 10.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
											clip-rule="evenodd"
										/>
									</svg>
									<Heading
										as="h3"
										fontWeight="bold"
										color="white"
										fontSize="large"
										ml="5px"
										cursor="pointer"
									>
										Educación
									</Heading>
								</Flex>
							</Link>
							<Link
								href={routes.patientFrequentlyAskedQuestions}
								onClick={onClose}
							>
								<Flex direction="row" align="center" mb="10px">
									<Image
										src="/FAQ.png"
										alt="Preguntas Frecuentes"
										width={35}
										height={25}
									/>
									<Heading
										as="h3"
										fontWeight="bold"
										color="white"
										fontSize="large"
										ml="5px"
										cursor="pointer"
									>
										Preguntas Frecuentes
									</Heading>
								</Flex>
							</Link>
							<Flex
								direction="row"
								align="center"
								mb="10px"
								style={{ marginLeft: "3px" }}
							>
								<Image src="/logout.png" alt="Logout" width={35} height={25} />
								<Heading
									as="h3"
									fontWeight="bold"
									color="white"
									fontSize="large"
									ml="5px"
									cursor="pointer"
									onClick={() => {
										dispatch(logout());
										router.push("/login");
									}}
								>
									Cerrar sesión
								</Heading>
							</Flex>
						</DrawerBody>
					</Box>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default NavBar;

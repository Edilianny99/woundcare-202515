import { CompleteMedicalFile } from "@/interfaces/doctor/doctor.interface";
import { ShortMedFileInfo } from "@/interfaces/nurse/nurse.interface";
import routes from "@/utils/routes";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
	medicalFileShort: ShortMedFileInfo;
}

export function MedicalFileBox({ medicalFileShort }: Props) {
	const formatDate = (dateString: string | undefined) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("en-GB");
	};

	return (
		<Flex
			direction={"column"}
			bg="white"
			p={4}
			borderRadius="md"
			marginBottom={"1.25rem"}
			boxShadow={"0rem 0.25rem 0.5rem #033e5c65"}
			alignItems={"center"}
			cursor={"pointer"}
		>
			<Link href={`${routes.nurseMedFile}?id=${medicalFileShort.id}`}>
				<Text
					color={"#033e5c"}
					fontWeight={"bold"}
					borderBottom={"2px solid #419ebd"}
					width={"fit-content"}
					fontSize={"1.25rem"}
				>
					{formatDate(medicalFileShort.date)}
				</Text>
				<Text
					color="#033e5c95"
					marginTop={"0.25rem"}
					fontWeight={"700"}
					fontSize={"0.75rem"}
				>
					Estado: {medicalFileShort?.dischargeDate ? "Cerrado" : "Abierto"}
				</Text>
			</Link>
		</Flex>
	);
}

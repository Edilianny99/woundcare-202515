import { fetchAPI } from "@/utils/api";

export const createWoundEvolution = async (payload: WoundEvolutionPayload) => {
	const data = await fetchAPI("/wound-evolution", "POST", payload);
	console.log("Create wound evolution", data);
	return data;
};

interface WoundEvolutionPayload {
	medicalFileId: number;
	questionaire: {
		key: string;
		answer: string;
	}[];
}

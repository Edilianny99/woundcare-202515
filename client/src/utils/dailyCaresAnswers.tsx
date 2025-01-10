type DailyCaresAnswers = {
	painValue: string;
	swellingRedness: string;
	hasFever: string;
	chillsShaking: string;
	hasSecretion: string;
	secretionType: string;
	hasCleanBandagesOn: string;
	dailyDescription: string;
	// Second Questionaire
	secondQuestionaire: SecondQuestionaireAnswers | null;
};

export type SecondQuestionaireAnswers = {
	woundAspect: string;
	woundExtension: string;
	woundDepth: string;
	secretionQuality: string;
	secretionQuantity: string;
	necroticTissue: string;
	granulationTissue: string;
	edemaLevel: string;
	surroundingSkin: string;
};

// TODO: Acomodar mensaje enviado al doctor
export const answerMessage = (answers: DailyCaresAnswers): string => {
	return `
    Respuestas del formulario de cuidados diarios:
    1. Tiene hinchazón en el área de la herida: ${answers.hasFever}
    2. Tiene temperatura mayor de 38º C: ${answers.hasFever}
    3. Tiene algún tipo de secreciones (pus o sangre) en la herida: ${answers.chillsShaking}
    4. Tiene enrojecimiento alrededor de la herida: ${answers.hasSecretion}
    5. Tiene dolor en el sitio de la herida: ${answers.secretionType}
    `;
};

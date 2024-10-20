type DailyCaresAnswers = {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
};

export const answerMessage = (answers: DailyCaresAnswers): string => {
  return `
    Respuestas del formulario de cuidados diarios:
    1. Tiene temperatura mayor de 38º C: ${answers.answer1}
    2. Tiene hinchazón en el área de la herida: ${answers.answer2}
    3. Tiene algún tipo de secreciones (pus o sangre) en la herida: ${answers.answer3}
    4. Tiene enrojecimiento alrededor de la herida: ${answers.answer4}
    5. Tiene dolor en el sitio de la herida: ${answers.answer5}
    `;
};

export const QuestionaireKeys = {
  'wound-photo': 'Fotografía de la herida',
  'pain-value': 'Descripción del dolor',
  'swelling-redness': 'Hinchazón o enrojecimiento',
  'has-fever': 'Tiene fiebre',
  'chills-shaking': 'Escalofríos o temblores',
  'has-secretion': 'Tiene secreción',
  'secretion-type': 'Tipo de secreción', // Optional only if has-secretion is true
  'has-clean-bandages-on': 'Esta usando vendajes limpios',
  'daily-description': 'Cuidado diario realizado',
};

export type QuestionaireAnswer = {
  key: string;
  answer: string;
};

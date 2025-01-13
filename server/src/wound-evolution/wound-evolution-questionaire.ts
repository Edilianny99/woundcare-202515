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
  
  //questionaire 2

  "wound-aspect": "Aspecto de la herida",
	"wound-extension": "Extensión de la herida (cm)",
	"wound-depth": "Profundidad de la herida (cm)",
	"secretion-quality": "Calidad de la secreción",
	"secretion-quantity": "Cantidad de secreción",
	"necrotic-tissue": "Nivel de tejido necrótico",
	"granulation-tissue": "Nivel de tejido de granulación",
	"edema-level": "Nivel de edema",
	"surrounding-skin": "Estado de la piel circundante",
};

export type QuestionaireAnswer = {
  key: string;
  answer: string;
};

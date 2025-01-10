export const QuestionaireKeys = {
	"wound-photo": "Fotografía de la herida",
	"pain-value": "Descripción del dolor", // BS ✅
	"swelling-redness": "Hinchazón o enrojecimiento", // BS ✅
	"has-fever": "Tiene fiebre", // BS ✅
	"chills-shaking": "Escalofríos o temblores", // BS ✅
	"has-secretion": "Tiene secreción", // BS ✅
	"secretion-type": "Tipo de secreción", // Optional only if has-secretion is true
	"has-clean-bandages-on": "Esta usando vendajes limpios", // BS ✅
	"daily-description": "Cuidado diario realizado", // Text Description ✅
	// Second Questionaire
	"wound-aspect": "Aspecto de la herida",
	"wound-extension": "Extensión de la herida (cm)",
	"wound-depth": "Profundidad de la herida (cm)",
	"secretion-quality": "Calidad de la secreción",
	"secretion-quantity": "Cantidad de secreción",
	"necrotic-tissue": "Nivel de tejido necrótico",
	"granulation-tissue": "Nivel de tejido de granulación",
	"edema-level": "Nivel de edema",
	"pain-level": "Nivel de dolor (escala 0-10)",
	"surrounding-skin": "Estado de la piel circundante",
};

export type QuestionaireAnswer = {
	key: string;
	answer: string;
};

// TODO: Actualizar imagenes de tipo de secrecion
export const secretionTypes = [
	{ src: "/dailyCare/alergies.png", type: "seroso" },
	{ src: "/dailyCare/alergies.png", type: "sanguinolento" },
	{ src: "/dailyCare/alergies.png", type: "serosanguinolento" },
	{ src: "/dailyCare/alergies.png", type: "purulento" },
];

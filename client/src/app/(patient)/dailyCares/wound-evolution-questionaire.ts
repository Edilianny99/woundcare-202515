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

// NOTE: Second Questionaire

export const woundAspectsTypes = [
	{ src: "/woundCare/irritation.png", type: "Irritación", value: 1 },
	{ src: "/woundCare/redness.png", type: "Enrojecido", value: 2 },
	{ src: "/woundCare/yellow-pale.png", type: "Amarillo pálido", value: 3 },
	{ src: "/woundCare/necrotic.png", type: "Necrótico", value: 4 },
];

export const woundExtensionTypes = [
	{ type: "0 - 1", text: "Pequeña", value: 1 },
	{ type: "entre 1 - 3", text: "Mediana", value: 2 },
	{ type: "entre 3 - 6", text: "Grande", value: 3 },
	{ type: "Mayor a 6", text: "Muy grande", value: 4 },
];

export const woundDepthTypes = [
	{ type: "0", text: "Ninguna", value: 1 },
	{ type: "menor a 1", text: "Pequeña", value: 2 },
	{ type: "entre 1 - 3", text: "Media", value: 3 },
	{ type: "Mayor a 3", text: "Grande", value: 4 },
];

export const secretionQualitiesTypes = [
	{ src: "/woundCare/no-exudate.png", type: "Sin exudado", value: 1 },
	{ src: "/woundCare/serous.png", type: "Seroso", value: 2 },
	{ src: "/woundCare/cloudy.png", type: "Turbio", value: 3 },
	{ src: "/woundCare/purulent.png", type: "Purulento", value: 4 },
];

export const secretionQuantityTypes = [
	{ type: "Ausente", text: "", value: 1 },
	{ type: "Escaso", text: "", value: 2 },
	{ type: "Moderado", text: "", value: 3 },
	{ type: "Abundante", text: "", value: 4 },
];

export const necroticTissueTypes = [
	{ type: "Necrosis Leve", text: "", value: 1 },
	{ type: "Necrosis Moderada", text: "", value: 2 },
	{ type: "Necrosis Severa", text: "", value: 3 },
	{ type: "Necrosis Muy Severa", text: "", value: 4 },
];

export const granulationTissueTypes = [
	{ type: "Granulación Leve", text: "", value: 1 },
	{ type: "Granulación Moderada", text: "", value: 2 },
	{ type: "Granulación Abundante", text: "", value: 3 },
	{ type: "Granulación Excesiva", text: "", value: 4 },
];

export const edemaLevelTypes = [
	{ type: "Edema Leve", text: "", value: 1 },
	{ type: "Edema Moderado", text: "", value: 2 },
	{ type: "Edema Severo", text: "", value: 3 },
	{ type: "Edema Muy Severo", text: "", value: 4 },
];

export const surroundingSkinStatesTypes = [
	{ src: "/woundCare/healthy.png", type: "Sana", value: 1 },
	{ src: "/woundCare/scaly.png", type: "Descamada", value: 2 },
	{ src: "/woundCare/erythematous.png", type: "Eritematosa", value: 3 },
	{ src: "/woundCare/macerated.png", type: "Macerada", value: 4 },
];

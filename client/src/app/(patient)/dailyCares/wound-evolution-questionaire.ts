export const QuestionaireKeys = {
	"wound-photo": "Fotografía de la herida",
	"pain-value": "Descripción del dolor",
	"swelling-redness": "Hinchazón o enrojecimiento",
	"has-fever": "Tiene fiebre",
	"chills-shaking": "Escalofríos o temblores",
	"has-secretion": "Tiene secreción",
	"secretion-type": "Tipo de secreción", // Optional only if has-secretion is true
	"has-clean-bandages-on": "Esta usando vendajes limpios",
	"daily-description": "Cuidado diario realizado",

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

// TODO: Actualizar imagenes de tipo de secrecion
export const secretionTypes = [
	{ src: "/dailyCare/seroso.png", type: "seroso" },
	{ src: "/dailyCare/sanguinolento.png", type: "sanguinolento" },
	{ src: "/dailyCare/serosanguinolento.png", type: "serosanguinolento" },
	{ src: "/dailyCare/purulento.png", type: "purulento" },
];

// NOTE: Second Questionaire

export const woundAspectsTypes = [
	{ text: "", type: "Irritación", value: 1 },
	{ text: "", type: "Enrojecido", value: 2 },
	{ text: "", type: "Amarillo pálido", value: 3 },
	{ text: "", type: "Necrótico", value: 4 },
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
	{ src: "/dailyCare/sin-exudado.png", type: "Sin exudado", value: 1 },
	{ src: "/dailyCare/seroso.png", type: "Seroso", value: 2 },
	{ src: "/dailyCare/turbio.png", type: "Turbio", value: 3 },
	{ src: "/dailyCare/purulento.png", type: "Purulento", value: 4 },
];

export const secretionQuantityTypes = [
	{ type: "Ausente", text: "", value: 1 },
	{ type: "Escaso", text: "", value: 2 },
	{ type: "Moderado", text: "", value: 3 },
	{ type: "Abundante", text: "", value: 4 },
];

export const necroticTissueTypes = [
	{ type: "Necrosis Leve", src: "/dailyCare/necrosis-leve.png", value: 1 },
	{
		type: "Necrosis Moderada",
		src: "/dailyCare/necrosis-moderada.png",
		value: 2,
	},
	{ type: "Necrosis Severa", src: "/dailyCare/necrosis-severa.png", value: 3 },
	{
		type: "Necrosis Muy Severa",
		src: "/dailyCare/necrosis-muy-severa.png",
		value: 4,
	},
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
	{ type: "Sana", text: "", value: 1 },
	{ type: "Descamada", text: "", value: 2 },
	{ type: "Eritematosa", text: "", value: 3 },
	{ type: "Macerada", text: "", value: 4 },
];

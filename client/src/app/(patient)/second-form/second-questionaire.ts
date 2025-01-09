export const QuestionaireKeys = {
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
  
  // TODO: Actualizar imágenes para las categorías de aspecto, secreción y piel circundante
  export const woundAspects = [
	{ src: "/woundCare/irritation.png", type: "Irritación" },
	{ src: "/woundCare/redness.png", type: "Enrojecido" },
	{ src: "/woundCare/yellow-pale.png", type: "Amarillo pálido" },
	{ src: "/woundCare/necrotic.png", type: "Necrótico" },
  ];
  
  export const secretionQualities = [
	{ src: "/woundCare/no-exudate.png", type: "Sin exudado" },
	{ src: "/woundCare/serous.png", type: "Seroso" },
	{ src: "/woundCare/cloudy.png", type: "Turbio" },
	{ src: "/woundCare/purulent.png", type: "Purulento" },
  ];
  
  export const surroundingSkinStates = [
	{ src: "/woundCare/healthy.png", type: "Sana" },
	{ src: "/woundCare/scaly.png", type: "Descamada" },
	{ src: "/woundCare/erythematous.png", type: "Eritematosa" },
	{ src: "/woundCare/macerated.png", type: "Macerada" },
  ];
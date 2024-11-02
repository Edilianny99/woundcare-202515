// TODO: Preguntar si las palabras clave tienes algún uso
// Palabras claves:
// Limpiar herida
// Cambiar vendaje
// Enrojecimiento en la herida
// Supuración herida
// Mojar herida
// Ungüento antibiótico
// Dolor en la herida
// Alimentos sanar
// No mejora herida
// Evitar infección
// Cubrir herida
// Cremas hidratantes
// Costra herida
// Cicatriz
// Realizar ejercicio
// Tipo de vendaje
// Infección herida
// Picores herida
// Remedios caseros
// Ir a la médico herida

export const faq: FrecuentQuestion[] = [
	{
		question: "¿Cómo debo limpiar una herida?",
		answer:
			"Lava la herida con agua y jabón suave. Evita el uso de alcohol o peróxido de hidrógeno, ya que pueden dañar el tejido sano. Después, sécala suavemente con una toalla limpia.",
	},
	{
		question: "¿Con qué frecuencia debo cambiar el vendaje?",
		answer:
			"Cambia el vendaje al menos una vez al día o cuando se moje o ensucie. Mantener la herida limpia y seca es clave para una curación rápida.",
	},
	{
		question: "¿Es normal que la herida esté un poco roja?",
		answer:
			"Un poco de enrojecimiento alrededor de la herida es normal durante los primeros días, ya que indica que tu cuerpo está trabajando para sanar. Sin embargo, si la rojez se extiende o se acompaña de dolor, consulta a tu médico.",
	},
	{
		question: "¿Qué hago si la herida comienza a supurar?",
		answer:
			"Si la herida está supurando un líquido claro, es parte del proceso normal de curación. Sin embargo, si el líquido es amarillo, verde o tiene mal olor, podría ser una infección. Consulta a un profesional de salud.",
	},
	{
		question: "¿Puedo mojar la herida mientras me ducho?",
		answer:
			"Sí, puedes mojar la herida, pero es mejor evitar sumergirla en agua. Sécala bien después de la ducha y asegúrate de aplicar un vendaje limpio y seco.",
	},
	{
		question: "¿Es necesario usar ungüento antibiótico?",
		answer:
			"Los ungüentos antibióticos pueden ayudar a prevenir infecciones y mantener la herida húmeda para una mejor curación. Úsalo según las indicaciones de tu médico.",
	},
	{
		question: "¿Cuándo debo preocuparme por el dolor en la herida?",
		answer:
			"Es normal sentir un poco de dolor en la herida, especialmente en los primeros días. Si el dolor empeora, se vuelve intenso o no mejora con analgésicos, consulta a tu médico.",
	},
	{
		question: "¿Qué alimentos ayudan a sanar heridas más rápido?",
		answer:
			"Consumir proteínas (como carne, pescado, huevos), frutas ricas en vitamina C (naranjas, fresas) y alimentos con zinc (nueces, semillas) puede ayudar a que tu cuerpo se recupere más rápido.",
	},
	{
		question: "¿Qué debo hacer si la herida no parece estar mejorando?",
		answer:
			"Si después de varios días la herida no mejora o incluso empeora, es importante consultar a un médico para evaluar si hay complicaciones.",
	},
	{
		question: "¿Cómo evito que la herida se infecte?",
		answer:
			"Mantén la herida limpia y seca, cambia el vendaje regularmente y evita tocarla con las manos sucias. Sigue las recomendaciones de tu médico.",
	},
	{
		question: "¿Es mejor dejar la herida al aire libre o cubrirla?",
		answer:
			"Cubrir la herida ayuda a mantenerla limpia y húmeda, lo que promueve una curación más rápida y evita infecciones. Solo déjala al aire si tu médico lo recomienda.",
	},
	{
		question:
			"¿Puedo usar cremas hidratantes en la piel alrededor de la herida?",
		answer:
			"Sí, puedes aplicar crema hidratante alrededor de la herida para evitar que la piel se seque. Sin embargo, evita que la crema entre en contacto directo con la herida abierta a menos que lo indique tu médico.",
	},
	{
		question: "¿Es normal que se forme una costra en la herida?",
		answer:
			"Sí, la formación de una costra es parte del proceso de curación. Sin embargo, es importante no arrancarla, ya que podría retrasar la cicatrización.",
	},
	{
		question: "¿Cuándo debo preocuparme por una cicatriz?",
		answer:
			"La mayoría de las cicatrices se desvanecen con el tiempo. Si la cicatriz es muy grande o dolorosa, o si parece que se está formando un queloide, consulta a tu médico.",
	},
	{
		question: "¿Puedo hacer ejercicio si tengo una herida?",
		answer:
			"Depende de la gravedad y ubicación de la herida. Consulta a tu médico antes de reanudar actividades físicas intensas, ya que el movimiento excesivo puede retrasar la curación.",
	},
	{
		question: "¿Qué tipo de vendaje es el mejor para mi herida?",
		answer:
			"El tipo de vendaje depende del tamaño, ubicación y tipo de herida. En general, usa un vendaje que mantenga la herida húmeda pero permita que respire. Pregunta a tu médico para una recomendación específica.",
	},
	{
		question: "¿Cómo sé si la herida está infectada?",
		answer:
			"Signos de infección incluyen enrojecimiento que se extiende, hinchazón, pus, fiebre y un aumento en el dolor. Si notas alguno de estos síntomas, consulta a un profesional de salud.",
	},
	{
		question: "¿Es normal que la herida pique?",
		answer:
			"Sí, una leve picazón es una señal común de que la herida está sanando. Evita rascarte, ya que esto podría causar daño y retrasar la curación.",
	},
	{
		question: "¿Puedo usar remedios caseros para acelerar la curación?",
		answer:
			"Algunos remedios caseros como miel o aloe vera pueden ser útiles, pero siempre es mejor consultar a tu médico antes de usarlos para asegurarte de que son seguros y efectivos para tu tipo de herida.",
	},
	{
		question: "¿Cuándo debo ir al médico por una herida?",
		answer:
			"Debes ir al médico si la herida es profunda, no deja de sangrar, muestra signos de infección, no mejora después de unos días o si no estás seguro de cómo manejarla adecuadamente.",
	},
];

interface FrecuentQuestion {
	question: string;
	answer: string;
}

const fields = [
	{
		name: "firstName",
		label: "Imię",
		required: true,
		pattern: "^[a-zA-Z --]+$",
	},
	{
		name: "lastName",
		label: "Nazwisko",
		required: true,
		pattern: "^[a-zA-Z --]+$",
	},
	{
		name: "street",
		label: "Ulica",
		required: true,
		pattern: "^[a-zA-Z --]+$",
	},
	{
		name: "buildingNumber",
		label: "Nr domu",
		required: true,
		pattern: "^[0-9]*$",
	},
	{
		name: "houseNumber",
		label: "Nr lokalu",
		required: true,
		pattern: "^[0-9]*$",
	},
	{
		name: "zip",
		label: "Kod pocztowy",
		required: true,
		pattern: "^[0-9]{2}-[0-9]{3}",
	},
	{
		name: "city",
		label: "Miasto",
		required: true,
		pattern: "^[a-zA-Z --]+$",
	},
	{ name: "country", label: "Kraj", required: true },
];
export default fields;

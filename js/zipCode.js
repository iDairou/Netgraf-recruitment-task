export const zipCodeFunction = (event) => {
	const startZip = event.target.value.substring(0, 2);
	const endZip = event.target.value.substring(2, 5);
	const correctZip = startZip + "-" + endZip;
	if (event.target.value.length === 5 && !isNaN(event.target.value)) {
		event.target.value = correctZip;
	} else if (event.target.value !== 5 && event.target.value.includes("-")) {
		event.target.value = event.target.value.replace("-", "");
	}
};

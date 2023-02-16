document.addEventListener("DOMContentLoaded", init);
function init() {
	const formEl = document.querySelector("form");
	const errorMessages = document.querySelector(".errors");
	const zipEl = document.querySelector(".field-zip");

	zipEl.addEventListener("input", (event) => {
		const startZip = event.target.value.substring(0, 2);
		const endZip = event.target.value.substring(2, 5);

		const correctZip = startZip + "-" + endZip;
		if (event.target.value.length === 5 && !isNaN(event.target.value)) {
			event.target.value = correctZip;
		} else if (event.target.value !== 5 && event.target.value.includes('-')){
			event.target.value = event.target.value.replace('-', '')
			
		}

	});

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

	if (formEl) {
		formEl.addEventListener("submit", (e) => {
			e.preventDefault();
			const errors = [];

			fields.forEach((field) => {
				const value = formEl.elements[field.name].value;
				if (field.required) {
					if (value.length === 0) {
						errors.push(`Dane w polu ${field.label} są wymagane.`);
					}
				}
				if (field.type === "number") {
					if (Number.isNaN(Number(value))) {
						errors.push(`Dane w polu ${field.label} muszą być liczbą.`);
					}
				}
				if (field.pattern) {
					const reg = new RegExp(field.pattern);
					if (!reg.test(value)) {
						errors.push(
							`Dane w polu ${field.label} zawierają niedozwolone znaki lub nie są zgodne z przyjętym wzorem.`
						);
					}
				}
			});
			errorMessages.innerHTML = "";
			if (errors.length === 0) {
				alert("Dane zostały wprowadzone prawidłowo");
				fields.forEach((el) => {
					formEl[el.name].value = "";
				});
			} else {
				errors.forEach((text) => {
					const liEl = document.createElement("li");
					liEl.innerText = text;
					errorMessages.appendChild(liEl);
				});
			}
		});
	}

	const swiper = new Swiper(".swiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			"@0.00": {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			"@0.75": {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			"@1.00": {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	});
}

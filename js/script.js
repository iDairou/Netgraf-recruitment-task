import fields from "./fields.js";
import { slider } from "./slider.js";
import API from "./api.js";
import { zipCodeFunction } from "./zipCode.js";

document.addEventListener("DOMContentLoaded", init);
function init() {
	const formEl = document.querySelector("form");
	const errorMessages = document.querySelector(".errors");
	const zipEl = document.querySelector(".field-zip");
	const apiProrvider = new API();

	zipEl.addEventListener("input", (e) => {
		zipCodeFunction(e);
	});

	slider();

	const sendData = (data) => {
		apiProrvider.sendForm(data).then((resp) => {
			console.log(resp.json);
		}).catch(err =>{
			console.log(err);
		});
	};

	if (formEl) {
		formEl.addEventListener("submit", (e) => {
			e.preventDefault();
			const errors = [];
			const formData = {};

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
				if (field.pattern && value.length !== 0) {
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
				
				fields.forEach((el) => {
					formData[el.label] = formEl[el.name].value;
					formEl[el.name].value = "";
				});
				sendData(formData);
				alert(formData);
			} else {
				errors.forEach((text) => {
					const liEl = document.createElement("li");
					liEl.innerText = text;
					errorMessages.appendChild(liEl);
				});
			}
		});
	}
}

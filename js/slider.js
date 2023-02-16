export const slider = () =>
	new Swiper(".swiper", {
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

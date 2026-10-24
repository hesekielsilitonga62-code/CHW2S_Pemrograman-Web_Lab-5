(() => {
	// Carousel
	
	let active_index = 0;

	const carousel = document.getElementById('carousel');
	// const carousel_images = document.querySelectorAll('[data-banner-carousel]');
	const carousel_buttons = document.querySelectorAll('[data-banner-button]');
	
	carousel.style.width = `${carousel.children.length}00vw`;

	carousel_buttons[0].addEventListener('click', () => {
		console.log('Active Index value: ', active_index);

		if (active_index == 0)
			return;
		
		active_index -= 1;

		carousel.style.transform = `translateX(${0 - active_index}00vw)`;
	});

	carousel_buttons[1].addEventListener('click', () => {
		if (active_index == carousel.children.length - 1)
			return;
		
		active_index += 1;

		carousel.style.transform = `translateX(${0 - active_index}00vw)`;
	});
})();

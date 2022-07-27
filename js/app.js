const navSlide = () => {
	const burger = document.querySelector('.navbar__logo');
	const navbar = document.querySelector('.navbar__list');
	const body = document.querySelector('body');
	const links = document.querySelectorAll('.navbar__links');
	burger.addEventListener('click', () => {
		//Toggle navbar & background
		navbar.classList.toggle('navbar__list--active');
		body.classList.toggle('body--darken');

		//Animate Links
		links.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinksFade 0.5s ease forwards ${
					index / 7 + 0.4
				}s`;
			}
		});

		//Burger animation
		burger.classList.toggle('toggleX');
	});
};

const main = () => {
	navSlide();
};
main();

const footerYear = document.querySelector('.footer__year');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

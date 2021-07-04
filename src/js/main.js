import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';
import supportIE from './modules/supportIE';

documentReady(() => {
	supportIE();
	lazyImages();
});

// Effects
document.addEventListener('scroll', () => {
	const header = document.querySelector('.header');

	if (window.pageYOffset > 1) {
		header.classList.add('header-scroll');
	} else {
		header.classList.remove('header-scroll');
	}
});

document.addEventListener('click', (event) => {
	const flag = event.target.classList.contains('hamburger');

	if (!flag) return;

	const nav = document.querySelector('.nav');
	const hamburger = event.target;

	hamburger.classList.toggle('hamburger-open');
	nav.classList.toggle('nav-active');
	document.body.classList.toggle('page-lock');
});

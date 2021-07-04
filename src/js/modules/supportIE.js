import isBrowserIE from '../helpers/isBrowserIE';
import smokeEffect from './smokeEffect';

function setAttributes(el, options) {
	Object.keys(options).forEach(function (attr) {
		el.setAttribute(attr, options[attr]);
	});
}

export default () => {
	if (isBrowserIE()) {
		const width = document.documentElement.clientWidth;

		if (width > 1750) {
			const deer = document.querySelector('.deer');
			const deerVideo = document.querySelector('.deer__video');
			const img = document.createElement('img');

			const attributes = {
				src: 'img/index/deer-for-IE.png',
				alt: '',
			};

			deerVideo.style.display = 'none';

			setAttributes(img, attributes);

			deer.appendChild(img);
		}
	} else {
		smokeEffect();
	}
};

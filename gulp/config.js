const srcPath = 'src';
const destPath = 'dist';

const config = {
	src: {
		root: srcPath,
		scss: `${srcPath}/scss/**/*.+(scss|sass)`,
		pug: `${srcPath}/pug`,
		js: `${srcPath}/js`,
		fonts: `${srcPath}/assets/fonts/**/*.+(eot|svg|ttf|woff|woff2|css)`,
		img: `${srcPath}/assets/img/**/*.+(png|jpg|svg|webp)`,
		icons: `${srcPath}/assets/icons`,
	},
	dest: {
		root: destPath,
		html: destPath,
		css: `${destPath}/css`,
		js: `${destPath}/js`,
		fonts: `${destPath}/fonts`,
		img: `${destPath}/img`,
		icons: `${destPath}/icons`,
	},
	setEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	},
};

export default config;

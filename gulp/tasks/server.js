import browserSync from 'browser-sync';
import config from '../config';

const {
	dest,
	dest: { html, css, js, img, fonts, icons },
} = config;

const server = (callback) => {
	browserSync.create().init({
		server: {
			baseDir: dest,
			port: 3000,
		},
		files: [
			`${html}/*.html`,
			`${css}/*.css`,
			`${js}/*.js`,
			{
				match: [
					`${img}/**/*.+(png|jpg|gif|ico|svg|webp)`,
					`${icons}/**/*.+(png|ico|svg)`,
					`${fonts}/**/*.+(eot|svg|ttf|woff|woff2|css))`,
				],
				fn() {
					this.reload();
				},
			},
		],
		open: true,
		notify: false,
	});

	callback();
};

export default server;

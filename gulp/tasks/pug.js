import { src, dest, watch } from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import { setup as emittySetup } from '@zoxon/emitty';
import pugGlob from 'pug-include-glob';
import config from '../config';

const emittyPug = emittySetup(config.src.pug, 'pug', {
	makeVinylFile: true,
});

global.isPugWatch = false;
global.emittyChangedFile = {
	path: '',
	stats: null,
};

const pugBuild = () =>
	src(`${config.src.pug}/*.pug`)
		.pipe(plumber())
		.pipe(
			gulpif(
				global.watch,
				emittyPug.stream(
					global.emittyChangedFile.path,
					global.emittyChangedFile.stats,
				),
			),
		)
		.pipe(pug({ pretty: config.isDev, plugins: [pugGlob()] }))
		.pipe(dest(`${config.dest.html}`));

const pugWatch = () => {
	global.isPugWatch = true;
	watch(`${config.src.pug}/**/*.pug`, pugBuild).on(
		'all',
		(event, filepath, stats) => {
			global.emittyChangedFile = {
				path: filepath,
				stats,
			};
		},
	);
};

export { pugBuild, pugWatch };

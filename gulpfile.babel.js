import { series, parallel } from 'gulp';
import config from './gulp/config';
import server from './gulp/tasks/server';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { pugBuild, pugWatch } from './gulp/tasks/pug';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites';
import cleanDest from './gulp/tasks/clean';

config.setEnv();

export const build = series(
	cleanDest,
	parallel(
		scriptsBuild,
		pugBuild,
		stylesBuild,
		assetsBuild,
		imagesBuild,
		spritesBuild,
	),
);

export const watch = series(
	build,
	server,
	parallel(
		scriptsWatch,
		pugWatch,
		stylesWatch,
		assetsWatch,
		imagesWatch,
		spritesWatch,
	),
);

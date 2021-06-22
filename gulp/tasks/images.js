import { src, dest, watch, series } from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminPng from 'imagemin-pngquant';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
import webp from 'imagemin-webp';
import rename from 'gulp-rename';
import config from '../config';

const copyImages = () =>
	src(config.src.img)
		.pipe(changed(config.dest.img))
		.pipe(
			gulpif(
				config.isProd,
				imagemin(
					[
						imagemin.mozjpeg({ quality: 75, progressive: true }),
						imagemin.svgo(),
						imageminPng({ quality: [0.75, 0.9] }),
					],
					{
						verbose: true,
					},
				),
			),
		)
		.pipe(dest(config.dest.img));

const convertImagesToWebp = () =>
	src(`${config.src.root}/assets/img/**/*.+(jpg|png)`)
		.pipe(changed(config.dest.img, { extension: '.webp' }))
		.pipe(imagemin([webp({ quality: 75 })]))
		.pipe(
			rename({
				extname: '.webp',
			}),
		)
		.pipe(dest(config.dest.img));

const imagesBuild = series(copyImages, convertImagesToWebp);

const imagesWatch = () =>
	watch(config.src.img, { ignoreInitial: false }, imagesBuild);

export { imagesBuild, imagesWatch };

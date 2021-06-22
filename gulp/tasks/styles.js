import { src, watch, dest } from 'gulp';
import scss from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoPrefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import sassGlob from 'gulp-sass-glob';
import config from '../config';

const stylesBuild = () =>
	src(config.src.scss, { sourcemaps: config.isDev })
		.pipe(plumber())
		.pipe(sassGlob())
		.pipe(
			scss({
				includePaths: ['./node_modules'],
			}),
		)
		.pipe(gcmq())
		.pipe(autoPrefixer())
		.pipe(
			gulpif(
				config.isProd,
				cleanCss({
					compatibility: 'ie8',
					level: 2,
				}),
			),
		)
		.pipe(
			rename({
				suffix: '.min',
			}),
		)
		.pipe(gulpif(config.isDev, sourcemaps.write()))
		.pipe(dest(config.dest.css), { sourcemaps: config.isDev });

const stylesWatch = () => watch(config.src.scss, stylesBuild);

export { stylesBuild, stylesWatch };

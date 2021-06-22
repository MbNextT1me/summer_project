import { src, dest } from 'gulp';
import sprite from 'gulp-svg-sprite';
import config from '../config';

const spritesMono = () =>
	src(`${config.src.icons}/mono/**/*.svg`)
		.pipe(
			sprite({
				mode: {
					symbol: {
						sprite: 'sprite-mono.svg',
					},
				},
				shape: {
					transform: {
						svgo: {
							plugins: {
								removeAttrs: {
									attrs: [
										'class',
										'data-name',
										'fill.*',
										'stroke.*',
									],
								},
							},
						},
					},
				},
			}),
		)
		.pipe(dest(config.dest.icons));

export default spritesMono;

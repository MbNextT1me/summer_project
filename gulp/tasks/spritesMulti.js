import { src, dest } from 'gulp';
import sprite from 'gulp-svg-sprite';
import config from '../config';

const spritesMulti = () =>
	src(`${config.src.icons}/multi/**/*.svg`)
		.pipe(
			sprite({
				mode: {
					symbol: {
						sprite: '../sprite-multi.svg',
					},
				},
				shape: {
					transform: {
						svgo: {
							plugins: [
								{
									removeAttrs: {
										attrs: ['class', 'data-name'],
									},
								},
								{
									removeUseLessStrokeAndFill: false,
								},
								{
									inlineStyles: true,
								},
							],
						},
					},
				},
			}),
		)
		.pipe(dest(config.dest.icons));

export default spritesMulti;

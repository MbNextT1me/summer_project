import { src, watch, parallel, dest } from 'gulp';
import config from '../config';

const fontsBuild = () => src(config.src.fonts).pipe(dest(config.dest.fonts));
const videoBuild = () => src(config.src.video).pipe(dest(config.dest.video));

const assetsBuild = parallel(fontsBuild, videoBuild);

const assetsWatch = () => {
	watch(config.src.fonts, fontsBuild);
	watch(config.src.video, videoBuild);
};

export { assetsBuild, assetsWatch };

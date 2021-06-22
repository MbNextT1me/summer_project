import { src, watch, parallel, dest } from 'gulp';
import config from '../config';

const fontsBuild = () => src(config.src.fonts).pipe(dest(config.dest.fonts));

const assetsBuild = parallel(fontsBuild);

const assetsWatch = () => {
	watch(config.src.fonts, fontsBuild);
};

export { assetsBuild, assetsWatch };

import { parallel, watch } from 'gulp';
import spritesMono from './spritesMono';
import spritesMulti from './spritesMulti';
import config from '../config';

const spritesBuild = parallel(spritesMono, spritesMulti);

const spritesWatch = () => watch(config.src.icons, spritesBuild);

export { spritesBuild, spritesWatch };

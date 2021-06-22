import del from 'del';
import config from '../config';

const {
	dest: { root },
} = config;

const cleanDest = () => del(root);

export default cleanDest;

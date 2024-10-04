import { newLogger } from "./core/logger";

const log = newLogger('rbac')

const init = (): void => {
	console.log('hello world changed');
	try {
		run();
	} catch (err) {
		log.error(`failed at run: ${err}`);
	}
};

const run = (): void | Error => {
	throw Error('asdfasdfasd');
};

init();

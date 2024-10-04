import { newLogger } from './core/logger';

const log = newLogger('rbac');

const init = async () => {
	log.info('hello world');
};

init().catch(err => {
    if (err instanceof Error) {
        log.error(`failed: ${err}`)
    }
    process.exit(1)
});

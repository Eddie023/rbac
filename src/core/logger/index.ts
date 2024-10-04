import pino from 'pino';

export const newLogger = (name: string): pino.BaseLogger => {
	const log = pino({
		name: name,
		level: 'debug'
	});

	return log;
};

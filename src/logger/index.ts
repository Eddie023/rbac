import pino from 'pino';

export const newLogger = (name: string): pino.BaseLogger => {
	const transport = pino.transport({
		targets: [
			{
				target: 'pino/file',
				options: {
					destination: './logs'
				}
			},
			{ target: 'pino/file', options: { destination: 1 } }
		]
	});

	const logger = pino(
		{
			name: name,
			level: 'debug',
			timestamp: pino.stdTimeFunctions.isoTime
		},
		transport
	);

	return logger;
};

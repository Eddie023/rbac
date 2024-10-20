import { NestFactory } from '@nestjs/core';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

import { AppModule } from './app.module';

const init = async () => {
	console.info('intializing nest factory...');
	const app = await NestFactory.create(AppModule, { bufferLogs: true });
	app.useGlobalInterceptors(new LoggerErrorInterceptor());
	app.useLogger(app.get(Logger));

	await app.listen(process.env.PORT ?? 3000);
};

init().catch((err) => {
	if (err instanceof Error) {
		console.error(`failed: ${err}`);
	}
	process.exit(1);
});

process.on('SIGINT', () => {
	console.warn('Received SIGINT, exiting...');
	process.exit(1);
});

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const init = async () => {
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PORT ?? 3000);
};

init().catch((err) => {
	if (err instanceof Error) {
		Logger.error(`failed: ${err}`);
	}
	process.exit(1);
});

process.on('SIGINT', () => {
	Logger.warn('Received SIGINT, exiting...');
	process.exit(1);
});

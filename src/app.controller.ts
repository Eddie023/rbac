import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
	@Get()
	alive(): { status: string } {
		return { status: 'ok' };
	}
}

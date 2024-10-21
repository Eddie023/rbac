import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalAuthGuard implements CanActivate {
	constructor(private userService: UserService, private logger: Logger) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();

		try {
			// get claims
			let userId = 'user_002';
			const user = await this.userService.findOne(userId);

			const userRoles = await this.userService.getUserGroups(user.id);
			request.user = { ...user, roles: userRoles.map((g) => g.name) };

			return true;
		} catch (error) {
			this.logger.error("local auth guard", "err", error)
			throw error;
		}
	}
}

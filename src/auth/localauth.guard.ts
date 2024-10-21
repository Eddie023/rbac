import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { RolesGuard } from 'src/role/role.guards';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalAuthGuard implements CanActivate {
	private readonly logger = new Logger(RolesGuard.name);

	constructor(private userService: UserService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();

		try {
			// get claims
			const userId = 'user_002';
			const user = await this.userService.findOne(userId);

			const userRoles = await this.userService.getUserGroups(user.id);
			request.user = { ...user, roles: userRoles.map((g) => g.name) };

			return true;
		} catch (error) {
			this.logger.error('local auth guard', 'err', error);
			throw error;
		}
	}
}

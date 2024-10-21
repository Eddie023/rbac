import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "./role.enums";
import { ROLES_KEY } from "./role.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ])

        // if no roles are required then allow access
        if (!requiredRoles){
            return true 
        }

        const request = context.switchToHttp().getRequest<Request>();
        const { user } = context.switchToHttp().getRequest();

        return requiredRoles.some((role) => user.roles?.includes(role));
    }
}
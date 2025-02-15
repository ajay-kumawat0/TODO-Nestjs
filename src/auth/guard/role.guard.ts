import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class RoleGuard implements CanActivate {
  private role: string;
  constructor(role: string) {
    this.role = role;
  }

  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const req: any = ctx.getRequest<Request>();

    if (this.role == req.user.role) return true;

    return false;
  }
}

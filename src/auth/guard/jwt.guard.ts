import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Constant } from 'src/utils/constant';

@Injectable()
export class jwtGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();

    for (let i = 0; i < Constant.BY_PASS_URLS.length; i++) {
      if (req.url === Constant.BY_PASS_URLS[i]) return true;
    }

    return super.canActivate(context);
  }
}

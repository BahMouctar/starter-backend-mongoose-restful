import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '../constants/role.enum';
import { RolesGuard } from '../guards/role.guard';

export const Auth = (...roles: Role[]) =>
  applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard('jwt'), RolesGuard),
  );

import { InputType, PickType } from '@nestjs/graphql';
import { UserCreateInput } from '@wwwsolutions/api/data-access/models';

@InputType()
export class UserRegisterInput extends PickType(UserCreateInput, [
  'email',
  'password',
] as const) {}

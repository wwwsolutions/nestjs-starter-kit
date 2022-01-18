import { InputType, PickType } from '@nestjs/graphql';
import { UserCreateInput } from '@wwwsolutions/api/data-access/models';

@InputType()
export class UserLoginInput extends PickType(UserCreateInput, [
  'email',
  'password',
] as const) {}

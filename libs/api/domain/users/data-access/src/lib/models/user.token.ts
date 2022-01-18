import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@wwwsolutions/api/data-access/models';

@ObjectType()
export class UserToken {
  @Field()
  token!: string;

  @Field()
  user!: User;
}

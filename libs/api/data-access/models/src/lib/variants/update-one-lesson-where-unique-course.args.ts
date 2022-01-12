import { ArgsType, IntersectionType } from '@nestjs/graphql';
import { FindUniqueCourseArgs, UpdateOneLessonArgs } from '../generated';

@ArgsType()
export class UpdateOneLessonWhereUniqueCourseArgs extends IntersectionType(
  FindUniqueCourseArgs,
  UpdateOneLessonArgs
) {}

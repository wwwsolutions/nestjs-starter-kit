import { ArgsType, IntersectionType } from '@nestjs/graphql';
import { FindUniqueCourseArgs, CreateOneLessonArgs } from '../generated';

@ArgsType()
export class CreateOneLessonWhereUniqueCourseArgs extends IntersectionType(
  FindUniqueCourseArgs,
  CreateOneLessonArgs
) {}

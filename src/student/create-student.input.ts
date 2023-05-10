import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsString } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(3)
  @IsString()
  @Field()
  firstName: string;

  @MinLength(1)
  @IsString()
  @Field()
  lastName: string;
}

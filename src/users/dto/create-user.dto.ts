import {
  IsEmail,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsISO8601({ strict: true })
  birthdate: string;

  @IsEnum(['admin', 'user'], {
    message: 'Valid role required',
  })
  role: 'admin' | 'user';
}

import {
  IsDate,
  IsEmail,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

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

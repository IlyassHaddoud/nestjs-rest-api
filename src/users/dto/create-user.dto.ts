import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDate()
  @IsNotEmpty()
  birthdate: string;

  @IsEnum(['admin', 'user'], {
    message: 'Valid role required',
  })
  role: 'admin' | 'user';
}

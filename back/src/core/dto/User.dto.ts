export class CreateUserDto {
  // id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  dateOfBirth: string;
}

export class CheckUserDto {
  // id: string;
  username: string;
  password: string;
}

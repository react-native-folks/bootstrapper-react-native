export interface CurrentUser {
  user: { name: string; lastname: string; username: string };
  sessionToken: string;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface SignUpData {
  name: string;
  surname: string;
  birthDate: string;
  sex: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

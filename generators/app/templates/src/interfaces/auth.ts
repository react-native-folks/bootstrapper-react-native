export interface AuthState {
  initialLoading?: boolean;
  currentUser: CurrentUser | null;
  hasAccessOnboarding: boolean;
}

export interface CurrentUser {
  user: { name: string; lastname: string; username: string };
  sessionToken: string;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  passwordAgain: string;
  name: string;
  surname: string;
  jobTitle: string;
  phoneNumber?: string;
}

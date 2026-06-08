import { validateEmail } from "./validateEmail";
import { validatePassword } from "./validatePassword";

export function validateSignup(
  email: string,
  password: string,
  passwordConfirmed: string,
): string | null {
  const emailError = validateEmail(email);

  if (emailError) {
    return emailError;
  }

  const passwordError = validatePassword(password, passwordConfirmed);

  if (passwordError) {
    return passwordError;
  }

  return null;
}

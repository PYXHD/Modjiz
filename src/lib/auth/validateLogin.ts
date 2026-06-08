import { validateEmail } from "./validateEmail";

export function validateLogin(email: string, password: string): string | null {
  const emailError = validateEmail(email);

  if (emailError) {
    return emailError;
  }

  if (!password.trim()) {
    return "Veuillez renseigner votre mot de passe";
  }

  return null;
}

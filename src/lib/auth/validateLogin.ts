export function validateLogin(email: string, password: string): string | null {
  if (!email.trim()) {
    return "Veuillez renseigner votre adresse e-mail";
  }

  if (!password.trim()) {
    return "Veuillez renseigner votre mot de passe";
  }

  return null;
}

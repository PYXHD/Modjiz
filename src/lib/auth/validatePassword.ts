export function validatePassword(
  password: string,
  passwordConfirmed: string,
): string | null {
  if (!password.trim()) {
    return "Veuillez renseigner un mot de passe";
  }

  if (password.length < 8) {
    return "Le mot de passe doit contenir au moins 8 caractères";
  }

  if (password !== passwordConfirmed) {
    return "Les mots de passe ne correspondent pas";
  }

  return null;
}

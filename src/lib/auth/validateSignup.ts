export function validateSignup(
  email: string,
  password: string,
  passwordConfirmed: string,
): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return "Veuillez saisir un email";
  }
  if (!emailRegex.test(email)) {
    return "Veuillez saisir une adresse email valide";
  }

  if (password.length < 8) {
    return "Le mot de passe doit contenir au moins 8 caractères";
  }

  if (password !== passwordConfirmed) {
    return "Les mots de passe ne correspondent pas";
  }

  return null;
}

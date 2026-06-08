export function validateEmail(email: string): string | null {
  if (!email.trim()) {
    return "Veuillez renseigner votre adresse e-mail.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Veuillez renseigner une adresse e-mail valide.";
  }

  return null;
}

export function clearMode() {
  document.cookie = "has-onboarded=; path=/; max-age=0";
  document.cookie = "app-mode=; path=/; max-age=0";
}

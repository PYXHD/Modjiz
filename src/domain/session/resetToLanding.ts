import { clearMode } from "./clearMode";

export function resetToLanding() {
  clearMode();

  window.location.href = "/";
}

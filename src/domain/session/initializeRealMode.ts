const TEN_YEARS_IN_SECONDS = 60 * 60 * 24 * 365 * 10;

export function initializeRealMode() {
  document.cookie = `app-mode=real; max-age=${TEN_YEARS_IN_SECONDS}; path=/`;
  document.cookie = `has-onboarded=true; max-age=${TEN_YEARS_IN_SECONDS}; path=/`;
}

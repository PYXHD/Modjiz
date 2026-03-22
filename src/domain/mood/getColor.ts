export function getColor(value: number) {
  switch (value) {
    case 1:
      return "var(--color-emotion-bad)";
    case 2:
      return "var(--color-emotion-meh)";
    case 3:
      return "var(--color-emotion-ok)";
    case 4:
      return "var(--color-emotion-good)";
    case 5:
      return "var(--color-emotion-great)";
    default:
      return "#ccc";
  }
}

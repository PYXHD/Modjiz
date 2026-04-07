import { getToday } from "@/lib/time/getToday";

function TodayLabel() {
  const todayDate = getToday();
  const today = todayDate
    .toLocaleDateString("fr-FR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Europe/Paris",
    })
    .replace(/^\w/, (c) => c.toUpperCase());

  return <div className="text-body text-center">{today}</div>;
}

export default TodayLabel;

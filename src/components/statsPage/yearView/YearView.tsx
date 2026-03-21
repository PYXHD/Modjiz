import type { Year } from "@/types/DateTypes";
import { useStatsData } from "@/domain/stats/hooks/useStatsData";

import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";

function YearView() {
  const { date, changeDate, canNavigate } = useStatsData("year");

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <TimeSwitcher
        label={date.getFullYear().toString()}
        onPrev={() => changeDate(-1)}
        onNext={() => changeDate(1)}
        canGoPrev={canNavigate(-1)}
        canGoNext={canNavigate(1)}
      />
    </div>
  );
}

export default YearView;

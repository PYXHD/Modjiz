import Link from "next/link";
import { useMemo } from "react";

import { getLastDaysLabels } from "@/lib/time/getLastDaysLabel";
import { getLastDaysMood } from "@/domain/mood/getLastDaysMood";

import type { Entry } from "@/types/Entry";

import Button from "@/components/ui/button/Button";
import DaysChart from "@/components/dashboardPage/daysChart/DaysChart";

type Props = {
  data: Entry[];
  today: Date;
};

function RecentMoods({ data, today }: Props) {
  const dataLastDays = useMemo(
    () => getLastDaysMood(data, today),
    [data, today],
  );

  const labels = useMemo(() => getLastDaysLabels(today, 5), [today]);

  return (
    <section className="recentMoods">
      <h2 className="text-center">Et récemment ?</h2>

      <DaysChart data={dataLastDays} labels={labels} />

      <div className="recentMoods_btnContainer">
        <Link href="/app/stats">
          <Button>Mon historique</Button>
        </Link>
        <p className="text-primary text-caption">Statistiques et tendances</p>
      </div>
    </section>
  );
}

export default RecentMoods;

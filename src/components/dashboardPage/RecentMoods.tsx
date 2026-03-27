import styles from "./DashboardClient.module.scss";

import Link from "next/link";

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
  const dataLastDays = getLastDaysMood(data, today);
  const labels = getLastDaysLabels(today, 5);

  return (
    <section className={styles.recentMoods}>
      <h2 className="text-center">Et récemment ?</h2>

      <DaysChart data={dataLastDays} labels={labels} />

      <div className={styles.buttonContainer}>
        <Link href="/app/stats">
          <Button>Mon historique</Button>
        </Link>
        <p className="text-primary text-caption">Statistiques et tendances</p>
      </div>
    </section>
  );
}

export default RecentMoods;

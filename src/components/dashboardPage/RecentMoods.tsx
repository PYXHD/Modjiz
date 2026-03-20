import styles from "./DashboardClient.module.scss";

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
      <h2 className={styles.titleCentered}>Et récemment ?</h2>

      <DaysChart data={dataLastDays} labels={labels} />

      <div className={styles.buttonContainer}>
        <Button>Mon historique</Button>
        <p className={styles.textMeta}>Statistiques et tendances</p>
      </div>
    </section>
  );
}

export default RecentMoods;

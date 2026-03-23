import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from "recharts";

import { ChartPoint } from "@/domain/stats/getMonthChart";
import { getColor } from "@/domain/mood/getColor";

type Props = {
  chartData: ChartPoint[];
  average: number;
};

function MonthGraph({ chartData, average }: Props) {
  const dayWidth = 40;

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <LineChart
        width={chartData.length * dayWidth}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 40, bottom: 20, left: 20 }}
      >
        <CartesianGrid vertical={true} horizontal={false} />
        <XAxis
          dataKey="day"
          interval={0}
          padding={{ left: 0, right: 0 }}
          tick={{ fill: "var(--color-emotion-ok)" }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis hide domain={[0, 5]} padding={{ top: 20 }} />
        <ReferenceLine
          y={average}
          stroke="var(--color-emotion-ok)"
          strokeWidth={1}
        />
        <Line
          type="linear"
          dataKey="value"
          stroke="var(--color-emotion-ok)"
          strokeWidth={1}
          isAnimationActive={false}
          dot={({ cx, cy, payload }) => {
            const value = payload.value;

            if (value === null) return null;

            const color = getColor(value);

            return <circle cx={cx} cy={cy} r={10} fill={color} />;
          }}
          connectNulls={true}
        />
      </LineChart>
    </div>
  );
}

export default MonthGraph;

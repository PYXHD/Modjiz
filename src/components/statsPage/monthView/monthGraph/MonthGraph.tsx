import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { ChartPoint } from "@/domain/stats/getMonthChart";
import { getColor } from "@/domain/mood/getColor";

type Props = {
  chartData: ChartPoint[];
};

function MonthGraph({ chartData }: Props) {
  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <LineChart
        width={chartData.length * 40}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
      >
        <CartesianGrid vertical={true} horizontal={false} />
        <XAxis dataKey="day" interval={0} tickLine={false} axisLine={false} />
        <YAxis hide domain={[0, 5]} padding={{ top: 20 }} />
        <Tooltip />
        <Line
          type="linear"
          dataKey="value"
          stroke="var(--color-emotion-ok)"
          strokeWidth={1}
          dot={({ cx, cy, payload }) => {
            const value = payload.value;

            if (value === null) return null;

            const color = getColor(value);

            return <circle cx={cx} cy={cy} r={8} fill={color} />;
          }}
          connectNulls={true}
        />
      </LineChart>
    </div>
  );
}

export default MonthGraph;

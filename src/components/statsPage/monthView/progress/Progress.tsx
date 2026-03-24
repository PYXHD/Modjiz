import Average from "@/components/ui/average/Average";

type Props = {
  label: string;
  avgCurrent: string;
  avgPrev: string;
  labelPrev: string;
};

function Progress({ label, labelPrev, avgCurrent, avgPrev }: Props) {
  return (
    <div>
      <h2>Progression</h2>
      <Average
        label={label}
        labelPrev={labelPrev}
        avgCurrent={avgCurrent}
        avgPrev={avgPrev}
      />
    </div>
  );
}

export default Progress;

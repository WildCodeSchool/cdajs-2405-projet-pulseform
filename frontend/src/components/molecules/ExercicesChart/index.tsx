import { useTranslation } from "react-i18next";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  XAxis,
} from "recharts";

import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import type {
  CustomBar,
  Data,
  DataFromApi,
  userExercicesChartProps,
} from "./ExercicesChart.type";
import "./ExercicesChart.scss";

const ExercicesChart = ({
  userExercicesChart,
}: {
  userExercicesChart: userExercicesChartProps[];
}) => {
  const { t } = useTranslation();

  const getMonthLabel = (month: string): string => {
    return t(month);
  };

  // Function to transform the data
  const mapToData = (data: DataFromApi[]): Data[] => {
    const now = new Date();
    const recentMonths: string[] = [];

    // Generate the last 7 months in the format "APR-2025"
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const month = date.toLocaleString("en", { month: "short" }).toUpperCase();
      const year = date.getFullYear();
      recentMonths.push(`${month}-${year}`);
    }

    const result: Record<string, Data> = {};

    for (const label of recentMonths) {
      const [month] = label.split("-");
      result[label] = {
        month: getMonthLabel(month),
        flexibility: 0,
        strength: 0,
        cardio: 0,
      };
    }

    for (const item of data) {
      const date = new Date(item.end_date);
      const month = date.toLocaleString("en", { month: "short" }).toUpperCase();
      const year = date.getFullYear();
      const label = `${month}-${year}`;

      if (!recentMonths.includes(label)) continue;

      for (const tag of item.program.tags) {
        let key: keyof Pick<Data, "flexibility" | "strength" | "cardio">;

        switch (tag.name) {
          case "FLEXIBILITY_ENHANCEMENT":
            key = "flexibility";
            break;
          case "MUSCLE_GAIN":
            key = "strength";
            break;
          case "CARDIOVASCULAR_HEALTH":
            key = "cardio";
            break;
          default:
            continue;
        }

        result[label][key]++;
      }
    }

    // Keep the order and display only months in "APR" format
    return recentMonths.map((label) => result[label]);
  };

  // Call the function and display the result
  const transformedData = mapToData(
    userExercicesChart.map((item) => ({
      ...item,
      end_date: item.end_date ?? "",
      program: {
        tags: item.program.tags ?? [],
      },
    })),
  );

  const GAP = 4;

  const CustomBar = ({ x, y, width, height, fill }: CustomBar) => {
    const adjustedHeight = Math.max((height ?? 0) - GAP, 0);
    const adjustedY = y ?? 0 + GAP / 2;

    return (
      <rect
        x={x}
        y={adjustedY}
        width={width}
        height={adjustedHeight}
        fill={fill}
        rx={5}
        ry={5}
      />
    );
  };

  const CustomTooltip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (!active || !payload || payload.length === 0) return null;

    const hasData = payload.some(
      (entry) => typeof entry.value === "number" && entry.value > 0,
    );
    if (!hasData) return null;

    return (
      <div className="exercices-chart__tooltip">
        {payload.map((entry) => (
          <div
            key={entry.name}
            className="exercices-chart__tooltip__label"
            style={{ color: entry.color }}
          >
            {entry.name}: {entry.value}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="exercices-chart">
      <h3 className="exercices-chart__title">
        {t("EXERCISE_TYPE_DISTRIBUTION")}
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={transformedData} barCategoryGap={40} barSize={10}>
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, dy: 5 }}
            tickLine={false}
            fill="#4B5563"
            fontSize={12}
            fontWeight={"bold"}
            textAnchor="middle"
            style={{
              whiteSpace: "nowrap",
              transform: "translateY(4px)",
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Bar
            dataKey="flexibility"
            stackId="a"
            fill="#8B5CF6"
            shape={<CustomBar />}
          />
          <Bar
            dataKey="strength"
            stackId="a"
            fill="#22C55E"
            shape={<CustomBar />}
          />
          <Bar
            dataKey="cardio"
            stackId="a"
            fill="#F97316"
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          fontSize: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#8B5CF6",
              marginRight: 5,
              borderRadius: "50%",
            }}
          />
          {t("FLEXIBILITY").toLocaleLowerCase()}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#22C55E",
              marginRight: 5,
              borderRadius: "50%",
            }}
          />
          {t("MUSCLE_GAIN_SHORT")}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#F97316",
              marginRight: 5,
              borderRadius: "50%",
            }}
          />
          {t("CARDIOVASCULAR_HEALTH_SHORT")}
        </div>
      </div>
    </div>
  );
};

export default ExercicesChart;

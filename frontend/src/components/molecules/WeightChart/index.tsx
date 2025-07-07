import { useTranslation } from "react-i18next";
import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  XAxis,
} from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import type { DataPoint } from "./WeightChart.type";
import "./WeightChart.scss";

const WeightChart = ({ dataWeight }: { dataWeight: DataPoint[] }) => {
  const { t } = useTranslation();

  const monthsOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonth = new Date().toLocaleString("en-US", { month: "short" });
  const currentMonthIndex = monthsOrder.findIndex((m) => m === currentMonth);

  const last6Months: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const monthIndex = (currentMonthIndex - i + 12) % 12;
    last6Months.push(monthsOrder[monthIndex]);
  }

  const completeData: DataPoint[] = last6Months.map((month) => {
    const entry = dataWeight?.find((d) => d.month === month);

    return entry || { month, weight: null };
  });

  const isAllNull = completeData.every((d) => d.weight === null);

  const safeData = isAllNull
    ? completeData.map((d) => ({ ...d, weight: 0 }))
    : completeData;

  const getMonthLabel = (month: string): string => t(month.toUpperCase());

  const CustomTooltip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "#132945",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "10px",
            fontSize: "12px",
          }}
        >
          {payload[0].value !== null ? `${payload[0].value} kg` : t("NO_DATA")}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="weight-chart">
      <div style={{ height: 220, position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "5px 10px",
          }}
        >
          <span className="weight-chart__title">{t("WEIGHT_KG")}</span>
        </div>
        {isAllNull && (
          <p
            style={{
              textAlign: "center",
              color: "#6B7280",
              fontSize: 12,
              marginTop: 10,
            }}
          >
            {t("NO_WEIGHT_DATA")}
          </p>
        )}
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={safeData}>
            {safeData.map((entry) => (
              <ReferenceLine
                key={entry.month}
                x={entry.month}
                stroke="#D1D5DB"
                strokeDasharray="3 3"
              />
            ))}
            <XAxis
              dataKey="month"
              tick={(props: {
                x: number;
                y: number;
                payload: { value: string };
              }) => {
                const { x, y, payload } = props;
                return (
                  <text
                    x={x}
                    y={y + 10}
                    fill="#4B5563"
                    fontSize={12}
                    fontWeight={"bold"}
                    textAnchor="middle"
                    style={{
                      whiteSpace: "nowrap",
                      transform: "translateY(4px)",
                    }}
                  >
                    {getMonthLabel(payload.value)}
                  </text>
                );
              }}
              tickLine={false}
              axisLine={false}
              interval={0}
              padding={{ left: 20, right: 20 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#0F172A"
              strokeWidth={2}
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default WeightChart;

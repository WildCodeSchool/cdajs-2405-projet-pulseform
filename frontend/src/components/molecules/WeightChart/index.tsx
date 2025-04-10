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

import { useGetUserByIdWithWeights } from "@hooks/useUsers";
import type { DataPoint } from "./WeightChart.type";
import "./WeightChart.scss";

function WeightChart({ userId }: { userId: number }) {
  const { t } = useTranslation();

  const { loading, error, userWeight } = useGetUserByIdWithWeights(userId);

  // todo nelson a finir
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!userWeight) return <p>No data available</p>;

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

  // Mois actuel
  const currentMonth = new Date().toLocaleString("en-US", { month: "short" });

  // Trouver l'index du mois actuel dans le tableau
  const currentMonthIndex = monthsOrder.findIndex(
    (month) => month === currentMonth,
  );

  // Sélection des 6 derniers mois
  const last6Months: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const monthIndex = (currentMonthIndex - i + 12) % 12;
    last6Months.push(monthsOrder[monthIndex]);
  }

  // Construire les données complètes avec des valeurs manquantes si besoin
  const completeData: DataPoint[] = last6Months.map((month) => {
    const entry = userWeight.find((d) => d.month === month);
    return entry || { month, weight: null }; // Ajoute le mois s'il manque
  });

  // Fonction pour traduire les mois
  const getMonthLabel = (month: string): string => {
    return t(month.toUpperCase());
  };

  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
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
      {!loading && !error && userWeight.length > 0 && (
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

          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={completeData}>
              {completeData.map((entry) => (
                <ReferenceLine
                  key={entry.month}
                  x={entry.month}
                  stroke="#D1D5DB"
                  strokeDasharray="3 3"
                />
              ))}

              <XAxis
                dataKey="month"
                tick={({ x, y, payload }) => (
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
                )}
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
      )}
    </section>
  );
}

export default WeightChart;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

type ChartCardProps = {
  title: string;
  type: "line" | "bar" | "pie" | "radar";
  data: any[];
};

const COLORS = ["#7B5CFF", "#9A85FF", "#3B82F6", "#10B981", "#F43F5E"];

export default function ChartCard({ title, type, data }: ChartCardProps) {
  return (
    <div
      className="bg-[#0D0F12]/70 border border-[#1F2226] rounded-2xl p-5 shadow-[0_0_25px_rgba(123,92,255,0.1)] 
    flex flex-col items-center justify-center transition-all duration-500  
    hover:border-[#7B5CFF]/50 hover:shadow-[0_0_40px_rgba(123,92,255,0.15)] mb-6 w-full backdrop-blur-md"
    >
      <h3 className="text-gray-100 text-base sm:text-lg font-semibold mb-4 text-center tracking-wide">
        {title}
      </h3>

      <div className="w-full" style={{ height: 220 }}>
        {type === "line" && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#1E2124" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0B0D0E",
                  border: "1px solid #2A2D32",
                  borderRadius: "8px",
                  color: "#E5E7EB",
                }}
              />
              <Legend wrapperStyle={{ color: "#A1A1AA" }} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#7B5CFF"
                strokeWidth={2}
                dot={{ r: 3, fill: "#9A85FF" }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}

        {type === "bar" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid stroke="#1E2124" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0B0D0E",
                  border: "1px solid #2A2D32",
                  borderRadius: "8px",
                  color: "#E5E7EB",
                }}
              />
              <Legend wrapperStyle={{ color: "#A1A1AA" }} />
              <Bar dataKey="value" fill="#7B5CFF" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}

        {type === "pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0B0D0E",
                  border: "1px solid #2A2D32",
                  borderRadius: "8px",
                }}
                itemStyle={{
                  color: "#E5E7EB",
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                }}
                labelStyle={{
                  color: "#9A85FF",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              />
              <Legend
                wrapperStyle={{
                  color: "#A1A1AA",
                  fontSize: "12px",
                  fontFamily: "Inter, sans-serif",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        )}

        {type === "radar" && (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <PolarGrid stroke="#1E2124" />
              <PolarAngleAxis dataKey="metric" stroke="#9CA3AF" />
              <PolarRadiusAxis stroke="#2A2D32" />
              <Radar
                name={title}
                dataKey="value"
                stroke="#7B5CFF"
                fill="#7B5CFF"
                fillOpacity={0.4}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0B0D0E",
                  border: "1px solid #2A2D32",
                  borderRadius: "8px",
                  color: "#E5E7EB",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

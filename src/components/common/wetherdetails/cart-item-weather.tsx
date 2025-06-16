import React from "react";
import { Wind, Droplet, Thermometer, Sun } from "lucide-react";
import WeatherItem from "./weather-item";
import { weather } from "@/lib/types/weather";

function WeatherCard({ data }: { data: weather }) {
  const items = [
    {
      Icon: Thermometer,
      label: "Real Feel",
      value: `${data?.forecast.forecastday[0].day.maxtemp_c} °C`,
    },
    {
      Icon: Droplet,
      label: "Chance Rain",
      value: `${data?.forecast.forecastday[0].day.daily_will_it_rain ? "Yes" : "No"}`,
    },
    {
      Icon: Wind,
      label: "Wind",
      value: `${data?.forecast.forecastday[0].day.maxwind_kph} km/h`,
    },
    {
      Icon: Sun,
      label: "UV",
      value: `${data?.forecast.forecastday[0].day.uv}`,
    },
  ];

  return (
    <div className="dark:bg-blue-2 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="font-semibold text-zinc-500 dark:text-blue-3 mb-10">
        TODAY WEATHER CONDITIONS
      </p>
      <div className="flex flex-wrap">
        {items?.map(({ Icon, label, value }, i) => (
          <WeatherItem key={i} Icon={Icon} label={label} value={value} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(WeatherCard);

import { weather } from "@/lib/types/weather";
import React from "react";



function DaysCard({ data }: {data:weather}) {
  return (
    <div className="dark:bg-blue-2 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="font-semibold text-zinc-500 dark:text-blue-3 mb-10">
        THREE DAYS FORECAST
      </p>

      <div className="divide-y divide-gray-300 dark:divide-blue-3">
        {data?.forecast.forecastday.map((day, index) => {
          const { date, day: info } = day;

          return (
            <div
              key={index}
              className="py-4 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap"
            >
              <p className="w-1/4 text-zinc-600 dark:text-blue-3 font-medium">
                {new Date(date).toLocaleDateString("en-US", { weekday: "long" })}
              </p>

              <div className="flex items-center w-1/2 sm:w-1/3 gap-2">
                <img
                  src={info.condition.icon}
                  alt={`${info.condition.text} icon`}
                  className="w-8 h-8 object-contain"
                />
                <p className="text-zinc-500 dark:text-blue-4 text-sm sm:text-base">
                  {info.condition.text}
                </p>
              </div>

              <div className="flex justify-end w-full sm:w-1/4 gap-6 sm:gap-10">
                <p className="text-zinc-600 dark:text-blue-4 font-bold">
                  {info.maxtemp_c}°C
                </p>
                <p className="text-zinc-400 dark:text-blue-3">
                  {info.mintemp_c}°C
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default React.memo(DaysCard);

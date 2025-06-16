'use client'
import React, { useMemo } from 'react';
import { weather } from '@/lib/types/weather';


const HoursCard = ({ data }: {data:weather}) => {
  // useMemo to save filtration prevent filter operation unless data change
  const hours = useMemo(() => {
    return data?.forecast.forecastday[1].hour.filter((_, i) => i % 5 === 0);
  }, [data]);

  // formate day
  const formatHour = (timeStr: string) => {
    const date = new Date(timeStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="dark:bg-blue-2 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="font-semibold text-zinc-500 dark:text-blue-3 mb-10">
        TODAY FORECAST PER HOURS
      </p>


      <div className="flex flex-wrap divide-x dark:divide-zinc-700 divide-zinc-300">
        {hours?.map((day, index) => (
          <div key={index} className="px-7 flex flex-col items-center text-center">
            <p className="font-bold text-zinc-500 dark:text-blue-3">
              {formatHour(day.time)}
            </p>
            <img
              src={ day.condition.icon}
              alt={`Image Icon ${day.condition.text}`}
              width={50}
              height={50}
              className="my-2"
            />

            <p className="mt-1 font-bold text-[19px] text-zinc-500 dark:text-blue-4">
              {day.temp_c}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(HoursCard);

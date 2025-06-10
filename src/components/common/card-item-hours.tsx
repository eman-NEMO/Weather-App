import React from 'react'
export default function HoursCard(data:any) {

  return (
<div className="dark:bg-blue-2 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
  <p className="font-semibold text-zinc-500 dark:text-blue-3 mb-10">
    TODAY FORECAST PER HOURS
  </p>

  <div className="flex flex-wrap divide-x dark:divide-zinc-700 divide-zinc-300">
    {data.data?.forecast.forecastday[0].hour
      .filter((_, index) => index % 5 === 0)
      .map((day, index) => (
        <div key={index} className="b px-8 flex flex-col items-center text-center">
          <p className="font-bold text-zinc-500 dark:text-blue-3">
            {day.time.slice(11)}
          </p>
          <img
            src={day.condition.icon}
            alt={`Image Icon ${day.condition.text}`}
            className=" my-2"
          />
          <p className="mt-1 font-bold text-[19px] text-zinc-500 dark:text-blue-4">
            {day.temp_c}°C
          </p>
        </div>
      ))}
  </div>
</div>

  )
}

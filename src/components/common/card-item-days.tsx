import React from "react";

export default function DaysCard(data: any) {
  console.log(data.data.forecast ,"data");
  return (
    <div className="dark:bg-blue-2 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className=" ">
        <p className="font-semibold text-zinc-500 dark:text-blue-3 mb-10">
       THREE DAYS FORECAST
  </p>

      <div className="divide-y divide-gray-300 dark:divide-blue-3">
  {data.data.forecast.forecastday.map((Day, index) => (


    
      <div
        key={index}
        className="py-4 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap"
      >
        {/* اليوم */}
        <p className="w-1/4 text-zinc-600 dark:text-blue-3 font-medium">{ new Date(Day.date).toLocaleDateString("en-US", { weekday: "long" })}</p>

        {/* الأيقونة + وصف الحالة */}
        <div className="flex items-center w-1/2 sm:w-1/3 gap-2">
          <img src={Day.day.condition.icon} alt="icon" className="w-8 h-8 object-contain" />
          <p className="text-zinc-500 dark:text-blue-4 text-sm sm:text-base">
            {Day.day.condition.text}
          </p>
        </div>

        {/* درجات الحرارة */}
        <div className="flex justify-end w-full sm:w-1/4 gap-6 sm:gap-10">
          <p className="text-zinc-600 dark:text-blue-4 font-bold">{Day.day.maxtemp_c}°C</p>
          <p className="text-zinc-400 dark:text-blue-3">{Day.day.mintemp_c}°C</p>
        </div>
      </div>
   
  ))}
</div>

      </div>
    </div>
  );
}

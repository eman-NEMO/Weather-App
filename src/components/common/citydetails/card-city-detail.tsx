import React from "react";
import CardCityAddFav from "./card-city-addFav";
import { weather } from "@/lib/types/weather";

//  Component as a const
const CardCity = ({ data }: { data: weather }) => {
  return (
    <div className="p-7">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="flex text-5xl md:text-6xl font-semibold text-zinc-700 dark:text-blue-5">
            {data?.location.name}
            {/* client component so I separated it */}
            <CardCityAddFav name={data?.location.name} />
          </h1>

          <p className="mt-2 text-lg text-zinc-600 dark:text-blue-4">{data?.location.country}</p>

          <p className="text-5xl md:text-6xl font-semibold mt-6 text-zinc-700 dark:text-blue-5">
            {data?.current.temp_c}°
          </p>
        </div>

        <img
          className="w-32 md:w-48 object-contain"
          src={data?.current.condition.icon}
          alt="Weather icon"
        />
      </div>
    </div>
  );
};

// 3. Wrap it with React.memo to avoid unnecessary re-renders
export default React.memo(CardCity);

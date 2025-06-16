"use client";

import WeatherCard from "@/components/common/cart-item-weather";
import HoursCard from "@/components/common/card-item-hours";
import useGetFavorite from "../(favorite)/favorite/_hooks/get-favorite-hook";
import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function FavouritesPage() {
  const { favorites, isLoading: favLoading, isError: favError } = useGetFavorite();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (favorites && favorites.length > 0) {
      setEnabled(true);
    }
  }, [favorites]);

  const weatherQueries = useQueries({
    queries:
      enabled && favorites
        ? favorites.map((fav: any) => {
            return {
              queryKey: ["Weather", fav.city_name],
              queryFn: async () => {
                const response = await fetch(
                  ` https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${fav.location_name}&days=3`,
                );
                const data = await response.json();
                if ("error" in data) throw new Error(data.error.message);
                return data;
              },
              enabled: true,
            };
          })
        : [],
  });

  if (favLoading) return <p>Loading favorites...</p>;
  if (favError) return <p>Error loading favorites.</p>;

  return (
    <div className="grid grid-cols-1 gap-8 p-6">
      {weatherQueries.map((weather, index) => {
        const cityName = favorites[index]?.location_name;

        return (
          <div key={index} className="container p-6 rounded-2xl shadow-lg dark:bg-blue-2 bg-white">
            {weather.isLoading ? (
              <p>Loading weather...</p>
            ) : weather.isError ? (
              <p className="text-red-500 text-center">Error: {weather.error.message}</p>
            ) : (
              <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-blue-4 text-center">
                    {cityName}
                  </h2>
                  <HoursCard data={weather.data} />
                </div>
                <div className="flex-1">
                  <WeatherCard data={weather.data} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

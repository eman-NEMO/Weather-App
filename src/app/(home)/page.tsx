"use client";
import HoursCard from "@/components/common/card-item-hours";
import { Input } from "@/components/ui/input";
import DaysCard from "@/components/common/card-item-days";
import WeatherCard from "@/components/common/wetherdetails/cart-item-weather";
import DetectLocation from "@/components/common/auto-detect-loc";
import CardCity from "@/components/common/citydetails/card-city-detail";
import { ModeToggle } from "@/components/common/mood-toggle";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useGetWeatherData from "@/hooks/get-weather-hook";

export default function Home() {
  const router = useRouter();
  const [city, setCity] = useState("cairo");
  const { payload } = useGetWeatherData(city);

  console.log(payload);
  return (
    <>
      {/* Nav section */}
      <div>
        <div className="flex  mt-5">
          <div className="ms-auto me-28 flex space-x-4 ">
            <DetectLocation />
            <ModeToggle />
            <Heart
              onClick={() => router.push("/favorite")}
              size={30}
              className="mt-1 fill-blue-2 cursor-pointer "
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap w-full container">
          {/* left side   search input & city details */}
          <div className="xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-full px-4">
            <div className="mt-10">
              <Input
              
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    setCity(e.currentTarget.value);
                  }
                }}
                className="bg-zinc-200 h-12 rounded-2xl dark:bg-blue-2"
                placeholder="Search ...... "
              />
            </div>

            <CardCity data={payload} />
          </div>

          {/* Right Side next 3 days weather   */}

          <div className="mt-24  xl:w-[35%] lg:w-[35%] md:w-[65%] sm:w-full px-4">
            <DaysCard data={payload} />
          </div>

          {/* weather by hours and weather details card  */}
          <div className="mt-10">
            <div className="flex  space-x-4 mb-20">
              <HoursCard data={payload} />
              <WeatherCard data={payload} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

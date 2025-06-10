"use client";
import HoursCard from "@/components/common/card-item-hours";
import useGetWeatherData from "./_hooks/weather-hook";
import { Input } from "@/components/ui/input";
import DaysCard from "@/components/common/card-item-days";
import WeatherCard from "@/components/common/cart-item-weather";
import DetectLocation from "@/components/common/auto-detect-loc";
import CardCity from '@/components/common/card-city-detail'
import FavItem from "./favourate/page";
import { ModeToggle } from "@/components/common/mood-toggle";
import { Heart } from "lucide-react";

import { useRouter } from "next/navigation";
export default function Home() {
    const router = useRouter();
  const { payload, isLoading } = useGetWeatherData();

  if (isLoading) return <p>Loading...</p>;
  return (

    <>
    <div>
   <div className="flex  mt-5">
        <div className="ms-auto me-28 flex space-x-4 ">
          <DetectLocation/>
         <ModeToggle/>
         <Heart   onClick={() => router.push("/favourate")} size={30} className="mt-1 fill-blue-2 cursor-pointer "/>
        </div>
    </div>
    <div className="flex flex-col md:flex-row flex-wrap w-full container">
  {/* الجزء اليسار */}

  <div className="xl:w-[65%] lg:w-[65%] md:w-full sm:w-full px-4">
    <div className="mt-10">
      <Input className="bg-zinc-200 rounded-2xl dark:bg-blue-2" placeholder="Search ...... " />
    </div>
    <CardCity data={payload} />
    
  </div>

  {/* الجزء اليمين */}
  <div className="mt-24  xl:w-[35%] lg:w-[35%] md:w-full sm:w-full px-4">
      
   
    <DaysCard data={payload} />
  </div>
  <div className="mt-10" >
     <div className="flex flex-wrap space-x-4 mb-20">
       <HoursCard data={payload} />
    
      <WeatherCard data={payload} />
     </div>
    </div>
</div>

   </div>
  
   </>
  );
}

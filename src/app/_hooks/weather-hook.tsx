
import { useQueries, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useGetWeatherData() {
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Weather"],
    queryFn: async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${48.8566},${2.3522}&days=3`, {
        method: "GET",
      });

      const payload: APIResponse<weather> = await response.json();
      console.log(payload)
      // console.log(payload.forecast.forecastday[1].hour[0].time)
      //   console.log(payload.forecast.forecastday[1].day.condition)
      if ("error" in payload) {
        toast.error("Something went wrong while fetching products");
        throw new Error("Failed to fetch");
      }
      return payload
    },
  });
  return { payload, isLoading, error };
}
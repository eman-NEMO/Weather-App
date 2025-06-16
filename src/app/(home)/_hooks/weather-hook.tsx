
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useGetWeatherData(CityName:string) {
  // console.log(process?.env.API)
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Weather",CityName],
     
    // fetch api
    
    queryFn: async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${CityName}&days=3`, {
        method: "GET",
      });

      // get response 
      const payload: APIResponse<weather> = await response.json();
      //console.log(payload)

      // check error case 
      if ("error" in payload) {
        // toast.error(`Something went wrong ${payload.error.message}`);
        throw new Error(payload.error.message);
      }
     
      return payload
    },
    enabled:!!CityName, // prevent request without value to city 
  });
  return { payload, isLoading, error };
}
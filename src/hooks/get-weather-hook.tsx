import { useQuery } from "@tanstack/react-query";
export default function useGetWeatherData(CityName:string) {
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Weather",CityName],
     
    // fetch api
    queryFn: async () => {
      const response = await fetch(`/api/weather?city=${CityName}`, {
        method: "GET",
      });
      // get response 
      const payload: APIResponse<weather> = await response.json();

      // check error case 
      if ("error" in payload) {
        throw new Error(payload.error.message);
      }  
      return payload
    },
    enabled:!!CityName, // prevent request without value to city 
  });
  return { payload, isLoading, error };
}
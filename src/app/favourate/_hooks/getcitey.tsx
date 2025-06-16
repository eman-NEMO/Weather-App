export const getWeatherByCity = async (city: string) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`
  );

  const payload: APIResponse<weather> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error.message);
  }

  return payload;
};

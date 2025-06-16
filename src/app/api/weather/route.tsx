// app/api/weather/route.ts
export async function GET(request: Request) {
 
  const { searchParams } = new URL(request.url);
 
  const city = searchParams.get("city");

  // fetch on server side //secret key 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=3`);
  const data = await res.json();

  return Response.json(data);
}

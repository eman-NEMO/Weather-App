import { AddFavoriteInput } from "@/lib/types/item";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export const addToFavorites = async ({ user_id, location_name }: AddFavoriteInput) => {
 console.log(user_id,location_name , "fav value")
  const { data, error } = await supabase.from("favorites").insert({
    user_id: user_id,
    location_name: location_name,
    
  });

  if (error) {
    console.log(error)
    throw new Error(error.message);
  }

  console.log(data)
  return data;
};

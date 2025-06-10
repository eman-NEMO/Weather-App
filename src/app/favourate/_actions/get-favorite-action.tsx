import { AddFavoriteInput } from "@/lib/types/item";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export const getFavorites = async ( user_id:string ) => {

  const { data , error } = await supabase.from("favorites").select('*').eq('user_id',user_id)

  if (error) {
    console.log(error)
    throw new Error(error.message);
  }

  console.log(data)
  return data;
};

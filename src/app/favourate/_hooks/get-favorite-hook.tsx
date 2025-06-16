
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/components/constants/auth.supabase.constant";
import { useSession } from "next-auth/react";

export default function useGetFavorite() {
  const { data: session ,status  } = useSession();
  
 
  const userId = session?.user?.id;
  console.log(userId,"user Id" , session)

  const {
    data: favorites,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['favorites', userId],
    queryFn: async () => {
      if (!userId) throw new Error("User ID is missing");
      const { data, error } = await supabase
        .from("favorites")
        .select("*")
        .eq("user_id", userId);
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    refetchOnMount: true,
    enabled: status === "authenticated" && !!userId, // prevents query from running until userId is available
  });
   console.log(favorites)

  return { favorites, isLoading, isError, error };
} 
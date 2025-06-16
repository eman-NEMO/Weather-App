import useFavorite from "@/app/favourate/_hooks/favourate-hook";
import { AddFavoriteInput } from "@/lib/types/item";
import { UUID } from "crypto";
import { HeartPlus } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { use } from "react";

export default function CardCityAddFav({data}:any) {
  const { addToFavorite } = useFavorite();
  const { data: session } = useSession();

    // const locationName = data.data.;
  console.log(session?.user, "session");
  return (
    <>
      <HeartPlus
        className=" mt-7 ms-6 cursor-pointer"
        onClick={() => {
          addToFavorite({ user_id: session?.user.id , location_name: data});
        }}
      />
    </>
  );
}

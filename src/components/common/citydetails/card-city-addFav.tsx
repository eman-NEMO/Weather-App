'use client'
import useFavorite from "@/app/(favorite)/favorite/_hooks/favourate-hook";
import { HeartPlus } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

export default function CardCityAddFav({ name }: {name:string}) {
  
  const { addToFavorite } = useFavorite();
  //session data
  const { data: session } = useSession();


  return (
    <>
    {/* Add to favorite icon  */}
      <HeartPlus
        className=" mt-7 ms-6 cursor-pointer"
        onClick={() => {
          addToFavorite({ user_id: session?.user.id, location_name: name });
        }}
      />
    </>
  );
}

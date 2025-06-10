import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {addToFavorites} from '../_actions/favourate-action'
import { AddFavoriteInput } from "@/lib/types/item";

export default function useFavorite() {
  const handleSuccess = () => {
    toast.success("Favorite item added successfully ");
    // setTimeout(() => {
    //   window.location.href = "/auth/login";
    // }, 1000);
  };
  const handleError = (error: Error) => {
    toast.error(error.message);
    console.log(error.message);
  };

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (FavoriteInputs: AddFavoriteInput) =>
      await addToFavorites(FavoriteInputs),
      onSuccess: handleSuccess,
      onError: handleError,
  });

  const addToFavorite = (Inputs: AddFavoriteInput) => {
    console.log(Inputs , "fav value")
     mutate(Inputs);
  };
  return { error, addToFavorite, isPending };
}


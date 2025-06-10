import { UUID } from "crypto";

type CardProps = {
  image:string,
  title: string;
  rate: number;
  price: number;
  priceAfterDiscount:number;
  label?:string;
};
type AddFavoriteInput = {
  user_id: string;
  location_name: string;
};


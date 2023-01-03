import { TPurchase, TUser } from "./types";
import { TProduct } from "./types";

export const users: TUser[] = [
  {
    id: "bananinha",
    email: "ana@banana.com",
    password: "aaaA2",
  },

  {
    id: "pokemon",
    email: "poke@mon.com",
    password: "bananamon",
  },
];

export const products: TProduct[] = [
  {
    id: "01",
    name: "cacho de banana",
    price: 20,
    category: "fruta",
  },
  {
    id: "02",
    name: "cacho de pokemon",
    price: 200000,
    category: "entidade maligna",
  },
];

export const purchases: TPurchase[] = [
  {
    userId: "bananinha",
    productId: "02",
    quantity: 1,
    totalPrice: 200000,
  },
  {
    userId: "pokemon",
    productId: "01",
    quantity: 2,
    totalPrice: 40,
  },
];

/* eslint-disable @typescript-eslint/return-await */
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export const getProducts = async (): Promise<CartItemType[]> =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  await (await fetch('https://fakestoreapi.com/products')).json();

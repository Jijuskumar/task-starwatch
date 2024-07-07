import { ProductBO } from "../BOs/ProductBO";
import Watch from "../Assets/Images/Watch.png";

export const getProducts = async () => {
  try {
    const Products: ProductBO[] = [
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series 4",
        price: "120.00",
        rating: 4.2,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series 3",
        price: "100.00",
        rating: 4.2,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series 2",
        price: "90.00",
        rating: 3,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series",
        price: "70.00",
        rating: 2,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
      {
        id: "kjcbewb-vewv-wev-wevvvvv",
        name: "Apple Watch Series 4",
        price: "120.00",
        rating: 4.2,
        totalRating: 120,
        images: [Watch, Watch, Watch, Watch],
      },
    ];

    return Products;
  } catch (error) {
    return undefined;
  }
};

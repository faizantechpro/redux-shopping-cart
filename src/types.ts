interface ProductInterface {
  id: number;
  colour: string;
  name: string;
  img: string;
  price: number;
  inCartQuantity?: number;
}

export type ProductType = ProductInterface;

export type CartItemType = ProductInterface & { inCartQuantity: number };

export type initialStateType = {
  products: ProductType[];
  cartItems: ProductType[];
  filteredProducts: ProductType[];
  colour: string;
};

export type GetProductsActionType = {
  type: "GET_PRODUCTS";
  payload: {
    products: ProductType[];
  };
};

export type SearchProductsActionType = {
  type: "SEARCH_PRODUCTS";
  payload: {
    colour: string;
  };
};

export type AddToCartActionType = {
  type: "ADD_TO_CART";
  payload: {
    product: ProductType;
  };
};

export type RemoveFromCartActionType = {
  type: "REMOVE_FROM_CART";
  payload: {
    product: ProductType;
  };
};

export type RemoveAllFromCartActionType = {
  type: "REMOVE_ALL_FROM_CART";
};

export type ProductActionType =
  | GetProductsActionType
  | SearchProductsActionType
  | AddToCartActionType
  | RemoveFromCartActionType
  | RemoveAllFromCartActionType;

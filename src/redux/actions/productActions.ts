import { Dispatch } from "redux";
import {
  AddToCartActionType,
  GetProductsActionType,
  ProductType,
  RemoveAllFromCartActionType,
  RemoveFromCartActionType,
  SearchProductsActionType,
} from "../../types";
import {
  ADD_TO_CART,
  GET_PRODUCTS,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
  SEARCH_PRODUCTS,
} from "./actionTypes";

export function getProducts(products: ProductType[]): GetProductsActionType {
  return {
    type: GET_PRODUCTS,
    payload: {
      products,
    },
  };
}

export function getProductsAsync() {
  return (dispatch: Dispatch) => {
    return fetch(
      "https://my-json-server.typicode.com/benirvingplt/products/products"
    )
      .then((response) => response.json())
      .then((products) => dispatch(getProducts(products)));
  };
}

export function searchProducts(colour: string): SearchProductsActionType {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      colour,
    },
  };
}

export function addToCart(product: ProductType): AddToCartActionType {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
}

export function removeFromCart(product: ProductType): RemoveFromCartActionType {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product,
    },
  };
}

export function removeAllFromCart(): RemoveAllFromCartActionType {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
}

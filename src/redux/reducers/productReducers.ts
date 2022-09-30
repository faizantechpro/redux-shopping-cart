import { initialStateType, ProductActionType } from "../../types";

const initialState: initialStateType = {
  products: [],
  cartItems: [],
  colour: "",
  filteredProducts: [],
};

export default function productReducer(
  state = initialState,
  action: ProductActionType
) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
        filteredProducts: action.payload.products,
        keyword: "",
        sort: "",
        category: "",
      };

    case "SEARCH_PRODUCTS":
      const searchedProducts = state.products.filter((product) => {
        return (
          product.colour
            .toLowerCase()
            .search(action.payload.colour.toLowerCase()) !== -1
        );
      });

      return {
        ...state,
        filteredProducts: searchedProducts,
        keyword: action.payload.colour,
        category: "all",
      };

    case "ADD_TO_CART":
      const cartItemsCopy = [...state.cartItems];
      let alreadyInCart = false;
      cartItemsCopy.forEach((item) => {
        if (item.id === action.payload.product.id) {
          item.inCartQuantity! += 1;
          alreadyInCart = true;
        }
      });
      if (!alreadyInCart) {
        cartItemsCopy.push({ ...action.payload.product, inCartQuantity: 1 });
      }

      return {
        ...state,
        cartItems: cartItemsCopy,
      };

    case "REMOVE_FROM_CART":
      const cartItemsCopy2 = [...state.cartItems];
      cartItemsCopy2.forEach((item, index) => {
        if (item.id === action.payload.product.id) {
          if (item.inCartQuantity! > 1) {
            item.inCartQuantity! -= 1;
          } else {
            cartItemsCopy2.splice(index, 1);
          }
        }
      });
      return {
        ...state,
        cartItems: cartItemsCopy2,
      };

    case "REMOVE_ALL_FROM_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}

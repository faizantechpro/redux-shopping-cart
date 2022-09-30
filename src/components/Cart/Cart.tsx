import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/productActions";
import { RootStateType } from "../../redux/reducers/rootReducer";
import { ProductType } from "../../types";
import formatCurrency from "../../utilities";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootStateType) => state.productReducer.cartItems
  );

  function handleRemoveFromCart(product: ProductType): void {
    dispatch(removeFromCart(product));
  }

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Your cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length}{" "}
          {cartItems.length === 1 ? "item" : "items"} in the cart.
        </div>
      )}
      <div className="cart">
        <ul className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </ul>
      </div>
      {cartItems.length > 0 && (
        <div>
          <div className="cart">
            <div className="cart-total">
              <div>
                Total: &nbsp;
                {formatCurrency(
                  cartItems.reduce((a, b) => a + b.price * b.inCartQuantity!, 0)
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

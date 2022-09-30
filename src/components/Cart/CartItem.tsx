import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import { ProductType } from "../../types";
import formatCurrency from "../../utilities";

const CartItem = ({
  cartItem,
  handleRemoveFromCart,
}: {
  cartItem: ProductType;
  handleRemoveFromCart: (cartItem: ProductType) => void;
}) => {
  return (
    <Fade triggerOnce cascade direction="left" duration={1000}>
      <li className="cart-item">
        <div>
          <img src={cartItem.img} alt={cartItem.name} />
        </div>
        <div>
          <div> {cartItem.name} </div>
          <div className="cart-right">
            {formatCurrency(cartItem.price)} x {cartItem.inCartQuantity}
            <Button
              id="btn-cart"
              variant="outline-danger"
              onClick={() => handleRemoveFromCart(cartItem)}
            >
              Remove
            </Button>
          </div>
        </div>
      </li>
    </Fade>
  );
};

export default CartItem;

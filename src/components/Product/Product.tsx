import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";

import { ProductType } from "../../types";
import formatCurrency from "../../utilities";
import "./Product.css";

const Product = ({
  product,
  handleAddToCart,
 
}: {
  product: ProductType;
  handleAddToCart: (product: ProductType) => void;
  openModal: (product: ProductType) => void;
}) => {
  return (
    <Fade triggerOnce cascade direction="left" duration={2000}>
      <li>
        <div className="product">
          <a href={"#" + product.id}>
            <img src={product.img} alt={product.name} /> <br /> <br />
            <p>{product.name}</p>
          </a>

          <div>
            <h2>{product.colour}</h2>
          </div>

          <div className="product-price">
            <div>{formatCurrency(product.price)}</div>
            <Button
              variant="warning"
              className="button"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </li>
    </Fade>
  );
};

export default Product;

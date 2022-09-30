import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../redux/actions/productActions";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();

  const handleSearchProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchProducts(event.target.value));
  };

  return (
    <div className="filter">
      <div className="search">
        <Form className="d-flex nv-search">
          <input
            type="text"
            placeholder="Search product by Colour..."
            className="me-2 sm nv-input"
            aria-label="Search"
            onChange={handleSearchProducts}
          />
        </Form>
      </div>
    </div>
  );
};

export default Filter;


import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import Products from "../Products/Products";

const Home = () => {


  return (
    <div className="app-container">
      <header>
        <div>
          <a href="/"> React Shopping Cart</a>
        </div>
        <div></div>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

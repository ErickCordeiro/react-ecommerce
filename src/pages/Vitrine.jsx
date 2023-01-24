import Discount from "../components/discount/Discount";
import Home from "../components/MainPage/Home";
import Shop from "../components/shops/Shop";
import Wrapper from "../components/wrapper/Wrapper";

function Vitrine({ productItems, addToCart, CartItem, shopItems }) {
  return (
    <>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Discount />
      <Wrapper />
    </>
  );
}

export default Vitrine

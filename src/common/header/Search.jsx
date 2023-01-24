import React from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Pesquisar por..." />
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div
              style={{ marginTop: "6px", marginLeft: "8px", fontSize: "12px" }}
            >
              <span>Faça o Login</span>
              <br />
              <span>ou Cadastre-se</span>
            </div>

            <Link to="/cart">
              <div className="f_flex">
                <div className="cart">
                  <i className="fa fa-shopping-bag icon-circle"></i>
                  <span>{CartItem.length === 0 ? 0 : CartItem.length}</span>
                </div>
                <div
                  style={{
                    marginTop: "6px",
                    marginLeft: "8px",
                    fontSize: "12px",
                  }}
                >
                  <span>Total</span>
                  <br />
                  <span>
                    {CartItem.length === 0
                      ? "0,00"
                      : totalPrice.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;

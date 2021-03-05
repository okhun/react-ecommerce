import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SearchedProducts, addToBasket, deleteFromBasket } from "../actions";
const RenderSearchResult = (props) => {
  useEffect(() => {
    const query = window.location.pathname.substring(17);
    props.searchedProducts(query);
  }, []);
  const imageSet = (image) => {
    return `http://wp.uzinfobiz.ru${image}`;
  };
  const addToBasket = (product) => {
    let basket = checkBasket(product);
    if (basket) {
      props.deleteFromBasket(product.id);
    } else {
      product.quantity = 1;
      product.subtotal = 1 * product.price;

      props.addToBasket(product);
    }
  };
  const checkBasket = (product) => {
    const inbasket = props.allproducts.basket;
    const result = inbasket.some((el) => el.id === product.id);
    return result;
  };

  if (props.allproducts.basket.length) {
    localStorage.setItem("bookmarks", JSON.stringify(props.allproducts.basket));
  }
  return (
    <div>
      <div className="mt-5">
        {props.allproducts.searchedProducts ? (
          props.allproducts.searchedProducts.map((el) => {
            return (
              <div className="card-box mb-3" style={{ maxWidth: "1100px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={imageSet(el.image)}
                      alt="..."
                      className="w-100 "
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{el.name}</h5>
                      <p className="card-text">{el.description}</p>
                      <p className="card-text">
                        <big className="text-muted">
                          Hurry up, Left {el.amount} on stock
                        </big>
                      </p>
                      <p className="card-text">Price: {el.price}$</p>
                      <button
                        onClick={() => {
                          addToBasket(el);
                        }}
                        className={
                          checkBasket(el)
                            ? "btn btn-secondary"
                            : "btn btn-primary"
                        }
                      >
                        {checkBasket(el) ? "Added to Basket" : "Add to Basket"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>"Nothig found this query"</div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps, {
  searchedProducts: SearchedProducts,
  addToBasket,
  deleteFromBasket,
})(RenderSearchResult);

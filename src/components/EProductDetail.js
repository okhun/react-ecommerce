import React, { useState, useEffect } from "react";
import { addToBasket, deleteFromBasket } from "../actions";
import { connect } from "react-redux";

const Productdetail = (props) => {
  const [product, changeProduct] = useState([]);

  let realproduct = [];
  useEffect(() => {
    let cleanupFunction = false;
    if (!cleanupFunction) findProductId();
    return () => (cleanupFunction = true);
  }, []);

  const findProductId = function () {
    const productPath = window.location.pathname;
    let productId = +productPath.substr(15, 4);
    if (productId) {
      fetchData(productId);
    }
  };

  const getDataFromArray = function (array, id) {
    const index = array.findIndex((el) => el.id === id);
    return array[index];
  };
  const fetchData = async function (id) {
    try {
      let productdetail = await fetch(
        `${process.env.PUBLIC_URL}/api/products.json`
      );
      let array = await productdetail.json();
      realproduct.push(getDataFromArray(array, id));

      changeProduct(realproduct);
    } catch (err) {
      console.log(err);
    }
  };
  const imageSet = (image) => {
    return `http://wp.uzinfobiz.ru${image}`;
  };
  const addToBasket = () => {
    let basket = checkBasket(product[0]);
    if (basket) {
      props.deleteFromBasket(product[0].id);
    } else {
      product[0].quantity = 1;
      product[0].subtotal = 1 * product[0].price;
      props.addToBasket(product[0]);
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
      <div>
        {product.length ? (
          <div className="card-box mb-3 mt-5" style={{ maxWidth: "1100px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={imageSet(product[0].image)}
                  alt="..."
                  className="w-100"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product[0].name}</h5>
                  <p className="card-text">{product[0].description}</p>
                  <p className="card-text">
                    <big className="text-muted">
                      Hurry up, Left {product[0].amount} on stock
                    </big>
                  </p>
                  <p className="card-text">Price: {product[0].price}$</p>
                  <button
                    onClick={() => {
                      addToBasket();
                    }}
                    className={
                      checkBasket(product[0])
                        ? "btn btn-secondary"
                        : "btn btn-primary"
                    }
                  >
                    {checkBasket(product[0])
                      ? "Added to Basket"
                      : "Add to Basket"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "Nothing found"
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addToBasket, deleteFromBasket })(
  Productdetail
);

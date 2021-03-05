import React from "react";
import { Link } from "react-router-dom";
import deleteImg from "./../images/icons/delete.svg";
import { connect } from "react-redux";
import { changeQuantityandSubtotal, deleteFromBasket } from "./../actions";
const Basket = function (props) {
  const addQuantity = function (product) {
    let index = props.allproducts.basket.findIndex(
      (el) => el.id === product.id
    );
    if (index >= 0) {
      if (props.allproducts.basket[index].quantity < product.amount) {
        let quantity = props.allproducts.basket[index].quantity + 1;

        props.changeQuantityandSubtotal({
          quantity,
          index,
        });
        localStorage.setItem(
          "bookmarks",
          JSON.stringify(props.allproducts.basket)
        );
      }
    }
  };
  const subtractQuantity = function (product) {
    let index = props.allproducts.basket.findIndex(
      (el) => el.id === product.id
    );

    if (index >= 0) {
      if (props.allproducts.basket[index].quantity > 1) {
        let quantity = props.allproducts.basket[index].quantity - 1;
        props.changeQuantityandSubtotal({
          quantity,
          index,
        });
        localStorage.setItem(
          "bookmarks",
          JSON.stringify(props.allproducts.basket)
        );
      }
    }
  };
  const changeQuantity = function (value, product) {
    let result = 0;
    props.allproducts.basket.forEach((el, i) => {
      result += el.subtotal;
    });

    let index = props.allproducts.basket.findIndex(
      (el) => el.id === product.id
    );

    if (index >= 0) {
      if (+value >= 1 && +value <= product.amount) {
        localStorage.setItem(
          "bookmarks",
          JSON.stringify(props.allproducts.basket)
        );
        props.changeQuantityandSubtotal({
          quantity: value,
          index,
        });
        localStorage.setItem(
          "bookmarks",
          JSON.stringify(props.allproducts.basket)
        );
      }
    }
  };
  const removeFromBasket = function (product) {
    localStorage.setItem("bookmarks", JSON.stringify(props.allproducts.basket));
    props.deleteFromBasket(product.id);
    localStorage.setItem("bookmarks", JSON.stringify(props.allproducts.basket));
  };
  const imageSet = (image) => {
    return `http://wp.uzinfobiz.ru/${image}`;
  };
  const calcTotal = function () {
    let result = 0;
    props.allproducts.basket.forEach((el, i) => {
      result += el.subtotal;
    });
    return result;
  };
  if (props.allproducts.basket.length) {
    localStorage.setItem("bookmarks", JSON.stringify(props.allproducts.basket));
  }
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-9">
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Products in Basket</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {props.allproducts.basket &&
                  props.allproducts.basket.map((product) => (
                    <tr key={product.id}>
                      <th>
                        <div className="d-flex">
                          <img
                            src={imageSet(product.image)}
                            alt="..."
                            className="table-image"
                          ></img>
                          <h6 className="pl-3 mt-3">{product.name}</h6>
                        </div>
                      </th>
                      <td>
                        <div className="mt-3">
                          <h5>{product.price}$</h5>
                          <h6>Left {product.amount}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="input-group mb-3 form-width mt-4">
                          <span
                            onClick={() => {
                              addQuantity(product);
                            }}
                            className="input-group-text"
                          >
                            +
                          </span>
                          <input
                            onChange={(e) => {
                              changeQuantity(e.target.value, product);
                            }}
                            min="1"
                            max={product.amount}
                            value={product.quantity}
                            type="number"
                            className="form-control form-control-input"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <span
                            onClick={() => {
                              subtractQuantity(product);
                            }}
                            className="input-group-text"
                          >
                            -
                          </span>
                        </div>
                      </td>
                      <td>
                        <h5 className="mt-3">{product.subtotal}$</h5>
                        <button
                          onClick={() => {
                            removeFromBasket(product);
                          }}
                          className="btn btn-secondary"
                        >
                          <img src={deleteImg} alt="delete"></img>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <div
              className="card text-center "
              style={{ width: "100%", height: "100%" }}
            >
              <div className="card-body">
                <h5 className="card-title">Total Price</h5>
                <p className="card-text">
                  Total:
                  {calcTotal()}$
                </p>
                <Link to="/checkout" className="btn btn-primary">
                  Order product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps, {
  changeQuantityandSubtotal,
  deleteFromBasket,
})(Basket);

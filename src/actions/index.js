import fetchAll from "./fetch";
export const SearchedProducts = (query) => {
  return async (dispatch) => {
    let actualdata = await fetchAll();
    let temp = [];
    actualdata.forEach((el) => {
      if (
        el.name.toLowerCase().includes(query.toLowerCase()) ||
        el.description.toLowerCase().includes(query.toLowerCase())
      ) {
        temp.push(el);
      }
    });

    dispatch({ type: "SEARCHED_PRODUCTS", payloads: temp });
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    const data = await fetch(`api/products.json`);
    const actualdata = await data.json();
    dispatch({ type: "GETALL_PRODUCTS", payloads: actualdata });
  };
};

export const addToBasket = (product) => {
  return {
    type: "ADD_TO_BASKET",
    payloads: product,
  };
};

export const deleteFromBasket = (id) => {
  return {
    type: "DELETE_FROM_BASKET",
    payloads: id,
  };
};

export const changeQuantityandSubtotal = function (quantity) {
  return {
    type: "CHANGE_QUANTITY",
    payloads: quantity,
  };
};

export const uploadToBasket = function (newBasket) {
  return {
    type: "ADD_TO_BASKET_FROM",
    payloads: newBasket,
  };
};

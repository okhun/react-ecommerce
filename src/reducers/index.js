import { combineReducers } from "redux";
const data = {
  searchedProducts: [],
  allproducts: [],
  basket: [],
};

const ProductReducer = (state = data, action) => {
  switch (action.type) {
    case "SEARCHED_PRODUCTS":
      return { ...state, searchedProducts: [...action.payloads] };
    case "GETALL_PRODUCTS":
      return { ...state, allproducts: [...action.payloads] };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payloads] };
    case "DELETE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payloads),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((content, i) =>
          i === action.payloads.index
            ? {
                ...content,
                ...{
                  quantity: action.payloads.quantity,
                  subtotal: content.price * action.payloads.quantity,
                },
              }
            : content
        ),
      };

    case "ADD_TO_BASKET_FROM":
      return { ...state, basket: action.payloads };

    case "ADD_ALL_PRODUCT":
      console.log(action.payloads);
      return { ...state, allproducts: action.payloads };
    default:
      return state;
  }
};

export default combineReducers({
  allproducts: ProductReducer,
});

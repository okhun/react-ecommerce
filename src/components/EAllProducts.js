import React, { useState } from "react";
import { connect } from "react-redux";
import fetchAll from "./../actions/fetch";
import ETopProduct from "./ETopProduct";

const Allproducts = (props) => {
  const [products, setProducts] = useState([]);
  const tempFetch = async function () {
    let alldata = await fetchAll();
    setProducts(alldata);
  };
  tempFetch();

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        {products
          ? products.map((el) => {
              return <ETopProduct product={el} key={el.id} />;
            })
          : "No"}
      </div>
    </div>
  );
};
const mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps)(Allproducts);

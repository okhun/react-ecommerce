import React from "react";
import { connect } from "react-redux";
import { getAllProducts, uploadToBasket } from "./actions/";
import EsearchBar from "./components/EsearchBar";
import EAllProducts from "./components/EAllProducts";
import EProductDetail from "./components/EProductDetail";
import ERenderSearchResult from "./components/ERenderSearchResult";
import EBasket from "./pages/EBasket";

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getAllProducts();
  }

  async componentDidMount() {
    let bookmark;
    const storage = localStorage.getItem("bookmarks");
    if (storage) {
      bookmark = JSON.parse(storage);
      this.props.uploadToBasket(bookmark);
    }
  }

  render() {
    return (
      <div className="container bg-white mt-5 container-h-100">
        <BrowserRouter>
          <EsearchBar />
          <Route path="/basket" exact component={EBasket} />
          <Route path="/" exact component={EAllProducts} />
          <Route path="/searchfor" component={ERenderSearchResult} />
          <Route path="/productdetail" component={EProductDetail} />
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { allproducts: state.allproducts };
};

export default connect(mapStateToProps, { getAllProducts, uploadToBasket })(
  App
);

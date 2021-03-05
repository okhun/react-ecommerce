import React from "react";
import { connect } from "react-redux";
import { SearchedProducts } from "./../actions";
import { Link, withRouter } from "react-router-dom";
import basketIcon from "../images/icons/basket.svg";
import login from "../images/icons/login.svg";
class EsearchBar extends React.Component {
  state = { inputValue: "", path: "/searchfor" };
  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }
  handleSubmit(e) {
    this.props.searchedProducts(this.state.inputValue);
    this.props.history.push(`/searchfor/query=${this.state.inputValue}`);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light rounded navbar-light">
          <form className="form-inline mr-auto">
            <h2>
              <Link to="/">HOME</Link>
            </h2>
            <input
              onChange={(e) => {
                this.handleInput(e);
              }}
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                this.handleSubmit(e);
              }}
              className="btn btn-primary"
              type="submit"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>

          <ul className="navbar-nav">
            <li className="nav-item active mx-2">
              <h5>
                <span>
                  <img src={login} alt="login"></img>
                </span>{" "}
                Log in
              </h5>
            </li>
            <li className="nav-item mx-2">
              <h5>
                <Link to="/basket" className="text-decoration-none">
                  <span>
                    <img src={basketIcon} alt="basket"></img>
                  </span>{" "}
                  Basket
                  <span className="num-of-pro bg-danger text-white rounded p-1">
                    {this.props.products.allproducts.basket.length}
                  </span>
                </Link>
              </h5>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { products: state };
};
export default connect(mapStateToProps, { searchedProducts: SearchedProducts })(
  withRouter(EsearchBar)
);

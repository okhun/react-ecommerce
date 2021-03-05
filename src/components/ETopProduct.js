import React from "react";
import { Link } from "react-router-dom";
class EProductCard extends React.Component {
  imageSet = (image) => {
    return `http://wp.uzinfobiz.ru/${image.image}`;
  };
  trancateTitle(title, length) {
    if (title.length > length) {
      title = title.substring(0, length) + "...";
    }
    return title;
  }
  render() {
    let productdetail = "productdetail";
    productdetail = productdetail.replace(
      "productdetail",
      `/productdetail/${this.props.product.id}`
    );
    return (
      <div className=" mx-1">
        <div className="card" style={{ width: "220px" }}>
          <img
            className="card-img-top w-100"
            src={this.imageSet(this.props.product)}
            style={{ height: "160px" }}
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.trancateTitle(this.props.product.name, 20)}
            </h5>
            <p className="card-text">
              {this.trancateTitle(this.props.product.description, 50)}
            </p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <div className="d-flex mt-3 justify-content-between">
              <h6 className="">${this.props.product.price}</h6>
              <p className="bg-primary text-white p-1">
                <Link to={productdetail} className="text-white">
                  MORE INFO
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EProductCard;

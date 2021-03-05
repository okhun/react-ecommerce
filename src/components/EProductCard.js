import React from "react";
// import './main.css';
class EProductCard extends React.Component {
  state = {
    img:
      "https://i.pinimg.com/736x/ec/f4/34/ecf43461b07a9617be7eb7f0676b6691.jpg",
  };
  render() {
    return (
      <div className=" mx-1">
        <div className="card" style={{ width: "200px" }}>
          <img
            className="card-img-top w-100"
            src={this.props.image[this.props.i].rasm}
            style={{ height: "160px" }}
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">Mahsulot Sarlavhasi</h5>
            <p className="card-text">Mahsulot detallari, turi rusumi</p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <h6 className="mt-3">120 000 so'm</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default EProductCard;

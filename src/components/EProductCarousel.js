import React from "react";
import EProductCard from "./EProductCard";
class EProductCarousel extends React.Component {
  state = {
    i: 0,
    init: 0,
    start: 0,
    end: 4,
    images: [
      {
        rasm:
          "https://kolesa-uploads.ru/-/d3c9bbb1-413b-479d-942f-2ef103bd5b72/9d9a22cb64150c041349c67e174c8730.jpg",
      },
      {
        rasm:
          "https://im0-tub-com.yandex.net/i?id=5ee616deca1387833f847e0989f9ab72&n=13",
      },
      {
        rasm:
          "https://images.wallpaperscraft.com/image/bmw_m5_f10_yas_marina_blue_95266_1280x1024.jpg",
      },
      {
        rasm:
          "https://avatars.mds.yandex.net/get-zen_doc/1112006/pub_5d85c60f34808200ad2fd32e_5d85c64d1ee34f00ae8af521/scale_1200",
      },
      {
        rasm:
          "https://im0-tub-com.yandex.net/i?id=5ee616deca1387833f847e0989f9ab72&n=13",
      },
      {
        rasm:
          "https://dikoed.ru/upload/iblock/666/14828-steyki-iz-verblyuzhatiny-v-glazuri.jpg",
      },
      {
        rasm:
          "https://im0-tub-com.yandex.net/i?id=5ee616deca1387833f847e0989f9ab72&n=13",
      },
    ],
  };
  handleResize = () =>
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  prevCard = () => {
    if (this.state.start >= 1) {
      this.setState({ start: this.state.start - 1, end: this.state.end - 1 });
    }
  };
  nextCard = () => {
    if (this.state.end <= this.state.images.length - 2) {
      this.setState({ start: this.state.start + 1, end: this.state.end + 1 });
    }
  };
  productCard = () => {
    let massiv = [];

    for (let i = this.state.start; i <= this.state.end; i++) {
      massiv.push(
        <EProductCard
          i={i}
          image={this.state.images}
          className="overflow-hidden"
        />
      );
    }
    return massiv;
  };
  cardColum = () => {
    if (window.innerWidth === 993) {
      // this.setState({ end: 2 });
    }
  };
  render() {
    console.log(window.innerWidth);
    return (
      <div className="my-5">
        <h1 className="my-5 ml-5">New Products</h1>
        <div className="row">
          <div className="col-1 mt-5">
            <button onClick={this.prevCard} className="btn  btn-outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
          </div>

          <div className="col-10 d-flex flex-nowrap overflow-hidden w-100">
            <div
              className="d-flex mr-0"
              style={{ transform: `translate(${this.state.init}px, ${0}px)` }}
            >
              {this.productCard()}
            </div>
          </div>

          <div className="col-1 mt-5">
            <button onClick={this.nextCard} className="btn btn-outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EProductCarousel;

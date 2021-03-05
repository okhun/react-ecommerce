import React from 'react';
// import './main.css';
class ECarousel extends React.Component{
state = {
    image: "https://img-fotki.yandex.ru/get/196534/357428726.a1/0_16d578_2fd490c8_orig",
    image2: "https://im0-tub-ru.yandex.net/i?id=a0d66441d501871bd6ee41d4484c056e-l&ref=rim&n=13&w=1080&h=1339",
}


    render(){
        return (
            <div className="row">
                <div className="col-9">
<img src={this.state.image} className="w-100" alt="asdf"></img>
                </div>
                <div className="col-3">
                <img src={this.state.image2} className="w-100" alt="asdf"></img>
                </div>
            </div>
        );
    }
}

export default ECarousel;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfferCarousel = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const searchText = [
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/fef1c23137a2e722.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/e1ccefe674a248d6.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/35db29f2b0267c6c.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/ae4617aaed68ec83.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/bce1333cb44de608.jpg?q=50",

  ];

  return (
    <div className="relative ">
      <div className="mx-auto w-full ">
        <Slider {...settings}>
          {searchText.map((item) => (
            <div className=""  key={item}>
              <img src={item} alt="sea" />
            </div>
          ))}
        </Slider>
        <style jsx>{`

.slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus {
      background-color: #537a09;
}
          .slick-prev:before,
          .slick-next:before {
            color: #d5f0a3;
          }
          .slick-prev,
          .slick-next {
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background-color: #537a09;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          }
          .slick-prev {
            top: 120px;
            left: 0px;
          }
          .slick-next {            
            top: 120px;
            right: 0px;
          }
        `}</style>
      </div>
      <div>
        <img className="w-screen shadow-lg" src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/31bc5f75424dd33c.jpg?q=50" />
      </div>
    </div>
  );
}


export default OfferCarousel
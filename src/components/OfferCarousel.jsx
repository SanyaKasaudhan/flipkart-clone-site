
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
"https://www.shutterstock.com/image-vector/blueberry-yogurt-ads-delicious-commercial-600w-1023594961.jpg",
"https://www.shutterstock.com/image-vector/strawberry-ice-cream-sandwich-wafer-600w-1090844753.jpg",
"https://www.shutterstock.com/image-vector/smartphone-tablet-laptop-smartwatch-headphones-600w-1641619534.jpg",
"https://www.shutterstock.com/image-vector/beauty-make-banner-template-cosmetic-600w-1927734332.jpg",
"https://www.shutterstock.com/image-vector/strawberry-yogurt-ads-milk-fruit-600w-1096790909.jpg",
"https://www.shutterstock.com/image-vector/web-site-landing-page-3d-600w-1934575964.jpg",
"https://www.shutterstock.com/image-vector/web-page-design-grocery-store-600w-1445961677.jpg",

  ];

  return (
    <div className="relative ">
      <div className="mx-auto pt-5 w-[750px] px-6">
        <Slider {...settings}>
          {searchText.map((item) => (
            <div className=""  key={item}>
              <img src={item} alt="sea" />
            </div>
          ))}
        </Slider>
        <style jsx>{`
          .slick-prev:before,
          .slick-next:before {
            color: orange;
          }

          .slick-prev:hover,
          .slick-next:hover {
            background-color: #dfa4f5;
          }

          .slick-prev,
          .slick-next {
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background-color: purple;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          }
          .slick-prev {
            top: 100px;
            left: -70px;
          }
          .slick-next {            
            top: 100px;
            right: 30px;
          }
        `}</style>
      </div>
    </div>
  );
}


export default OfferCarousel
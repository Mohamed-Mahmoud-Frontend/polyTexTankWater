import Slider from "react-slick";
import tank from '../../assets/tankHeader.png'
export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <div className="overflow-hidden slider-container">

    <Slider {...settings} className="">

      <div>
        <img src={tank} alt="tankWater" />
      </div>
      <div>
        <img src={tank} alt="tankWater" />
      </div>
      <div>
      <img src={tank} alt="tankWater" />
    </div>
    </Slider>
    </div>
  );
}
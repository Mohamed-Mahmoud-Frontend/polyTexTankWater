import Slider from "react-slick";
import tank from '../../assets/tankHeader.png'
export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
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
  );
}
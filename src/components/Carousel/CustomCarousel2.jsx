import Slider from "react-slick";
import tank from "../../assets/tank.jpeg";

export default function CustomCarousel2() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    cssEase: "linear"
  };
  return (
    <div className="overflow-hidden  slider-container">

    <Slider {...settings} className="">

      <div>
        <img src={tank} alt="tankWater" className="p-2 rounded-xl"  />
      </div>
      <div>
        <img src={tank} alt="tankWater"  className="p-2 rounded-xl" />
      </div>
      <div>
      <img src={tank} alt="tankWater"  className="p-2 rounded-xl" />
    </div>
    </Slider>
    </div>
  );
}
import Slider from "react-slick";
import tank from "../../assets/tank.jpeg";

function CustomPaging() {
  const settings = {
    customPaging: function() {
      return (
        <a>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className=" ">
      <Slider {...settings} className="image-gallery">
        <div>
          <img src={tank} />
        </div>
        <div>
          <img src={tank} />
        </div>
        <div>
          <img src={tank} />
        </div>
        <div>
          <img src={tank} />
        </div>
      </Slider>
    </div>
  );
}

export default CustomPaging;

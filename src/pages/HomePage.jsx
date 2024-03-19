import "swiper/swiper-bundle.css";
import work from "../assets/work.svg";
import logo from "../assets/LogoPoly.png";

const cardData = [
  {
    title: "منتجاتنا ذات جودة عالية",
    description:
"لاننا في فريق عمل بولي تكس نهتم بالجودة والاتقان",    image: logo,
  },
  {
    title: "الدقة والاتقان",
    description: "نحن نهتم بالتفاصيل في منتجاتنا واعمالنا تتميز بالدقة",
    image: logo,
  },

  {
    title: "التسليم والالتزام",
    description: "نحن في بولي تكس نسلمك في وقت قياسي",
    image: logo,
  },
];

const HomePage = () => {
  return (
    <div className="relative flex flex-col">
      <div className=" h-screen overflow-hidden  top-[105px] flex flex-col imageBack">
        <main className="relative h-[100ch] ">
          <div></div>
          <div className=" ocean">
            <div className="wave"></div>
            <div className="wave wave2"></div>
          </div>
        </main>
      </div>

      <div>
        <h3 className="text-4xl font-[700]  text-center text-color">
          بولي تكس لصناعة خزانات المياة
        </h3>

        <p className="text-xl w-[80%] mx-auto  font-[400] mt-5  text-center text-color-p">
          شركة بولي تكس لتصنيع خزانات المياة البولي ايثيلين هي واحدة من كبري
          شركات تصنيع خزانات المياة في مصر، شركه بولي تكس PoLY TEX لاول مره في
          مصر خزانات مزوده بجلب نحاس لسهوله الفتح والتركيب العشوائي
        </p>
      </div>

      <div className="flex items-center justify-between w-full gap-8 px-8 mt-16 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col border card rounded hover:bg-[#378CE7] hover:text-white items-center justify-center gap-2 px-4 py-4 h-[200px] text-center min-w-[25%] text-[#707d99]"
          >
            <div className="px-4 images">
              <img className="w-[50px] h-[50px]  " src={card.image} alt="green iguana" />
            </div>
            <div>
              <b >{card.title}</b>
            </div>
            <div>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

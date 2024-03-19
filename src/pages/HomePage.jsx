import "swiper/swiper-bundle.css";
import logo from "../assets/LogoPoly.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const cardData = [
  {
    title: "منتجاتنا ذات جودة عالية",
    description: "لاننا في فريق عمل بولي تكس نهتم بالجودة والاتقان",
    image: logo,
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

      <div className="mt-[70px] max-md:mt-[0px] ">
        <h3 className="text-4xl font-[700]  text-center text-color">
          بولي تكس لصناعة خزانات المياة
        </h3>

        <p className="text-xl w-[80%] max-md:w-[95%] mx-auto  font-[400] mt-5  text-center text-color-p">
          شركة بولي تكس لتصنيع خزانات المياة البولي ايثيلين هي واحدة من كبري
          شركات تصنيع خزانات المياة في مصر، شركه بولي تكس PoLY TEX لاول مره في
          مصر خزانات مزوده بجلب نحاس لسهوله الفتح والتركيب العشوائي
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between w-full gap-8 px-8 mt-16 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col border  card rounded hover:bg-[#378CE7] hover:text-white items-center justify-center gap-2 px-4 py-4 h-[200px] text-center min-w-[25%] text-[#707d99]"
          >
            <div className="px-4 images">
              <img
                className="w-[50px] h-[50px]  "
                src={card.image}
                alt="green iguana"
              />
            </div>
            <div>
              <b>{card.title}</b>
            </div>
            <div>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="py-6 text-white mt-10 bg-[#378CE7] min-h-60 rounded-xl">
        <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-2 text-lg font-bold">عنوان المتجر</h4>
            <p>مثال: شارع الشهيد أحمد عبد العزيز، القاهرة، مصر</p>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold">التواصل</h4>
            <p>هاتف: 0123456789</p>
            <p>بريد إلكتروني: example@example.com</p>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold">سياسة المتجر</h4>
            <ul>
              <li>شروط الاستخدام</li>
              <li>سياسة الخصوصية</li>
              <li>المراجعات والشكاوى</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold">متابعتنا</h4>
            <div className="flex gap-4 addAnimation">
              <a href="#" className="text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

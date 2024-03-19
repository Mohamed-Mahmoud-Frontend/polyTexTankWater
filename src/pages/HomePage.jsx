import "swiper/swiper-bundle.css";
import logo from "../assets/LogoPoly.png";
import tank from "../assets/tank.jpeg";
import whatsapp from "../assets/WhatsApp.svg.webp";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Carousel from "../components/Carousel/Carousel";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Map from "../components/Map/Map";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

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
    <Link className="fixed bottom-12 z-40 left-4  " to='https://api.whatsapp.com/send/?phone=201091008926&text&type=phone_number&app_absent=0'>
    <img src={whatsapp} className="max-w-12" alt="" />
    </Link>
      <div className=" h-screen overflow-hidden  top-[105px] flex flex-col imageBack">
        <main className="relative h-[100ch] ">
          <div></div>
          <div className=" ocean">
            <div className="wave"></div>
            <div className="wave wave2"></div>
          </div>
        </main>
      </div>
      <AnimationOnScroll animateIn="fadeIn" delay={50} duration={50}>
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
      </AnimationOnScroll>

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
      <div>
        <Carousel />
      </div>

      <section className="w-[99%] rounded-xl mx-auto bg-[#ecf3f5] flex gap-4 max-md:flex-wrap items-center justify-between">
        <div className="p-3 rounded addAnimationPageHome">
          <img src={tank} alt="" className="rounded" />
        </div>

        <div className="w-[50%] max-md:w-[100%] p-4">
          <h3 className="text-4xl text-color p-3">
            نحن نعمل باتقان وجودة عالية
          </h3>
          <p className="text-color-p text-lg">
            شركة بولي تكس شركة متخصصة في توريد وتصنيع أفضل وأجود أنواع الخزانات
            البولي ايثيلين المستخدمه في تخزين مياه الشرب وتخزين المواد الغذائية
            والمواد الكميائية. للأول مرة فى مصر خزانات بولى ايثيلين مزوده بجلب
            نحاس لضمان سلامة الخزان من التفتيح العشوائي ولتوفي مستلزمات التوصيل
            للمستهلك.
          </p>

          <div className="flex gap-4 mt-5 items-center justify-start">
            <button className="border px-2 py-2 rounded text-[#378CE7] hover:bg-[#378CE7] hover:text-white bg-white ">
              تواصل معنا
            </button>
            <button className="border px-2 py-2 bg-[#378CE7] text-white rounded hover:bg-white  hover:text-[#378CE7]">
              تعرف علينا
            </button>
          </div>
        </div>
      </section>

      <section className="w-[99%] mt-[80px] p-5 rounded-xl mx-auto bg-gradient-to-r from-[#ecf3f5] to-[#378CE7] flex gap-4 max-md:flex-wrap items-center justify-between">
        <div className="w-[50%] max-md:w-[100%] p-4 gap-3 flex flex-col">
          <b className="text-white font-bold pr-3 text-base ">
            نحن شركة بولي تكس
          </b>
          <h3 className="text-4xl text-white p-3">
            رواد صناعة خزانات المياة البولي ايثيلين{" "}
          </h3>
          <p className="text-white text-base">
            في شركة بولي تكس نقدم جميع انواع خزانات المياة بجميع الخامات
            والمقاسات، لدينا ايضا جميع اشكال اكشاك الحراسة المصنعة من الفيبر
            جلاس. خزانات المياة مصنوعة من مادة البولي ايثيلين وتستخدم في تخزين
            المياة والكيماويات والمواد البترولية، فهي مصنوعة من الايثيلين
            المعالج غذائيا وتمت الموافقة على صلاحيتها لتخزين مياه الشرب. تبدأ
            سعة هذه الخزانات من 500 لتر إلى 20000 لتر بأشكال مختلفة
          </p>

          <div className="flex gap-4 mt-5 items-center justify-start">
            <button className="border px-2 py-2 rounded text-[#378CE7] hover:bg-[#378CE7] hover:text-white bg-white ">
              المزيد من منتجاتنا{" "}
            </button>
            <button className="border px-2 py-2 bg-[#378CE7] text-white rounded hover:bg-white  hover:text-[#378CE7]">
              تواصل معنا{" "}
            </button>
          </div>
        </div>

        <div className="p-3 rounded addAnimationPageHome2">
          <img src={tank} alt="" className="rounded" />
        </div>
      </section>

      <section className="mt-16 w-[99%] flex-row flex items-start justify-between mx-auto bg-gray-100 p-4">
        <div className="w-[50%] relative max-md:w-[100%]">
          <Map />
        </div>

        <div className="w-[50%] relative max-md:w-[100%] p-5">
          <h2 className="text-color text-4xl">
            نحن جاهزون لتلقي طلباتكم
          </h2>
          <p className="text-[#378CE7] mt-3 text-3xl">علي مدار اليوم</p>

<div className="mt-8 flex items-start gap-3 justify-around" >
<div className="">
<h4 className="text-color text-xl">ارقام التواصل</h4>
<div  className="flex items-center  gap-4 mt-3">
<div>
<VscVerifiedFilled className="fill-[#378CE7] text-xl"/>
</div>
<div className="flex flex-col gap-2 text-lg text-color-p">
<p className="text-base">01091008926</p>
<p className="text-base">01224235523</p>

</div>
</div>
</div>




<div className="mr-5">
<h4 className="text-color text-xl">العنوان </h4>
<div  className="flex items-center  gap-4 mt-3">
<div>
<VscVerifiedFilled className="fill-[#378CE7] text-xl"/>
</div>
<div className="flex flex-col gap-2 text-lg text-color-p">
<p className="text-sm">مصطفي النحاس – مدينة نصر – القاهرة</p>

</div>
</div>
</div>







</div>



<div className="mt-8 flex items-start gap-3 justify-around" >
<div className="">
<h4 className="text-color text-xl">بريدنا الالكتروني
</h4>
<div  className="flex items-center  gap-4 mt-3">
<div>
<VscVerifiedFilled className="fill-[#378CE7] text-xl"/>
</div>
<div className="flex flex-col gap-2 text-lg text-color-p">
<p className="text-base">info@polytex-eg.com
</p>
<p className="text-base">sales@polytex-eg.com

</p>

</div>
</div>
</div>




<div className="mr-5">
<h4 className="text-color text-xl">أيام العمل
</h4>
<div  className="flex items-center  gap-4 mt-3">
<div>
<VscVerifiedFilled className="fill-[#378CE7] text-xl"/>
</div>
<div className="flex flex-col gap-2 text-lg text-color-p">
<p className="text-sm">  من السبت الي الخميس :من9صباحا حتي 5مساءا

</p>

</div>
</div>
</div>







</div>
<div className="flex flex-col gap-3 p-1 items-start justify-center mt-3 mr-12 ">
            <h4 className="mb-2 text-color text-xl font-bold">متابعتنا</h4>
            <div className="flex gap-4 addAnimation">
              <a href="#" className="text-white">
                <FaFacebook size={24}  className="fill-[#378CE7]" />
              </a>
              <a href="#" className="text-white">
                <FaTwitter size={24} className="fill-[#378CE7]" />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={24} className="fill-[#378CE7]" />
              </a>
            </div>
          </div>

        </div>
      </section>

      <footer className="py-6 text-white mt-10 bg-[#378CE7] min-h-60 rounded-xl">
        <div className="container grid grid-cols-1 gap-8 mx-auto max-sm:grid-cols-1 max-sm:px-5 md:grid-cols-4">
          <div className="flex flex-col gap-3 p-1 ">
            <h4 className="mb-2 text-color text-lg font-bold">العنوان : </h4>
            <p className="">مصطفي النحاس – مدينة نصر – القاهرة</p>
            </div>
          <div className="flex flex-col gap-3 p-1 ">
            <h4 className="mb-2 text-lg font-bold text-color ">التواصل</h4>
            <p className="text-base cursor-pointer">هاتف: 201091008926+</p>
            <p className="text-[16px] cursor-pointer">
              بريد إلكتروني: Sales@polytex-eg.com
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-color text-lg font-bold">سياسة المتجر</h4>
            <ul className="flex flex-col gap-3 p-1 ">
              <li>شروط الاستخدام</li>
              <li>سياسة الخصوصية</li>
              <li>المراجعات والشكاوى</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 p-1 ">
            <h4 className="mb-2 text-color text-lg font-bold">متابعتنا</h4>
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
        <div></div>
      </footer>
    </div>
  );
};

export default HomePage;

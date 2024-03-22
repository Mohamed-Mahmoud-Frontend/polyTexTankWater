import CustomPaging from "../components/Carousel/CustumCarousel";
import Footer from "../components/Footer";
import CustomCarousel2 from "../components/Carousel/CustomCarousel2";

const About = () => {
  return (
    <div
      className='relative w-full top-[110px] bg-[#fff] h-screen '>
<header className="w-full  h-16 text-center flex items-center mt-5 justify-center  shadow bg-[#fff] text-[#378CE7] p-6">
<h4 className="text-5xl"> عن الشركة</h4>
</header>
<section className="w-[99%]  mt-[80px] p-5 rounded-xl mx-auto bg-gradient-to-r from-[#ecf3f5] to-[#378CE7] flex gap-4 max-md:flex-wrap items-center justify-between">
<div className="w-[50%] max-md:w-[100%] p-4 gap-3 flex flex-col">

  <h3 className="text-4xl text-white p-3">
  شركة بولي تكس لصناعة خزانات المياة
  </h3>
  <div className="text-white">
  <p className="text-base">
    نبذة عن شركة بولي تكس ومنتجاتها:
  </p>
  <p className="text-base">
    شركة بولي تكس متخصصة في صناعة وتجارة خزانات المياة البولي إيثيلين، وتتميز منتجاتنا بجودتها ومتانتها. نقدم خزانات بولي إيثيلين بمختلف الأحجام والمقاسات، تبدأ من 500 لتر وتصل إلى 20000 لتر، بتصاميم أفقية ورأسية، مصنعة وفقًا لأحدث المواصفات.
  </p>
  <p className="text-base ">
    تعتبر منتجاتنا صالحة لتخزين مياه الشرب والمواد الغذائية والكيماويات. تأتي الخزانات باللون الأبيض وتتميز بثلاث طبقات: الطبقة الخارجية بيضاء لتقليل التأثيرات الضارة لأشعة الشمس، والطبقة الوسطى مصنوعة من مادة اكسيد الكربون الأسود لعدم تفاعلها مع الأشعة الضارة، والطبقة الداخلية البيضاء الملساء لنقاء المياه ومنع تكون البكتيريا والطحالب بالداخل.
  </p>
  <p className="text-base">
    بالإضافة إلى ذلك، نقدم خزانات باللون الأسود، وتتوفر بطبقتين وصالحة لتخزين مياه الشرب والمواد الغذائية والكيماويات. كما نقدم خزانات من الاستانلس ستيل بسعة تتراوح بين 1100 لتر إلى 10000 لتر، بتصاميم أفقية ورأسية.
  </p>
  <p className="text-base">
    لدينا فريق عمل متكامل لخدمة ما بعد البيع وصيانة الخزانات وفقًا لشهادة الضمان، ونقدم التحسينات المستمرة لمنتجاتنا بطريقة احترافية.
  </p>
</div>

  <div className="flex gap-4 mt-5 items-center justify-start">
    <button className="border px-2 py-2 rounded text-[#378CE7] hover:bg-[#378CE7] hover:text-white bg-white ">
      المزيد من منتجاتنا{" "}
    </button>
    <button className="border px-2 py-2  bg-[#378CE7] text-white rounded hover:bg-white  hover:text-[#378CE7]">
      تواصل معنا
    </button>
  </div>
</div>

<div className="p-3 rounded w-[45%] max-md:w-full">
<CustomPaging/></div>
</section>



<header className="w-full  h-16 text-center flex items-center mt-16 justify-center  shadow bg-[#fff] text-[#378CE7] p-6">
<h4 className="text-5xl"> الاعتمادات
</h4>
</header>

<div className="w-[100%] max-md:w-[100%] items-center justify-center p-4 gap-3 flex flex-col">



<div className="p-3 rounded w-[100%] items-center justify-center max-md:w-full">
<CustomCarousel2/>
</div>


</div>



<Footer/>

    </div>
  )
}

export default About
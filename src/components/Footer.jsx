import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
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
  )
}

export default Footer
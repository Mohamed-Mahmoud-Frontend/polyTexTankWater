import { Link } from "react-router-dom";
import logo from "../../assets/LogoPoly.png";
const NavBar = () => {
  return (
    <div>
      <div className="h-10 bg-[#3BBA9C] flex items-center justify-center gap-5 ">
        <p className="text-[#364069]  font-medium">
          بولي تكس رواد صناعة خزانات المياه البولي ايثيلين
        </p>
        <span className="flex items-center justify-center gap-5">
          <p className="text-[#364069] font-medium cursor-pointer">
            201091008926+
          </p>
          <p className="text-[#364069] font-medium cursor-pointer">
            Sales@polytex-eg.com
          </p>
        </span>
      </div>
      <nav className="bg-[#3C3F58] h-[70px] shadow-xl">
        <div className="container px-4 py-2 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 bg-white rounded-xl">
              <Link to="/" className="flex items-center text-white">
                <div className="max-w-[150px]">
                  <img src={logo} alt="" />
                </div>
              </Link>
            </div>
            <div className="">
              <div className="flex items-center gap-5">
                <Link to="/" className="text-white hover:text-gray-300">
                  الرئيسية
                </Link>
                <Link to="/about" className="text-white hover:text-gray-300">
                  عن الشركة
                </Link>

                <Link to="/services" className="text-white hover:text-gray-300">
                  الاعتمادات
                </Link>
                <Link to="/products" className="text-white hover:text-gray-300">
                  خزانات المياه
                </Link>
                <Link to="/gallery" className="text-white hover:text-gray-300">
                  المنتجات
                </Link>
                <Link to="/gallery" className="text-white hover:text-gray-300">
                  المعرض
                </Link>
                <Link to="/gallery" className="text-white hover:text-gray-300">
                  اتصل بنا
                </Link>
              </div>
            </div>

            <div>
              <button className="text-[#1878F5] bg-white p-2 rounded-lg">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

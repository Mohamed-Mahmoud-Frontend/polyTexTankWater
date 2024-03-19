import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LogoPoly.png';
import { Cancel,  } from '@mui/icons-material';

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const windowSizes = windowWidth >= 900;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed top-0 z-10'>
      <div className="h-10 bg-[#DFF5FF] flex items-center justify-center gap-5">
        <p className="text-[#364069] font-medium  block">
          بولي تكس رواد صناعة خزانات المياه البولي ايثيلين
        </p>
        <span className="flex items-center justify-center gap-5 md:flex">
          <p className="text-[#364069] font-medium cursor-pointer">Sales@polytex-eg.com</p>
          <p className="text-[#364069] font-medium cursor-pointer">201091008926+</p>
        </span>
      </div>

      {windowSizes ? (
        <nav className="bg-[#378CE7] shadow-xl flex items-start w-screen justify-between">
          <div className="w-full px-8 py-2 ">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0 bg-white rounded-xl">
                <Link to="/" className="flex items-center text-white">
                  <div className="max-w-[150px]">
                    <img src={logo} alt="" />
                  </div>
                </Link>
              </div>

              <div className={`md:flex flex-col md:flex-row md:items-center `}>
                <div className="items-center gap-5 md:flex">
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
              <div className='max-md:hidden'>
                <button className="text-[#1878F5] bg-white p-2 rounded-lg mt-4 md:mt-0">
                  تواصل معنا
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div className="flex flex-col w-[98%] mx-auto  rounded-xl shadow p-1 bg-[#378CE7]  mix-md:hidden ">
        <div className='flex items-center justify-between p-4'>

        <div className="flex-shrink-0 bg-white rounded-xl">
        <Link to="/" className="flex items-center text-white">
          <div className="max-w-[150px]">
            <img src={logo} alt="" />
          </div>
        </Link>
      </div>
        <div>
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {isOpen ?
<Cancel/>
            :
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          }

          </button>
          </div>

        </div>

          <div className={`items-center shadow gap-5 ${isOpen ? "flex flex-col items-center justify-center" :"hidden"}` }>
            <Link to="/" className="text-white hover:text-gray-300">
              الرئيسية
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              عن الشركة
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300">
              الاعتمادات
            </Link>
            <Link to="/products" className="text-white hover:text-gray-200">
              خزانات المياه
            </Link>
            <Link to="/gallery" className="text-white hover:text-gray-200">
              المنتجات
            </Link>
            <Link to="/gallery" className="text-white hover:text-gray-200">
              المعرض
            </Link>
            <Link to="/gallery" className="mb-5 text-white hover:text-gray-200">
              اتصل بنا
            </Link>
          </div>
        </div>
      )}

    </div>
  );
};

export default NavBar;

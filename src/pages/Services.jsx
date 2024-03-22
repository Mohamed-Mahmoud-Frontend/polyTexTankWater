import CustomCarousel2 from "../components/Carousel/CustomCarousel2"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <div    className='relative top-[110px] '>

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

export default Services
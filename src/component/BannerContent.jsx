import { FaCircleArrowRight } from "react-icons/fa6";
import 'animate.css';


const BannerContent = () => {
    return (
        <div className="animate__animated animate__slideInLeft">
            <div className="lg:w-3/5 lg:pl-10 pl-5 md:pl-5 pr-3">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">Home is the starting place of love.</h1>
                <p className="text-white py-7 text-[12px]">Step into a World of Opulence and Elegance
                    Where Luxury Knows No Bounds.Explore our Collection of Exquisite Properties
                    and Find Your Perfect Haven</p>
                <a href="#estate">
                    <div className="relative">
                        <button className="pl-4 pr-10 py-2 text-white bg-[#23BE0A] hover:bg-[#22be0ad8] rounded-[8px]">Show Estates</button>
                        <FaCircleArrowRight className="text-white absolute top-[13px] left-[130px]" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default BannerContent;
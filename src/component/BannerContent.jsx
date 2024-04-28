import { FaCircleArrowRight } from "react-icons/fa6";
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter'




const BannerContent = () => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="lg:w-3/5 lg:pl-10 pl-5 md:pl-5 pr-3">

        {/* for react type writer */}
        <div className='App'>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        {' '}
                        <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Explore Your Dream Destination']}
                                loop={Infinity} // Set loop to Infinity to make it loop indefinitely
                                cursor
                                cursorStyle='_'
                                typeSpeed={40}
                                deleteSpeed={1}
                                delaySpeed={700} // Adjust the delay speed as needed
                            />
                        </span>
                    </h1>
                </div>

        {/* <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">Explore Your Dream Destination</h1> */}
        <p className="text-white py-7 text-[12px]">Embark on an Adventure to Discover the Beauty and Wonder
          of Our World. From Majestic Landscapes to Vibrant Cultures,
          Each Country Offers Unique Experiences and Memories to Treasure.</p>
        <a href="#tourist-spots">
          <div className="relative">
            <button className="pl-4 pr-10 py-2 text-white bg-violet-600 hover:bg-violet-800 hover:opacity-90 rounded-[8px]">Tourists Spots</button>
            <FaCircleArrowRight className="text-white absolute top-[13px] left-[135px] hover:rotate-90" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default BannerContent;

import SwiperSlider from "../component/SwiperSlider";
import Navbar from "../component/Navbar";
import { useEffect } from "react";
import TouristsSpots from "../component/TouristsSpotsCard";
import CountriesSection from "../component/CountriesSection";
import ContactSection from "../component/ContactSection";
import ClientQuestions from "../component/ClientQuestions";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const touristSpots = useLoaderData()

    // dynamic title
    useEffect((() => {
        document.title = "Tourism Management | Home"
    }), [])


    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <div>
                <SwiperSlider></SwiperSlider>
                <div id="tourist-spots" className="container mx-auto">
                    <h1 className="text-center text-3xl mt-[100px] font-bold mb-10">Tourists Spots</h1>
                    <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 container mx-auto mt-10 justify-between'>
                        {
                            touristSpots.slice(0, 6).map(touristSpot =>
                                <TouristsSpots key={touristSpot._id} touristSpot={touristSpot} touristSpots={touristSpots}></TouristsSpots>)
                        }
                    </div>
                </div>
                <CountriesSection></CountriesSection>
                <ClientQuestions></ClientQuestions>
                <ContactSection></ContactSection>
            </div>

        </div>
    );
};

export default Home;
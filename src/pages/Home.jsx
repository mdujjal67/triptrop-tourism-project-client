
import SwiperSlider from "../component/SwiperSlider";
import Navbar from "../component/Navbar";
import { useEffect } from "react";
import TouristsSpots from "../component/TouristsSpots";
import CountriesSection from "../component/CountriesSection";

const Home = () => {

    // dynamic title
    useEffect((()=>{
        document.title = "Tourism Management | Home"
    }),[])


    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <div>
                <SwiperSlider></SwiperSlider>
                <TouristsSpots></TouristsSpots>
                <CountriesSection></CountriesSection>
            </div>

        </div>
    );
};

export default Home;
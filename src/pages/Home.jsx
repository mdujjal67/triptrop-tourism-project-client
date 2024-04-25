
import SwiperSlider from "../component/SwiperSlider";
import Navbar from "../component/Navbar";
import { useEffect } from "react";

const Home = () => {

    // dynamic title
    useEffect((()=>{
        document.title = "Haven Vista | Home"
    }),[])


    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <div>
                <SwiperSlider></SwiperSlider>
            </div>

        </div>
    );
};

export default Home;
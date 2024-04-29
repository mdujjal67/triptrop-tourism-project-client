import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { TbBrandDaysCounter } from "react-icons/tb";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { FaRegFlag } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCash } from "react-icons/io";

const ViewDetails = () => {
    const spotDetails = useLoaderData();
    const { spotName } = useParams();
    const spot = spotDetails.find(spot => spot.spotName == spotName);

    const { name, email, countryName, location, imageURL, averageCost, Seasonality, travelTime, totalVisitor, description } = spot || {}
    return (
        <div>
            <Navbar></Navbar>
            <div className=" container mx-auto mt-auto flex-grow">
                <div className=" rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800 relative p-4 lg:p-0 md:max-w-[500px] lg:max-w-[700px] mx-auto mt-10">
                    <img src={imageURL} alt="photo" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 rounded-lg lg:rounded-none" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FaRegFlag className='text-violet-700 text-xl'/>   
                                    <h2 className=" font-semibold text-gray-500 text-xl">{countryName}</h2>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FaRegUser className='text-violet-700 text-[18px]'/>
                                        <p className="text-[14px] text-gray-500">User: {name}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MdOutlineMailOutline className='text-violet-700 text-[18px]'/>
                                        <p className="text-[14px] text-gray-500">Email: {email}</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-2xl font-bold'>{spotName}</h1>
                            <p className="dark:text-gray-800">{description}</p>
                            <div className='flex justify-between items-center mt-5 mb-2'>
                                <div className='flex items-center gap-2 mt-2'>
                                    <IoLocationOutline className='text-violet-700 text-xl' />
                                    <p className=''>{location}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <MdTravelExplore className='text-violet-700 text-xl' />
                                    <p className=''>{totalVisitor}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-3">
                                    <TbBrandDaysCounter className="text-violet-600 text-xl" />
                                    <p>{travelTime} (Travel Time)</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    {Seasonality === "summer" ? <TiWeatherSunny className="text-[22px] text-violet-600" /> : <TiWeatherWindyCloudy className="text-[22px] text-violet-600" />}
                                    <p>{Seasonality}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoMdCash className="text-violet-600 text-xl" />
                                <p className="py-3">{averageCost} (Average Cost)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
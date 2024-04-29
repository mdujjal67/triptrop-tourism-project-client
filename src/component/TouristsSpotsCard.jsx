import PropTypes from 'prop-types';
import { Zoom } from 'react-awesome-reveal';
import { IoLocationOutline } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { Link } from 'react-router-dom';
// import UseAuth from './UseAuth';
const TouristsSpotsCard = ({ touristSpot }) => {
    // const { user } = UseAuth()

    const { countryName, location, imageURL, averageCost, totalVisitor, description, spotName } = touristSpot


    return (

        <div>

            <div className=" container mx-auto mt-auto flex-grow">
                <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 relative p-4 lg:p-0 ">
                    <img src={imageURL} alt="photo" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 rounded-lg lg:rounded-none" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className=" font-semibold text-gray-500">{countryName}</h2>
                            <h1 className='text-2xl font-bold'>{spotName}</h1>
                            <p className="dark:text-gray-800">{description}</p>
                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex items-center gap-2'>
                                    <IoLocationOutline className='text-violet-700' />
                                    <p className='text-[14px]'>{location}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <MdTravelExplore className='text-violet-700' />
                                    <p className='text-[14px]'>{totalVisitor}</p>
                                </div>
                            </div>
                            <p className='absolute top-0 right-0 py-1 px-2 bg-violet-600 text-white rounded-xl text-[14px]'>{averageCost}</p>
                        </div>
                        <Zoom>
                        <Link to={`/home/${spotName}`}>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 hover:text-black hover:bg-gray-300">View Details</button>
                        </Link>
                        </Zoom>

                    </div>
                </div>
            </div>


        </div>
    );
};
TouristsSpotsCard.propTypes = {
    touristSpot: PropTypes.object,
};
export default TouristsSpotsCard;
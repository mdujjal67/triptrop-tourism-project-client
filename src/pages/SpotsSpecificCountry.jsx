import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";


const SpotsSpecificCountry = () => {
    const { countryName } = useParams();
    const [spotsSpecificCountry, setSpotsSpecificCountry] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addSpots`) // Fetch data from the /countries endpoint
            .then(res => res.json())
            .then(data => {
                setSpotsSpecificCountry(data);
                // Filter the spots by country name
                const spotsForCountry = data.filter(spot => spot.country_Name === countryName);
                setSpotsSpecificCountry(spotsForCountry);
            })
            .catch(error => console.error('Error fetching spots:', error));
    }, [countryName]);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Tourist Spots in {countryName}</h1>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {spotsSpecificCountry.map((spot, index) => (
                        <div key={index} className="rounded-lg overflow-hidden outline-none shadow-md bg-white dark:bg-gray-800">
                            <img 
                                src={spot.imageURL} 
                                alt={spot.spotName} 
                                className="w-full h-64 object-cover object-center transition-transform duration-300 transform hover:scale-105"
                            />
                            <div className="p-6 bg-white rounded-b-lg">
                                <h2 className="text-2xl font-semibold mb-2">{spot.spotName}</h2>
                                <p className="text-gray-800 dark:text-gray-600 mb-4">Country: {spot.countryName}</p>
                                <p className="text-gray-800 dark:text-gray-600 mb-4">Location: {spot.location}</p>
                                <p className="text-gray-800 dark:text-gray-600 mb-4">Description: {spot.description}</p>
                                <p className="text-gray-800 dark:text-gray-600 mb-4">Average Cost: {spot.averageCost}</p>
                                <p className="text-gray-800 dark:text-gray-600 mb-4">Seasonality: {spot.Seasonality}</p>
                                <Link to={`/home/${spot.spotName}`}>
                                    <button type="button" className="flex items-center justify-center w-full p-3 mt-5 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 hover:text-black hover:bg-gray-300">View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpotsSpecificCountry;

import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

const AllTouristsSpot = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addSpots')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    return (
        <div className="mb-[100px] mx-auto container">
            <Navbar />
            <h1 className="text-4xl font-bold text-center mb-8">All Tourists Spots</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {countries.map((country, index) => (
                    <div key={index} className="rounded-lg overflow-hidden outline-none shadow-md bg-white dark:bg-gray-800">
                        <img 
                            src={country.imageURL} 
                            alt={country.spotName} 
                            className="w-full h-64 object-cover object-center transition-transform duration-300 transform hover:scale-105"
                        />
                        <div className="p-6 bg-white rounded-b-lg">
                            <h2 className="text-xl font-semibold mb-2">{country.spotName}</h2>
                            <p className="text-gray-800 dark:text-gray-400 mb-4">Average Cost: {country.averageCost}</p>
                            <p className="text-gray-800 dark:text-gray-400 mb-4">Total Visitors: {country.totalVisitor}</p>
                            <p className="text-gray-800 dark:text-gray-400 mb-4">Travel Time: {country.travelTime}</p>
                            <p className="text-gray-800 dark:text-gray-400">Seasonality: {country.Seasonality}</p>
                            <button type="button" className="flex items-center justify-center w-full p-3 mt-5 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 hover:text-black hover:bg-gray-300">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTouristsSpot;

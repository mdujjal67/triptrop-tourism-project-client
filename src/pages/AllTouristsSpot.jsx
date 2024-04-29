import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Zoom } from "react-awesome-reveal";

const AllTouristsSpot = () => {
    // const touristSpot = useLoaderData()
    // const {spotName } = touristSpot

  const [countries, setCountries] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/addSpots')
      .then(res => res.json())
      .then(data => {
        setCountries(data.sort((a, b) => a.averageCost - b.averageCost)); // Sort before setting countries
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    // Sort the countries based on the selected option
    const sortedCountries = [...countries].sort((a, b) => {
        if (sortBy === "asc") {
            return a.averageCost - b.averageCost;
        } else if (sortBy === "desc") {
            return b.averageCost - a.averageCost;
        } else {
            return 0;
        }
    });

    return (
        <div className="mb-[100px] mx-auto container">
            <Navbar />
            <h1 className="text-4xl font-bold text-center mb-8 mt-14 md:mt-5 lg:mt-0">All Tourists Spots</h1>

            {/* Dropdown menu for sorting */}
            <div className="flex justify-center mb-10">
                <select onChange={handleSortChange} className="p-2 border rounded-md cursor-pointer">
                    <option className="cursor-pointer" value="">Sort by Average Cost</option>
                    <option className="cursor-pointer" value="asc">Low to High</option>
                    <option className="cursor-pointer" value="desc">High to Low</option>
                </select>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {sortedCountries.map((country, index) => (
                    <div key={index} className="rounded-lg overflow-hidden outline-none shadow-md bg-white dark:bg-gray-800">
                        <img 
                            src={country.imageURL} 
                            alt={country.spotName} 
                            className="w-full h-64 object-cover object-center transition-transform duration-300 transform hover:scale-105"
                        />
                        <div className="p-6 bg-white rounded-b-lg">
                            <h2 className="text-2xl font-semibold mb-2">{country.spotName}</h2>
                            <p className="text-gray-800 dark:text-gray-600 mb-4">Total Visitors: {country.totalVisitor}</p>
                            <p className="text-gray-800 dark:text-gray-600 mb-4">Average Cost: {country.averageCost}</p>
                            <p className="text-gray-800 dark:text-gray-600 mb-4">Travel Time: {country.travelTime}</p>
                            <p className="text-gray-800 dark:text-gray-600">Seasonality: {country.Seasonality}</p>
                            
                            <Zoom>
                                <Link to={`/home/${country.spotName}`}>
                                    <button type="button" className="flex items-center justify-center w-full p-3 mt-5 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 hover:text-black hover:bg-gray-300">View Details</button>
                                </Link>
                            </Zoom>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
AllTouristsSpot.propTypes = {
    touristSpot: PropTypes.object,
};
export default AllTouristsSpot;

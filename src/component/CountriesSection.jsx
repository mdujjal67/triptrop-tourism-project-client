
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountriesSection = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    return (
        <div className="my-[100px] mx-auto container">
            <h1 className="text-4xl font-bold text-center">Countries</h1>
            <Link>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-4">
                    {countries.map((country, index) => (
                        <div key={index} className=" p-6">
                            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                                <img src={country.imageURL} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 transform scale-100 hover:scale-110 transition duration-300 ease-in-out" />
                                <div className="mt-6 mb-2">
                                    <h2 className="text-2xl font-semibold tracking-wide">{country.countryName}</h2>
                                </div>
                                <p className="dark:text-gray-800">{country.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default CountriesSection;

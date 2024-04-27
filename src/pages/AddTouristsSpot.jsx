// import { Select, Option } from "@material-tailwind/react";
import Navbar from "../component/Navbar";
import Swal from 'sweetalert2'

const AddTouristsSpot = () => {

    const handleAddSpot = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const imageURL = form.imageURL.value;
        const averageCost = form.averageCost.value;
        const Seasonality = form.Seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitor = form.totalVisitor.value;
        const description = form.description.value;

        const newAddedSpot = { name, email, spotName, countryName, location, imageURL, averageCost, Seasonality, travelTime, totalVisitor, description };

        console.log(newAddedSpot)

        // send data to the server 
        fetch('http://localhost:5000/addSpots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Spot Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#f3f1f0]">
                <div className=" p-32 container mx-auto">
                    <h2 className="text-4xl text-black pb-10 text-center">Add a Tourist Spot:</h2>
                    <form onSubmit={handleAddSpot} className="mx-auto text-center">
                        {/* user name and email row */}
                        <div className="flex gap-4 justify-center items-center">
                            <div>
                                <input type="text" name="name" placeholder="User Name" required className="input input-bordered text-black w-full md:w-[400px]  focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                            <div>
                                <input type="text" name="email" required placeholder="User Email" className="input input-bordered text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                        </div>
                        {/* tourists_spot_name and country_Name row */}
                        <div className="flex gap-4 py-4 justify-center items-center">
                            <div>
                                <input type="text" name="spotName" required placeholder="Tourists Spot Name" className="input input-bordered text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                            <div className="input-bordered required text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600">
                                <select name="countryName" className="select select-bordered join-item text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600">
                                    <option disabled selected><span  className="">Select Country</span></option>
                                    <option className="text-xl py-1 text-gray-400">Bangladesh</option>
                                    <option className="text-xl py-1 text-gray-400">Thailand</option>
                                    <option className="text-xl py-1 text-gray-400">Indonesia</option>
                                    <option className="text-xl py-1 text-gray-400">Malaysia</option>
                                    <option className="text-xl py-1 text-gray-400">Vietnam</option>
                                    <option className="text-xl py-1 text-gray-400">Cambodia</option>
                                </select>
                            </div>

                        </div>
                        {/* location and Image URL row */}
                        <div className="flex gap-4 justify-center items-center">
                            <div>
                                <input type="text" name="location" required placeholder="Location" className="input input-bordered text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                            <div>
                                <input type="text" name="imageURL" required placeholder="Image URL" className="input input-bordered text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                        </div>
                        {/* average_cost and seasonality - like summer, winter row */}
                        <div className="flex gap-4 py-4 justify-center items-center">
                            <div>
                                <input type="text" required name="averageCost" placeholder="Average Cost" className="input input-bordered text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                            <div>
                                <input type="text" required name="Seasonality" placeholder="Seasonality - like summer, winter" className="input input-bordered text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                        </div>
                        {/* travel_time => like- 7 days and totalVisitorsPerYear => like- 10000 row */}
                        <div className="flex gap-4 justify-center items-center">
                            <div>
                                <input type="text" required name="travelTime" placeholder="Travel Time => like- 7 days" className="input input-bordered text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                            <div>
                                <input type="text" required name="totalVisitor" placeholder="Total Visitors Per Year => like- 10000" className="input input-bordered text-black w-full md:w-[400px] focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600" />
                            </div>
                        </div>
                        {/* Short Description */}
                        <div className="py-4">
                            <input type="text" name="description" required placeholder="Short Description" className="input input-bordered text-black w-full md:w-[815px]  focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600 " />
                        </div>
                        {/* submit button */}
                        <div>
                            <input type="submit" name="submit" value="Add" className="btn btn-block bg-violet-600 text-white hover:text-black md:w-[815px]" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTouristsSpot;
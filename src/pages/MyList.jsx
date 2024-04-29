import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import UseAuth from "../component/UseAuth";
import Swal from "sweetalert2";
// import { useLoaderData } from "react-router-dom";

const MyList = () => {
    const [myItem, setMyItem] = useState([]);
    const { user } = UseAuth() || {};
    // const loadMyList = useLoaderData()

    useEffect(() => {
        if (user) {
            fetch(`https://tourism-management-server-delta.vercel.app/myList/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyItem(data);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [user]);


    const handleUpdate = () => {
        fetch(`https://tourism-management-server-delta.vercel.app/myList/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(myItem)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    }




    return (
        <div>
            <Navbar></Navbar>

            <div className="">
                {
                    myItem.map(p => (
                        <div key={p._id}>
                            <div className="lg:overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th className="text-[11px] lg:text-[16px]">User</th>
                                            <th className="text-[11px] lg:text-[16px]">Spot Name</th>
                                            <th className="text-[11px] lg:text-[16px]">Average Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th className="hidden lg:block">
                                                <label >
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="lg:flex items-center">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle md:w-12 md:h-12 w-7 h-7">
                                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {/* <div className="font-bold">{user.displayName}</div> */}
                                                        <div className="text-[10px] lg:text-sm opacity-50">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-[13px] md:text-[16px]">
                                                Rangamati
                                                <br />
                                            </td>
                                            <td className="text-[13px] lg:text-[16px]">220$</td>
                                            <th className="-pl-5">
                                                <button onClick={handleUpdate} className="btn btn-ghost btn-xs hover:bg-green-500 hover:text-white">Update</button>
                                                <button className="btn btn-ghost btn-xs lg:ml-5 hover:bg-red-500 hover:text-white">Delete</button>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default MyList;
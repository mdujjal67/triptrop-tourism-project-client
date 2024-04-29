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
        fetch(`http://localhost:5000/coffee/${_id}`, {
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

            <div>
                {
                    myItem.map(p => (
                        <div key={p._id}>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>
                                            </th>
                                            <th>User</th>
                                            <th>Spot Name</th>
                                            <th>Average Cost</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {/* <div className="font-bold">{user.displayName}</div> */}
                                                        <div className="text-sm opacity-50">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Rangamati
                                                <br />
                                            </td>
                                            <td>220$</td>
                                            <th>
                                                <button onClick={handleUpdate} className="btn btn-ghost btn-xs hover:bg-green-500 hover:text-white">Update</button>
                                                <button className="btn btn-ghost btn-xs ml-5 hover:bg-red-500 hover:text-white">Delete</button>
                                            </th>
                                        </tr>
                                        {/* row 2 */}
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
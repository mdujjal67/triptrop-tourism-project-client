import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const coffee = useLoaderData()
    const {_id, name, taste, quantity, category, details, supplier, photoURL } = coffee

    const handleUpdateCoffee = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const photoURL = form.photoURL.value;
       const updatedCoffee = {name, taste, quantity, category, details, supplier, photoURL}
       console.log(updatedCoffee)

    // send data to the server side
    fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
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
        <div className="bg-[#f3f1f0] p-32 container mx-auto">
            <h2 className="text-3xl text-black font-bold py-5">Update a coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* name and quantity row */}
                <div className="flex gap-4">
                    <div>
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered text-black w-full md:w-[400px]" />
                    </div>
                    <div>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered text-black w-full md:w-[400px]" />
                    </div>
                </div>
                {/* supplier and taste row */}
                <div className="flex gap-4 py-4">
                    <div>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered text-black w-full md:w-[400px]" />
                    </div>
                    <div>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered text-black w-full md:w-[400px]" />
                    </div>
                </div>
                {/* category and details row */}
                <div className="flex gap-4">
                    <div>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered text-black w-full md:w-[400px]" />
                    </div>
                    <div>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered text-black w-full md:w-[400px]" />
                    </div>
                </div>
                {/* Photo url */}
                <div className="py-4">
                    <input type="text" name="photoURL"  defaultValue={photoURL} placeholder="Photo URL" className="input input-bordered text-black w-full" />
                </div>
                {/* submit button */}
                <div>
                    <input type="submit" name="submit" value="Update Coffee" className="btn btn-block bg-[#322f39] text-white hover:text-black" />
                </div>
            </form>
            {/* go back button */}
            <div className="text-center pt-4">
                <Link to="/">
                    <button className="btn btn-primary">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default Update;
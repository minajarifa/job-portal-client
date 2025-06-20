import { MdDelete } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AllCoffee() {
  const [coffees, setCoffees] = useState([]);
  fetch(`http://localhost:5000/coffee`)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      setCoffees(data);
    });
  const handleDeleteId = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="my-10">
      <h1 className="m-6 text-5xl text-center">
        All Coffee: {coffees?.length}
      </h1>
      <div className="grid gap-6 lg:grid-cols-2 ">
        {coffees?.map((coffee) => (
          <div
            key={coffee?._id}
            className="p-5 shadow-sm card card-side bg-base-100 dark:bg-gray-800"
          >
            <figure className="mr-5">
              <img src={coffee?.photo} alt="Movie" />
            </figure>
            <div className="flex">
              <div className="mb-6">
                <h2 className="card-title">{coffee?.name}</h2>
                <p>{coffee?.details}</p>
                <p>{coffee?.category}</p>
                <p>{coffee?.quantity}</p>
                <p>{coffee?.supplier}</p>
                <p>{coffee?.taste}</p>
              </div>
              <div className="grid">
                <button
                  className="text-2xl btn btn-primary"
                  title="view to click"
                >
                  <MdOutlinePreview />
                </button>
                <button
                  onClick={() => handleDeleteId(coffee._id)}
                  className="text-2xl text-red-500 btn btn-primary"
                >
                  <MdDelete />
                </button>
                <Link
                  to={`/update-coffee/${coffee._id}`}
                  className="text-2xl btn btn-primary"
                >
                  <MdOutlineSecurityUpdateGood />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

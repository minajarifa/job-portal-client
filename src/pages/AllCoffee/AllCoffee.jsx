import { MdDelete } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

import { useState } from "react";

export default function AllCoffee() {
  const [coffees, setCoffees] = useState([]);
  fetch(`http://localhost:5000/coffee`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCoffees(data);
    });
  return (
    <div>
      <h1>All Coffee: {coffees?.length}</h1>
      <div className="grid grid-cols-2 gap-6 ">
        {coffees?.map((coffee) => (
          <div key={coffee?._id}>
            <div className="shadow-sm card card-side bg-base-100">
              <figure>
                <img src={coffee?.photo} alt="Movie" />
              </figure>
              <div className="bg-red-400 card-body">
                <div className="">
                  <h2 className="card-title">{coffee?.name}</h2>
                  <p>{coffee?.details}</p>
                  <p>{coffee?.category}</p>
                  <p>{coffee?.quantity}</p>
                  <p>{coffee?.supplier}</p>
                  <p>{coffee?.taste}</p>
                </div>
                <div className="grid card-actions bg-slate-500">
                  <button className="btn btn-primary "title="view to click">
                  <MdOutlinePreview />
\ 
                  </button>
                  <button className="btn btn-primary"><MdDelete />
</button>
                  <button className="btn btn-primary"><MdOutlineSecurityUpdateGood />
</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

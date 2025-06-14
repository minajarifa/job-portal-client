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
      <div className="grid grid-cols-3 gap-6 ">
        {coffees?.map((coffee) => (
          <div key={coffee?._id}>
            <div className="shadow-sm card card-side bg-base-100">
              <figure>
                <img src={coffee?.photo} alt="Movie" />
              </figure>
              <div className="flex card-body ">
                <div>
                  <h2 className="card-title">{coffee?.name}</h2>
                  <p>{coffee?.details}</p>
                  <p>{coffee?.category}</p>
                  <p>{coffee?.quantity}</p>
                  <p>{coffee?.supplier}</p>
                  <p>{coffee?.taste}</p>
                </div>
                <div className=" card-actions">
                  <button className="btn btn-primary">view</button>
                  <button className="btn btn-primary">delete</button>
                  <button className="btn btn-primary">update</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

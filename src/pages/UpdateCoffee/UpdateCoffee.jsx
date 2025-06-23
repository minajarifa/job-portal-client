import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateCoffee() {
  const ids = useParams();
  const id = ids.id;
  const [coffee, setCoffee] = useState();

  useEffect(() => {
    fetch(`https://job-portal-server-three-virid.vercel.app/coffee/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCoffee(data);
      });
  }, [id]);

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateData = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`https://job-portal-server-three-virid.vercel.app/coffee/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoffee(data);
        if (data.modifiedCount===1) {
          Swal.fire("SweetAlert2 is working!");
        }
      });
  };
  return (
    <form onSubmit={handleUpdateCoffee} className=" hero-content">
      <div className="w-full max-w-sm shadow-2xl card bg-base-100 ">
        <div className="card-body">
          <fieldset className="fieldset">
            <div>
              <label className="label">name</label>
              <input
                type="text"
                className="input"
                placeholder="name"
                name="name"
                defaultValue={coffee?.name}
              />
            </div>
            <div>
              <label className="label">quantity</label>
              <input
                type="text"
                className="input"
                placeholder="quantity"
                name="quantity"
                defaultValue={coffee?.quantity}
              />
            </div>
            <div>
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input"
                placeholder="Supplier"
                name="supplier"
                defaultValue={coffee?.supplier}
              />
            </div>
            <div>
              <label className="label">taste</label>
              <input
                type="text"
                className="input"
                placeholder="taste"
                name="taste"
                defaultValue={coffee?.taste}
              />
            </div>
            <div>
              <label className="label">category</label>
              <input
                type="text"
                className="input"
                placeholder="category"
                name="category"
                defaultValue={coffee?.category}
              />
            </div>
            <div>
              <label className="label">details</label>
              <input
                type="text"
                className="input"
                placeholder="details"
                name="details"
                defaultValue={coffee?.details}
              />
            </div>
            <div>
              <label className="label">Photo</label>
              <input
                type="text"
                className="input"
                placeholder="photo URL"
                name="photo"
                defaultValue={coffee?.photo}
              />
            </div>
            <button  type="submit" className="mt-4 btn btn-neutral">
              Update Now
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
}

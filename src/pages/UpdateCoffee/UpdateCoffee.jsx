import { useLoaderData } from "react-router-dom";

export default function UpdateCoffee() {
  const id = useLoaderData();
  console.log(id)
  // const handleUpdateCoffee(id)=>{
  //     console.log()
  // }
  return (
    <form
      // onSubmit={handleUpdateCoffee}
      className=" hero-content"
    >
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
              />
            </div>
            <div>
              <label className="label">quantity</label>
              <input
                type="text"
                className="input"
                placeholder="quantity"
                name="quantity"
              />
            </div>
            <div>
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input"
                placeholder="Supplier"
                name="supplier"
              />
            </div>
            <div>
              <label className="label">taste</label>
              <input
                type="text"
                className="input"
                placeholder="taste"
                name="taste"
              />
            </div>
            <div>
              <label className="label">category</label>
              <input
                type="text"
                className="input"
                placeholder="category"
                name="category"
              />
            </div>
            <div>
              <label className="label">details</label>
              <input
                type="text"
                className="input"
                placeholder="details"
                name="details"
              />
            </div>
            <div>
              <label className="label">Photo</label>
              <input
                type="text"
                className="input"
                placeholder="photo URL"
                name="photo"
              />
            </div>
            <button type="submit" className="mt-4 btn btn-neutral">
              Update Now
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
}

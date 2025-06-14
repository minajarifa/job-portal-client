import Swal from "sweetalert2";

export default function AddJob() {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newData = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:5000/coffee`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("SweetAlert2 is working!");
        }
      });
    // fetch(`http://localhost:5000/coffee`,{
    //   method:'POST',
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   body:JSON.stringify(newData)
    // })

    // .then(res=>res.json())
    // .then(data=>{
    //   console.log("data",data)
    // })
  };
  return (
    <form onSubmit={handleAddCoffee} className=" hero-content">
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
                photo
                URL="photo"
              />
            </div>
            <button type="submit" className="mt-4 btn btn-neutral">
              Login
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
}

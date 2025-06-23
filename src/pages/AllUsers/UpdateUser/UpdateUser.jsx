import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function UpdateUser() {
  const ids = useParams();
  const id = ids.id;
  console.log(id);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://job-portal-server-three-virid.vercel.app/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  // handleUpdateButton operation
  const handleUpdateButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const newUser = { name, email, photo };
    fetch(`https://job-portal-server-three-virid.vercel.app/user/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire("Updated user successfully");
        }
      });
  };
  return (
    <div>
      <h1 className="my-10 text-5xl text-center">Update User</h1>
      <form onSubmit={handleUpdateButton} className=" hero-content">
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 ">
          <div className="card-body">
            <fieldset className="fieldset">
              <div>
                <label className="label">Name:</label>
                <input
                  type="text"
                  className="input"
                  placeholder="name"
                  name="name"
                  defaultValue={users?.name}
                />
              </div>
              <div>
                <label className="label">Email:</label>
                <input
                  type="email"
                  className="input"
                  placeholder="user email"
                  name="email"
                  defaultValue={users?.email}
                />
              </div>
              <div>
                <label className="label">Photo:</label>
                <input
                  type="text"
                  className="input"
                  placeholder="PhotoURL"
                  name="photo"
                  defaultValue={users?.photo}
                />
              </div>
              <button type="submit" className="mt-4 btn btn-neutral">
                Update Now
              </button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
}

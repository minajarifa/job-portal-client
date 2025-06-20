import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const handleRegisterNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, photo, email, password };
    console.log(userInfo);
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        
        // create user in mongodb
        fetch(`http://localhost:5000/user`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(userInfo)
        })
        .then(response=>response.json())
        .then(data=>{
          console.log(data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handleRegisterNow}
      className="min-h-screen hero bg-base-200"
    >
      <div className="flex-col hero-content ">
        <div className="text-center ">
          <h1 className="mb-5 text-5xl font-bold">Register now!</h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <div className="card-body">
            <fieldset className="fieldset">
              <div>
                <label className="label">User Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="User Name"
                  name="name"
                />
              </div>
              <div>
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="photoURL"
                  name="photo"
                />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <button className="mt-4 btn btn-neutral">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
}

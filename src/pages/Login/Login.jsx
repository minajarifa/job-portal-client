import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { data } from "react-router-dom";

export default function Login() {
  const { signin } = useContext(AuthContext);
  const handleLoginButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);
    //  signin User
    signin(email, password)
      .then((result) => {
        console.log(result.user);
        // create user with mongodb
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handleLoginButton}
      className="min-h-screen hero bg-base-200"
    >
      <div className="flex-col hero-content ">
        <div className="text-center ">
          <h1 className="mb-5 text-5xl font-bold">Login now!</h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <div className="card-body">
            <fieldset className="fieldset">
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
              </div>
              <button className="mt-4 btn btn-neutral">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
}

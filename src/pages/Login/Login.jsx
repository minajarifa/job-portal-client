export default function Login() {
    const handleLoginButton = (e) => {
    e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
   const userInfo={email,password}
   console.log(userInfo)
  };
  return (
    <form onSubmit={handleLoginButton} className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-5">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
}

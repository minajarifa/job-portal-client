export default function Register() {
  const handleRegisterNow = (e) => {
    e.preventDefault();
   const form = e.target;
   const name = form.name.value;
   const photo = form.photo.value;
   const email = form.email.value;
   const password = form.password.value;
   const userInfo={name,photo,email,password}
   console.log(userInfo)
  };
  return (
    <form
      onSubmit={handleRegisterNow}
      className="hero bg-base-200 min-h-screen"
    >
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-5">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
}

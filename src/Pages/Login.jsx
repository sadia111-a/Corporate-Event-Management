import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../Hooks/useAuth";
import swal from "sweetalert";

const Login = () => {
  const { signIn } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // validation
    if (password.length < 6) {
      swal("Error!", " please give 6 characters password!", "error");
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal(
        "Error!",
        " Password must contain at least one capital letter!",
        "error"
      );
      return;
    }
    // create a new user
    signIn(email, password)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-base-300 border-none text-black hover:bg-slate-200"
                >
                  Login
                </button>
              </div>
            </form>
            <p>
              New to this page? please
              <Link to="/register">
                <button className="btn btn-link text-orange-400">
                  Register
                </button>
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

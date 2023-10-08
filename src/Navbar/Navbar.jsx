import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="bg-base-100 shadow-xl mb-3 rounded-md">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-amber-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-amber-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-amber-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-amber-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="text-black  text-sm font-semibold">
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-amber-500 underline text-sm font-bold"
                      : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <a className=" bg-gray-100 px-3 rounded-md font-extrabold text-lg text-amber-500 lg:text-3xl">
            Corporate Events
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1">
            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-amber-500 bg-base-300 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-amber-500 bg-base-300 rounded-md px-3 text-lg font-bold"
                    : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-amber-500 bg-base-300 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-amber-500 bg-base-300 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li className="text-black text-lg font-semibold">
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-amber-500 bg-base-300 px-3 rounded-md text-lg font-bold"
                    : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        {/* avatar part  */}
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://i.ibb.co/44BvCv7/user.png"
                    alt={user.displayName}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="btn text-amber-500 font-semibold"
                    onClick={logOut}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

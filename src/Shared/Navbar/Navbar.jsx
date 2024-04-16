import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../AppContext/AppContext";
import "animate.css";

export default function Navbar() {
  const { user, logOut } = useContext(MyContext);
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/updateprofile">Update Profile</NavLink>
        </li>
      )}{" "}
      {user && (
        <li>
          <NavLink to="/VirtualTour">Virtual Tour</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost mr-2 p-0 lg:hidden"
          >
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLink}
          </ul>
        </div>
        <NavLink
          to="/"
          className="font-mono font-semibold text-xl animate__fadeInDown animate__animated"
        >
          EstateExplorer
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown  dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex="0"
              className="glass  dropdown-content z-[999] menu p-2 shadow  rounded-box w-52"
            >
              <div className="flex justify-center my-2">
                <img
                  className="rounded-full w-24 shadow-2xl"
                  src={user.photoURL}
                  alt=""
                />
              </div>

              <li className="font-semibold -tracking-tight">
                <a>{user.displayName?.toUpperCase()}</a>
              </li>
              <li className="bg-slate-400 glass rounded-md" onClick={logOut}>
                <NavLink to="/">Logout</NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-link p-0">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { MyContext } from "../../AppContext/AppContext";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { ToastContainer, Bounce, toast } from "react-toastify";

const Login = () => {
  const { googleLogin, githubLogin, logIn } = useContext(MyContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigator = () => {
    return navigate(location?.state ? location.state : "/");
  };
  console.log(location)
  const notify = (msg, name, x = null) => {
    toast[name](msg, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      onClose: () => {
        x();
      },
    });
  };

  const handleGoogle = (e) => {
    e.preventDefault();

    googleLogin()
      .then((result) => {
        notify("Login Successful", "success", navigator);
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
        notify("Login Failed", "error");
      });
  };
  const handleGithub = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        notify("Login Successful", "success", navigator);
      })
      .catch((err) => {
        console.log(err);
        notify("Login Failed", "error");
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget),
      email = form.get("email"),
      password = form.get("password");
    logIn(email, password)
      .then((result) => {
        console.log(result);
        notify("Login Successful", "success", navigator);
      })
      .catch((err) => {
        notify("Incorrect password", "error");
      });
    console.log(email, password);
  };
  return (
    <div className="flex justify-center md:my-20 my-4">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <form
        onSubmit={handleLogin}
        className="w-[450px] flex flex-col justify-center bg-[#F3F3F3] rounded p-8"
      >
        <h1 className="text-3xl text-center font-semibold">
          Login your account
        </h1>
        <div className="border-b border-[#c5c5c5] my-6" />
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
            required
            name="email"
          />
        </label>
        <div className="form-control">
          <label className="label">
            <span className="label-text  font-semibold">Password</span>
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              className="input input-bordered w-full"
              required
              name="password"
            />
            <div>
              {showPass ? (
                <FaEye
                  onClick={() => setShowPass(false)}
                  className="text-2xl absolute top-3 right-2"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPass(true)}
                  className="text-2xl absolute top-3 right-2"
                />
              )}
            </div>
          </div>
        </div>

        <button className="btn bg-[#1e2218] text-white mt-4 hover:text-black">
          Login
        </button>
        <p className="text-center mt-4 text-sm">
          Don’t Have An Account ?{" "}
          <Link className="text-blue-500 font-semibold mx-1" to="/register">
            Register
          </Link>
        </p>
        <div className="my-4 border-b"></div>
        <div
          onClick={handleGoogle}
          className="flex items-center gap-1 justify-center btn bg-blue-300"
        >
          <FaGoogle /> Google
        </div>
        <div
          onClick={handleGithub}
          className="flex items-center gap-1 justify-center btn bg-slate-300 mt-2"
        >
          <FaGithub />
          Github
        </div>
      </form>
    </div>
  );
};

export default Login;

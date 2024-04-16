import { Helmet } from "react-helmet";
import { MyContext } from "../../AppContext/AppContext";
import { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function UpdateUserProfile() {
  const { user, updateUser, setDataUpdated, dataUpdated } =
    useContext(MyContext);
  const navigate = useNavigate();

  const handleUpdatedUser = (e) => {
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    if (name == user.displayName && photoURL == user.photoURL) {
      alert("Please enter a different name or photoURL to update");
    } else {
      updateUser(name, photoURL)
        .then((result) => {
          navigate("/");
          console.log(result);
          setDataUpdated(!dataUpdated);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    e.preventDefault();
  };

  return (
    <div className="flex justify-center md:my-20 my-4">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <form
        onSubmit={handleUpdatedUser}
        className="glass shadow-lg w-[450px] flex flex-col justify-center bg-[url('/imgs/1.jpg')] rounded p-8"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text  font-semibold">Name</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
              name="name"
            />
            <div>
              <CiEdit className="text-2xl absolute top-3 right-2 cursor-pointer" />
            </div>
          </div>
        </div>{" "}
        <div className="form-control">
          <label className="label">
            <span className="label-text  font-semibold">Photo Url</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered w-full"
              defaultValue={user?.photoURL}
              name="photoURL"
            />
            <div>
              <CiEdit className="text-2xl absolute top-3 right-2 bg-white" />
            </div>
          </div>
        </div>
        <button className="btn mt-8 glass bg-slate-400 shadow-2xl">
          Update
        </button>
      </form>
    </div>
  );
}

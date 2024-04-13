import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#F6F5F7] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center sm:flex-row flex-col">
        <div className="flex p-8 gap-4">
         
        
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaPinterestP />
          </a>  <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaLinkedin />
          </a> <a href="/">
            <FaFacebookF />
          </a>
        </div>
        <div className="sm:mb-0 mb-4">
          <ul className="flex sm:flex-nowrap flex-wrap gap-4">
            <li className="btn-link text-slate-700">
              <NavLink to="/">Advertise with us</NavLink>
            </li>
            <li className="btn-link text-slate-700">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="btn-link text-slate-700">
              <NavLink to="/updateprofile">Update Profile</NavLink>
            </li>
            <li className="btn-link text-slate-700">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

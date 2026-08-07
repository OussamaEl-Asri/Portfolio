import { NavLink } from "react-router";
import icon from "../assets/icons/portofolioIcon.svg";

export function NavBar() {
  return (
    <div className="flex justify-between ml-5 pt-5 w-6xl">
      <div className="flex gap-2.5 text-white h-fit ">
        <img src={icon}></img>
        <h1 className="">Oussama El-Asri</h1>
      </div>

      <div className="flex gap-4.5 mr-10">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "text-[#ABB2BF]";
          }}
          end
        >
          Home
        </NavLink>

        <NavLink
          to={"about"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "text-[#ABB2BF]";
          }}
          end
        >
          About
        </NavLink>

        <NavLink
          to={"skills"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "text-[#ABB2BF]";
          }}
          end
        >
          Skills
        </NavLink>

        <NavLink
          to={"projects"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "text-[#ABB2BF]";
          }}
          end
        >
          Projects
        </NavLink>

        <NavLink
          to={"contact"}
          className={({ isActive }) => {
            return isActive ? "text-white" : "text-[#ABB2BF]";
          }}
          end
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

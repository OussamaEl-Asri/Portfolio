import { Outlet } from "react-router";
import { NavBar } from "./component/navbar";
import sideBar from "./assets/icons/sideBar.svg";

export default function Root() {
  return (
    <div className="w-fit h-screen">
      <div className="flex justify-between">
        <img className="ml-5" src={sideBar} alt="sideBar icon" />
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
}

import { Link, Outlet } from "react-router";
import { NavBar } from "./component/navbar";
import Footer from "./component/footer";
import github from "./assets/icons/github.svg";
import discord from "./assets/icons/discord.svg";
import linkedin from "./assets/icons/linkedin.svg";

export default function Root() {
  return (
    <div className="grid grid-cols-[30px_1fr] grid-rows-[20px_1fr_auto] overflow-hidden w-full min-h-screen bg-[#282C33] max-sm:grid-cols-1 max-sm:grid-rows-[20px_1fr_auto]">
      <div className="col-start-1 row-start-1 w-7.5 h-67.5 ml-8 relative z-10 flex flex-col justify-start items-center max-sm:hidden">
        <div className="w-1 h-40 bg-white"></div>

        <div className="w-7 h-7 mt-3 flex flex-col gap-1">
          <Link
            to="https://github.com/OussamaEl-Asri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <img src={github} alt="" />
          </Link>

          <Link
            to="https://discord.com/users/1168507553949433892"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <img src={discord} alt="" />
          </Link>

          <Link
            to="https://www.linkedin.com/in/oussama-el-asri-7a16a9281/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <img src={linkedin} alt="" />
          </Link>
        </div>
      </div>

      <div className="col-start-2 row-start-1 ml-20 mt-3 w-auto h-12.5 overflow-visible flex justify-between max-sm:col-start-1 max-sm:ml-0 max-sm:px-4 max-sm:w-full">
        <NavBar />
      </div>

      <main className="col-start-2 row-start-2 mt-20 px-10 max-sm:col-start-1 max-sm:mt-12 max-sm:px-4">
        <Outlet />
      </main>

      <div className="col-start-1 col-span-2 row-start-3">
        <Footer />
      </div>
    </div>
  );
}

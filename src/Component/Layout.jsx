import Nav from "./Nav";
import Search from "./Search";
import { Outlet } from "react-router-dom";
import Previous from "./Previous";
import Player from "../Pages/Player";

const Layout = () => {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="h-[5%]">
        <Previous />
        <Search />
      </div>
      <main className="border-black-600 border-2 h-[88%] overflow-scroll dark:bg-slate-800">
        <Outlet />
      </main>
      

      <Nav className="h-[6%]" />
    </div>
  );
};

export default Layout;

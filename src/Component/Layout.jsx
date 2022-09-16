import Nav from "./Nav";
import Search from "./Search";
import { Outlet } from "react-router-dom";
import Previous from "./Previous";
import Player from "../Pages/Player";

const Layout = () => {
  return (
    <div className="h-screen">
      <div>
        <Previous />
        <Search />
      </div>
      <main className="border-black-600 border-2 min-h-[87%] dark:bg-slate-800">
        <Outlet />
      </main>
      

      <Nav />
    </div>
  );
};

export default Layout;

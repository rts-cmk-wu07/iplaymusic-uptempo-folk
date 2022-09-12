import Nav from "./Nav";
import Search from "./Search";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen">
      <Search />
      <main className="border-black-600 border-2 min-h-[90%]">
        <Outlet />
      </main>

      <Nav />
    </div>
  );
};

export default Layout;

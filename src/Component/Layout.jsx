import Nav from "./Nav";

import { Outlet } from "react-router-dom";
import SearchHeader from "./SearchHeader";

const Layout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <main className="h-[92%]  dark:bg-secondaryColor ">
        <SearchHeader />
        <Outlet />
      </main>

      <Nav className="h-[8%]" />
    </div>
  );
};

export default Layout;

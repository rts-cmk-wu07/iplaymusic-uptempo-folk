import { NavLink } from "react-router-dom";
import { IoAlbumsSharp } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { MdOutlineWifiTethering } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { BiCategory } from "react-icons/bi";

const clickHandler = (event) => {
  document.body.classList.toggle("dark");
};
const Nav = () => {
  return (
    <nav className="flex justify-end">
      <ul className="flex m-auto justify-between w-4/5 mt-4">
        <li>
          <NavLink to="/albums">
            <IoAlbumsSharp className="mt-2" size={35} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlists">
            <RiPlayListFill size={35} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <div className="justify-center flex rounded-full w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500">
              <MdOutlineWifiTethering className="flex m-auto" size={35} />
            </div>
          </NavLink>
        </li>
        <li>
          <button onClick={clickHandler}>
            <VscColorMode className="mt-2" size={35} />
          </button>
        </li>
        <li>
          <NavLink to="/categories">
            <BiCategory className="mt-2" size={35} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

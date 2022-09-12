import { Link, NavLink } from "react-router-dom";
import { IoAlbumsSharp } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { MdOutlineWifiTethering } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { BiCategory } from "react-icons/bi";

const Nav = () => {
  return (
    <nav className="flex justify-end">
      <ul className="flex m-auto justify-between w-4/5 mt-4">
        <li>
          <NavLink to="/albums">
            <IoAlbumsSharp size={35} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlists">
            <RiPlayListFill size={35} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <MdOutlineWifiTethering size={35} />
          </NavLink>
        </li>
        <li>
          <button>
            <VscColorMode size={35} />
          </button>
        </li>
        <li>
          <NavLink to="/categories">
            <BiCategory size={35} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

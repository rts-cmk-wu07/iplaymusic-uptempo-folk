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
    <nav className="flex justify-end bg-white dark:bg-secondaryColor h-20 pb-4">
      <ul className="flex m-auto justify-between w-4/5 pt-2">
        <li>
          <NavLink to="/albums">
            <div className="justify-center flex text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-orange">
              <IoAlbumsSharp className="mt-2" size={35} />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlists">
            <div className="justify-center flex text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-orange">
              <RiPlayListFill className="mt-2" size={35} />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <div className="justify-center flex rounded-full w-12 h-12 bg-gradient-to-r from-[#EE0979] to-[#FF6A00]">
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

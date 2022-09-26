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
            <div className="justify-center flex">
              <svg width="0" height="0">
                <linearGradient
                  id="prim-orange-gradient"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#FF6A00" offset="0%" />
                  <stop stopColor="#EE0979" offset="100%" />
                </linearGradient>
              </svg>
              <IoAlbumsSharp
                style={{ fill: "url(#prim-orange-gradient)" }}
                className="mt-2"
                size={35}
              />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlists">
            <div className="justify-center flex text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-orange">
              <RiPlayListFill
                style={{ fill: "url(#prim-orange-gradient)" }}
                className="mt-2"
                size={35}
              />
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
            <VscColorMode
              style={{ fill: "url(#prim-orange-gradient)" }}
              className="mt-2"
              size={35}
            />
          </button>
        </li>
        <li>
          <NavLink to="/categories">
            <BiCategory
              style={{ fill: "url(#prim-orange-gradient)" }}
              className="mt-2"
              size={35}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

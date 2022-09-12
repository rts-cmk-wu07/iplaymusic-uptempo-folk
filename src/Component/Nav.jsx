import { Link, NavLink } from "react-router-dom";
import { IoAlbumsSharp } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="flex justify-end">
      <ul className="flex m-auto justify-between">
        <li>
          <NavLink to="/albums">
            <IoAlbumsSharp />
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlists">Playlists</NavLink>
        </li>
        <li>
          <NavLink to="/">Featured</NavLink>
        </li>
        <li>
          <button>Color themes</button>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

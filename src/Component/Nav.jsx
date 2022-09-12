import { Link, Navlink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      IplayMusic
      <ul>
        <li>
          <Navlink>Albums</Navlink>
        </li>
        <li>
          <Navlink>Playlists</Navlink>
        </li>
        <li>
          <Navlink>Featured</Navlink>
        </li>
        <li>
          <Navlink>Color themes</Navlink>
        </li>
        <li>
          <Navlink>Categories</Navlink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

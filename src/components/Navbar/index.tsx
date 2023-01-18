import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="destination">Destination</Link>
        </li>
        <li>
          <Link to="crew">Crew</Link>
        </li>
        <li>
          <Link to="technology">Technology</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

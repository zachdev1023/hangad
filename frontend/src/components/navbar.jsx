import { Link } from "react-router-dom";

import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <Link to="/">Hangad Store</Link>
      </div>

      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default navbar;

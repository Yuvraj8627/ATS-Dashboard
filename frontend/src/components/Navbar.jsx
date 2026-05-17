import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/dashboard">
        ATS Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;
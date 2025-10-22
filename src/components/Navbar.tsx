import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
  <nav className="site-navbar">
      <h1 className="font-bold text-xl cursor-pointer" onClick={() => navigate("/")}>
        My Blog
      </h1>
  <div className="nav-links">
  <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : ""
          }
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : ""
          }
        >
          Viết bài
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

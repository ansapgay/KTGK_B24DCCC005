import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center bg-slate-800 text-white px-8 py-4">
      <h1 className="font-bold text-xl cursor-pointer" onClick={() => navigate("/")}>
        My Blog
      </h1>
      <div className="flex gap-4">
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

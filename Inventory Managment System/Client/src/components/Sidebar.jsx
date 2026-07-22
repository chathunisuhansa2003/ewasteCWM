import { NavLink } from "react-router-dom";

import{
    FaTachometerAlt,
    FaUser,
    FaUsers,
    FaBoxOpen,
    FaShoppingCart,
    FaChartLine,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";



function Sidebar() {
    return(
        <div className = "sidebar">
            <div className = "logo">
                <h2>Inventory Manager</h2>
        </div>
        <nav>
            <NavLink to = "/dashboard" className = "nav-link">
                <FaTachometerAlt className = "icon" />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to = "/categories" className = "nav-link">
                <FaBoxOpen className = "icon" />
                <span>Categories</span>
            </NavLink>
            <NavLink to = "/products" className = "nav-link">
                <FaShoppingCart className = "icon" />
                <span>Products</span>
            </NavLink>
            <NavLink to = "/reports" className = "nav-link">
                <FaChartLine className = "icon" />
                <span>Reports</span>
            </NavLink>
            <NavLink to = "/settings" className = "nav-link">
                <FaCog className = "icon" />
                <span>Settings</span>
            </NavLink>
            <NavLink to = "/logout" className = "nav-link">
                <FaSignOutAlt className = "icon" />
                <span>Logout</span>
            </NavLink>
        </nav>
<div className="logout">

        <NavLink to="/login" className="nav-item">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>

      </div>
        </div>
          );
}

export default Sidebar;

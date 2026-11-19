
import {
  LayoutDashboard,
  Home,
  Building2,
  GraduationCap,
  UserCheck,
  Users,
  ChevronDown,
} from "lucide-react";

import "./Sidebar.css";

function Sidebar({ activeView, onNavigate }) {
  const studentMenu = [
    {
      id: "department",
      label: "Department-wise Students",
      icon: <Building2 size={18} />,
    },
    {
      id: "cgpa",
      label: "CGPA-wise Students",
      icon: <GraduationCap size={18} />,
    },
    {
      id: "active",
      label: "Active-wise Students",
      icon: <UserCheck size={18} />,
    },
    {
      id: "total",
      label: "Total Students",
      icon: <Users size={18} />,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        <p className="menu-heading">MAIN MENU</p>

        <button
          className={`sidebar-link ${
            activeView === "home" ? "active" : ""
          }`}
          onClick={() => onNavigate("home")}
        >
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </button>

        <div className="student-menu-heading">
          <Users size={19} />
          <span>Student Records</span>
          <ChevronDown size={16} />
        </div>

        <div className="student-submenu">

          <button
            className={`sidebar-link ${
              activeView === "home" ? "active" : ""
            }`}
            onClick={() => onNavigate("home")}
          >
            <Home size={18} />
            <span>Home</span>
          </button>

          {studentMenu.map((item) => (
            <button
              key={item.id}
              className={`sidebar-link ${
                activeView === item.id ? "active" : ""
              }`}
              onClick={() => onNavigate(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}

        </div>
      </div>

      <div className="sidebar-footer">
        <GraduationCap size={20} />
        <span>Student Management System</span>
      </div>

    </aside>
  );
}

export default Sidebar;

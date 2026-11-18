
import {
  LayoutDashboard,
  Home,
  Building2,
  GraduationCap,
  UserCheck,
  Users,
  Settings,
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

      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <GraduationCap size={27} />
        </div>

        <div>
          <h2>StudentHub</h2>
          <p>Student Management System</p>
        </div>
      </div>

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

        <p className="menu-heading preferences-heading">
          PREFERENCES
        </p>

        <button
          className={`sidebar-link ${
            activeView === "settings" ? "active" : ""
          }`}
          onClick={() => onNavigate("settings")}
        >
          <Settings size={19} />
          <span>Settings</span>
        </button>

      </div>

      <div className="sidebar-footer">
        <GraduationCap size={20} />
        <span>Student Management System</span>
      </div>

    </aside>
  );
}

export default Sidebar;


import {
  Home,
  Building2,
  GraduationCap,
  UserCheck,
  Users,
} from "lucide-react";

function StudentMenu({ activeView, onNavigate }) {
  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
    },
    {
      id: "department",
      label: "Department-wise Students",
      icon: Building2,
    },
    {
      id: "cgpa",
      label: "CGPA-wise Students",
      icon: GraduationCap,
    },
    {
      id: "active",
      label: "Active-wise Students",
      icon: UserCheck,
    },
    {
      id: "total",
      label: "Total Students",
      icon: Users,
    },
  ];

  return (
    <div className="student-submenu">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            className={`sidebar-link submenu-link ${
              activeView === item.id ? "active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default StudentMenu;

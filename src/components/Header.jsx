import { GraduationCap, Moon, Sun } from "lucide-react";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="logo">
        <GraduationCap size={32} />

        <div>
          <h2>StudentHub</h2>
          <p>Student Management System</p>
        </div>
      </div>

      <button
        className="theme-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
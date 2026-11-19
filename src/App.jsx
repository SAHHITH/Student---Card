
import { useEffect, useState } from "react";

import {
  Users,
  GraduationCap,
  UserCheck,
  TrendingUp,
  Search,
  Plus,
} from "lucide-react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

import initialStudents from "./data/students";

import "./App.css";

function App() {
  // Student data
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((student) => ({
          age: 20,
          bloodGroup: "O+",
          phone: "+91 98765 43210",
          ...student,
        }));
      } catch {
        return initialStudents;
      }
    }
    return initialStudents;
  });

  // Application states
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Sidebar navigation
  const [activeView, setActiveView] = useState("home");

  // Save student data
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Navigation function
  function handleNavigation(view) {
    setActiveView(view);
    setSearch("");
    setDepartment("All");
  }

  // Filter and sort students
  const filteredStudents = students
    .filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.registerNumber.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" || student.department === department;

      const matchesActive =
        activeView !== "active" || student.status === "Active";

      return matchesSearch && matchesDepartment && matchesActive;
    })
    .sort((a, b) => {
      if (activeView === "cgpa") {
        return Number(b.cgpa) - Number(a.cgpa);
      }

      if (activeView === "department") {
        return a.department.localeCompare(b.department);
      }

      return 0;
    });

  // Dashboard calculations
  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const averageCGPA = students.length
    ? (
        students.reduce(
          (total, student) => total + Number(student.cgpa || 0),
          0
        ) / students.length
      ).toFixed(2)
    : "0.00";

  const departmentCount = new Set(
    students.map((student) => student.department)
  ).size;

  // Add student
  function addStudent(newStudent) {
    setStudents((previous) => [...previous, newStudent]);
  }

  function updateStudent(updatedStudent) {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setEditingStudent(null);
  }

  function editStudent(student) {
    setSelectedStudent(null);
    setEditingStudent(student);
    setShowForm(true);
  }

  // Delete student
  function deleteStudent(id) {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents((previous) =>
        previous.filter((student) => student.id !== id)
      );

      if (selectedStudent?.id === id) {
        setSelectedStudent(null);
      }
    }
  }

  // Dynamic heading
  const viewTitles = {
    home: "Student Dashboard",
    department: "Department-wise Students",
    cgpa: "CGPA-wise Students",
    active: "Active Students",
    total: "Total Students",
    settings: "Settings",
  };

  const viewDescriptions = {
    home: "Manage and monitor your student information.",
    department: "View students department by department.",
    cgpa: "View students ranked by their CGPA.",
    active: "View all currently active students.",
    total: "View and manage all student records.",
    settings: "Manage your dashboard preferences.",
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="dashboard-layout">

        {/* SIDEBAR */}
        <Sidebar
          activeView={activeView}
          onNavigate={handleNavigation}
        />

        {/* MAIN CONTENT */}
        <main className="main-content">

          {/* WELCOME SECTION */}
          <section className="welcome-section">
            <div>
              <h1>{viewTitles[activeView] || "Student Dashboard"}</h1>
              <p>
                {viewDescriptions[activeView] ||
                  "Manage your student information."}
              </p>
            </div>

            <button
              className="add-button"
              onClick={() => {
                setEditingStudent(null);
                setShowForm(true);
              }}
            >
              <Plus size={19} />
              Add Student
            </button>
          </section>

          {/* DASHBOARD STATISTICS */}
          {activeView === "home" && (
            <section className="stats-grid">

              <StatCard
                title="Total Students"
                value={students.length}
                icon={<Users />}
                color="blue"
              />

              <StatCard
                title="Active Students"
                value={activeStudents}
                icon={<UserCheck />}
                color="green"
              />

              <StatCard
                title="Average CGPA"
                value={averageCGPA}
                icon={<GraduationCap />}
                color="purple"
              />

              <StatCard
                title="Departments"
                value={departmentCount}
                icon={<TrendingUp />}
                color="orange"
              />

            </section>
          )}

          {/* STUDENT RECORDS */}
          <section className="student-section">

            <div className="section-heading">
              <h2>
                {viewTitles[activeView] === "Student Dashboard"
                  ? "Student Records"
                  : viewTitles[activeView]}
              </h2>

              <p>
                {viewDescriptions[activeView]}
              </p>
            </div>

            {/* SEARCH AND DEPARTMENT FILTER */}
            <div className="filter-section">

              <div className="search-box">
                <Search size={19} />

                <input
                  type="text"
                  placeholder="Search by name or register number..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                />
              </div>

              <select
                className="department-select"
                value={department}
                onChange={(event) =>
                  setDepartment(event.target.value)
                }
              >
                <option value="All">All Departments</option>
                <option value="CSE">CSE</option>
                <option value="AIML">AIML</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
              </select>

            </div>

            {/* STUDENT CARDS */}
            <div className="student-grid">

              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    onView={setSelectedStudent}
                    onDelete={deleteStudent}
                  />
                ))
              ) : (
                <div className="empty-message">
                  <h3>No students found</h3>
                  <p>
                    Try another search or department filter.
                  </p>
                </div>
              )}

            </div>

          </section>

        </main>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 StudentHub | Student Card Management System
        </p>
      </footer>

      {/* ADD STUDENT FORM */}
      {showForm && (
        <StudentForm
          student={editingStudent}
          onAdd={addStudent}
          onUpdate={updateStudent}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* STUDENT DETAILS */}
      {selectedStudent && (
        <StudentDetails
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
          onEdit={editStudent}
        />
      )}

    </div>
  );
}

export default App;

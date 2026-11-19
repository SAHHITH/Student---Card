import { useState } from "react";
import { X } from "lucide-react";

function StudentForm({ student, onAdd, onUpdate, onClose }) {
  const [formData, setFormData] = useState(() => student || {
    name: "",
    age: "",
    registerNumber: "",
    department: "AIML",
    year: "3rd Year",
    semester: "5",
    bloodGroup: "O+",
    phone: "",
    email: "",
    cgpa: "",
    attendance: "",
    status: "Active",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const savedStudent = {
      ...formData,
      id: student?.id ?? Date.now(),
      age: formData.age ? Number(formData.age) : 20,
      bloodGroup: formData.bloodGroup || "O+",
      phone: formData.phone || "+91 98765 43210",
      cgpa: Number(formData.cgpa) || 0,
      attendance: Number(formData.attendance) || 0,
    };

    if (student) {
      onUpdate(savedStudent);
    } else {
      onAdd(savedStudent);
    }

    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="student-form-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="form-header">
          <h2>{student ? "Edit Student" : "Add New Student"}</h2>
          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Student Name</label>
              <input
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Enter student name"
                required
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age || ""}
                onChange={handleChange}
                placeholder="Enter age (e.g. 20)"
                min="15"
                max="60"
                required
              />
            </div>

            <div className="form-group">
              <label>Register Number</label>
              <input
                name="registerNumber"
                value={formData.registerNumber || ""}
                onChange={handleChange}
                placeholder="Enter register number"
                required
              />
            </div>

            <div className="form-group">
              <label>Department</label>
              <select name="department" value={formData.department} onChange={handleChange}>
                <option value="AIML">AIML</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
              </select>
            </div>

            <div className="form-group">
              <label>Academic Year</label>
              <select name="year" value={formData.year} onChange={handleChange}>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>

            <div className="form-group">
              <label>Blood Group</label>
              <select name="bloodGroup" value={formData.bloodGroup || "O+"} onChange={handleChange}>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div className="form-group">
              <label>Semester</label>
              <select name="semester" value={formData.semester} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </div>

            <div className="form-group">
              <label>CGPA</label>
              <input
                type="number"
                name="cgpa"
                value={formData.cgpa || ""}
                onChange={handleChange}
                placeholder="Enter CGPA"
                min="0"
                max="10"
                step="0.01"
                required
              />
            </div>

            <div className="form-group">
              <label>Attendance (%)</label>
              <input
                type="number"
                name="attendance"
                value={formData.attendance || ""}
                onChange={handleChange}
                placeholder="Enter attendance"
                min="0"
                max="100"
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Student Status</label>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-button">
            {student ? "Save Changes" : "Add Student"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;


import { UserRound, Eye, Trash2 } from "lucide-react";
import "./StudentCard.css";

function StudentCard({ student, onView, onDelete }) {
  return (
    <div className="student-id-card">

      {/* ID Card Header */}
      <div className="id-card-header">
        <div className="college-brand">
          <span className="brand-icon">🎓</span>
          <div>
            <h4>StudentHub</h4>
            <p>Student Management System</p>
          </div>
        </div>

        <h1>
          STUDENT
          <br />
          ID CARD
        </h1>
      </div>

      {/* Student Information */}
      <div className="id-card-body">

        <div className="id-photo-section">
          {student.image || student.photo ? (
            <img
              src={student.image || student.photo}
              alt={student.name}
              className="id-student-photo"
            />
          ) : (
            <div className="id-photo-placeholder">
              <UserRound size={75} />
            </div>
          )}

          <span className={`id-status ${
            student.status?.toLowerCase() === "active"
              ? "active"
              : "inactive"
          }`}>
            {student.status}
          </span>
        </div>

        <div className="id-student-info">
          <h2>{student.name}</h2>

          <p>
            <strong>Student ID:</strong>
            <span>{student.registerNumber}</span>
          </p>

          <p>
            <strong>Department:</strong>
            <span>{student.department}</span>
          </p>

          <p>
            <strong>Academic Year:</strong>
            <span>{student.year}</span>
          </p>

          <p>
            <strong>Semester:</strong>
            <span>{student.semester}</span>
          </p>

          <p>
            <strong>CGPA:</strong>
            <span>{student.cgpa}</span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="id-card-footer">
        <div className="barcode">
          <span>{student.registerNumber}</span>
        </div>

        <div className="id-card-actions">
          <button
            className="id-view-btn"
            onClick={() => onView(student)}
          >
            <Eye size={16} />
            View
          </button>

          <button
            className="id-delete-btn"
            onClick={() => onDelete(student.id)}
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>

    </div>
  );
}

export default StudentCard;

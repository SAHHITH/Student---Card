
import {
  UserRound,
  X,
  Mail,
  GraduationCap,
  CalendarDays,
  Award,
  Activity,
  Pencil,
} from "lucide-react";

function StudentDetails({ student, onClose, onEdit }) {
  return (
    <div className="details-overlay" onClick={onClose}>
      <div
        className="details-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="details-header">
          <h2>Student Profile</h2>
          <button className="details-close" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="details-profile">
          <div className="details-avatar">
            <UserRound size={65} strokeWidth={1.6} />
          </div>

          <h2>{student.name}</h2>
          <p>{student.registerNumber}</p>

          <span
            className={`status ${
              student.status === "Active" ? "active" : "inactive"
            }`}
          >
            {student.status}
          </span>
        </div>

        <div className="details-information">
          <div className="details-row">
            <GraduationCap />
            <div>
              <span>Department</span>
              <strong>{student.department}</strong>
            </div>
          </div>

          <div className="details-row">
            <Mail />
            <div>
              <span>Email</span>
              <strong>{student.email || "Not provided"}</strong>
            </div>
          </div>

          <div className="details-row">
            <CalendarDays />
            <div>
              <span>Academic Year & Semester</span>
              <strong>{student.year} · Semester {student.semester}</strong>
            </div>
          </div>

          <div className="details-row">
            <Award />
            <div>
              <span>CGPA</span>
              <strong>{student.cgpa}</strong>
            </div>
          </div>

          <div className="details-row">
            <Activity />
            <div>
              <span>Attendance</span>
              <strong>{student.attendance}%</strong>
            </div>
          </div>
        </div>

        <div className="details-actions">
          <button
            className="details-edit-button"
            onClick={() => onEdit(student)}
          >
            <Pencil size={17} />
            Edit Student
          </button>
          <button className="details-done-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;

import {
  UserRound,
  X,
  User,
  Calendar,
  IdCard,
  GraduationCap,
  CalendarDays,
  Layers,
  Award,
  Droplet,
  Phone,
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
          <div className="details-title-wrap">
            <IdCard size={22} className="details-header-icon" />
            <h2>Student Profile</h2>
          </div>
          <button className="details-close" onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="details-profile">
          <div className="details-avatar">
            {student.image || student.photo ? (
              <img
                src={student.image || student.photo}
                alt={student.name}
                className="details-student-photo"
              />
            ) : (
              <UserRound size={36} strokeWidth={1.8} />
            )}
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
            <User size={20} />
            <div>
              <span>Name</span>
              <strong>{student.name}</strong>
            </div>
          </div>

          <div className="details-row">
            <Calendar size={20} />
            <div>
              <span>Age</span>
              <strong>{student.age ? `${student.age} Years` : "20 Years"}</strong>
            </div>
          </div>

          <div className="details-row">
            <IdCard size={20} />
            <div>
              <span>Reg No</span>
              <strong>{student.registerNumber}</strong>
            </div>
          </div>

          <div className="details-row">
            <GraduationCap size={20} />
            <div>
              <span>Dept</span>
              <strong>{student.department}</strong>
            </div>
          </div>

          <div className="details-row">
            <CalendarDays size={20} />
            <div>
              <span>Year</span>
              <strong>{student.year}</strong>
            </div>
          </div>

          <div className="details-row sem-row">
            <Layers size={20} />
            <div>
              <span>Semester</span>
              <strong>Semester {student.semester || 5}</strong>
            </div>
          </div>

          <div className="details-row cgpa-row">
            <Award size={20} />
            <div>
              <span>CGPA</span>
              <strong>{student.cgpa || "0.00"}</strong>
            </div>
          </div>

          <div className="details-row blood-row">
            <Droplet size={20} />
            <div>
              <span>Blood Group</span>
              <strong>{student.bloodGroup || "O+"}</strong>
            </div>
          </div>

          <div className="details-row phone-row">
            <Phone size={20} />
            <div>
              <span>Phone No</span>
              <strong>{student.phone || "+91 98765 43210"}</strong>
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

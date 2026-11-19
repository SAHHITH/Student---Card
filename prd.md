# Student Card Management System – Product Requirements Document (PRD)

## 1. Product Overview

### Project Name
Student Card Management System

### Product Type
React JS Web Application

### Project Level
Beginner-Friendly Mini Project

### Description

The Student Card Management System is a web application that allows users to view and manage student information through reusable React components.

The application displays student details in individual profile cards and provides functionality to search, filter, add, edit and delete student records.

## 2. Problem Statement

Managing student information manually can be difficult and time-consuming.

This project provides a simple digital platform to organize student information and display it in an easily accessible card-based format.

## 3. Project Objectives

- Develop reusable React components.
- Understand Props and State.
- Display student information dynamically.
- Implement search and filtering.
- Manage student records.
- Create a responsive dashboard.
- Practise fundamental React concepts.

## 4. Target Users

- College administrators
- Faculty members
- Students
- Educational institutions

## 5. Functional Requirements

### FR-01: Dashboard
The application should display:
- Total number of students.
- Number of active students.
- Number of departments.
- Average CGPA.

### FR-02: Student Cards
The application should display student information using reusable components.

Each card should contain:
- Student photo.
- Student name.
- Register number.
- Department.
- Academic year.
- CGPA.
- Attendance.
- Student status.

### FR-03: Search Functionality
Users should be able to search students using:
- Student name.
- Register number.

### FR-04: Department Filtering
Users should be able to filter students based on department:
- CSE
- AIML
- IT
- ECE

### FR-05: View Student Details
Users should be able to view complete student information.

### FR-06: Add Student
Users should be able to add new student information through a form.

### FR-07: Edit Student
Users should be able to update existing student details.

### FR-08: Delete Student
Users should be able to remove student records after confirmation.

## 6. Non-Functional Requirements

- Responsive design.
- Easy navigation.
- Reusable component architecture.
- Consistent UI design.
- Good application performance.
- Proper form validation.
- Maintainable project structure.

## 7. Technology Stack

| Technology | Purpose |
|---|---|
| React JS | Frontend development |
| JavaScript | Application logic |
| HTML | Application structure |
| CSS | UI styling |
| Vite | Development and build tool |
| Lucide React | Icons |
| Local Storage | Optional data persistence |
| Git and GitHub | Version control |
| Vercel | Deployment |

## 8. React Concepts

The project will demonstrate:

1. Functional Components
2. Props
3. useState()
4. map()
5. filter()
6. Event Handling
7. Conditional Rendering
8. Spread Operator
9. useEffect()

## 9. Project Development Phases

### Phase 1 – Setup
Create the React project using Vite and configure the development environment.

### Phase 2 – Components
Create reusable Header, Sidebar, StudentCard and StudentList components.

### Phase 3 – Student Data
Prepare sample student information in a separate data file.

### Phase 4 – Dynamic Rendering
Display multiple student cards using Props and map().

### Phase 5 – Functionality
Implement search, department filtering and student management.

### Phase 6 – Finalization
Apply CSS, test the application and deploy it.

## 10. Future Enhancements

- Dark and light theme.
- Student photo upload.
- Export student information as CSV.
- Pagination.
- MongoDB database integration.
- User authentication.
- Admin management.

## 11. Expected Outcome

A fully functional and responsive Student Card Management System that demonstrates React component reusability and fundamental frontend development concepts.

## 12. Project Success Criteria

The project will be considered successful when:

- Multiple student cards display correctly.
- A single StudentCard component is reused.
- Student information is passed through Props.
- Search and department filtering work.
- Student management operations work.
- The application is responsive.
- The project runs without major errors.
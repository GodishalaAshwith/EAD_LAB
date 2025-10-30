import React, { useState } from 'react';

const students = [
  { name: 'Alice', marks: 85 }, { name: 'Bob', marks: 92 },
  { name: 'Charlie', marks: 78 }, { name: 'David', marks: 95 },
  { name: 'Eve', marks: 88 }, { name: 'Frank', marks: 76 },
];
const STUDENTS_PER_PAGE = 3;

const StudentList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * STUDENTS_PER_PAGE;
  const paginatedStudents = students.slice(startIndex, startIndex + STUDENTS_PER_PAGE);
  const totalPages = Math.ceil(students.length / STUDENTS_PER_PAGE);

  return (
    <div>
      <h3>Student List</h3>
      <ul>
        {paginatedStudents.map((student, index) => (
          <li key={index}>{student.name} - {student.marks}</li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 0}>
        Previous
      </button>
      <button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage >= totalPages - 1}>
        Next
      </button>
    </div>
  );
};

export default StudentList;
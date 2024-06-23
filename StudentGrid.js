import React from 'react';
import './StudentGrid.css';

const students = [
  {
    id: 1,
    name: 'Pravallika',
    age: 27,
    subjects: [
      { name: 'Math', grade: 'B' },
      { name: 'English', grade: 'A' }
    ]
  },
  {
    id: 2,
    name: 'Pavan',
    age: 32,
    subjects: [
      { name: 'Math', grade: 'A' },
      { name: 'English', grade: 'A' }
    ]
  },
  {
    id: 3,
    name: 'Manasa',
    age: 27,
    subjects: [
      { name: 'Math', grade: 'A' },
      { name: 'English', grade: 'B' }
    ]
  }
];

const StudentGrid = () => {
  return (
    <div className="student-grid-container">
      <table className="student-grid-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <table className="subject-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.subjects.map((subject, index) => (
                      <tr key={index}>
                        <td>{subject.name}</td>
                        <td>{subject.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentGrid;

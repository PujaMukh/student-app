import React from "react";
import "./StudentList.css";
import Student from "./Student";

// const StudentList = () => {
//   const headingClass = "student-list__heading";
//   const listClass = "student-list";

//   return (
//     <section>
//       <h2 className={headingClass}>Student List</h2>
//       <ul className={listClass}>
//         <li>
//           <Student></Student>
//         </li>
//         <li>
//           <Student></Student>
//         </li>
//         <li>
//           <Student></Student>
//         </li>
//       </ul>
//     </section>
//   );
// };

const StudentList = () => {
  const studentComponents = [
    <li>
      <Student name="Ada" email="ada@dev.org"></Student>
    </li>,
    <li>
      <Student name="Soo-ah" email="sooah@dev.org"></Student>
    </li>,
    <li>
      <Student name="Chrissy" email="chrissy@dev.org"></Student>
    </li>,
  ];

  return (
    <section>
      <h2>Student List</h2>
      <ul>{studentComponents}</ul>
    </section>
  );
};

// const StudentList = (props) => {
//   const studentComponents = props.students.map((student) => {
//     return (
//       <li>
//         <Student name={student.nameData} email={student.emailData}></Student>
//       </li>
//     );
//   });

//   return (
//     <section>
//       <h2>Student List</h2>
//       <ul>{studentComponents}</ul>
//     </section>
//   );
// };

export default StudentList;

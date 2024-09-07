import { useEffect, useState } from 'react';
import style from "@/styles/student.module.css";

export default function Student() {
  const [students, setStudents] = useState([]); // State to store students data
  const [error, setError] = useState(null); // State to handle errors
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [studentName, setStudentName] = useState(''); // State for student name input
  const [studentEmail, setStudentEmail] = useState(''); // State for student email input
  const [studentPassword, setStudentPassword] = useState(''); // State for student password input
  const [studentPhone, setStudentPhone] = useState(''); // State for student phone input

  // Fetching data from the API when the component mounts
  const fetchStudents = () => {
    fetch('http://localhost:3001/api/v1/p1/students')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Logging the data for debugging
        setStudents(data); // Setting the students data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch students.');
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Function to add a new student
  const addStudent = async () => {
    const newStudent = {
      username: studentName,
      email: studentEmail,
      password: studentPassword,
      phone: studentPhone,
    };

    try {
      const response = await fetch('http://localhost:3001/api/v1/p1/addstudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });

      if (!response.ok) {
        throw new Error('Failed to add student.');
      }

      setStudentName(''); // Clear the form fields after successful addition
      setStudentEmail('');
      setStudentPassword('');
      setStudentPhone('');
      setSuccessMessage('Student added successfully!'); // Set the success message
      setTimeout(() => setSuccessMessage(''), 3000);

      // Refetch the updated list of students
      fetchStudents();
    } catch (error) {
      console.error('Error adding student:', error);
      setError('Failed to add student.');
    }
  };

  // Function to display students
  const displayStudents = (students) => {
    return students.map((student, index) => (
      <tr key={index} className={style["tr"]}>
        <td className={style["td"]}>{student.phone}</td>
        <td className={style["td"]}>{student.username}</td>
        <td className={style["td"]}>{student.email}</td>
        <td className={style["td"]}>{student.password}</td>
        <td className={style["td"]}>
          <button className={style["btn"]}>Update</button>
        </td>
        <td className={style["td"]}>
          <button className={style["btn"]}>Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className={style["body"]}>
        <div className={style["input"]}>
          <label className={style["label"]} htmlFor="Pname">Student Name:</label>
          <input
            className={style["inputS"]}
            type="text"
            id="Pname"
            name="Pname"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className={style["input"]}>
          <label className={style["label"]} htmlFor="Pprice">Student Email:</label>
          <input
            className={style["inputS"]}
            type="email"
            id="Pprice"
            name="Pprice"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            required
          />
        </div>
        <div className={style["input"]}>
          <label className={style["label"]} htmlFor="Pcategory">Student Password:</label>
          <input
            className={style["inputS"]}
            type="password"
            id="Pcategory"
            name="Pcategory"
            value={studentPassword}
            onChange={(e) => setStudentPassword(e.target.value)}
            required
          />
        </div>
        <div className={style["input"]}>
          <label className={style["label"]} htmlFor="Pdescription">Student Number:</label>
          <input
            className={style["inputS"]}
            type="text"
            id="Pdescription"
            name="Pdescription"
            value={studentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
          />
        </div>
        <button onClick={addStudent}>Add Student</button>
        <br />
        <input
          className={`${style["myInput"]} ${style["inputS"]}`}
          type="text"
          placeholder="Search by name--"
          id="myInput"
        />
        <div className={style["input2"]}>
          <table className={style["table"]}>
            <thead>
              <tr className={style["tr"]}>
                <th className={style["th"]}>Student Number</th>
                <th className={style["th"]}>Student Name</th>
                <th className={style["th"]}>Student Email</th>
                <th className={style["th"]}>Student Password</th>
                <th className={style["th"]}>Update</th>
                <th className={style["th"]}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {displayStudents(students)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

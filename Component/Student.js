import style from "@/styles/doctor.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import{faTrash}from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Student = () => {
  const [students, setStudents] = useState([]); // State to store students data
  const [error, setError] = useState(null); // State to handle errors
  const [formData, setFormData] = useState({ username: '', email: '', password: '', currentPassword: '', newPassword: '', phone: '' }); // Form state for adding/updating students
  const [editingStudentId, setEditingStudentId] = useState(null); // Track which Student is being edited
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  useEffect(() => {
    fetchstudents();
  }, []);

  // Fetch students data from the API
  const fetchstudents = () => {
    fetch('http://localhost:3001/api/v1/p1/students')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched students:', data); // Debugging output
        setStudents(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch students.');
      });
  };
 
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };
 

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter students based on the search term
  const filteredStudents = students.filter((student) =>
    student.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle file input change for photo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevFormData => ({ ...prevFormData, photo: file }));
    }
  };

  // Handle adding or updating a Student
  const handleAddOrUpdateStudent = () => {
    console.log('Form Data Before Before Submission:', formData)
    const method = editingStudentId ? 'PUT' : 'POST'; // Use PUT for update, POST for add
    const url = editingStudentId 
      ? `http://localhost:3001/api/v1/p1/students/${editingStudentId}` // URL for updating
      : 'http://localhost:3001/api/v1/p1/addstudent'; // URL for adding

      console.log("URL: ",url)

    

    if (editingStudentId) {
      // Only send the password fields if they are provided
      if (formData.newPassword && formData.currentPassword) {
        formData.password = {
          current: formData.currentPassword,
          new: formData.newPassword

        }
        
      }
    }
     
    console.log('Editing Student ID:', editingStudentId);

    // console.log('Submitting data:', data, 'Method:', method);

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(formData)
    })
    .then(async (response) => {
      console.log("response",response)
      // Try parsing as JSON; fallback to text if parsing fails
      const text = await response.text();
      try {
        // Attempt to parse response as JSON
        const json = JSON.parse(text);
        if (!response.ok) {
          throw new Error(`Failed to add/update Student. Status: ${response.status}. Response: ${JSON.stringify(json)}`);
        }
        return json;
      } catch {
        // Handle non-JSON responses gracefully
        if (!response.ok) {
          throw new Error(`Failed to add/update Student. Status: ${response.status}. Response: ${text}`);
        }
        return text; // If successful, just return the text response
      }
    })
      .then(() => {
        setError(null);
        fetchstudents(); // Refresh the list after adding/updating
        setFormData({ username: '', email: '', password: '', currentPassword: '', newPassword: '', phone: '', photo: null, department: '', contact_info: '' }); // Reset form data
        setEditingStudentId(null); // Clear editing state
        toast.success(editingStudentId ? 'Student updated successfully!' : 'Student added successfully!');
      })
      .catch(error => {
        console.error('Error adding/updating Student:', error);
        toast.error(error.message);
        //setError(error.message); // Update the error state with the specific message
      });
  };

  // Set form data for editing a specific Student
  const handleEditStudent = (Student) => {
    setEditingStudentId(Student.UID); // Use the correct id property 'uid'
    setFormData({ 
      username: Student.username, 
      email: Student.email, 
      //password: Student.password, 
      phone: Student.phone,
      currentPassword: '',
      newPassword: '',
     }); // Populate form with Student data
  };

  // Handle deleting a Student
  const handleDeleteStudent = (student) => {
    console.log('Deleting Student with ID:', student.UID); // Debugging output
    fetch(`http://localhost:3001/api/v1/p1/students/${student.UID}`, { method: 'DELETE' }) // Correct DELETE request
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete Student.');
        }
        setStudents(students.filter(s => s.UID !== student.UID)); // Update the state without refreshing
        toast.success('Student deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting Student:', error);
        toast.error('Failed to delete Student.');
        //setError('Failed to delete Student.');
      });
  };

  // Display the list of students in the table
  const displayStudent = (students) => {
    return students.map((student) => (
      <tr className={style["tr"]} key={student.uid}>
        <td className={style["td"]}>{student.phone}</td>
        <td className={style["td"]}>{student.username}</td>
        <td className={style["td"]}>{student.email}</td>
        {/* <td className={style["td"]}>{Student.password}</td> */}
        
        <td className={style["td"]}>
          <button className={style["btn"]} onClick={() => handleEditStudent(student)}><FontAwesomeIcon icon={faPenToSquare} /></button> {/* Set up editing */}
        </td>
        <td className={style["td"]}>
          <button className={style["btn"]} onClick={() => handleDeleteStudent(student)}><FontAwesomeIcon icon={faTrash} /></button> {/* Handle deletion */}
        </td>
      </tr>
    ));
  };



  return (
    <>
      <ToastContainer />
      <div className={style["body"]}>
        <div className={style["input1"]}>
          <label className={style["label"]} htmlFor="username">Student Name:</label>
          <input className={style["inputS"]} type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
        </div>
        <div className={style["input2"]}>
          <label className={style["label"]} htmlFor="email">Student Email:</label>
          <input className={style["inputS"]} type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className={style["input3"]}>
        {editingStudentId ? (
          <>
            <div>
              <label className={style["label"]} htmlFor="currentPassword">Current Password:</label>
              <input
                className={style["inputS"]}
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className={style["label"]} htmlFor="newPassword">New Password:</label>
              <input
                className={style["inputS"]}
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className={style["label"]} htmlFor="password">Student Password:</label>
              <input
                className={style["inputS"]}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}
      </div>



        <div className={style["input4"]}>
          <label className={style["label"]} htmlFor="phone">Student Number:</label>
          <input className={style["inputS"]} type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        
        <button onClick={handleAddOrUpdateStudent}>
          {editingStudentId ? 'Update Student' : 'Add Student'}
        </button>
        {error && <div className={style["error"]}>{error}</div>} {/* Display errors */}
        <br />
      </div>
      <div className={style["search"]}>
      <input
          className={`${style["myInput"]} ${style["inputS"]}`}
          type="text"
          onChange={handleSearchInputChange}
          value={searchTerm}
          placeholder="Search by name"
        />
      </div>
      <div className={style["container"]}>
        <div className={style["inputtable"]}>
          <table className={style["table"]}>
            <thead>
              <tr className={style["tr"]}>
                <th className={style["th"]}>Student Number</th>
                <th className={style["th"]}>Student Name</th>
                <th className={style["th"]}>Student Email</th>
                {/* <th className={style["th"]}>Student Password</th> */}
                <th className={style["th"]}>Update</th>
                <th className={style["th"]}>Delete</th>
              </tr>
            </thead>
            <tbody>
            {filteredStudents && displayStudent(filteredStudents)}
             </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Student;


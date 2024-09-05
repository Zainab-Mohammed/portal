import style from "@/styles/doctor.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import{faTrash}from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]); // State to store doctors data
  const [error, setError] = useState(null); // State to handle errors
  const [formData, setFormData] = useState({ username: '', email: '', password: '', phone: '' }); // Form state for adding/updating doctors
  const [editingDoctorId, setEditingDoctorId] = useState(null); // Track which doctor is being edited

  useEffect(() => {
    fetchDoctors();
  }, []);

  // Fetch doctors data from the API
  const fetchDoctors = () => {
    fetch('http://localhost:3001/api/v1/p1/doctors')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched doctors:', data); // Debugging output
        setDoctors(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch doctors.');
      });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle adding or updating a doctor
  const handleAddOrUpdateDoctor = () => {
    const method = editingDoctorId ? 'PUT' : 'POST'; // Use PUT for update, POST for add
    const url = editingDoctorId 
      ? `http://localhost:3001/api/v1/p1/doctors/${editingDoctorId}` // URL for updating
      : 'http://localhost:3001/api/v1/p1/adddoctor'; // URL for adding

    console.log('Submitting data:', formData, 'Method:', method); // Debugging output
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          // Try to parse as JSON if possible
          return response.text().then(text => {
            try {
              const json = JSON.parse(text);
              throw new Error(`Failed to add/update doctor. Status: ${response.status}. Response: ${JSON.stringify(json)}`);
            } catch {
              throw new Error(`Failed to add/update doctor. Status: ${response.status}. Response: ${text}`);
            }
          });
        }
        return response.json();
      })
      .then(() => {
        fetchDoctors(); // Refresh the list after adding/updating
        setFormData({ username: '', email: '', password: '', phone: '' }); // Reset form data
        setEditingDoctorId(null); // Clear editing state
      })
      .catch(error => {
        console.error('Error adding/updating doctor:', error);
        setError(error.message); // Update the error state with the specific message
      });
  };

  // Set form data for editing a specific doctor
  const handleEditDoctor = (doctor) => {
    setEditingDoctorId(doctor.uid); // Use the correct id property 'uid'
    setFormData({ username: doctor.username, email: doctor.email, password: doctor.password, phone: doctor.phone }); // Populate form with doctor data
  };

  // Handle deleting a doctor
  const handleDeleteDoctor = (doctorId) => {
    console.log('Deleting doctor with ID:', doctorId); // Debugging output
    fetch(`http://localhost:3001/api/v1/p1/doctors/${doctorId}`, { method: 'DELETE' }) // Correct DELETE request
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete doctor.');
        }
        setDoctors(doctors.filter(doctor => doctor.uid !== doctorId)); // Update the state without refreshing
      })
      .catch(error => {
        console.error('Error deleting doctor:', error);
        setError('Failed to delete doctor.');
      });
  };

  // Display the list of doctors in the table
  const displayDoctor = (doctors) => {
    return doctors.map((doctor) => (
      <tr className={style["tr"]} key={doctor.uid}>
        <td className={style["td"]}>{doctor.phone}</td>
        <td className={style["td"]}>{doctor.username}</td>
        <td className={style["td"]}>{doctor.email}</td>
        {/* <td className={style["td"]}>{doctor.password}</td> */}
        <td className={style["td"]}>{doctor.role}</td>
        <td className={style["td"]}>
          <button className={style["btn"]} onClick={() => handleEditDoctor(doctor)}><FontAwesomeIcon icon={faPenToSquare} /></button> {/* Set up editing */}
        </td>
        <td className={style["td"]}>
          <button className={style["btn"]} onClick={() => handleDeleteDoctor(doctor.uid)}><FontAwesomeIcon icon={faTrash} /></button> {/* Handle deletion */}
        </td>
      </tr>
    ));
  };

  // Component to handle image upload and display
  const YourComponent = () => {
    const loadFile = (event) => {
      const image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
    };

    return (
      <div className={`${style["profile-pic"]} ${style['img']}`}>
        <label className={style["-label"]} htmlFor="file">
          <span className={style["glyphicon glyphicon-camera"]}></span>
          <span>Change Image</span>
        </label>
        <input 
          id="file" 
          type="file" 
          onChange={loadFile} // Correct event handler
        />
        <img 
          src="/img-1.jpg" // Corrected the path to be from the public folder
          id="output" 
          width="200" 
          alt="Profile Preview" // Add alt attribute for accessibility
        />
      </div>
    );
  };

  return (
    <>
      <div className={style["body"]}>
        <YourComponent />
        <div className={style["input1"]}>
          <label className={style["label"]} htmlFor="username">Doctor Name:</label>
          <input className={style["inputS"]} type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
        </div>
        <div className={style["input2"]}>
          <label className={style["label"]} htmlFor="email">Doctor Email:</label>
          <input className={style["inputS"]} type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className={style["input3"]}>
          <label className={style["label"]} htmlFor="password">Doctor Password:</label>
          <input className={style["inputS"]} type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <div className={style["input4"]}>
          <label className={style["label"]} htmlFor="phone">Doctor Number:</label>
          <input className={style["inputS"]} type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <button onClick={handleAddOrUpdateDoctor}>
          {editingDoctorId ? 'Update Doctor' : 'Add Doctor'}
        </button>
        {error && <div className={style["error"]}>{error}</div>} {/* Display errors */}
        <br />
      </div>
      <div className={style["search"]}>
        <input
          className={`${style["myInput"]} ${style["inputS"]}`}
          type="text"
          placeholder="Search by name--"
          id="myInput"
        />
      </div>
      <div className={style["container"]}>
        <div className={style["inputtable"]}>
          <table className={style["table"]}>
            <thead>
              <tr className={style["tr"]}>
                <th className={style["th"]}>Doctor Number</th>
                <th className={style["th"]}>Doctor Name</th>
                <th className={style["th"]}>Doctor Email</th>
                {/* <th className={style["th"]}>Doctor Password</th> */}
                <th className={style["th"]}>Role</th>
                <th className={style["th"]}>Update</th>
                <th className={style["th"]}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {displayDoctor(doctors)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Doctor;

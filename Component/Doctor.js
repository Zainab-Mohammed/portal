import style from "@/styles/doctor.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import{faTrash}from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]); // State to store doctors data
  const [error, setError] = useState(null); // State to handle errors
  const [formData, setFormData] = useState({ username: '', email: '', password: '', currentPassword: '', newPassword: '', phone: '', photo: null, department: '', contact_info: '' }); // Form state for adding/updating doctors
  const [editingDoctorId, setEditingDoctorId] = useState(null); // Track which doctor is being edited
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

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
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  // Handle file input change for photo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevFormData => ({ ...prevFormData, photo: file }));
    }
  };

  // Handle adding or updating a doctor
  const handleAddOrUpdateDoctor = () => {
    console.log('Form Data Before Before Submission:', formData)
    const method = editingDoctorId ? 'PUT' : 'POST'; // Use PUT for update, POST for add
    const url = editingDoctorId 
      ? `http://localhost:3001/api/v1/p1/doctors/${editingDoctorId}` // URL for updating
      : 'http://localhost:3001/api/v1/p1/adddoctor'; // URL for adding

      console.log("URL: ",url)

    /*console.log('Submitting data:', formData, 'Method:', method); // Debugging output
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })*/

    const data = new FormData();
    data.append('username', formData.username);
    data.append('email', formData.email);
    //data.append('password', formData.password);
    data.append('phone', formData.phone);
    data.append('department', formData.department);
    data.append('contact_info', formData.contact_info);
    if (formData.photo) {
      data.append('photo', formData.photo);
    }

    if (editingDoctorId) {
      // Only send the password fields if they are provided
      if (formData.newPassword && formData.currentPassword) {
        formData.password = {
          current: formData.currentPassword,
          new: formData.newPassword

        }
        const passwordObj = {
          current: formData.currentPassword,
          new: formData.newPassword
        };
        data.append('password[current]', passwordObj.current);
    data.append('password[new]', passwordObj.new);
      }
    }
     else 
     {
      // On doctor creation, a password is required
      data.append('password', formData.password);
    }
    console.log('Editing Doctor ID:', editingDoctorId);

    console.log('Submitting data:', JSON.stringify(data) , 'Method:', method);

    fetch(url, {
      method,
    //   headers: {
    //     'Content-Type': 'application/json',
    // },
      // body: JSON.stringify(data)
      body: (data)

    })
    .then(async (response) => {
      console.log("response",response)
      // Try parsing as JSON; fallback to text if parsing fails
      const text = await response.text();
      try {
        // Attempt to parse response as JSON
        const json = JSON.parse(text);
        if (!response.ok) {
          throw new Error(`Failed to add/update doctor. Status: ${response.status}. Response: ${JSON.stringify(json)}`);
        }
        return json;
      } catch {
        // Handle non-JSON responses gracefully
        if (!response.ok) {
          throw new Error(`Failed to add/update doctor. Status: ${response.status}. Response: ${text}`);
        }
        return text; // If successful, just return the text response
      }
    })
      .then(() => {
        setError(null);
        fetchDoctors(); // Refresh the list after adding/updating
        setFormData({ username: '', email: '', password: '', currentPassword: '', newPassword: '', phone: '', photo: null, department: '', contact_info: '' }); // Reset form data
        setEditingDoctorId(null); // Clear editing state
        toast.success(editingDoctorId ? 'Doctor updated successfully!' : 'Doctor added successfully!');
      })
      .catch(error => {
        console.error('Error adding/updating doctor:', error);
        toast.error(error.message);
        //setError(error.message); // Update the error state with the specific message
      });
  };

  // Set form data for editing a specific doctor
  const handleEditDoctor = (doctor) => {
    setEditingDoctorId(doctor.UID); // Use the correct id property 'uid'
    setFormData({ 
      username: doctor.username, 
      email: doctor.email, 
      //password: doctor.password, 
      phone: doctor.phone,
      department: doctor.department,
      contact_info: doctor.contact_info,
      currentPassword: '',
      newPassword: '',
      photo: doctor.photo, }); // Populate form with doctor data
  };

  // Handle deleting a doctor
  const handleDeleteDoctor = (doctor) => {
    console.log('Deleting doctor with ID:', doctor.UID); // Debugging output
    fetch(`http://localhost:3001/api/v1/p1/doctors/${doctor.UID}`, { method: 'DELETE' }) // Correct DELETE request
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete doctor.');
        }
        setDoctors(doctors.filter(d => d.UID !== doctor.UID)); // Update the state without refreshing
        toast.success('Doctor deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting doctor:', error);
        //setError('Failed to delete doctor.');
        toast.error('Failed to delete doctor.');
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
        <td className={style["td"]}>{doctor.department}</td>
        <td className={style["td"]}>{doctor.contact_info}</td>
        <td className={style["td"]}>
        {doctor.photo ? (
          <Image
            src={doctor.photo.startsWith('http') ? doctor.photo : `http://localhost:3001/${doctor.photo.replace(/\\/g, '/')}`}
            alt={`Photo of ${doctor.username}`}
            width={100}
            height={100}
            className={style["photo"]}
          />
        ) : (
          <Image
            src="/images/default-avatar.png"
            alt="Default Avatar"
            width={100}
            height={100}
            className={style["photo"]}
          />
        )}
      </td>

        <td className={style["td"]}>
          <button className={style["btn"]} onClick={() => handleEditDoctor(doctor)}><FontAwesomeIcon icon={faPenToSquare} /></button> {/* Set up editing */}
        </td>
        <td className={style["td"]}>
          <button className={style["btn"]} onClick={() => handleDeleteDoctor(doctor)}><FontAwesomeIcon icon={faTrash} /></button> {/* Handle deletion */}
        </td>
      </tr>
    ));
  };

  // Component to handle image upload and display
  const YourComponent = () => {
    const loadFile = (event) => {

      console.log("Event",event);

      const file = event.target.files[0];
      console.log(file);

      if (file) {
        setFormData({ ...formData, photo: file }); // Save the file in formData
        const reader = new FileReader();
        reader.onloadend = () => {
          const image = document.getElementById("output");
          image.src = reader.result; // Preview image
        };
        reader.readAsDataURL(file); // Convert to data URL
      }
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
          src={
            formData.photo
              ? // Check if formData.photo is a File object or a URL
                formData.photo instanceof File
                ? URL.createObjectURL(formData.photo)
                : `http://localhost:3001/${formData.photo.replace(/\\/g, '/')}`
              : "/images/default-avatar.png"
          }          
          id="output" 
          width="200" 
          alt="Profile Preview" // Add alt attribute for accessibility
        />
      </div>
    );
  };

  return (
    <>
    <ToastContainer />
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
        {editingDoctorId ? (
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
              <label className={style["label"]} htmlFor="password">Doctor Password:</label>
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
          <label className={style["label"]} htmlFor="phone">Doctor Number:</label>
          <input className={style["inputS"]} type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        <div className={style["input5"]}>
          <label className={style["label"]} htmlFor="department">Doctor Department:</label>
          <input className={style["inputS"]} type="text" id="department" name="department" value={formData.department} onChange={handleInputChange} />
        </div>
        <div className={style["input6"]}>
          <label className={style["label"]} htmlFor="contact_info">Doctor Contact Info:</label>
          <input className={style["inputS"]} type="email" id="contact_info" name="contact_info" value={formData.contact_info} onChange={handleInputChange} />
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
                <th className={style["th"]}>Department</th>
              <th className={style["th"]}>Contact Info</th>
              <th className={style["th"]}>Photo</th>
                <th className={style["th"]}>Update</th>
                <th className={style["th"]}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {doctors && displayDoctor(doctors)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Doctor;


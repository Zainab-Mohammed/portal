// pages/DoctorPageForStudent/[DoctorUid].js
import { useEffect, useState } from 'react';
import styles from '@/styles/DoctorPageForStudent.module.css'; 
import { useRouter } from 'next/router';
 export default function DoctorPageForStudent() {
    const router = useRouter();
    const { id } = router.query;  

    const [doctor, setDoctor] = useState(null);
    const [doctorDetails, setDoctorDetails] = useState(null);
    const [doctorCourses, setDoctorCourses] = useState([]);
    const [showOfficeHours, setShowOfficeHours] = useState(false);
    const [officeHours, setOfficeHours] = useState([]);

    useEffect(() => {
        if (id) {
            const fetchDoctor = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/api/v1/p1/users/${id}`);
                    const data = await response.json();
                    setDoctor(data[0]);
                } catch (error) {
                    console.error('Error fetching doctor details:', error);
                }
            };

            const fetchDoctorDetails = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/api/v1/p1/doctors/${id}`);
                    const data = await response.json();
                    setDoctorDetails(data);
                } catch (error) {
                    console.error('Error fetching doctor details:', error);
                }
            };

            const fetchDoctorCourses = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/api/v1/p1/doctorss/${id}`);
                    const data = await response.json();
                    setDoctorCourses(data);
                } catch (error) {
                    console.error('Error fetching doctor courses:', error);
                }
            };

            fetchDoctor();
            fetchDoctorDetails();
            fetchDoctorCourses();
        }
    }, [id]);

    const toggleOfficeHours = async () => {
        setShowOfficeHours(!showOfficeHours);
        if (!showOfficeHours) {
            try {
                const response = await fetch(`http://localhost:3001/api/v1/p1/officehours/${id}`);
                const data = await response.json();
                setOfficeHours(data);
            } catch (error) {
                console.error('Error fetching office hours:', error);
            }
        }
    };

    if (!doctor || !doctorDetails) {
        return(
<div className="loading">
                <div className="loadingSpinner"></div>
                <span>Loading...</span>
            </div>
    )}

    return (
        <div className={styles.all}>
        <div className={styles.Body}>
            <div className={styles.container}>
                <label htmlFor="name">Doctor name:</label>
                <input id="name" type="text" value={doctor.username} readOnly />
                
                <label htmlFor="Contact_Info">Contact Info:</label>
                <input id="email" type="text" value={doctorDetails.contact_info} readOnly />

                <label htmlFor="Courses">Courses:</label>
                <input id="Courses" type="text" value={doctorCourses.courses_names} readOnly />
                
                <label htmlFor="Department">Department:</label>
                <input id="Department" type="text" value={doctorDetails.department} readOnly />
            </div>

            <div className={styles.photoContainer}>
                <img src={`http://localhost:3001/${doctorDetails.photo}`} alt={doctor.name} />
            </div>

            <button onClick={toggleOfficeHours}>
                {showOfficeHours ? 'Hide Office Hours' : 'Show Office Hours'}
            </button>
</div>
<br/><br/>
            {showOfficeHours && (
                <div className={styles.officeHours}>
                    <h3>Office Hours</h3>
                    <ul>
                        {officeHours.map((hour, index) => (
                            <li key={index}> <input type='text' value={hour.day} readOnly /> <input type='text' value={hour.start_time} readOnly/><input type='text' value={hour.end_time} readOnly/></li>
                        ))}
                    </ul>
                </div>
            )}
                        </div>

    );
}

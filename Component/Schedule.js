import { useState, useEffect } from 'react';
import style from "@/styles/schedule.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import closeIcon from '/public/images/close-icon.svg'; 

export default function Schedule() {
    const [schedules, setSchedules] = useState([]);
    const [Allschedules, setAllSchedules] = useState([]);

    const [doctors, setDoctors] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [schedulesRes, doctorsRes, coursesRes] = await Promise.all([
                    fetch('http://localhost:3001/api/v1/p1/schedules'),
                    fetch('http://localhost:3001/api/v1/p1/doctors'),
                    fetch('http://localhost:3001/api/v1/p1/courses')
                ]);

                const schedulesData = await schedulesRes.json();
                const doctorsData = await doctorsRes.json();
                const coursesData = await coursesRes.json();

                setAllSchedules(schedulesData || []);
                setDoctors(doctorsData || []);
                setCourses(coursesData || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [schedules]);
    //     const fetchSchedules = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3001/api/v1/p1/schedules');
    //             const data = await response.json();
    //             console.log('Fetched schedules:', data); 
    //             setAllSchedules(data || []);
    //         } catch (error) {
    //             console.error('Error fetching schedules:', error);
    //         }
    //     };

    //     const fetchDoctors = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3001/api/v1/p1/doctors');
    //             const data = await response.json();
    //             console.log('Fetched doctors:', data);
    //             setDoctors(data || []);
    //         } catch (error) {
    //             console.error('Error fetching doctors:', error);
    //         }
    //     };

    //     const fetchCourses = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3001/api/v1/p1/courses');
    //             const data = await response.json();
    //             console.log('Fetched courses:', data);
    //             setCourses(data || []);
    //         } catch (error) {
    //             console.error('Error fetching courses:', error);
    //         }
    //     };

    //     fetchSchedules();
    //     fetchDoctors();
    //     fetchCourses();
    // }, [schedules]);

    const handleAddSchedule = async (event) => {
        event.preventDefault();
        const form = event.target;
        const startDate = parseInt(form.StartDate.value);
        const duration = parseInt(form.Duration.value);
        const startTime = `${startDate.toString().padStart(2, '0')}:00:00`;
        const endTime = `${(startDate + duration).toString().padStart(2, '0')}:00:00`;

        const newSchedule = {
            courseName: form.CourseName.value,
            startTime,
            endTime,
            doctorName: form.DoctorName.value,
            dayOfWeek: form.DayOfWeek.value,
        };

        try {
            const response = await fetch('http://localhost:3001/api/v1/p1/schedules', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    CID: courses.find(course => course.name === newSchedule.courseName)?.CID,
                    DID: doctors.find(doctor => doctor.username === newSchedule.doctorName)?.DID,
                    day: newSchedule.dayOfWeek,
                    startTime: newSchedule.startTime,
                    endTime: newSchedule.endTime,
                    location: 'Some location',
                }),
            });
            const data = await response.json();
            console.log('Success:', data);
            
            if (response.ok) {
                // Success: Show success toast and update state
                toast.success('Schedule added successfully!');
                setSchedules([...schedules, newSchedule]);
            } else if (data.message && data.message.includes('conflict')) {
                // Conflict: Show conflict error toast
                toast.error('Schedule conflict detected! Please choose a different time or doctor.');
            } else {
                // Other errors: Show general error toast
                toast.error('Failed to add schedule.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const formatTime = (timeString) => {
        if (!timeString) return 'Invalid Time';

        const [timePart] = timeString.split('T')[1]?.split('Z') || [];
        if (!timePart) return 'Invalid Time';

        const [hours, minutes] = timePart.split(':').map(Number);
        if (isNaN(hours) || isNaN(minutes)) {
            console.error('Invalid time format:', timeString);
            return 'Invalid Time';
        }
        const period = hours >= 12 ? 'PM' : 'AM';
        const adjustedHours = hours % 12 || 12;
        return `${adjustedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    const controlSchedule = () => {
        return (
            <form onSubmit={handleAddSchedule} className={style.content}>
                <div className={style.labelSelect}>
                    <label htmlFor="CourseName">Course Name</label>
                    <select id='CourseName' name="CourseName">
                        {courses.map(course => (
                            <option key={course.CID} value={course.name}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={style.labelSelect}>
                    <label htmlFor="StartDate">Start Date</label>
                    <select id='StartDate' name="StartDate">
                        {[...Array(10).keys()].map(i => (
                            <option key={i + 9} value={i + 9}>
                                {i + 9} {i + 9 >= 12 ? 'PM' : 'AM'}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={style.labelSelect}>
                    <label htmlFor="Duration">Duration</label>
                    <select id='Duration' name="Duration">
                        {[1, 2, 3].map(value => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={style.labelSelect}>
                    <label htmlFor="DoctorName">Doctor Name</label>
                    <select id='DoctorName' name="DoctorName">
                        {doctors.map(doctor => (
                            <option key={doctor.DID} value={doctor.username}>
                                {doctor.username}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={style.labelSelect}>
                    <label htmlFor="DayOfWeek">Day of the Week</label>
                    <select id='DayOfWeek' name="DayOfWeek">
                        {['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map(day => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className={style.AddToSchedule}>Add to Schedule</button>
            </form>
        );
    };

    const daysMap = {
        Saturday: 'sat',
        Sunday: 'sun',
        Monday: 'mon',
        Tuesday: 'tues',
        Wednesday: 'wed',
        Thursday: 'thurs',
    };

    const handleDeleteSchedule = async (scheduleId) => {
        console.log('Deleting schedule with ID:', scheduleId); 
        
        if (!scheduleId || isNaN(scheduleId)) {
            toast.error('Invalid schedule ID.');
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:3001/api/v1/p1/schedule/${scheduleId}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                toast.error(`Failed to remove schedule: ${errorMessage}`);
            } else {
                toast.success('Schedule removed successfully.');
                //setAllSchedules(Allschedules.filter(schedule => schedule.SID !== scheduleId));
                const updatedSchedulesResponse = await fetch('http://localhost:3001/api/v1/p1/schedules');
            const updatedSchedulesData = await updatedSchedulesResponse.json();
            setAllSchedules(updatedSchedulesData || []);
            }
        } catch (error) {
            console.error('Error removing schedule:', error);
            toast.error('An error occurred while removing the schedule.');
        }
    };
    
  
    

    return (
        <>
            {controlSchedule()}
            <ToastContainer />

            <div className={style.calendar}>
                <div className={style.timeline}>
                    <div className={style.spacer}></div>
                    {[...Array(10).keys()].map(i => (
                        <div key={i + 9} className={style.timeMarker}>
                            {i + 9} {i + 9 >= 12 ? 'PM' : 'AM'}
                        </div>
                    ))}
                </div>
                <div className={style.days}>
                    {Object.keys(daysMap).map(day => (
                        <div key={day} className={`${style.day} ${style[daysMap[day]]}`}>
                            <div className={style.date}>
                                <p className={style.dateDay}>{day.slice(0, 3)}</p>
                            </div>
                            <div className={style.events}>
                                {Allschedules
                                    .filter(schedule => schedule.day === day)
                                    .map((schedule, index) => {
                                        // console.log('Schedule Object:', schedule); // Log to confirm SID is now present

                                        const scheduleId = schedule.sid; // Update to use the correct SID field

                                        // if (!scheduleId || isNaN(scheduleId)) {
                                        //     console.error('Invalid or missing SID:', scheduleId);
                                        //     return null;
                                        // }

                                        const startTime = new Date(`1970-01-01T${schedule.start_date}Z`) ;
                                        const endTime =  new Date(`1970-01-01T${schedule.end_date}Z`) ;

                                        console.log('Schedule item:', schedule, startTime, endTime); // Debugging output

                                        const topPosition = (startTime.getUTCHours() - 9) * 50;
                                        const eventHeight = (endTime.getUTCHours() - startTime.getUTCHours()) * 50;
                                        
                                        if (!startTime || !endTime) {
                                            console.error('Invalid time format:', schedule.start_date, schedule.end_date);
                                            return null;
                                        }

                                        return (
                                            <div
                                                key={index}
                                                className={style.event}
                                                style={{
                                                    top: `${topPosition}px`,
                                                    height: `${eventHeight}px`
                                                }}
                                            >
                                                 <img 
                                                    src={closeIcon.src} 
                                                    alt="Close" 
                                                    className={style.closeIcon} 
                                                    onClick={() => handleDeleteSchedule(scheduleId)} 
                                                />
                                                <p className={style.title}>{schedule.course_name}</p>
                                                <p className={style.time}>
                                                    {formatTime(startTime.toISOString())} - {formatTime(endTime.toISOString())}
                                                </p>
                                                <p className={style.doctor}>{schedule.doctor_name}</p>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

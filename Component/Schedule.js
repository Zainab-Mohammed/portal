import { useState, useEffect } from 'react';
import style from "@/styles/schedule.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Schedule() {
    const [Allschedules, setAllSchedules] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [courses, setCourses] = useState([]);

    // Fetch schedules, doctors, and courses when the component mounts
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
    }, []);

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

        // Send new schedule to backend and update local state on success
        try {
            const response = await fetch('http://localhost:3001/api/v1/p1/schedules', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    CID: courses.find(course => course.name === newSchedule.courseName)?.CID,
                    DID: doctors.find(doctor => doctor.username === newSchedule.doctorName)?.DID,
                    day: newSchedule.dayOfWeek,
                    startTime: newSchedule.startTime,
                    endTime: newSchedule.endTime,
                    location: 'Some location',
                }),
            });

            if (response.ok) {
                toast.success('Schedule added successfully!');
                setAllSchedules(prev => [...prev, newSchedule]);
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Failed to add schedule.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while adding the schedule.');
        }
    };

    const formatTime = (timeString) => {
        const [timePart] = timeString.split('T')[1]?.split('Z') || [];
        const [hours, minutes] = timePart.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const adjustedHours = hours % 12 || 12;
        return `${adjustedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    const controlSchedule = () => (
        <form onSubmit={handleAddSchedule} className={style.content}>
            <div className={style.labelSelect}>
                <label htmlFor="CourseName">Course Name</label>
                <select id='CourseName' name="CourseName">
                    {courses.map(course => (
                        <option key={course.CID} value={course.name}>{course.name}</option>
                    ))}
                

                </select>

            </div>
            <div className={style.labelSelect}>
                <label htmlFor="StartDate">Start Time</label>
                <select id='StartDate' name="StartDate">
                    {[...Array(10).keys()].map(i => (
                        <option key={i + 9} value={i + 9}>
                            {i + 9} {i + 9 >= 12 ? 'PM' : 'AM'}
                        </option>
                    ))}
                </select>
            </div>
            <div className={style.labelSelect}>
                <label htmlFor="Duration">Duration (Hours)</label>
                <select id='Duration' name="Duration">
                    {[1, 2, 3].map(value => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div className={style.labelSelect}>
                <label htmlFor="DoctorName">Doctor Name</label>
                <select id='DoctorName' name="DoctorName">
                    {doctors.map(doctor => (
                        <option key={doctor.DID} value={doctor.username}>{doctor.username}</option>
                    ))}
                </select>
            </div>
            <div className={style.labelSelect}>
                <label htmlFor="DayOfWeek">Day of the Week</label>
                <select id='DayOfWeek' name="DayOfWeek">
                    {['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className={style.AddToSchedule}>Add to Schedule</button>
        </form>
    );

    const daysMap = {
        Saturday: 'sat',
        Sunday: 'sun',
        Monday: 'mon',
        Tuesday: 'tues',
        Wednesday: 'wed',
        Thursday: 'thurs',
    };
    
    console.log('Rendering schedules:', Allschedules); // Debugging output
    
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
                                    .filter(schedule => schedule.dayOfWeek === day) // Match filtering key
                                    .map((schedule, index) => {
                                        const startTime = new Date(`1970-01-01T${schedule.startTime}Z`);
                                        const endTime = new Date(`1970-01-01T${schedule.endTime}Z`);
                                        console.log('Schedule item:', schedule, startTime, endTime); // Debugging output
    
                                        const topPosition = (startTime.getUTCHours() - 9) * 50;
                                        const eventHeight = (endTime.getUTCHours() - startTime.getUTCHours()) * 50;
    
                                        return (
                                            <div
                                                key={index}
                                                className={style.event}
                                                style={{
                                                    top: `${topPosition}px`,
                                                    height: `${eventHeight}px`
                                                }}
                                            >
                                                <p className={style.title}>machine</p>
                                                {/* {schedule.courseName} */}
                                                <p className={style.time}>
                                                    {formatTime(startTime.toISOString())} - {formatTime(endTime.toISOString())}
                                                </p>
                                                <p className={style.doctor}>{schedule.doctorName}</p>
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
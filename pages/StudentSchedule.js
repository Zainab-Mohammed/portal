import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import style from "@/styles/schedule.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import closeIcon from '/public/images/close-icon.svg'; 

export default function Schedule() {
    const [schedules, setSchedules] = useState([]);
    const [Allschedules, setAllSchedules] = useState([]);

    const [doctors, setDoctors] = useState([]);
    const [courses, setCourses] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/Login');
            return;
        }

        const fetchData = async () => {
            try {
                const [schedulesRes, doctorsRes, coursesRes] = await Promise.all([
                    fetch('http://localhost:3001/api/v1/p1/schedules'),
                    // fetch('http://localhost:3001/api/v1/p1/doctors'),
                    // fetch('http://localhost:3001/api/v1/p1/courses')
                ]);

                const schedulesData = await schedulesRes.json();
                // const doctorsData = await doctorsRes.json();
                // const coursesData = await coursesRes.json();

                setAllSchedules(schedulesData || []);
                // setDoctors(doctorsData || []);
                // setCourses(coursesData || []);
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



    const daysMap = {
        Saturday: 'sat',
        Sunday: 'sun',
        Monday: 'mon',
        Tuesday: 'tues',
        Wednesday: 'wed',
        Thursday: 'thurs',
    };


    return (
        <>
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
                                       

                                        return (
                                            <div
                                                key={index}
                                                className={style.event}
                                                style={{
                                                    top: `${topPosition}px`,
                                                    height: `${eventHeight}px`
                                                }}
                                            >
                                                
                                                <p className={style.title}>{schedule.course_name}</p>
                                                <p className={style.time}>
                                                    {formatTime(startTime.toISOString())} - {formatTime(endTime.toISOString())}
                                                </p>
                                                <p className={style.doctor}>Dr. {schedule.doctor_name}</p>
                                                <p className={style.location}>Hall {schedule.location}</p>
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
};

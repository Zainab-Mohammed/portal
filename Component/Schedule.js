import { useState, useEffect } from 'react';
import style from "@/styles/schedule.module.css";

export default function Schedule() {
    const [schedules, setSchedules] = useState([]);

    // Load schedules from local storage when the component mounts
    useEffect(() => {
        const storedSchedules = localStorage.getItem('schedules');
        if (storedSchedules) {
            setSchedules(JSON.parse(storedSchedules));
        }
    }, []);

    // Save schedules to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('schedules', JSON.stringify(schedules));
    }, [schedules]);

    const handleAddSchedule = (event) => {
        event.preventDefault();
        const form = event.target;
        const newSchedule = {
            courseName: form.CourseName.value,
            startDate: parseInt(form.StartDate.value),
            duration: parseInt(form.Duration.value),
            doctorName: form.DoctorName.value,
            dayOfWeek: form.DayOfWeek.value,
        };

        // Add the new schedule to the existing list
        setSchedules([...schedules, newSchedule]);
    };

    const controlSchedule = () => {
        return (
            // <div className={style.content}>
                <form onSubmit={handleAddSchedule} className={style.content}>
                    <div className={style.labelSelect}>
                    <label htmlFor="CourseName">Course Name</label>
                    <select id='CourseName' name="CourseName">
                        <option value='Math'>Math</option>
                        <option value='Physics'>Physics</option>
                        <option value='Programming'>Programming</option>
                        <option value='Electronics'>Electronics</option>
                    </select>
                    </div>
                    <div className={style.labelSelect}>
                    <label htmlFor="StartDate">Start Date</label>
                    <select id='StartDate' name="StartDate">
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                    </div>
                    <div className={style.labelSelect}>
                    <label htmlFor="Duration">Duration</label>
                    <select id='Duration' name="Duration">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                    </div>
                    <div className={style.labelSelect}>
                    <label htmlFor="DoctorName">Doctor Name</label>
                    <select id='DoctorName' name="DoctorName">
                        <option value='Mohamed'>Mohamed</option>
                        <option value='Ahmed'>Ahmed</option>
                        <option value='Sara'>Sara</option>
                        <option value='Mostafa'>Mostafa</option>
                    </select>
                    </div>
                    <div className={style.labelSelect}>
                    <label htmlFor="DayOfWeek">Day of the Week</label>
                    <select id='DayOfWeek' name="DayOfWeek">
                        <option value='Saturday'>Saturday</option>
                        <option value='Sunday'>Sunday</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                    </select>
                    </div>
                    <button type="submit" className={style.AddToSchedule}>Add to Schedule</button>
                </form>

         );
    };

    // Updated daysMap to start the week on Saturday and end on Thursday
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
            {controlSchedule()}
             <div className={style.calendar}>
                <div className={style.timeline}>
                    <div className={style.spacer}></div>
                    <div className={style.timeMarker}>9 AM</div>
                    <div className={style.timeMarker}>10 AM</div>
                    <div className={style.timeMarker}>11 AM</div>
                    <div className={style.timeMarker}>12 AM</div>
                    <div className={style.timeMarker}>1 PM</div>
                    <div className={style.timeMarker}>2 PM</div>
                    <div className={style.timeMarker}>3 PM</div>
                    <div className={style.timeMarker}>4 PM</div>
                    <div className={style.timeMarker}>5 PM</div>
                    <div className={style.timeMarker}>6 PM</div>
                </div>
                <div className={style.days}>
                    {Object.keys(daysMap).map((day) => (
                        <div key={day} className={`${style.day} ${style[daysMap[day]]}`}>
                            <div className={style.date}>
                                <p className={style.dateDay}>{day.slice(0, 3)}</p>
                            </div>
                            <div className={style.events}>
                                {schedules
                                    .filter(schedule => schedule.dayOfWeek === day)
                                    .map((schedule, index) => {
                                        const startTime = schedule.startDate;
                                        const endTime = startTime + schedule.duration;
                                        return (
                                            <div
                                                key={index}
                                                className={`${style.event} ${style[`start${startTime}`]} ${style[`end${endTime}`]}`}
                                            >
                                                <p className={style.title}>{schedule.courseName}</p>
                                                <p className={style.time}>
                                                    {startTime} PM - {endTime} PM
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

import { useState, useEffect } from 'react';
import style from "@/styles/schedule.module.css";

export default function OfficeHours() {
    const [officeHours, setOfficeHours] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('Mohamed');

     useEffect(() => {
        const storedOfficeHours = localStorage.getItem('officeHours');
        if (storedOfficeHours) {
            setOfficeHours(JSON.parse(storedOfficeHours));
        }
    }, []);

     useEffect(() => {
        localStorage.setItem('officeHours', JSON.stringify(officeHours));
    }, [officeHours]);

    const handleAddOfficeHour = (event) => {
        event.preventDefault();
        const form = event.target;
        const newOfficeHour = {
            doctorName: selectedDoctor,
            dayOfWeek: form.DayOfWeek.value,
            startTime: parseInt(form.StartTime.value),
            duration: parseInt(form.Duration.value),
        };

         setOfficeHours([...officeHours, newOfficeHour]);
    };

    const handleDoctorChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    const controlOfficeHours = () => {
        return (
            <div>
                <label htmlFor="DoctorSelect">Select Doctor</label>
                <select id="DoctorSelect" onChange={handleDoctorChange} value={selectedDoctor}>
                    <option value='Mohamed'>Mohamed</option>
                    <option value='Ahmed'>Ahmed</option>
                    <option value='Sara'>Sara</option>
                    <option value='Mostafa'>Mostafa</option>
                </select>
                <form onSubmit={handleAddOfficeHour} className={style.content}>
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
                    <div className={style.labelSelect}>
                        <label htmlFor="StartTime">Start Time</label>
                        <select id='StartTime' name="StartTime">
                            <option value={9}>9 AM</option>
                            <option value={10}>10 AM</option>
                            <option value={11}>11 AM</option>
                            <option value={12}>12 PM</option>
                            <option value={1}>1 PM</option>
                            <option value={2}>2 PM</option>
                            <option value={3}>3 PM</option>
                            <option value={4}>4 PM</option>
                            <option value={5}>5 PM</option>
                            <option value={6}>6 PM</option>
                        </select>
                    </div>
                    <div className={style.labelSelect}>
                        <label htmlFor="Duration">Duration</label>
                        <select id='Duration' name="Duration">
                            <option value={1}>1 Hour</option>
                            <option value={2}>2 Hours</option>
                            <option value={3}>3 Hours</option>
                        </select>
                    </div>
                    <button type="submit" className={style.AddToSchedule}>Add Office Hour</button>
                </form>
            </div>
        );
    };

    // Days mapping
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
            {controlOfficeHours()}
            <div className={style.calendar}>
                <div className={style.timeline}>
                    <div className={style.spacer}></div>
                    <div className={style.timeMarker}>9 AM</div>
                    <div className={style.timeMarker}>10 AM</div>
                    <div className={style.timeMarker}>11 AM</div>
                    <div className={style.timeMarker}>12 PM</div>
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
                                {officeHours
                                    .filter(officeHour => officeHour.dayOfWeek === day)
                                    .map((officeHour, index) => {
                                        const startTime = officeHour.startTime;
                                        const endTime = startTime + officeHour.duration;
                                        const formattedStartTime = startTime > 12 ? `${startTime - 12} PM` : `${startTime} AM`;
                                        const formattedEndTime = endTime > 12 ? `${endTime - 12} PM` : `${endTime} AM`;

                                        return (
                                            <div
                                                key={index}
                                                className={`${style.event} ${style[`start${startTime}`]} ${style[`end${endTime}`]}`}
                                            >
                                                <p className={style.title}>{officeHour.doctorName}</p>
                                                <p className={style.time}>
                                                    {formattedStartTime} - {formattedEndTime}
                                                </p>
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

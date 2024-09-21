import { useState, useEffect } from 'react';
import style from "@/styles/schedule.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import closeIcon from '/public/images/close-icon.svg'; 


export default function OfficeHours() {
    const [officeHours, setOfficeHours] = useState([]);
    const [did, setDid] = useState(null); // Store the DID once fetched

    // Step 1: Fetch DID using UID from local storage
    useEffect(() => {
        const uid = localStorage.getItem('UID');
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.error('Token is missing');
          return;
        }

        const fetchDid = async () => {
            try {
                const token = localStorage.getItem('authToken');
                console.log('Token sent:', token); // Log the token on the client-side

                const response = await fetch(`http://localhost:3001/api/v1/p1/getdid`,{
                    headers: {
                      'Authorization': `Bearer ${token}`,
                    },
                  },

                );
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    console.log('Response received:', await response.text()); // Log if not JSON
                    throw new Error("Received non-JSON response");
                }
                const data = await response.json();
                setDid(data.did);
            } catch (error) {
                console.error('Error fetching DID:', error);
            }}

        if (uid) {
            fetchDid();  // Fetch DID only if UID is available
        }
    }, []);

    // Step 2: Fetch office hours once DID is set
    useEffect(() => {
        if (did) {
            const fetchOfficeHours = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/api/v1/p1/officehours/${did}`);
                    const data = await response.json();
                    setOfficeHours(data);
                } catch (error) {
                    console.error('Error fetching office hours:', error);
                }
            };
            fetchOfficeHours();
        }
    }, [did]);

    // Step 3: Add new office hour for the doctor (using DID)
  /*  const handleAddOfficeHour = async (event) => {
        event.preventDefault();

       // if (StartTime.value >= EndTime.value) {
         //   toast.error('Start time must be before end time.');
         //   return; // Exit the function if validation fails
       // }


        const form = event.target;
        const newOfficeHour = {
            doctorId: did,  // Make sure 'did' is correct
            day: form.dayofweak.value,
            startTime: parseInt(form.StartTime.value),
            endTime: parseInt(form.EndTime.value),  // Ensure it's the correct time format
            location: form.Location.value,
        };
      
    
        console.log(newOfficeHour);  // Log this to see the data you're sending
    try{
        const response = await fetch('http://localhost:3001/api/v1/p1/addofficehour', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOfficeHour),
        });
   
        if (!response.ok) {
            const errorMessage = await response.text();
            toast.error(`Failed to add office hour: ${errorMessage}`);
        } else {
            toast.success('office hour added successfully.');
            const updatedofficehoureResponse = await fetch(`http://localhost:3001/api/v1/p1/officehours/${did}`);
        const updatedofficehourssData = await updatedofficehoureResponse.json();
        setOfficeHours(updatedofficehourssData || []);
        }
    } catch (error) {
        console.error('Error removing schedule:', error);
        toast.error('An error occurred while removing the schedule.');
    }

    };

    */
    const handleAddOfficeHour = async (event) => {
        event.preventDefault();
      
        // Convert integers to time strings (e.g., 9 => '09:00:00', 13 => '13:00:00')
      const formatTime = (hour) => {
        return hour.toString().padStart(2, '0') + ':00:00'; // Pad single digits and append ':00:00'
    };

        const form = event.target;
       const startTime= formatTime(parseInt(form.StartTime.value)); // Convert to 'HH:00:00'
       const  endTime= formatTime(parseInt(form.EndTime.value));  // Convert to 'HH:00:00'
        if (startTime >= endTime) {
            toast.error('Start time must be before end time.');
            return; // Stop the function if validation fails
        }

        const newOfficeHour = {
            doctorId: did,  // Ensure DID is correct
            day: form.dayofweak.value,
            startTime: formatTime(parseInt(form.StartTime.value)),  // Convert to 'HH:00:00'
            endTime: formatTime(parseInt(form.EndTime.value)),      // Convert to 'HH:00:00'
            location: form.Location.value,
        };
    
        try {
            const response = await fetch('http://localhost:3001/api/v1/p1/addofficehour', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOfficeHour),
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                toast.error(`Failed to add office hour: ${errorMessage}`);
            } else {
                toast.success('Office hour added successfully.');
                const updatedResponse = await fetch(`http://localhost:3001/api/v1/p1/officehours/${did}`);
                const updatedData = await updatedResponse.json();
                setOfficeHours(updatedData || []);
            }
        } catch (error) {
            console.error('Error adding office hour:', error);
            toast.error('An error occurred while adding the office hour.');
        }
    };
    
    const formatTime = (timeString) => {
        // Ensure timeString is a valid string
        if (!timeString || typeof timeString !== 'string') {
            console.error('Invalid time format:', timeString);
            return 'Invalid Time';
        }
    
        // Split the time string into hours, minutes, and seconds
        const [hours, minutes] = timeString.split(':').map(Number);
    
        if (isNaN(hours) || isNaN(minutes)) {
            console.error('Invalid time values:', timeString);
            return 'Invalid Time';
        }
    
        // Determine AM or PM
        const period = hours >= 12 ? 'PM' : 'AM';
    
        // Adjust hours to 12-hour format
        const adjustedHours = hours % 12 || 12; // Converts 0 to 12 for midnight and 12-hour format
    
        // Return formatted time with AM/PM
        return `${adjustedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };
    

    // Step 4: Delete an office hour
    const handleDeleteOfficeHour = async (id) => {
        try {

        const response = await fetch(`http://localhost:3001/api/v1/p1/officehour/${id}`, {
            method: 'DELETE',
        });

       
        if (!response.ok) {
            const errorMessage = await response.text();
            toast.error(`Failed to remove office hour: ${errorMessage}`);
        } else {
            toast.success('office hour removed successfully.');
            setOfficeHours(officeHours.filter(hour => hour.id !== id)); // Remove from list
            const updatedofficehoureResponse = await fetch(`http://localhost:3001/api/v1/p1/officehours/${did}`);
        const updatedofficehourssData = await updatedofficehoureResponse.json();
        setOfficeHours(updatedofficehourssData || []);
        }
    } catch (error) {
        console.error('Error removing schedule:', error);
        toast.error('An error occurred while removing the schedule.');
    }
    };

    // Form component to control office hours
    const controlOfficeHours = () => {
        return (
            <div>
                <form onSubmit={handleAddOfficeHour} className={style.content}>
                    <div className={style.labelSelect}>
                        <label htmlFor="DayOfWeek">Day of the Week</label>
                        <select id='dayofweak' name="dayofweak">
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
                            <option value={13}>1 PM</option>
                            <option value={14}>2 PM</option>
                            <option value={15}>3 PM</option>
                            <option value={16}>4 PM</option>
                            <option value={17}>5 PM</option>
                            <option value={18}>6 PM</option>
                        </select>
                    </div>
                    <div className={style.labelSelect}>
                        <label htmlFor="EndTime">End Time</label>
                        <select id='EndTime' name="EndTime">
                            <option value={10}>10 AM</option>
                            <option value={11}>11 AM</option>
                            <option value={12}>12 PM</option>
                            <option value={13}>1 PM</option>
                            <option value={14}>2 PM</option>
                            <option value={15}>3 PM</option>
                            <option value={16}>4 PM</option>
                            <option value={17}>5 PM</option>
                            <option value={18}>6 PM</option>
                        </select>
                    </div>
                    <div className={style.labelSelect}>
                        <label htmlFor="Location">Location</label>
                        <input id='Location' name="Location" type="text" placeholder="Office location" />
                    </div>
                    <button type="submit" className={style.AddToSchedule}>Add Office Hour</button>
                </form>
            </div>
        );
    };

    // Days mapping for CSS classes
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
          <ToastContainer /> {/* This is crucial for the toast to work */}
            {controlOfficeHours()}
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
                    {Object.keys(daysMap).map((day) => (
                        <div key={day} className={`${style.day} ${style[daysMap[day]]}`}>
                            <div className={style.date}>
                                <p className={style.dateDay}>{day.slice(0, 3)}</p>
                            </div>
                            {officeHours.length > 0 && (

                            <div className={style.events}>
                                {officeHours
    .filter(officeHour => officeHour.day === day) // Ensure correct key name
    .map((officeHour, index) => {

        const officeHourId = officeHour.OID; // Update to use the correct SID field
       // const startTime = officeHour.start_time;  // Make sure you fetch this from your data
        //const endTime = officeHour.end_time;
        

        const startTime = new Date(`1970-01-01T${officeHour.start_time}Z`); // Assuming start_time is in 'HH:00:00' format
        const endTime = new Date(`1970-01-01T${officeHour.end_time}Z`); // Same for end_time

        if (!startTime || !endTime) {
            console.error('Invalid time format:', officeHour.start_time, officeHour.end_time);
            return null;
        }

        const topPosition = (startTime.getUTCHours() - 9) * 50; // Adjust according to your timeline
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
             <img 
                src={closeIcon.src} 
                alt="Close" 
                className={style.closeIcon} 
                onClick={() => handleDeleteOfficeHour(officeHourId)} 
            />
           <p className={style.time}>
                 {startTime ? formatTime(officeHour.start_time) : 'undefined'} - {endTime ? formatTime(officeHour.end_time) : 'undefined'}
             </p>

       
         <p className={style.location}>Location: {officeHour.location}</p>        
            </div>
        );
    })}

                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

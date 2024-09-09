import { useState } from 'react';
import style from "@/styles/sendNotification.module.css"; // Ensure correct path to your styles

export default function SendNotifications() {
  const [selectedOption, setSelectedOption] = useState(''); // State to track selected option

  // Function to handle dropdown selection change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={style['body']}>
      <label className={style['label1']} htmlFor="sendFor">Send For: </label>
      <select className={style['select']} id="sendFor" name="sendFor" onChange={handleSelectChange}>
        <option value={'students'}>All Students</option>
        <option value={'doctors'}>All Doctors</option>
        <option value={'oneStudent'}>One Student</option>
        <option value={'oneDoctor'}>One Doctor</option>
      </select>
      <br/>
      <br/>

      <label className={style['label2']} htmlFor="message">Message: </label>
      <input className={style['inputmessage']} type="text" id="message" name="message" />
      <br/>
      <br/>

      {/* Conditionally render the "Enter the email" input based on selection */}
      {(selectedOption === 'oneUser' || selectedOption === 'oneDoctor') && (
        <>
          <label htmlFor="enterEmail" className={style['label3']}> Enter the email :</label>
          <input className={style['inputemail']} type="email" id="enterEmail" name="EnteredEmail" />
          <br/>
          <br/>

        </>
      )}

      <button>Send Now</button>
    </div>
  );
}

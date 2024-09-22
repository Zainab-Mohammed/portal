import { useState } from 'react';
import style from "@/styles/sendNotification.module.css"; // Ensure correct path to your styles
import { ToastContainer, toast } from 'react-toastify';

export default function SendNotifications() {
  const [selectedOption, setSelectedOption] = useState(''); // State to track selected option
  const [message, setMessage] = useState(''); // State for message
  const [email, setEmail] = useState(''); // State for email

  // Function to handle dropdown select/*ion change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to handle message input change
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Function to handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Form submitted'); 
  
    let recipient;
    if (selectedOption === 'oneStudent' || selectedOption === 'oneDoctor') {
      recipient = email;
    } else if (selectedOption === 'all_students') {
      recipient = 'all_students';
    } else if (selectedOption === 'all_doctors') {
      recipient = 'all_doctors';
    }
  
    // Log the values to ensure they are correct
    console.log('Recipient:', recipient);
    console.log('Message:', message);
    console.log('Email:', email);
  
    // If any key value is missing, prevent submission
    if (!message || (!recipient && selectedOption !== 'students' && selectedOption !== 'doctors')) {
      console.error('Recipient or message is missing');
      return;
    }
  
    // Make the request if everything is okay
    try {
      const response = await fetch('http://localhost:3001/api/v1/p1/sendnotification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: recipient,
          message: message,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Notification sent successfully:', result);
        // Handle success (e.g., display success message)
        toast.success('Notification sent successfully!');
        setMessage('');
        setEmail('');
    } catch (error) {
      toast.error('Error sending notification');
      console.error('Error sending notification:', error);
    }
  };
  

  return (
    <>
        <ToastContainer />
      <div className={style['body']}>
  <form onSubmit={handleSubmit}>
  <label className={style['label1']} htmlFor="sendFor">Send For: </label>
          <select className={style['select']} id="sendFor" name="sendFor" onChange={handleSelectChange}>
            <option>Select</option>
            <option value={'all_students'}>All Students</option>
            <option value={'all_doctors'}>All Doctors</option>
            <option value={'oneStudent'}>One Student</option>
            <option value={'oneDoctor'}>One Doctor</option>
          </select>
          <br/>
          <br/>

          <label className={style['label2']} htmlFor="message">Message: </label>
          <input
            className={style['inputmessage']}
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
          <br/>
          <br/>

          {/* Conditionally render the "Enter the email" input based on selection */}
          {(selectedOption === 'oneStudent' || selectedOption === 'oneDoctor') && (
            <>
              <label htmlFor="enterEmail" className={style['label3']}> Enter the email :</label>
              
              <input
                className={style['inputemail']}
                type="email"
                id="enterEmail"
                name="EnteredEmail"
                value={email}
                onChange={handleEmailChange}
              />

              <br/>
              <br/>
            </>
          )}

          <button type="submit">Send Now</button>
        </form>
      </div>
      </>
  );
}

/*
import React, { useState } from 'react';
import style from "@/styles/sendNotification.module.css"; // Ensure correct path to your styles

export default function SendNotifications() {
    const [selectedOption, setSelectedOption] = useState(''); // Selected option from dropdown
    const [message, setMessage] = useState(''); // Notification message
    const [email, setEmail] = useState(''); // Email address (if applicable)
    const [isLoading, setIsLoading] = useState(false); // Flag for loading state
    const [error, setError] = useState(null); // Error message

    // Function to handle dropdown selection change
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Function to handle message input change
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    // Function to handle email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        setIsLoading(true); // Set loading state to true
        setError(null); // Clear any previous errors

        try {
            const response = await fetch('http://localhost:3001/api/v1/p1/sendnotification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipient: getRecipient(selectedOption, email),
                    message: message,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Notification sent successfully:', result);

            // Handle success (e.g., display success message)
            setSelectedOption(''); // Reset form
            setMessage('');
            setEmail('');
        } catch (error) {
            console.error('Error sending notification:', error);
            setError(error.message); // Set error message
        } finally {
            setIsLoading(false); // Set loading state to false
        }
    };

    // Helper function to determine recipient based on selected option and email
    const getRecipient = (selectedOption, email) => {
        if (selectedOption === 'all_students') {
            return 'all_students';
        } else if (selectedOption === 'all_doctors') {
            return 'all_doctors';
        } else {
            return email;
        }
    };

    return (
        <div className={style['body']}>
            <form onSubmit={handleSubmit}>
                <label className={style['label1']} htmlFor="sendFor">
                    Send For:
                </label>
                <select className={style['select']} id="sendFor" name="sendFor" onChange={handleSelectChange}>
                    <option value={'students'}>All Students</option>
                    <option value={'doctors'}>All Doctors</option>
                    <option value={'oneStudent'}>One Student</option>
                    <option value={'oneDoctor'}>One Doctor</option>
                </select>
                <br />
                <br />

                <label className={style['label2']} htmlFor="message">
                    Message:
                </label>
                <input
                    className={style['inputmessage']}
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                />
                <br />
                <br />

                {(selectedOption === 'oneStudent' || selectedOption === 'oneDoctor') && (
                    <>
                        <label htmlFor="enterEmail" className={style['label3']}>
                            Enter the email:
                        </label>
                        <input className={style['inputemail']} type="email" id="enterEmail" name="EnteredEmail" value={email} onChange={handleEmailChange} />
                        <br />
                        <br />
                    </>
                )}

                <button type="submit">Send Now</button>
                {isLoading && <p>Sending...</p>}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}*/
import { useState, useEffect } from "react";
import Styles from '@/styles/contact.module.css'; 
import closeIcon from '/public/images/close-icon.svg'; 
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/p1/contacts');
        const data = await response.json();
        console.log('Fetched Messages:', data);  
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    
    fetchMessages();
  }, []);

  const handleDeleteContact = async (cid) => { 
    try {
      const response = await fetch(`http://localhost:3001/api/v1/p1/contacts/${cid}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setMessages(messages.filter(message => message.CID !== cid)); // Filter using CID
        toast.success('message deleted successfully');
      } else {
        toast.error('Error deleting message. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting contact message:', error);
      toast.error('Error deleting message. Please try again.');
    }
  };
  

  return (
    <>

    <ToastContainer />

    <div className={Styles['body']}>
      <div className={Styles.messagesContainer}>
        <h2>Contact Messages</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={Styles.messageCard}>
              <h3>{message.name}</h3>
              <img 
                  src={closeIcon.src} 
                  alt="Close" 
                  className={Styles.closeIcon} 
                  onClick={() => handleDeleteContact(message.CID)} 
                  />
              <p><strong>From Email:</strong> {message.email}</p>
              <p><strong>Subject:</strong> {message.subject}</p>
              <p><strong>Message:</strong> {message.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
    </>

  );
}

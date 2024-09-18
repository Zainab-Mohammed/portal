// components/notificationSlider.js
import Styles from '@/styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faXmark}from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export function Notification({ showNotifications, notifications,onDelete }) {
   // Local state to manage notifications (if needed to reflect UI changes)
  const [localNotifications, setLocalNotifications] = useState(notifications);

  const handleDelete = async (NID) => {
    try {
      // Call the backend API to delete the notification
      const response = await fetch(`http://localhost:3001/api/v1/p1/notification/${NID}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Update the local state by removing the deleted notification
        setLocalNotifications((prev) => prev.filter((notification) => notification.NID !== NID));
        if (onDelete) {
          onDelete(NID); // If a parent wants to do something after delete

        }
      } else {
        console.error('Failed to delete notification');
      }
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <div className={Styles.notification}>
      {showNotifications && (
        <div className={Styles.notificationsDropdown}>
          <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
          {notifications.length > 0 ? (
              notifications.map((notification) => (
                <li
                  key={notification.NID}
                  className={`${Styles.notificationItem} ${!notification.is_read ? Styles.unread : Styles.read}`}
                >
                  <span>Admin <FontAwesomeIcon
                   icon={faXmark}
                    className={Styles.icon}  
                    onClick={() => handleDelete(notification.NID)}
                      style={{ cursor: 'pointer', marginLeft: '10px' }} // Add pointer cursor for better UX
                  />
                  </span>
                  <br></br>
                  <br></br>

                  {notification.message}

                </li>
              ))
            ) : (
              <li>No notifications</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

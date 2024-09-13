import Styles from '@/styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faXmark}from '@fortawesome/free-solid-svg-icons';

 export function Notification({ showNotifications, notifications }) {
  // const handleDelete = (id) => {
  //   setNotifications(notifications.filter(notification => notificationid !== id));
  // };
    return (
      <div className={Styles.notification}>
        {showNotifications && (
          <div className={Styles.notificationsDropdown}>
            <ul style={{ textDecoration: 'none' }}>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <li key={index}>{notification.message}</li>
                ))
              ) : (
                
            <li><span>Admin <FontAwesomeIcon icon={faXmark} className={Styles.icon}/></span><br/>No notifications loremwdfefwegrgmegrgrgrnvivneinveiwvnwevnwekenbwebnweibnwebn</li>

              )}

            <li><span>Admin <FontAwesomeIcon icon={faXmark} className={Styles.icon}/></span><br/>No notifications loremwdfefwegrgmegrgrgrnvivneinveiwvnwevnwekenbwebnweibnwebn</li>
            <li><span>Admin <FontAwesomeIcon icon={faXmark} className={Styles.icon}/></span><br/>No notifications loremwdfefwegrgmegrgrgrnvivneinveiwvnwevnwekenbwebnweibnwebn</li>
            <li><span>Admin <FontAwesomeIcon icon={faXmark} className={Styles.icon}/></span><br/>No notifications loremwdfefwegrgmegrgrgrnvivneinveiwvnwevnwekenbwebnweibnwebn</li>
            <li><span>Admin <FontAwesomeIcon icon={faXmark} className={Styles.icon}/></span><br/>No notifications loremwdfefwegrgmegrgrgrnvivneinveiwvnwevnwekenbwebnweibnwebn</li>
            <li><span>Admin <FontAwesomeIcon icon={faXmark} className={Styles.icon}/></span><br/>No notifications loremwdfefwegrgmegrgrgrnvivneinveiwvnwevnwekenbwebnweibnwebn</li>
            
            </ul>
          </div>
        )}
      </div>
    );
  }
  
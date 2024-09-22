import Styles from '@/styles/Navbar.module.css';
import { Notification } from '@/Component/notificationSlider'; // Adjust the path if necessary
import { faBellSlash, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false); // Track unread notifications
  const [role, setRole] = useState(null);

  // Fetch Notifications function
  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('Token is missing');
        return;
      }

      const response = await fetch('http://localhost:3001/api/v1/p1/usernotifications', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotifications(data); // Assuming the API returns an array of notifications
        // Check if any notification is unread
        const hasUnread = data.some(notification => !notification.is_read);
        setHasUnreadNotifications(hasUnread);
      } else {
        console.error('Failed to fetch notifications:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Mark all notifications as read after 3 seconds
  const markAllAsRead = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('Token is missing');
        return;
      }

      setTimeout(async () => {
        const response = await fetch('http://localhost:3001/api/v1/p1/notifications/markAllAsRead', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Update local state to reflect that notifications are read
          setNotifications((prevNotifications) =>
            prevNotifications.map((notification) => ({
              ...notification,
              is_read: true,
            }))
          );
          setHasUnreadNotifications(false); // Update unread status
        } else {
          console.error('Failed to mark notifications as read:', response.statusText);
        }
      }, 6000); // Delay for 3 seconds
    } catch (error) {
      console.error('Error marking notifications as read:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('role');
    setRole(userRole);

    if (token) {
      const loggedInStatus = 'true';
      setIsLoggedIn(loggedInStatus);
      fetchNotifications();
    }

    const closeIcon = document.querySelector(`.${Styles.sidebar} li:first-child a`);
    const menuButton = document.querySelector(`.${Styles.menuButton} a`);

    const showSidebar = () => {
      const sidebar = document.querySelector(`.${Styles.sidebar}`);
      sidebar.style.display = 'flex';
    };

    const hideSidebar = () => {
      const sidebar = document.querySelector(`.${Styles.sidebar}`);
      sidebar.style.display = 'none';
    };

    menuButton.addEventListener('click', showSidebar);
    closeIcon.addEventListener('click', hideSidebar);

    return () => {
      menuButton.removeEventListener('click', showSidebar);
      closeIcon.removeEventListener('click', hideSidebar);
    };
  }, []);

  const toggleNotifications = () => {
    if (!showNotifications) {
      markAllAsRead(); // Mark notifications as read after 3 seconds
    }
    setShowNotifications((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setShowNotifications(false);
        localStorage.removeItem('role');
        //router.push('/');
        window.location.href = '/';
      } else {
        console.error('Logout failed:', await response.json());
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className={Styles.nav}>
      <ul className={Styles.sidebar}>
        <li>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
            </svg>
          </a>
        </li>
        {isLoggedIn ? (
          <>
            {role === 'admin' && (
              <li>
                <a href="/Admin">
                  <img src='/images/profile.svg' style={{height:"2rem",width:"2rem", filter: "invert(100%)" }}/>
                </a>
              </li>
            )}
            {role === 'student' && (
              <>
                <li className={Styles.notificationIcon}>
                  <a href="#" onClick={toggleNotifications}>
                  {hasUnreadNotifications ? (
                <Image
                  src="/images/notification1.svg" // Use the relative path to your image in the public folder
                  alt="Unread Notifications"
                  width={30}
                  height={30}
                />
              ) : (
                <FontAwesomeIcon icon={faBell} style={{ fontSize: '26px', color: 'white' }} />
              )}
                  </a>
                  <Notification showNotifications={showNotifications} notifications={notifications}              
                    onDelete={fetchNotifications} // Pass fetchNotifications function 
                     />
                </li>
                <li>
                  <a href="#">
                    <img src='/images/table_icon.svg' style={{height: "2rem", width: "2rem", filter: "invert(100%)"}}/>
                  </a>
                </li>
              </>
            )}

            {role === 'doctor' && (
              <>
                <li className={Styles.notificationIcon}>
                  <a href="#"  onClick={toggleNotifications}>
                  {hasUnreadNotifications ? (
                <Image
                  src="/images/notification1.svg" // Use the relative path to your image in the public folder
                  alt="Unread Notifications"
                  width={25}
                  height={25}
                />
              ) : (
                <FontAwesomeIcon icon={faBell} style={{ fontSize: '26px', color: 'white' }} />
              )}
                  </a>
                  <Notification showNotifications={showNotifications} notifications={notifications}              
                    onDelete={fetchNotifications} // Pass fetchNotifications function 
                     />
                </li>
                <li>
                  <a href="/fetchtest">
                    <img src='/images/profile.svg' style={{height:"2rem",width:"2rem", filter: "invert(100%)" }}/>
                  </a>
                </li>
              </>
            )}

            <li className={Styles.hideOnMobile}>
              <a href="/" onClick={handleLogout}>Logout</a>
            </li>
          </>
        ) : (
          <li className={Styles.hideOnMobile}>
            <a href="#" onClick={() => router.push('/Login')}>Login</a>
          </li>
        )}
      </ul>

      <ul className={Styles.mainMenu}>
        <li className={Styles.logo}><a href="#">ASSIUT<p>University</p></a></li>
        {/* <div className={Styles.search}>
          <li>
            <input type="text" placeholder="search..." />
            <svg style={{ color: "aliceblue" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10" height="10">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
          </li>
        </div> */}
        {isLoggedIn ? (
          <>
            {role === 'admin' && (
              <li>
                <a href="/Admin">
                  <img src='/images/profile.svg' style={{height:"2rem",width:"2rem", filter: "invert(100%)" }}/>
                </a>
              </li>
            )}
            {role === 'student' && (
              <>
                <li className={Styles.notificationIcon}>
                  <a href="#" onClick={toggleNotifications}>
                  {hasUnreadNotifications ? (
                <Image
                  src="/images/notification1.svg" // Use the relative path to your image in the public folder
                  alt="Unread Notifications"
                  width={30}
                  height={30}
                />
              ) : (
                <FontAwesomeIcon icon={faBell} style={{ fontSize: '26px', color: 'white' }} />
              )}
                  </a>
                  <Notification showNotifications={showNotifications} notifications={notifications}              
                    onDelete={fetchNotifications} // Pass fetchNotifications function 
                     />
                </li>
                <li>
                  <a href="/StudentSchedule">
                    <img src='/images/table_icon.svg' style={{height: "2rem", width: "2rem", filter: "invert(100%)"}}/>
                  </a>
                </li>
              </>
            )}

            {role === 'doctor' && (
              <>
                <li className={Styles.notificationIcon}>
                  <a href="#"  onClick={toggleNotifications}>
                  {hasUnreadNotifications ? (
                <Image
                  src="/images/notification1.svg" // Use the relative path to your image in the public folder
                  alt="Unread Notifications"
                  width={25}
                  height={25}
                />
              ) : (
                <FontAwesomeIcon icon={faBell} style={{ fontSize: '26px', color: 'white' }} />
              )}
                  </a>
                  <Notification showNotifications={showNotifications} notifications={notifications}              
                    onDelete={fetchNotifications} // Pass fetchNotifications function 
                     />
                </li>
                <li>
                  <a href="/fetchtest">
                    <img src='/images/profile.svg' style={{height:"2rem",width:"2rem", filter: "invert(100%)" }}/>
                  </a>
                </li>
              </>
            )}

            <li className={Styles.hideOnMobile}>
              <a href="/" onClick={handleLogout}>Logout</a>
            </li>
          </>
        ) : (
          <li className={Styles.hideOnMobile}>
            <a href="#" onClick={() => router.push('/Login')}>Login</a>
          </li>
        )}
        <li className={Styles.menuButton}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

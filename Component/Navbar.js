import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Styles from '@/styles/Navbar.module.css';
import { Notification } from '@/Component/notificationSlider'; // Adjust the path if necessary

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);

    const userRole = localStorage.getItem('role');
    setRole(userRole);

    if (loggedInStatus) {
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

  const fetchNotifications = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/notifications', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setNotifications(data.notifications);
      }
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  const toggleNotifications = () => {
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
        router.push('/');
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
        <li><a href="/Login">Login</a></li>
      </ul>

      <ul className={Styles.mainMenu}>
        <li className={Styles.logo}><a href="#">ASSIUT<p>University</p></a></li>
        <div className={Styles.search}>
          <li>
            <input type="text" placeholder="search..." />
            <svg style={{color: "aliceblue"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10" height="10">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
          </li>
        </div>
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
                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26" style={{ fill: 'white' }}>
                  <path d="M480 1120q-50 0-85-35t-35-85h240q0 50-35 85t-85 35Zm-300-200v-60h60v-300q0-125 68-217.5T480 260v-40q0-17 11.5-28.5T520 180q17 0 28.5 11.5T560 220v40q125 30 192.5 122.5T820 600v300h60v60H180Z"/>
                </svg>
              </a>
              <Notification showNotifications={showNotifications} notifications={notifications} />
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
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26" style={{ fill: 'white' }}>
                      <path d="M480 1120q-50 0-85-35t-35-85h240q0 50-35 85t-85 35Zm-300-200v-60h60v-300q0-125 68-217.5T480 260v-40q0-17 11.5-28.5T520 180q17 0 28.5 11.5T560 220v40q125 30 192.5 122.5T820 600v300h60v60H180Z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/profile">
                    <img src='/images/profile.svg' style={{height:"2rem",width:"2rem", filter: "invert(100%)" }}/>
                  </a>
                </li>
              </>
            )}

            <li className={Styles.hideOnMobile}>
              <a href="#" onClick={handleLogout}>Logout</a>
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

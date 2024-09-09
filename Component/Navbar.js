import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
    
    const closeIcon = document.querySelector(`.${Styles.sidebar} li:first-child a`);
    const menuButton = document.querySelector(`.${Styles.menuButton} a`);
    //const sidebar = document.querySelector(`.${Styles.sidebar}`);

    const showSidebar = () => {
      const sidebar = document.querySelector(`.${Styles.sidebar}`);
      sidebar.style.display = 'flex';
    };

    const hideSidebar = () => {
      const sidebar = document.querySelector(`.${Styles.sidebar}`);
      sidebar.style.display = 'none';
    };

    /*const handleClickOutside = (event) => {
      if (sidebar && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        hideSidebar();
      }
    };*/

    menuButton.addEventListener('click', showSidebar);
    closeIcon.addEventListener('click', hideSidebar);
    //document.addEventListener('click', handleClickOutside);

    return () => {
      menuButton.removeEventListener('click', showSidebar);
      closeIcon.removeEventListener('click', hideSidebar);
      //document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Logout function to clear login state
  /*const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    setIsLoggedIn(false);
    //router.push('/'); // Redirect to homepage or any desired route
  };*/
  const handleLogout = async () => {
    try {
      // Send a request to the backend logout API
      const response = await fetch('http://localhost:3001/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Optional if you handle tokens
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        localStorage.removeItem('isLoggedIn'); 
        localStorage.removeItem('authToken');  // Clear auth token if used
        setIsLoggedIn(false); 
      } else {
        console.error('Logout failed:', await response.json());
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className={Styles.nav}>
      {/* Sidebar Menu */}
      <ul className={Styles.sidebar}>
        <li>
          <a href="#">
            {/* Close Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
            </svg>
          </a>
        </li>
       
        <li><a href="/Login">Login</a></li>
      </ul>

      {/* Main Navigation Menu */}
      <ul className={Styles.mainMenu}>
        <li className={Styles.logo}><a href="#">ASSIUT<p>University</p></a></li>
        <div className={Styles.search}>
        <li><input type="text" placeholder="search..." />
          <svg style={{color :"aliceblue"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10" height="10">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
        </li>
        </div>
        {/* Conditionally render Login or Logout based on login state */}
        {isLoggedIn ? (
           <>
           {/* Notification Icon */}
           <li className={Styles.notificationIcon}>
             <a href="#">
               {/* Notification Bell Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26" style={{ fill: 'white' }}>
                 <path d="M480 1120q-50 0-85-35t-35-85h240q0 50-35 85t-85 35Zm-300-200v-60h60v-300q0-125 68-217.5T480 260v-40q0-17 11.5-28.5T520 180q17 0 28.5 11.5T560 220v40q125 30 192.5 122.5T820 600v300h60v60H180Z"/>
               </svg>
             </a>
           </li>

           {/* Table Icon */}
           <li className="">
             <a href="#">
               {/* Table Icon SVG */}
               {/* <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                 <path d="M180 796v-60h600v60H180Zm0-160v-60h600v60H180Zm0-160v-60h600v60H180Z"/>
               </svg> */}
               <img src='/images/table_icon.svg' style={{height:"2rem",width:"2rem", filter: "invert(100%)" }}/>
             </a>
           </li>

           {/* Logout Button */}
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
            {/* Menu Icon SVG */}
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

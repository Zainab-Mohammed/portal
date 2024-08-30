import { useEffect } from 'react';
import Styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  useEffect(() => {
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
        <li className={Styles.logo}><a href="#">GUST<p>University</p></a></li>
        <div className={Styles.search}>
        <li><input type="text" placeholder="search..." />
          <svg style={{color :"aliceblue"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10" height="10">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
        </li>
        </div>
        <li className={Styles.hideOnMobile}><a href="/Login">Login</a></li>
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

import Link from 'next/link';
import styles from "@/styles/Sidebar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHouse} from '@fortawesome/free-solid-svg-icons';
import {faTableCells} from '@fortawesome/free-solid-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import {faBookOpenReader}  from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ setActiveComponent }) {
    return (
      <>
      <Navbar/>
        <div className={styles.area}></div>
        <nav className={styles["main-menu"]}>
          <ul>
            <li className={styles["has-subnav"]}>
              <a onClick={() => setActiveComponent('notifications')}>
              <FontAwesomeIcon className={`${styles.fa} ${styles.fa2x}`} icon={faHouse} size="2xl" />
            <span className={styles["nav-text"]}>Notfication</span>
              </a>
            </li>
            <li className={styles["has-subnav"]}>
              <a href="#" onClick={() => setActiveComponent('schedule')}>
              <FontAwesomeIcon className={`${styles.fa} ${styles.fa2x}`} icon={faTableCells} size="2xl" />
              <span className={styles["nav-text"]}>Schedule</span>
              </a>
            </li>
            <li className={styles["has-subnav"]}>
              <a href="#" onClick={() => setActiveComponent('student')}>
              <FontAwesomeIcon className={`${styles.fa} ${styles.fa2x}`} icon={faUsers} size="2xl" />
            <span className={styles["nav-text"]}>Student</span>
              </a>
            </li>
            <li className={styles["has-subnav"]}>
              <a href="#" onClick={() => setActiveComponent('doctors')}>
              <FontAwesomeIcon className={`${styles.fa} ${styles.fa2x}`} icon={faUserTie} size="2xl" />
                <span className={styles["nav-text"]}>Doctors</span>
              </a>
            </li>
            <li className={styles["has-subnav"]}>
              <a href="#" onClick={() => setActiveComponent('course')}>
              <FontAwesomeIcon className={`${styles.fa} ${styles.fa2x}`} icon={faBookOpenReader} size="2xl" />
             <span className={styles["nav-text"]}>Course</span>
              </a>
            </li>
          </ul>
          <ul className={styles.logout}>
            <li className={styles["has-subnav"]}>
              <a href="#">
              <FontAwesomeIcon className={`${styles.fa} ${styles.fa2x}`} icon={faArrowRightFromBracket} size="2xl" />
                <span className={styles["nav-text"]}>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  

import Head from "next/head";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Styles from '@/styles/Style.module.css'; // Adjust the path as needed
import Navbar from "@/Component/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swiper from "@/Component/SwiperComponent";
import CoursesSwiper from "@/Component/CoursesSwiper";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

const DepartmentSection = () => {
  return (
    <div className={Styles.session3}>
      <h3><span className={Styles.span1}><span className={Styles.span2}>Department</span></span></h3>
      <div className={Styles.bigContent}>
        <div className={Styles.content}>
          <Image src="/programming-background-collage_23-2149901774.avif" width="250" height="150" alt="Programming Language" />
          <h4>Computer Science</h4>
        </div>
        <div className={Styles.content}>
          <Image src="/programming-background-collage_23-2149901774.avif" alt="Programming Language" width="250" height="150" />
          <h4>Information System</h4>
        </div>
        <div className={Styles.content}>
          <Image src="/programming-background-collage_23-2149901774.avif" alt="Programming Language" width="250" height="150" />
          <h4>Information Technology</h4>
        </div>
        <div className={Styles.content}>
          <Image src="/programming-background-collage_23-2149901774.avif" alt="Programming Language" width="250" height="150" />
          <h4>Multi Media</h4>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className={Styles.about}>
      <h3><span className={Styles.span1}><span className={Styles.span2}>About Us</span></span></h3>
      <div className={Styles.aboutContent}>
        <Image className={Styles.img} src="/view-school-building_23-2151031908.avif" alt="student seat for learning" width="250" height="300" />
        <p>
          <strong>Vision of the Faculty</strong>
          <br />
          The Faculty of Computers and Information at Assiut University aspires to be a leading educational and research institution in the field of computing, community development, and meeting global quality standards.
          <br /><br />
          <strong>Mission of the Faculty</strong>
          <br />
          The mission of the faculty is to serve students and the community by providing distinguished education and innovative research in the fields of computer science, information systems, technology, and multimedia. It aims to develop the student's character to make them capable of participating in building a knowledge-based economy, fostering a desire for innovation, teamwork, and an appreciation for the values of continuous education and self-learning.
        </p>
      </div>
    </div>
  );
};

const CollegeRegulattions=()=>{
  return(
    <div className={Styles.about}>
    <h3><span className={Styles.span1}><span className={Styles.span2}>THE COLLEGE REGULATION</span></span></h3>
    <div className={Styles.aboutContent2}>
        <p><strong>Faculty Vision</strong><br />
          The Faculty of Computers and Information at Assiut University aspires to achieve excellence
          in education, research, and community service by realizing global
          quality standards in the fields of computers and information
          technology. It aims to serve learners locally, regionally, and
          internationally.<br /><br />

          <strong>Faculty Mission</strong><br />
          The mission of the faculty is represented in the following:<br />
          - Developing the personal and intellectual skills of learners through
          advanced research and learning in the fields of computer science,
          information systems, and multimedia, with the goal of creating
          graduates who are eager for teamwork, love innovation, and are
          capable of competing locally, regionally, and internationally.<br />
          - Developing programs that keep pace with labor market needs and the
          advancements of learning, using modern methodologies and tools in a
          forward-thinking, innovative manner.<br />
          {/* - Promoting a culture of continuous learning and the values of
          lifelong education through innovative and interactive teaching
          methods that meet the needs of society.<br /> */}
          {/* - Conducting applied research that serves the fields of the faculty
          through interdisciplinary studies to achieve scientific and practical
          goals, fostering entrepreneurship and addressing societal */}
          {/* challenges.<br />
          - Providing distinguished community services in the faculty's
          fields.<br />
          - Encouraging the adoption of innovative, creative, and leading
          initiatives.<br/> */}
        <button><Link href="../TheList">
      Click to read more <FontAwesomeIcon icon={faArrowRight} /></Link>
    </button></p>
        <Image className={Styles.img2}src="/back-school-concept-books-colored-pencils-clock_155003-3678.avif" alt="student seat for learning" width="250"height="300"/>
      </div>
      </div>
  );
};

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };
  
  const [loading, setLoading] = useState(false);

  const checkEmailExists = async (email) => {
    if (!email) return false;

    try {
      const response = await fetch(`http://localhost:3001/api/v1/p1/check-email?email=${encodeURIComponent(email)}`);
      const data = await response.json();

      return data.exists; // Return true or false based on existence
    } catch (error) {
      toast.error('Error checking email. Please try again later.');
      return false;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);  // Set loading state to true when submission starts
  
    // Trim whitespace from input values
    const trimmedForm = {
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      subject: contactForm.subject.trim(),
      message: contactForm.message.trim(),
    };
  
    // Validate fields
    if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.subject || !trimmedForm.message) {
      toast.error('All fields are required. Please fill them out.');
      //alert('All fields are required. Please fill them out.');
      setLoading(false);
      return;
    }
  
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedForm.email)) {
      toast.error('Please enter a valid email address.');
      //alert('Please enter a valid email address.');
      setLoading(false);
      return;
    }
  
  // Validate that name contains no numbers
  const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
  if (!namePattern.test(trimmedForm.name)) {
    toast.error('Name must not contain numbers or special characters.');
    //alert('Name must not contain numbers or special characters.');
    setLoading(false);
    return;
  }

  const emailExists = await checkEmailExists(trimmedForm.email);
  if (!emailExists) {
    toast.error('This email does not exist. Please change the email.');
    //alert('This email does not exist. Please change the email.');
    setLoading(false);
    return;
  }
    try {
      const response = await fetch('http://localhost:3001/api/v1/p1/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedForm),
      });
      
      if (response.ok) {
        //alert('Message sent successfully!');
        toast.success('Message sent successfully!');
        setContactForm({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send the message. Please try again later.');
        //alert('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      //alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);  // Reset loading state when submission is done
    }
  };

  
  return (
    <>
    <ToastContainer />
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Assiut University</title>
      </Head>
      <Navbar />

      <div className={Styles.home}>
        <div className={Styles.container}>
          <div className={Styles.containCenter}>
            <p className={Styles.p2}>Welcome to</p>
            <h1>FCI</h1>
            <h1>ASSIUT University</h1>
            <p className={Styles.p2}>Where world-class faculty, innovative research, and dynamic students come together to advance education and foster change in the world.</p>
          </div>
        </div>
      </div>

      <DepartmentSection />
      <AboutUs />
      <CollegeRegulattions/>

      {isLoggedIn && (
        <>
          <div className={Styles.contactus}>
            <h3><span className={Styles.span1}><span className={Styles.span2}>Doctors</span></span></h3>
            <Swiper />
          </div>
          <div className={Styles.contactus}>
            <h3><span className={Styles.span1}><span className={Styles.span2}>Courses</span></span></h3>
            <CoursesSwiper />
          </div>
        </>
      )}

      {/* Contact Us Section */}
      <div className={Styles.contactus}>
        <h3><span className={Styles.span1}><span className={Styles.span2}>Contact Us</span></span></h3>
        <div className={Styles.containerContactus}>
          <input className={Styles.Name} type="text" name="name" value={contactForm.name} onChange={handleInputChange} placeholder="Name" />
          <input className={Styles.Email} type="email" name="email" value={contactForm.email} onChange={handleInputChange} placeholder="Email" />
          <input className={Styles.Subject} type="text" name="subject" value={contactForm.subject} onChange={handleInputChange} placeholder="Subject" />
          <textarea className={Styles.message} name="message" value={contactForm.message} onChange={handleInputChange} placeholder="Message for us" />
        </div>
        <button onClick={handleSubmit}>SEND MESSAGE</button>
      </div>

      {/* Footer */}
      <div className={Styles.footer}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="28" width="28"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="28" width="28"> <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" height="28" width="28"> <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" height="28" width="28"> <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>        <p>Copy Right 2018 © By <span>Theme-fair</span> All Rights Reserved</p>
</div>
    </>
  );
}

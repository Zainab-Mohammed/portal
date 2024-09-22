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
          - Promoting a culture of continuous learning and the values of
          lifelong education through innovative and interactive teaching
          methods that meet the needs of society.<br />
          - Conducting applied research that serves the fields of the faculty
          through interdisciplinary studies to achieve scientific and practical
          goals, fostering entrepreneurship and addressing societal
          challenges.<br />
          - Providing distinguished community services in the faculty's
          fields.<br />
          - Encouraging the adoption of innovative, creative, and leading
          initiatives.<br/>
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
        {/* Social Media Icons */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="28" width="28"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
        {/* Other Social Icons */}
      </div>
    </>
  );
}

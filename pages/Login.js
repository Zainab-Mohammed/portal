import { useState } from 'react';
import { useRouter } from 'next/router';  // Import the useRouter hook
import style from "@/styles/Login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();  // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed. Please try again.');
        setSuccess('');
        return;
      }

      setError('');
      setSuccess('Login successful!');

      // document.cookie = `authToken=${data.authToken}; path=/`;
      // document.cookie = `role=${data.role}; path=/`;
      // document.cookie = `email=${email}; path=/`;

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('authToken', data.token); 
      localStorage.setItem('role', data.role); 
      localStorage.setItem('email', email);
      localStorage.setItem('user', JSON.stringify(data));
      
     
      router.push('/'); 
      toast.success('Logged in successfully!');


    } catch (error) {
      setError('An error occurred while logging in. Please try again.');
      setSuccess('');
    }
  };

  return (
    <>
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.cover}>
            <div className={style.front}>
              <img src="/close-up-hand-writing-notebook_23-2148888825.avif" alt="" />
              <div className={style.text}>
                <span className={style.text1}>Welcome back <br /></span>
                <span className={style.text2}>Let's get connected</span>
              </div>
            </div>
            <div className={style.back}>
              <div className={style.text}>
                <span className={style.text1}>Complete miles of journey <br /> with one step</span>
                <span className={style.text2}>Let's get started</span>
              </div>
            </div>
          </div>
          <div className={style.forms}>
            <div className={style.formContent}>
              <div className={style.loginForm}>
                <div className={style.title}>Login</div>
                <form onSubmit={handleSubmit}>
                  <div className={style.inputBoxes}>
                    <div className={style.inputBox}>
                      <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
                      <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className={style.inputBox}>
                      <FontAwesomeIcon icon={faLock} className={style.icon} />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {error && <div className={style.error}>{error}</div>}
                    {success && <div className={style.success}>{success}</div>}
                    <div className={style.text}><a href="#">Forgot password?</a></div>
                    <div className={`${style.button} ${style.inputBox}`}>
                      <input type="submit" value="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

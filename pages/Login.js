import style from"@/styles/Login.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import Navbar from "@/Component/Navbar";
export default function Login(){
    return(
        <>
        {/* <Navbar/> */}
        <div className={style.body}>
  <div className={style.container}>
     <div className={style.cover}>
      <div className={style.front}>
        <img src="/close-up-hand-writing-notebook_23-2148888825.avif" alt=""/>
        <div className={style.text}>
          <span className={style.text1}>Welcome back <br/></span>
          <span className={style.text2}>Let's get connected</span>
        </div>
      </div>
      <div className={style.back}>
        {/* <!--<img class="backImg" src="images/backImg.jpg" alt="">--> */}
        <div className={style.text}>
          <span className={style.text1}>Complete miles of journey <br/> with one step</span>
          <span className={style.text2}>Let's get started</span>
        </div>
      </div>
    </div>
    <div className={style.forms}>
        <div className={style.formContent}>
          <div className={style.loginForm}>
            <div className={style.title}>Login</div>
          <form action="#">
            <div className={style.inputBoxes}>
              <div className={style.inputBox}>
              <FontAwesomeIcon className={style.icon} icon={faEnvelope} /> 
            <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className={style.inputBox}>
              <FontAwesomeIcon icon={faLock}  className={style.icon}/>      
              <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className={style.text}><a href="#">Forgot password?</a></div>
              <div className={`${style.button} ${style.inputBox}`}>
                <input type="submit" value="Sumbit"/>
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

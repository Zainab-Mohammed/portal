import { useEffect, useState } from 'react'; // Import useEffect and useState
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import{faTrash}from '@fortawesome/free-solid-svg-icons';

import style from "@/styles/course.module.css";

export default function Course(){
    return(
        <>
         <div className= {style["body"]}>
    <div className={style["input"]}>
     <label className={style["label"]} for="Cname">Course Name:</label>
     <input className={style["inputS"]} type="text" id="Cname" name="Cname"  />
     </div>
     <div className={style["input"]}>
     <label className={style["label"]} for="Ccode">Course code:</label>
     <input className={style["inputS"]} type="text" id="Ccode" name="Ccode"  />
     </div>
     <div className={style["input"]}>
     <label className= {style["label"]} for="Cdescription">Course Description:</label>
     </div>
     <input className={ `${style["discription"]}`} type="text" id="Cdescription" name="Cdescription"/>
     <button onclick="addproduct(),displayProduct()" >Add course</button>

     <br/>
     <input className={`${style["myInput"]} ${style["inputS"]}`} type=" text" placeholder="Search by name--" id="myInput" onkeyup="searchFunction()"/>    
    <div className={style["input2"]}>
    <table className={style["table"]} >
        <tr className={style["tr"]}>
             <th className={style["th"]}>Course Code</th>
             <th className={style["th"]}>Course Name</th>
            <th className={style["th"]}>Course Description</th>
             <th className={style["th"]}>Update</th>
            <th className={style["th"]}>Delete</th>
        </tr>
         {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
         {/* <FontAwesomeIcon icon={faTrash} /> */}
    <tbody>
    </tbody>
    </table>
    {/* id="myTable" */}
</div>
</div>
        </>
    )
};
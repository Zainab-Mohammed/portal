import { useEffect, useState } from 'react'; // Import useEffect and useState

import style from "@/styles/student.module.css";

export default function Student(){

    const [students, setStudents] = useState([]); // State to store students data
  const [error, setError] = useState(null); // State to handle errors

  // Fetching data from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/p1/students')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Logging the data for debugging
        setStudents(data); // Setting the students data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch students.');
      });
  }, []);

  // Function to display products
  const displayStudents = (students) => {
    return students.map((student, index) => (
      <tr key={index} className={style["tr"]}>
        <td className={style["td"]}>{student.phone}</td>
        <td className={style["td"]}>{student.username}</td>
        <td className={style["td"]}>{student.email}</td>
        <td className={style["td"]}>{student.password}</td>
        <td className={style["td"]}>
          <button className={style["btn"]}>Update</button>
        </td>
        <td className={style["td"]}>
          <button className={style["btn"]}>Delete</button>
        </td>
      </tr>
    ));
  };

    return(
        <>
     <div className= {style["body"]}>
    <div className={style["input"]}>
     <label className={style["label"]} for="Pname">Student Name:</label>
     <input className={style["inputS"]} type="text" id="Pname" name="Pname"  />
     </div>
     <div className={style["input"]}>
     <label className={style["label"]} for="SEmail">Student Email:</label>
     <input className={style["inputS"]} type="text" id="SEmail" name="SEmail"  />
     </div>
     <div className={style["input"]}>
     <label className= {style["label"]} for="SPassword">Student Password:</label>
     <input className={style["inputS"]} type="text" id="SPassword" name="SPassword"/>
     </div>
     <div className={style["input"]}>
      <label className={style["label"]} for="Pdescription">Student Number:</label>
     <input className={style["inputS"]} type="text" id="Pdescription" name="Pdescription"/>
      </div>
     <button onclick="addproduct(),displayProduct()" >Add Student</button>
     <br/>
     <input className={`${style["myInput"]} ${style["inputS"]}`} type=" text" placeholder="Search by name--" id="myInput" onkeyup="searchFunction()"/>

    
    <div className={style["input2"]}>
    <table className={style["table"]} >
        <tr className={style["tr"]}>
             <th className={style["th"]}>Student Number</th>
             <th className={style["th"]}>Student Name</th>
            <th className={style["th"]}>Student Email</th>
            <th className={style["th"]}>Student Password</th>
            <th className={style["th"]}>Update</th>
            <th className={style["th"]}>Delete</th>
        </tr>
        <tbody id="demo">
    </tbody>
    <tbody>
                {displayStudents(students)}
              </tbody>
    </table>
    {/* id="myTable" */}
</div>
</div>

    </>
    )
}
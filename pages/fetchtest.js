import style from "@/styles/doctor.module.css";

//  export const getStaticProps =async()=>{
// const res=await fetch('http://localhost:3004/api/v1/students');
// const data=await res.json();

// return{
//     props:{Doctor:data}
// }
// }
// Inside Doctor component
import React, { useEffect, useState } from 'react';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('http://localhost:3004/api/v1/students')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor.uid}>
            <td>{doctor.uid}</td>
            <td>{doctor.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Doctor;

// const Doctor=({Doctor})=>{
//     return(
//         <div className={style["inputtable"]}>
// <table className={style["table"]} >
//     <tr className={style["tr"]}>
//          <th className={style["th"]}>Doctor Number</th>
//          <th className={style["th"]}>Doctor Name</th>
//         <th className={style["th"]}>Doctor Email</th>
//         <th className={style["th"]}>Doctor Password</th>
//         <th className={style["th"]}>Update</th>
//         <th className={style["th"]}>Delete</th>
//     </tr>
//          {Doctor.map(Doctors=>(
//         <tr className={style["tr"]} key={Doctors.uid}>
//          <td className={style["td"]}>{Doctors.uid}</td>   
//          <td className={style["td"]}>{Doctors.username}</td>   
//          <td className={style["td"]}>{Doctors.email}</td>   
//          <td className={style["td"]}>{Doctors.password}</td>   
//          <td className={style["td"]}>{Doctors.phone}</td>   
//          <td className={style["td"]}>{Doctors.role}</td>   
//         </tr>
// ))}
//  </table>
// {/* id="myTable" */}
// </div>
//     )
// }
// export default Doctor;
import style from "@/styles/doctor.module.css";
export default function Doctor(){
    return(
        <>
     <div className= {style["body"]}>
         <img src="/img-1.jpg"  alt="Doctor Photo"/>
     <div className={style["input1"]}>
     <label className={style["label"]} for="Pname">Doctor Name:</label>
     <input className={style["inputS"]} type="text" id="Pname" name="Pname"  />
     </div>
     <div className={style["input2"]}>
     <label className={style["label"]} for="PEmail">Doctor Email:</label>
     <input className={style["inputS"]} type="text" id="PEmail" name="PEmail"  />
     </div>
     <div className={style["input3"]}>
     <label className= {style["label"]} for="DPassword">Doctor Password:</label>
     <input className={style["inputS"]} type="text" id=" DPassword" name="DPassword"/>
     </div>
     <div className={style["input4"]}>
      <label className={style["label"]} for="DNum">Doctor Number:</label>
     <input className={style["inputS"]} type="text" id="DNum" name="DNum"/>
      </div>
      <div className={style["input5"]}>
      <label className={style["label"]} for="Ddept">Doctor Department:</label>
     <input className={style["inputS"]} type="text" id="Ddept" name="Ddept"/>
      </div>
     <button>Add Doctor</button>
     <br/>
     </div>
     <div className={style["search"]}>
     <input className={`${style["myInput"]} ${style["inputS"]}`} type=" text" placeholder="Search by name--" id="myInput" onkeyup="searchFunction()"/>

    
<div className={style["inputtable"]}>
<table className={style["table"]} >
    <tr className={style["tr"]}>
         <th className={style["th"]}>Doctor Number</th>
         <th className={style["th"]}>Doctor Name</th>
        <th className={style["th"]}>Doctor Email</th>
        <th className={style["th"]}>Doctor Password</th>
        <th className={style["th"]}>Update</th>
        <th className={style["th"]}>Delete</th>
    </tr>
    <tbody id="demo">
</tbody>
</table>
{/* id="myTable" */}
</div>
</div>
     </>
     );
     }
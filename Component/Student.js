import style from "@/styles/student.module.css";
export default function Student(){
    return(
        <>
     <div className= {style["body"]}>
    <div className={style["input"]}>
     <label className={style["label"]} for="Pname">Student Name:</label>
     <input className={style["inputS"]} type="text" id="Pname" name="Pname" required/>
     </div>
     <div className={style["input"]}>
     <label className={style["label"]} for="Pprice">Student Email:</label>
     <input className={style["inputS"]} type="number" id="Pprice" name="Pprice" required/>
     </div>
     <div className={style["input"]}>
     <label className= {style["label"]} for="Pcategory">Student Password:</label>
     <input className={style["inputS"]} type="text" id="Pcategory" name="Pcategory"/>
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
    </table>
    {/* id="myTable" */}
</div>
</div>

    </>
    )
}
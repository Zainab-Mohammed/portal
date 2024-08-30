import Doctor from "@/Component/Doctor";
import Schedule from "@/Component/Schedule";
import Sidebar from "@/Component/sidebar";
import Student from "@/Component/Student";
export default function Admin(){
    return(
        <>
       <Sidebar/>
     {/* <Schedule/> */}
     <Student/>
     {/* <Doctor/> */}
     
        </>
    );
}
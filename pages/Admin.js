import React, { useState } from 'react';
import Doctor from "@/Component/Doctor";
import FetchTest from "@/pages/fetchtest";
import Schedule from "@/Component/Schedule";
import Sidebar from "@/Component/sidebar";
import Student from "@/Component/Student";
import Course from "@/Component/Course";
import SendNotifications from "@/Component/SendNotifications";

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState('sendnotifications'); // State to manage active component

  // Function to render the selected component
  const renderComponent = () => {
    console.log('Active Component:', activeComponent); // Debugging log
    switch (activeComponent) {
      case 'doctors':
        return <Doctor />;
      case 'schedule':
        return <Schedule />;
      case 'student':
        return <Student />;
      case 'course':
        return <Course />;
      case 'sendnotifications':
        return <FetchTest/>;
 
      default:
        return <SendNotifications />;
     }
  };

  return (
    <>
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="content">
        {renderComponent()} {/* Render the selected component */}
      </div>
    </>
  );
}

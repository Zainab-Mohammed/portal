import React, { useState } from 'react';
import Doctor from "@/Component/Doctor";
import FetchTest from "@/pages/fetchtest";
import Schedule from "@/Component/Schedule";
import Sidebar from "@/Component/sidebar";
import Student from "@/Component/Student";

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState('doctor'); // State to manage active component

  // Function to render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'doctor':
        return <Doctor />;
      case 'schedule':
        return <Schedule />;
      case 'student':
        return <Student />;
      case 'fetchTest':
        return <FetchTest />;
      default:
        return <Doctor />;
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

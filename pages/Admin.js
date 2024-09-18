import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Doctor from "@/Component/Doctor";
import FetchTest from "@/pages/fetchtest";
import Schedule from "@/Component/Schedule";
import Sidebar from "@/Component/sidebar";
import Student from "@/Component/Student";
import Course from "@/Component/Course";
import SendNotifications from "@/pages/SendNotifications";
import withAdminAuth from "@/hoc/withAdminAuth";

function Admin() {
  const router = useRouter();
  const { component } = router.query; // Get the 'component' from the URL query parameter

  // Function to render the selected component
  const renderComponent = () => {
    switch (component) {
      case 'doctors':
        return <Doctor />;
      case 'schedule':
        return <Schedule />;
      case 'student':
        return <Student />;
      case 'course':
        return <Course />;
      case 'office':
        return <FetchTest/>;
      default:
        return <SendNotifications />;
    }
  };

  return (
    <>
      <Sidebar /> {/* No need to pass setActiveComponent anymore */}
      <div className="content">
        {renderComponent()} {/* Render the selected component */}
      </div>
    </>
  );
}
export default withAdminAuth(Admin);

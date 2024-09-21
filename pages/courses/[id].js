import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/coursee.module.css';
import React from 'react';

const CoursePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchCourse = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/v1/p1/coursess/${id}`);
          const data = await response.json();
          console.log('Fetched course:', data);
          setCourse(data[0]); // Access the first item in the array
          setLoading(false);
        } catch (error) {
          console.error('Error fetching course:', error);
        }
      };

      fetchCourse();
    }
  }, [id]);

  if (loading) return(<div className="loading">
    <div className="loadingSpinner"></div>
    <span>Loading...</span>
</div>) ;
  if (!course) return <p>Course not found.</p>;

  return (
    <div className={styles['body']}>
      <div className={styles.courseContainer}>
        <h1 className={styles.courseTitle}>{course.course_name}</h1>
        <div className={styles.courseInfo}>
          <span className={styles.boldText}>Code:</span> {course.course_code}
        </div>
        <div className={styles.courseInfo}>
          <span className={styles.boldText}>Doctor:</span> {course.doctor_names}
        </div>
        <div className={styles.courseInfo}>
          <span className={styles.boldText}>Description:</span> {course.description || "No description available."}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;

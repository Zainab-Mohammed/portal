import { useEffect, useState } from 'react'; // Import useEffect and useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from "@/styles/course.module.css";

export default function Course() {
    const [courses, setCourses] = useState([]); // State for storing courses
    const [name, setName] = useState(''); // State for course name
    const [code, setCode] = useState(''); // State for course code
    const [description, setDescription] = useState(''); // State for course description
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const [isEditing, setIsEditing] = useState(false); // State to track if editing
    const [currentCourseId, setCurrentCourseId] = useState(null); // State to track the course being edited

    // Fetch courses when the component loads
    useEffect(() => {
        fetchCourses();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const fetchCourses = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/p1/courses');
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses:', error);
            setErrorMessage('Failed to load courses.');
        }
    };

    // Filter courses based on the search term
    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addOrUpdateCourse = async () => {
        if (!name.trim() || !code.trim() || !description.trim()) {
            setErrorMessage('All fields are required and cannot be empty.');
            return;
        }

        const existingCourseWithSameCode = courses.find(courseItem =>
            courseItem.code === code && courseItem.cid !== currentCourseId
        );
        if (existingCourseWithSameCode) {
            setErrorMessage('A course with this code already exists.');
            return;
        }

        const course = { name, code, description };

        try {
            let response;
            if (isEditing && currentCourseId) {
                // Update course
                response = await fetch(`http://localhost:3001/api/v1/p1/courses/${currentCourseId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(course),
                });
            } else {
                // Add new course
                response = await fetch('http://localhost:3001/api/v1/p1/addcourse', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(course),
                });
            }

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData);
            }

            setErrorMessage(''); // Clear error message
            setName(''); // Reset input fields
            setCode('');
            setDescription('');
            setIsEditing(false); // Reset editing state
            setCurrentCourseId(null);
            fetchCourses(); // Refresh course list
        } catch (error) {
            console.error('Error adding or updating course:', error);
            setErrorMessage(error.message);
        }
    };

    const deleteCourse = async (courseId) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/p1/courses/${courseId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData);
            }

            fetchCourses(); // Refresh course list after deletion
        } catch (error) {
            console.error('Error deleting course:', error);
            setErrorMessage('Failed to delete course.');
        }
    };

    const updateCourse = (courseId) => {
        const courseToUpdate = courses.find(course => course.CID === courseId);
        if (courseToUpdate) {
            setName(courseToUpdate.name);
            setCode(courseToUpdate.code);
            setDescription(courseToUpdate.description);
            setIsEditing(true);
            setCurrentCourseId(courseId);
        }
    };

    return (
        <div className={style["body"]}>
            {/* Input fields for adding or updating a course */}
            <div className={style["input"]}>
                <label className={style["label"]} htmlFor="Cname">Course Name:</label>
                <input
                    className={style["inputS"]}
                    type="text"
                    id="Cname"
                    name="Cname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={style["input"]}>
                <label className={style["label"]} htmlFor="Ccode">Course Code:</label>
                <input
                    className={style["inputS"]}
                    type="text"
                    id="Ccode"
                    name="Ccode"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
            </div>

            <div className={style["input"]}>
                <label className={style["label"]} htmlFor="Cdescription">Course Description:</label>
                <input
                    className={`${style["discription"]}`}
                    type="text"
                    id="Cdescription"
                    name="Cdescription"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <button className={style["button"]} onClick={addOrUpdateCourse}>
                {isEditing ? 'Update Course' : 'Add Course'}
            </button>

            {errorMessage && <p className={style["error"]}>{errorMessage}</p>}

            {/* Search bar */}
            <input
                className={`${style["myInput"]} ${style["inputS"]}`}
                type="text"
                onChange={handleSearchChange}
                value={searchTerm}
                placeholder="Search by name"
            />

            {/* Course table */}
            <div className={style["input2"]}>
                <table className={style["table"]}>
                    <thead>
                        <tr className={style["tr"]}>
                            <th className={style["th"]}>Course Code</th>
                            <th className={style["th"]}>Course Name</th>
                            <th className={style["th"]}>Course Description</th>
                            <th className={style["th"]}>Update</th>
                            <th className={style["th"]}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCourses.length > 0 && filteredCourses.map((course) => (
                            <tr key={course.cid} className={style["tr"]}>
                                <td className={style["td"]}>{course.code}</td>
                                <td className={style["td"]}>{course.name}</td>
                                <td className={style["td"]}>{course.description}</td>
                                <td className={style["td"]}>
                                    <button onClick={() => updateCourse(course.CID)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </td>
                                <td className={style["td"]}>
                                    <button onClick={() => deleteCourse(course.CID)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

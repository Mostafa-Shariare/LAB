import { createContext, useContext, useState, useEffect } from 'react';
import { courses as allCourses } from '../data/courses';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Load enrolled courses from local storage or default to empty
    // For this demo, we can initialize with a few random ones if empty, 
    // or just start empty. Let's start with empty to show "Enroll" functionality.
    const [enrolledCourses, setEnrolledCourses] = useState(() => {
        const saved = localStorage.getItem('enrolledCourses');
        return saved ? JSON.parse(saved) : [];
    });

    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Demo login with Role assignment
        let role = 'student';
        let name = "Mostafa Shariare";
        let stats = {
            studyTime: 12.5,
            completed: 3,
            streak: 5,
            xp: 1250
        };

        if (email.includes('admin')) {
            role = 'admin';
            name = "System Admin";
            stats = {
                users: 1250,
                revenue: 45000,
                active: 320,
                reports: 5
            };
        } else if (email.includes('teacher')) {
            role = 'teacher';
            name = "Md. Naimul Pathan";
            stats = {
                students: 150,
                courses: 4,
                rating: 4.8,
                reviews: 45
            };
        }

        setUser({
            name: name,
            email: email,
            role: role,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${role === 'admin' ? 'ef4444' : role === 'teacher' ? '10b981' : '4f46e5'}&color=fff`,
            isPremium: role === 'student',
            stats: stats
        });
        return true;
    };

    const signup = (name, email, password) => {
        // Demo signup - default to student
        setUser({
            name: name,
            email: email,
            role: 'student',
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4f46e5&color=fff`,
            isPremium: false,
            stats: {
                studyTime: 0,
                completed: 0,
                streak: 0,
                xp: 0
            }
        });
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    // Save to local storage whenever enrolledCourses changes
    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }, [enrolledCourses]);

    const enrollInCourse = (course) => {
        if (!enrolledCourses.find(c => c.title === course.title)) {
            const newCourse = { ...course, progress: 0, dateEnrolled: new Date().toISOString() };
            setEnrolledCourses([...enrolledCourses, newCourse]);
            return true; // Success
        }
        return false; // Already enrolled
    };

    const updateProgress = (courseTitle, newProgress) => {
        setEnrolledCourses(enrolledCourses.map(c =>
            c.title === courseTitle ? { ...c, progress: newProgress } : c
        ));
    };

    return (
        <AppContext.Provider value={{
            enrolledCourses,
            enrollInCourse,
            updateProgress,
            user,
            login,
            signup,
            logout,
            allCourses
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);

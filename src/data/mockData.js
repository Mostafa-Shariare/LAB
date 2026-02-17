export const students = [
    { id: 1, name: 'Alice Walker', course: 'Python Basics', progress: 85, lastActive: '2 hours ago', avatar: 'https://ui-avatars.com/api/?name=Alice+Walker&background=e0f2fe&color=0369a1' },
    { id: 2, name: 'Bob Johnson', course: 'Web Development', progress: 45, lastActive: '1 day ago', avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson&background=f0fdf4&color=16a34a' },
    { id: 3, name: 'Charlie Brown', course: 'Data Science', progress: 12, lastActive: '5 mins ago', avatar: 'https://ui-avatars.com/api/?name=Charlie+Brown&background=fff7ed&color=c2410c' },
    { id: 4, name: 'Diana Prince', course: 'Python Basics', progress: 100, lastActive: '3 days ago', avatar: 'https://ui-avatars.com/api/?name=Diana+Prince&background=e0f2fe&color=0369a1' },
    { id: 5, name: 'Evan Wright', course: 'Web Development', progress: 60, lastActive: '4 hours ago', avatar: 'https://ui-avatars.com/api/?name=Evan+Wright&background=f0fdf4&color=16a34a' },
];

export const assignments = [
    { id: 1, title: 'Build a Portfolio Website', course: 'Web Development', student: 'Bob Johnson', submitted: 'Oct 24, 2023', status: 'Pending', grade: null },
    { id: 2, title: 'Python Data Analysis', course: 'Data Science', student: 'Alice Walker', submitted: 'Oct 23, 2023', status: 'Graded', grade: '95/100' },
    { id: 3, title: 'React Component Library', course: 'Web Development', student: 'Evan Wright', submitted: 'Oct 25, 2023', status: 'Pending', grade: null },
    { id: 4, title: 'Machine Learning Basics', course: 'Data Science', student: 'Charlie Brown', submitted: 'Oct 22, 2023', status: 'Graded', grade: '88/100' },
];

export const adminCourses = [
    { id: 1, title: 'Advanced React Patterns', instructor: 'Sarah Smith', category: 'Development', status: 'Published', students: 1250 },
    { id: 2, title: 'Intro to Machine Learning', instructor: 'David Chen', category: 'Data Science', status: 'Pending Review', students: 0 },
    { id: 3, title: 'UX Design Fundamentals', instructor: 'Emily Blunt', category: 'Design', status: 'Published', students: 850 },
    { id: 4, title: 'Blockchain Basics', instructor: 'Michael Ross', category: 'Finance', status: 'Draft', students: 0 },
];

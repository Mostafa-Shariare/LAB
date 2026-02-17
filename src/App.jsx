import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Features from './pages/Features';
import Dashboard from './pages/Dashboard';
import Advisor from './pages/Advisor';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import CourseManagement from './pages/admin/CourseManagement';
import AdminSettings from './pages/admin/AdminSettings';
import TeacherDashboard from './pages/TeacherDashboard';
import CreateCourse from './pages/teacher/CreateCourse';
import Students from './pages/teacher/Students';
import Assignments from './pages/teacher/Assignments';
import TeacherAI from './pages/teacher/TeacherAI';
import CoursePlayer from './pages/CoursePlayer';
import AIAssistant from './pages/AIAssistant';
import AdminAI from './pages/admin/AdminAI';
import Settings from './pages/Settings';
import Assessment from './pages/Assessment';
import { useApp } from './context/AppContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useApp();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on actual role
    if (user.role === 'admin') return <Navigate to="/admin" replace />;
    if (user.role === 'teacher') return <Navigate to="/teacher" replace />;
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="features" element={<Features />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* Student Dashboard */}
        <Route path="dashboard" element={
          <ProtectedRoute allowedRoles={['student']}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="settings" element={
          <ProtectedRoute allowedRoles={['student']}>
            <Settings />
          </ProtectedRoute>
        } />
        <Route path="assessment" element={
          <ProtectedRoute allowedRoles={['student']}>
            <Assessment />
          </ProtectedRoute>
        } />

        {/* Admin Dashboard */}
        <Route path="admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="admin/users" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <UserManagement />
          </ProtectedRoute>
        } />
        <Route path="admin/courses" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <CourseManagement />
          </ProtectedRoute>
        } />
        <Route path="admin/settings" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminSettings />
          </ProtectedRoute>
        } />
        <Route path="admin/ai" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminAI />
          </ProtectedRoute>
        } />

        {/* Teacher Dashboard */}
        <Route path="teacher" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherDashboard />
          </ProtectedRoute>
        } />
        <Route path="teacher/create-course" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <CreateCourse />
          </ProtectedRoute>
        } />
        <Route path="teacher/students" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <Students />
          </ProtectedRoute>
        } />
        <Route path="teacher/assignments" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <Assignments />
          </ProtectedRoute>
        } />
        <Route path="teacher/ai" element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherAI />
          </ProtectedRoute>
        } />

        {/* Course Player Route */}
        <Route path="/course/:courseTitle/learn" element={
          <ProtectedRoute>
            <CoursePlayer />
          </ProtectedRoute>
        } />

        {/* AI Assistant - Shared for all roles */}
        <Route path="ai-assistant" element={
          <ProtectedRoute>
            <AIAssistant />
          </ProtectedRoute>
        } />

        <Route path="advisor" element={
          <ProtectedRoute>
            <Advisor />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

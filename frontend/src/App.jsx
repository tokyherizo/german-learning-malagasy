import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Lesson from './pages/Lesson';
import Exercises from './pages/Exercises';
import Vocabulary from './pages/Vocabulary';
import Profile from './pages/Profile';

/* Protected wrapper */
const ProtectedLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      {/* Public */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
      />
      {/* Protected */}
      <Route path="/" element={<ProtectedLayout><Home /></ProtectedLayout>} />
      <Route path="/levels" element={<ProtectedLayout><Levels /></ProtectedLayout>} />
      <Route path="/lesson/:id" element={<ProtectedLayout><Lesson /></ProtectedLayout>} />
      <Route path="/exercises" element={<ProtectedLayout><Exercises /></ProtectedLayout>} />
      <Route path="/vocabulary" element={<ProtectedLayout><Vocabulary /></ProtectedLayout>} />      <Route path="/profile"    element={<ProtectedLayout><Profile /></ProtectedLayout>} />      {/* Fallback */}
      <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Lesson from './pages/Lesson';
import Exercises from './pages/Exercises';
import Vocabulary from './pages/Vocabulary';

/* Protected wrapper — redirects to /login when not authenticated */
const ProtectedLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
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
      <Route path="/vocabulary" element={<ProtectedLayout><Vocabulary /></ProtectedLayout>} />
      {/* Fallback */}
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

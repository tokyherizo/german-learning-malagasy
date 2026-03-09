import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Lesson from './pages/Lesson';
import Exercises from './pages/Exercises';
import Vocabulary from './pages/Vocabulary';
import Profile from './pages/Profile';
import Opportunities from './pages/Opportunities';
import Community from './pages/Community';
import Horen from './pages/Horen';
import Lesen from './pages/Lesen';
import Schreiben from './pages/Schreiben';
import Sprechen from './pages/Sprechen';
import MiniGames from './pages/MiniGames';
import Grammar from './pages/Grammar';
import Kultur from './pages/Kultur';

/* Protected wrapper */
const ProtectedLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <Navbar />
      <main>{children}</main>
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
      <Route path="/opportunities" element={<ProtectedLayout><Opportunities /></ProtectedLayout>} />
      <Route path="/community"    element={<ProtectedLayout><Community /></ProtectedLayout>} />
      <Route path="/profile"       element={<ProtectedLayout><Profile /></ProtectedLayout>} />
      <Route path="/horen"         element={<ProtectedLayout><Horen /></ProtectedLayout>} />
      <Route path="/lesen"         element={<ProtectedLayout><Lesen /></ProtectedLayout>} />
      <Route path="/schreiben"     element={<ProtectedLayout><Schreiben /></ProtectedLayout>} />
      <Route path="/sprechen"      element={<ProtectedLayout><Sprechen /></ProtectedLayout>} />
      <Route path="/minigames"     element={<ProtectedLayout><MiniGames /></ProtectedLayout>} />
      <Route path="/grammar"       element={<ProtectedLayout><Grammar /></ProtectedLayout>} />
      <Route path="/kultur"         element={<ProtectedLayout><Kultur /></ProtectedLayout>} />
      {/* Fallback */}
      <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

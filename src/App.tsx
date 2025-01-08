import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBanner from './components/TopBanner';
import DashboardNav from './components/DashboardNav';
import Home from './pages/Home';
import Profile from './pages/Profile';

function AppContent() {
  const location = useLocation();
  const showDashboardNav = location.pathname !== '/profile';

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#111111]">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <TopBanner />
          {showDashboardNav && <DashboardNav />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;
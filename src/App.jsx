import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import StatCard from './components/StatCard.jsx';
import LabCard from './components/LabCard.jsx';
import LoginPage from './LoginPage.jsx'; // bikin file baru

import './App.css';

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <header className="top-navbar">
          <Navbar />
        </header>

        <main className="dashboard-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="stats-row">
                    <StatCard />
                    <StatCard />
                    <StatCard />
                    <StatCard />
                    <StatCard />
                  </section>

                  <section className="lab-grid">
                    <LabCard />
                    <LabCard />
                    <LabCard />
                    <LabCard />
                    <LabCard />
                    <LabCard />
                  </section>
                </>
              }
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

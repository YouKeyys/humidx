import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import StatCard from './components/StatCard.jsx';
import LabCard from './components/LabCard.jsx';
import LoginPage from './LoginPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone Login Route - No Navbar here! */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Route with Navbar */}
        <Route
          path="/"
          element={
            <div className="dashboard-container">
              <header className="top-navbar">
                <Navbar />
              </header>
              <main className="dashboard-content">
                <section className="stats-row">
  <StatCard 
    title="Monitored Lab" 
    value="6" 
    badge="5 online" 
    badgeColor="green" 
    iconType="lab" 
  />
  <StatCard 
    title="Highest Temperature recorded" 
    subTitle="Cal Lab I"
    value="29.2°C" 
    trend="Last 24h" 
    iconType="temp" 
  />  
 <StatCard 
    title="Lowest Temperature recorded" 
    subTitle="OHC Lab II"
    value="18.7°C" 
    trend="Last 24h" 
    iconType="temp"
  />
  <StatCard 
    title="Active Alerts" 
    value="4" 
    badge="2 High priority" 
    badgeColor="red" 
    iconType="alert" 
    />
  <StatCard 
    title="Calibrated Device" 
    value="5" 
    badge="1 online" 
    badgeColor="green" 
    iconType="device" 
  />
</section>


                
                <section className="lab-grid">
                  {[...Array(6)].map((_, i) => <LabCard key={i} />)}
                </section>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
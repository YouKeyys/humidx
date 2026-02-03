import './StatCard.css';

// 💡 Kita akan pakai emoji 🖥️ 🌡️ 💧 sebagai placeholder untuk icon
function StatCard() {
  return (
    <div className="stat-card">
      
      <div className="card-header">
        <span className="card-title">Monitored Lab</span>
        <span className="card-icon">🖥️</span>
      </div>

      <div className="card-body">
        <span className="card-value">6</span>
        <span className="card-badge">5 online</span>
      </div>

    </div>
  );
}

export default StatCard;
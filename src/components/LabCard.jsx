import './LabCard.css';

function LabCard() {
  return (
    <div className="lab-card">
      <div className="lab-card-header">
        <span className="lab-title">Calibration Lab I Quick Overview</span>
        <span className="status-badge online">online</span>
      </div>

      <div className="lab-card-body">

        {/* Temperature Block */}
        <div 
          className="data-block" 
          style={{ background: "linear-gradient(to right, #2A5176, #6D7D8B)" }}
        >
          <span className="data-label">Temperature</span>
          <span className="data-value temperature">21.48°C</span>
          <span className="data-threshold">Threshold: 18-25°C</span>
        </div>

        {/* Min/Max Block */}
        <div 
          className="data-block min-max-block" 
          style={{ background: "linear-gradient(to right, #718096, #A0AEC0)" }}
        >
          <div className="min-max-row">
            <span>Min</span>
            <span>17.39°C</span>
            <span>45%RH</span>
          </div>
          <div className="min-max-row">
            <span>Max</span>
            <span>24.10°C</span>
            <span>59%RH</span>
          </div>
        </div>

        {/* Humidity Block */}
        <div 
          className="data-block" 
          style={{ background: "linear-gradient(to right, #63B3ED, #90CDF4)" }}
        >
          <span className="data-label">Humidity</span>
          <span className="data-value humidity">52%RH</span>
          <span className="data-threshold">Threshold: 30-70%RH</span>
        </div>

        {/* Graph Block */}
        <div 
          className="data-block graph-block" 
          style={{ background: "linear-gradient(to right, #4A5568, #2D3748)" }}
        >
          <div className="graph-placeholder">
            [GRAFIK]
          </div>
        </div>

      </div>
    </div>
  );
}

export default LabCard;
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
        <div className="data-block" style={{ gridColumn: "span 1", background: "linear-gradient(to right, #1F2B88, #464F98)" }}>
          <span className="data-label">Temperature</span>
          <span className="data-value temperature">21.48°C</span>
          <span className="data-threshold">Threshold: 18-25°C</span>
        </div>

        {/* Min Block */}
        <div className="data-block min-max-separated" style={{ gridColumn: "span 1", background: "linear-gradient(to right, #437C8A, #FFFFFF)" }}>
          <div className="min-max-row"><span>Min</span></div>
          <div className="min-max-values">
            <span className="data-value temperature">19.48°C</span>
            <span className="data-value humidity-dark">45%RH</span>
          </div>
        </div>

        {/* Max Block */}
        <div className="data-block min-max-separated" style={{ gridColumn: "span 1", background: "linear-gradient(to right, #437C8A, #FFFFFF)" }}>
          <div className="min-max-row"><span>Max</span></div>
          <div className="min-max-values">
            <span className="data-value temperature">23.48°C</span>
            <span className="data-value humidity-dark">59%RH</span>
          </div>
        </div>

        {/* Humidity Block */}
        <div className="data-block" style={{ gridColumn: "span 1", background: "linear-gradient(to right, #255919, #438A51)" }}>
          <span className="data-label">Humidity</span>
          <span className="data-value humidity">52%RH</span>
          <span className="data-threshold">Threshold: 30-70%RH</span>
        </div>

        {/* Graph Block */}
        <div className="data-block graph-block" style={{ gridColumn: "span 2", background: "linear-gradient(to right, #FFFFFF, #EFE376)" }}>
          <div className="graph-placeholder">[GRAFIK]</div>
        </div>

      </div>
    </div>
  );
}

export default LabCard;
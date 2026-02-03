import React from 'react';
import {
  Monitor,
  Thermometer,
  Droplets,
  AlertTriangle,
  Ruler,
  Settings
} from 'lucide-react';
import './StatCard.css';

function StatCard({ title, subTitle, value, badge, badgeColor, iconType, trend }) {
  const renderIcon = () => {
    switch (iconType) {
      case 'lab': return <Monitor className="icon blue" />;
      case 'temp': return <Thermometer className="icon orange" />;
      case 'humidity': return <Droplets className="icon green" />;
      case 'alert': return <AlertTriangle className="icon red" />;
      case 'device': return <Ruler className="icon blue" />; // New Ruler icon
      case 'gear': return <Settings className="icon yellow" />; // New Gear icon
      default: return <Monitor className="icon" />;
    }
  };

  return (
    <div className="stat-card">
      <div className="card-header">
        <div className="title-group">
          <span className="card-title">{title}</span>
          {subTitle && <span className="card-subtitle">{subTitle}</span>}
        </div>
        <div className="icon-container">
          {renderIcon()}
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-value">{value}</h2>
        <div className="card-footer">
          {badge && (
            <span className={`card-badge ${badgeColor}`}>
              {badge}
            </span>
          )}
          {trend && <span className="card-trend">{trend}</span>}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
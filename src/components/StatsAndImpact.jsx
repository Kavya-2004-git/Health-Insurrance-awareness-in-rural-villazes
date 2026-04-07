import React from 'react';
import { Users, Building2, Banknote } from 'lucide-react';
import './StatsAndImpact.css';

const stats = [
  {
    icon: <Users size={40} className="text-white" />,
    value: "50M+",
    label: "Families Covered",
    desc: "Across rural and urban areas"
  },
  {
    icon: <Building2 size={40} className="text-white" />,
    value: "25,000+",
    label: "Hospitals Empanelled",
    desc: "Govt & Private hospitals"
  },
  {
    icon: <Banknote size={40} className="text-white" />,
    value: "₹80,000 Cr",
    label: "Total Savings",
    desc: "In medical expenses"
  }
];

const StatsAndImpact = () => {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-header">
          <h2 className="stats-title">Making a Real Impact</h2>
          <p className="stats-subtitle">
            Millions of families have already benefited from free government healthcare. Join them today.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              className="stat-card animate-fade-in" 
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <h3 className="stat-value">{stat.value}</h3>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsAndImpact;

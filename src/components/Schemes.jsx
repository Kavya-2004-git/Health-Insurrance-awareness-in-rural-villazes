import React, { useState } from 'react';
import { Shield, Activity, Stethoscope, BriefcaseMedical, HeartHandshake, Building, Users, Cross, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Schemes.css';

const schemesData = [
  {
    id: 'ayushman',
    title: 'Ayushman Bharat (PM-JAY)',
    icon: <Shield size={40} className="scheme-icon-blue" />,
    amount: '₹5 Lakhs/Year',
    desc: 'Free health cover for poor and vulnerable families.',
    longDesc: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana covers up to ₹5 Lakhs per family per year for secondary and tertiary care hospitalization. It is completely free for eligible families under the SECC database.',
    colorClass: 'blue-card'
  },
  {
    id: 'aarogyasri',
    title: 'Aarogyasri',
    icon: <Activity size={40} className="scheme-icon-green" />,
    amount: '₹5 Lakhs/Year',
    desc: 'State-sponsored scheme for BPL families in AP/Telangana.',
    longDesc: 'Aarogyasri provides high-quality medical care to BPL families. It covers serious ailments requiring surgeries and therapies, completely free of cost in empanelled private and government hospitals.',
    colorClass: 'green-card'
  },
  {
    id: 'rsby',
    title: 'RSBY',
    icon: <BriefcaseMedical size={40} className="scheme-icon-orange" />,
    amount: '₹30,000/Year',
    desc: 'Rashtriya Swasthya Bima Yojana for unorganized sector workers.',
    longDesc: 'RSBY provides health insurance coverage for BPL families in the unorganized sector. Beneficiaries need to pay only ₹30 as a registration fee for biometric smart cards.',
    colorClass: 'orange-card'
  },
  {
    id: 'mohfw',
    title: 'MoHFW Schemes',
    icon: <Stethoscope size={40} className="scheme-icon-blue" />,
    amount: 'Various',
    desc: 'Central government specific health initiatives.',
    longDesc: 'Ministry of Health and Family Welfare runs multiple condition-specific free schemes covering tuberculosis, maternal health, and child immunization programs.',
    colorClass: 'blue-card'
  },
  {
    id: 'esi',
    title: 'ESI Scheme',
    icon: <Building size={40} className="scheme-icon-green" />,
    amount: 'Full Coverage',
    desc: "Employees' State Insurance for workers earning under ₹21,000.",
    longDesc: 'ESI provides massive social security benefits, covering sickness, maternity, disablement, and death due to employment injury. Medical care is extended to the worker and their family members.',
    colorClass: 'green-card'
  },
  {
    id: 'cghs',
    title: 'CGHS',
    icon: <Users size={40} className="scheme-icon-orange" />,
    amount: 'Comprehensive',
    desc: 'Central Government Health Scheme for current & retired employees.',
    longDesc: 'Provides comprehensive health care facilities for Central Govt. employees, pensioners and their dependents residing in CGHS covered cities.',
    colorClass: 'orange-card'
  }
];

const Schemes = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const openModal = (scheme) => setSelectedScheme(scheme);
  const closeModal = () => setSelectedScheme(null);

  return (
    <section className="section" id="schemes">
      <div className="container">
        <h2 className="section-title">Government <span className="text-green-gradient">Schemes</span></h2>
        <p className="section-subtitle">
          Find the right health insurance scheme for your family. 100% free enrollment.
        </p>

        <div className="schemes-grid">
          {schemesData.map((scheme, index) => (
            <div 
              className={`card scheme-card ${scheme.colorClass} animate-fade-in`} 
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="scheme-header">
                {scheme.icon}
                <div className="scheme-amount-badge">{scheme.amount}</div>
              </div>
              <h3 className="scheme-title">{scheme.title}</h3>
              <p className="scheme-desc">{scheme.desc}</p>
              
              <div className="scheme-actions">
                <Link to={`/apply?scheme=${scheme.id}`} className="btn w-full btn-large scheme-btn">
                  Apply Now
                </Link>
                <button className="btn btn-secondary w-full" onClick={() => openModal(scheme)}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedScheme && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}><X size={24} /></button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              {selectedScheme.icon}
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{selectedScheme.title}</h2>
            </div>
            <div className="scheme-amount-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              Coverage: {selectedScheme.amount}
            </div>
            <p style={{ color: 'var(--text-body)', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {selectedScheme.longDesc}
            </p>
            <Link to={`/apply?scheme=${selectedScheme.id}`} className="btn btn-primary" onClick={closeModal}>
              Apply For This Scheme
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Schemes;

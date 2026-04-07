import React from 'react';
import { UserPlus, FileText, CheckCircle } from 'lucide-react';
import './HowToApply.css';

const steps = [
  {
    icon: <UserPlus size={32} className="text-white" />,
    title: "1. Basic Details",
    desc: "Enter your name, age, and family member details."
  },
  {
    icon: <FileText size={32} className="text-white" />,
    title: "2. Verify ID",
    desc: "Upload Aadhaar card or Ration card to check eligibility."
  },
  {
    icon: <CheckCircle size={32} className="text-white" />,
    title: "3. Get Approved",
    desc: "Receive your free health card almost instantly."
  }
];

const HowToApply = () => {
  return (
    <section className="section bg-light" id="how-to-apply">
      <div className="container">
        <h2 className="section-title">How to <span className="text-blue-primary">Apply</span></h2>
        <p className="section-subtitle">
          Applying is 100% free and takes less than 5 minutes. Support is available if you need help.
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div 
              className="step-card animate-scale-in" 
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToApply;

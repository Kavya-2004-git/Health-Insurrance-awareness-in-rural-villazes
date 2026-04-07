import React from 'react';
import { HeartPulse, Wallet, FileCheck, Users } from 'lucide-react';
import './WhyMatters.css';

const features = [
  {
    icon: <HeartPulse size={36} className="text-blue-primary" />,
    title: "Quality Healthcare",
    description: "Access to top-tier government and private hospitals without worrying about the cost."
  },
  {
    icon: <Wallet size={36} className="text-green-primary" />,
    title: "Financial Security",
    description: "Save your life savings from sudden medical emergencies and expensive treatments."
  },
  {
    icon: <FileCheck size={36} className="text-orange-primary" />,
    title: "Cashless Treatment",
    description: "Get treated instantly without paying upfront. The government covers your medical bills."
  },
  {
    icon: <Users size={36} className="text-blue-primary" />,
    title: "Family Coverage",
    description: "One single card covers all your family members under a unified health plan."
  }
];

const WhyMatters = () => {
  return (
    <section className="section bg-light" id="why-matters">
      <div className="container">
        <h2 className="section-title">Why Health Insurance <span className="text-blue-primary">Matters</span></h2>
        <p className="section-subtitle">
          Medical emergencies can happen anytime. Free government health insurance ensures that you get the best treatment without the financial burden.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className="card feature-card animate-slide-up" 
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;

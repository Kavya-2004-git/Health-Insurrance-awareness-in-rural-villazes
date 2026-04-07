import React from 'react';
import { ArrowRight, ShieldPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        
        <div className="hero-content animate-slide-up">
          <div className="badge">
            <ShieldPlus size={16} /> Government Supported
          </div>
          <h1 className="hero-title">
            Your Health, <br />
            <span className="text-gradient">Your Protection</span>
          </h1>
          <p className="hero-subtitle">
            Discover and apply for free government health insurance schemes designed for you and your family. Coverage up to ₹5 Lakhs per year.
          </p>
          
          <div className="hero-actions">
            <a href="#schemes" className="btn btn-primary btn-large">
              Explore Schemes <ArrowRight size={20} />
            </a>
            <Link to="/apply" className="btn btn-secondary btn-large">
              Apply Now
            </Link>
          </div>
          
          <div className="trust-indicators delay-200 animate-slide-up">
            <div className="trust-item">
              <strong>100%</strong> Free Process
            </div>
            <div className="trust-item">
              <strong>24/7</strong> Support
            </div>
            <div className="trust-item">
              <strong>Govt</strong> Verified
            </div>
          </div>
        </div>

        <div className="hero-visual animate-scale-in delay-100">
          <div className="image-wrapper">
            {/* Friendly healthcare/family themed visual */}
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Healthcare professional offering support" 
              className="hero-image"
            />
            
            {/* Floating Info card */}
            <div className="floating-card popup-animation">
              <div className="floating-card-icon">
                <ShieldPlus size={24} color="#22c55e" />
              </div>
              <div className="floating-card-text">
                <span className="fc-title">Coverage Active</span>
                <span className="fc-desc">Over 50 Million Families Covered</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

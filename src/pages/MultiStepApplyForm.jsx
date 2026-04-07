import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import './MultiStepApplyForm.css';

const MultiStepApplyForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const urlScheme = searchParams.get('scheme') || 'ayushman';

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    aadhaar: '',
    age: '',
    scheme: urlScheme
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 1500);
  };

  const renderProgress = () => {
    return (
      <div className="progress-container">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-circle">{step > 1 ? <Check size={16} /> : 1}</div>
          <span className="step-label">Personal details</span>
        </div>
        <div className={`progress-line ${step >= 2 ? 'active-line' : ''}`}></div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-circle">{step > 2 ? <Check size={16} /> : 2}</div>
          <span className="step-label">Verification</span>
        </div>
        <div className={`progress-line ${step >= 3 ? 'active-line' : ''}`}></div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-circle">{step > 3 ? <Check size={16} /> : 3}</div>
          <span className="step-label">Confirmation</span>
        </div>
      </div>
    );
  };

  if (step === 4) {
    return (
      <div className="form-page bg-light">
        <div className="container form-container">
          <div className="success-screen animate-scale-in">
            <div className="success-icon-wrapper">
              <Check size={64} className="text-white" />
            </div>
            <h2>Application Submitted!</h2>
            <p className="success-desc">
              Your application for <strong>{formData.scheme === 'ayushman' ? 'Ayushman Bharat' : formData.scheme}</strong> has been successfully submitted. We will process your application shortly.
            </p>
            <div className="application-number">
              Application ID: <strong>HPRI-{Math.floor(Math.random() * 1000000)}</strong>
            </div>
            <Link to="/" className="btn btn-primary btn-large mt-4">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-page bg-light">
      <div className="container form-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <div className="form-card card animate-fade-in">
          <h1 className="form-title">Apply for Health Insurance</h1>
          {renderProgress()}

          <div className="form-content">
            {step === 1 && (
              <div className="form-step animate-slide-up">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    className="form-input" 
                    placeholder="Enter completely as in Aadhaar card" 
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-input" 
                    placeholder="Mobile Number" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Age</label>
                  <input 
                    type="number" 
                    name="age"
                    className="form-input" 
                    placeholder="Your Age" 
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step animate-slide-up">
                <div className="form-group">
                  <label>Aadhaar Number / Ration Card Number</label>
                  <input 
                    type="text" 
                    name="aadhaar"
                    className="form-input" 
                    placeholder="12 Digit Aadhaar Number" 
                    value={formData.aadhaar}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Select Scheme</label>
                  <select 
                    className="form-input" 
                    name="scheme"
                    value={formData.scheme}
                    onChange={handleChange}
                  >
                    <option value="ayushman">Ayushman Bharat</option>
                    <option value="aarogyasri">Aarogyasri</option>
                    <option value="rsby">RSBY</option>
                    <option value="mohfw">MoHFW Scheme</option>
                    <option value="esi">ESI Scheme</option>
                    <option value="cghs">CGHS</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step animate-slide-up">
                <div className="summary-box">
                  <h3>Please verify your details</h3>
                  <div className="summary-item">
                    <span>Name:</span> <strong>{formData.fullName || 'Not provided'}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Phone:</span> <strong>{formData.phone || 'Not provided'}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Aadhaar:</span> <strong>{formData.aadhaar || 'Not provided'}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Scheme:</span> <strong>{formData.scheme}</strong>
                  </div>
                </div>
                <div className="consent-box">
                  <input type="checkbox" id="consent" />
                  <label htmlFor="consent">I declare that all information provided is accurate and consent to verification.</label>
                </div>
              </div>
            )}
          </div>

          <div className="form-navigation">
            {step > 1 ? (
              <button className="btn btn-secondary" onClick={prevStep}>
                <ChevronLeft size={20} /> Back
              </button>
            ) : (
              <div></div> /* Empty div to push next button to right */
            )}

            {step < 3 ? (
              <button className="btn btn-primary" onClick={nextStep}>
                Next <ChevronRight size={20} />
              </button>
            ) : (
              <button className="btn btn-green" onClick={submitForm} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'} <Check size={20} />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MultiStepApplyForm;

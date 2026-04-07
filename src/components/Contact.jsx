import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section className="section bg-light" id="contact">
      <div className="container">
        <h2 className="section-title">Need Help? <span className="text-blue-primary">Contact Us</span></h2>
        <p className="section-subtitle">
          Our support team is available 24/7 to assist you with your health insurance application.
        </p>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-card">
              <Phone size={32} className="contact-icon text-blue-primary" />
              <div>
                <h3>Toll-Free Helpline</h3>
                <p>1800-111-111 (English & Regional)</p>
              </div>
            </div>

            <div className="contact-card">
              <MessageSquare size={32} className="contact-icon text-green-primary" />
              <div>
                <h3>WhatsApp Support</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-card">
              <Mail size={32} className="contact-icon text-orange-primary" />
              <div>
                <h3>Email Us</h3>
                <p>support@healthprotect.gov.in</p>
              </div>
            </div>

            <div className="contact-card">
              <MapPin size={32} className="contact-icon text-blue-primary" />
              <div>
                <h3>Head Office</h3>
                <p>Health Bhavan, New Delhi, India 110001</p>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="contact-form-wrapper card">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-input"
                  placeholder="Your Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-input"
                  rows="4"
                  placeholder="How can we help you?"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn w-full btn-primary">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

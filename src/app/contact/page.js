"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../my-portfolio/components/Navbar";
import { ThemeProvider } from "../my-portfolio/utils/ThemeContext";
import "../my-portfolio/styles/Home.css";
import "../my-portfolio/styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission - replace with your actual form handling logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "abdullahi@muazdevy.com",
      link: "mailto:abdullahi@muazdevy.com",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+234 (0) 123 456 789",
      link: "tel:+2340123456789",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Abuja, FCT Nigeria",
      link: null,
    },
    {
      icon: "fas fa-clock",
      title: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/abdullahikhalilmuaz",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://linkedin.com/in/muazdevy",
      color: "#0077b5",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://twitter.com/muazdevy",
      color: "#1da1f2",
    },
    {
      name: "WhatsApp",
      icon: "fab fa-whatsapp",
      url: "https://wa.me/2340123456789",
      color: "#25d366",
    },
  ];

  return (
    <ThemeProvider>
      <Head>
        <title>Contact Me - Abdullahi H Mu'az | Get In Touch</title>
        <meta
          name="description"
          content="Get in touch with Abdullahi H Mu'az for web development projects, collaborations, or just to say hello. I'd love to hear from you!"
        />
        <meta
          name="keywords"
          content="contact, web developer, full-stack developer, hire developer, collaboration, freelance"
        />
        <meta name="author" content="Abdullahi H Mu'az" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Me - Abdullahi H Mu'az"
        />
        <meta
          property="og:description"
          content="Get in touch for web development projects and collaborations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muazdevy.com/contact" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Abdullahi H Mu'az",
              description: "Get in touch with Abdullahi H Mu'az for web development projects and collaborations.",
              url: "https://muazdevy.com/contact",
              author: {
                "@type": "Person",
                name: "Abdullahi H Mu'az",
                jobTitle: "Full-Stack Developer",
                email: "abdullahi@muazdevy.com",
                telephone: "+2340123456789",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Abuja",
                  addressRegion: "FCT",
                  addressCountry: "Nigeria"
                }
              },
            }),
          }}
        />
      </Head>

      <div className="contact-page">
        <Navbar />

        <section className="contact-header">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          
          <div className="container">
            <div className="header-content">
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subtitle">
                Have a project in mind? Let's collaborate and bring your ideas to life. 
                I'm always excited to work on new challenges and innovative solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              
              {/* Contact Form */}
              <div className="contact-form-section">
                <div className="form-header">
                  <h2>Send Me a Message</h2>
                  <p>Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Tell me more about your project or inquiry..."
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="status-message success">
                      <i className="fas fa-check-circle"></i>
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="status-message error">
                      <i className="fas fa-exclamation-circle"></i>
                      Sorry, there was an error sending your message. Please try again or contact me directly.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="contact-info-section">
                <div className="info-header">
                  <h2>Contact Information</h2>
                  <p>Feel free to reach out through any of the following channels.</p>
                </div>

                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-item">
                      <div className="info-icon">
                        <i className={info.icon}></i>
                      </div>
                      <div className="info-content">
                        <h3>{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="info-value">
                            {info.value}
                          </a>
                        ) : (
                          <p className="info-value">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="social-section">
                  <h3>Follow Me</h3>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        style={{ '--social-color': social.color }}
                      >
                        <i className={social.icon}></i>
                        <span>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="availability-section">
                  <div className="availability-card">
                    <div className="availability-status">
                      <div className="status-indicator available"></div>
                      <span>Available for new projects</span>
                    </div>
                    <p>
                      I'm currently accepting new freelance projects and collaborations. 
                      Let's discuss how we can work together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Whether you need a complete web application, a mobile app, or just want to 
                discuss your ideas, I'm here to help bring your vision to reality.
              </p>
              <div className="cta-buttons">
                <a href="mailto:abdullahi@muazdevy.com" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>
                  Email Me Directly
                </a>
                <a href="/projects" className="btn btn-secondary">
                  <i className="fas fa-eye"></i>
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Contact;
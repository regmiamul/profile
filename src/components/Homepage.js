import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Homepage.css';

const Homepage = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="portfolio-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <motion.div 
          className="profile-card"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="avatar">
            <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Profile" />
          </div>
          <h1>Alex Johnson</h1>
          <p className="title">Senior System Administrator</p>
          <p className="location">Canberra, ACT, Australia</p>
          
          <div className="contact-info">
            <p><span>📞</span> (02) 1234 5678</p>
            <p><span>✉</span> alex.johnson@example.com</p>
            <p><span>🔗</span> linkedin.com/in/alexjohnson</p>
          </div>
        </motion.div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About Me
          </button>
          <button 
            className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button 
            className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        {/* About Section */}
        {activeSection === 'about' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="section about-section"
          >
            <h2>Professional Summary</h2>
            <p>
              Experienced IT Professional with 2+ years of dedicated service at Viva Leisure, 
              specializing in system administration, network security, and IT infrastructure management. 
              Proficient in server administration, Palo Alto firewall configuration, and switch/router management. 
              Strong background in technical support, network engineering, and IT troubleshooting, 
              ensuring seamless operations for business continuity.
            </p>
            
            <div className="highlight-box">
              <h3>Why Choose Me?</h3>
              <p>
                Having worked with Viva Leisure for 2 years, I have an in-depth understanding of the company's IT infrastructure 
                and operational needs. My expertise in server management, Palo Alto firewalls, and network configurations ensures 
                a secure and efficient IT environment.
              </p>
            </div>
          </motion.section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="section experience-section"
          >
            <h2>Work Experience</h2>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h3>IT L2 Technical Support Specialist</h3>
                  <div className="timeline-meta">
                    <span className="company">Viva Leisure</span>
                    <span className="date">Jun 2023 - Present</span>
                  </div>
                </div>
                <ul className="timeline-content">
                  <li>Managed and maintained Windows/Linux servers, ensuring optimal performance and security</li>
                  <li>Configured and monitored Palo Alto firewalls to protect company networks</li>
                  <li>Handled switch and router configurations for seamless network operations</li>
                  <li>Provided Level 2 technical support, resolving complex IT issues</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-header">
                  <h3>Information Technology Field Engineer</h3>
                  <div className="timeline-meta">
                    <span className="company">Unisys</span>
                    <span className="date">Apr 2022 - Jun 2023</span>
                  </div>
                </div>
                <ul className="timeline-content">
                  <li>Provided on-site and remote IT support for enterprise clients</li>
                  <li>Specialized in printer support and network engineering</li>
                  <li>Assisted in server deployments and network infrastructure upgrades</li>
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="section skills-section"
          >
            <h2>Technical Skills</h2>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h3>System Administration</h3>
                <ul>
                  <li>Windows Server 2016/2019</li>
                  <li>Linux Server (Ubuntu, CentOS)</li>
                  <li>Active Directory Management</li>
                  <li>Group Policy Implementation</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Network Security</h3>
                <ul>
                  <li>Palo Alto Firewalls</li>
                  <li>Cisco Switch/Router Config</li>
                  <li>Network Monitoring</li>
                  <li>VPN Setup & Maintenance</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Other Competencies</h3>
                <ul>
                  <li>Hardware Troubleshooting</li>
                  <li>Printer/Peripheral Support</li>
                  <li>IT Infrastructure Maintenance</li>
                  <li>Technical Documentation</li>
                </ul>
              </div>
            </div>

            <div className="certifications">
              <h3>Certifications</h3>
              <div className="badges">
                <span className="badge">Palo Alto PCNSA</span>
                <span className="badge">Microsoft Azure Admin</span>
                <span className="badge">Cisco CCNA</span>
              </div>
            </div>
          </motion.section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="section education-section"
          >
            <h2>Education</h2>
            
            <div className="education-item">
              <h3>Bachelor of Information Technology</h3>
              <p className="institution">University of Canberra</p>
              <p className="date">2018 - 2021</p>
            </div>

            <div className="references">
              <h3>References</h3>
              <p>Available upon request</p>
              <button className="contact-button">
                📩 Contact Me
              </button>
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default Homepage;
import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="header-content">
          <h1>Alex Johnson</h1>
          <p className="job-title">System Administrator</p>
          <div className="contact-info">
            <span>📍 Canberra, Australian Capital Territory, Australia</span>
            <span>📞 (02) 1234 5678</span>
            <span>✉ alex.johnson@example.com</span>
            <span>🔗 linkedin.com/in/alexjohnson</span>
          </div>
        </div>
        <div className="profile-photo">
          <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Profile" />
        </div>
      </header>

      <section className="cv-section">
        <h2>Professional Summary</h2>
        <p>
          Experienced IT Professional with 2+ years of dedicated service at Viva Leisure, 
          specializing in system administration, network security, and IT infrastructure management. 
          Proficient in server administration, Palo Alto firewall configuration, and switch/router management. 
          Strong background in technical support, network engineering, and IT troubleshooting, 
          ensuring seamless operations for business continuity.
        </p>
      </section>

      <section className="cv-section">
        <h2>Key Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">✅ Server Administration (Windows/Linux)</div>
          <div className="skill-item">✅ Palo Alto Firewall Configuration & Management</div>
          <div className="skill-item">✅ Switch & Router Configuration (Cisco, HP, etc.)</div>
          <div className="skill-item">✅ Active Directory & Group Policy Management</div>
          <div className="skill-item">✅ Network Security & Troubleshooting</div>
          <div className="skill-item">✅ Hardware & Software Support</div>
          <div className="skill-item">✅ Printer & Peripheral Support</div>
          <div className="skill-item">✅ IT Infrastructure Maintenance</div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Work Experience</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <h3>IT L2 Technical Support Specialist</h3>
            <div className="company-info">
              <strong>Viva Leisure</strong> | Canberra, ACT | Jun 2023 - Present (2 years)
            </div>
          </div>
          <ul className="responsibilities">
            <li>Managed and maintained Windows/Linux servers, ensuring optimal performance and security</li>
            <li>Configured and monitored Palo Alto firewalls to protect company networks from cyber threats</li>
            <li>Handled switch and router configurations for seamless network operations</li>
            <li>Provided Level 2 technical support, resolving complex IT issues for staff and systems</li>
            <li>Assisted in Active Directory management, user permissions, and Group Policy implementation</li>
            <li>Conducted regular system audits and implemented security best practices</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Information Technology Field Engineer</h3>
            <div className="company-info">
              <strong>Unisys</strong> | Canberra, ACT | Apr 2022 - Jun 2023 (1 yr 3 mos)
            </div>
          </div>
          <ul className="responsibilities">
            <li>Provided on-site and remote IT support for enterprise clients</li>
            <li>Specialized in printer support, network engineering, and hardware troubleshooting</li>
            <li>Assisted in server deployments and network infrastructure upgrades</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>IT Service Technician</h3>
            <div className="company-info">
              <strong>MAC1 Service</strong> | Canberra, ACT | Nov 2021 - Apr 2022 (6 mos)
            </div>
          </div>
          <ul className="responsibilities">
            <li>Managed Active Directory, hardware support, and software installations</li>
            <li>Assisted in network setup and troubleshooting for business clients</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education & Certifications</h2>
        <div className="education-item">
          <div className="education-header">
            <span className="icon">🎓</span>
            <strong>Bachelor of Information Technology</strong> – University of Canberra
          </div>
        </div>
        <div className="certifications">
          <h3>Relevant Certifications:</h3>
          <ul>
            <li><span className="icon">🔹</span> Palo Alto Networks Certified Network Security Administrator (PCNSA)</li>
            <li><span className="icon">🔹</span> Microsoft Certified: Azure Administrator</li>
            <li><span className="icon">🔹</span> Cisco Certified Network Associate (CCNA)</li>
          </ul>
        </div>
      </section>

      <section className="cv-section highlight-section">
        <h2>Why Viva Leisure Should Hire Me?</h2>
        <p>
          Having worked with Viva Leisure for 2 years, I have an in-depth understanding of the company's IT infrastructure 
          and operational needs. My expertise in server management, Palo Alto firewalls, and network configurations ensures 
          a secure and efficient IT environment. I am committed to maintaining high uptime, security compliance, and seamless 
          IT operations to support business growth.
        </p>
        <div className="references">
          <p><strong>References Available Upon Request</strong></p>
          <p className="attachments">📌 Attached: Professional Photo</p>
        </div>
        <div className="cta">
          <p>🔹 Ready to contribute immediately! Let's discuss how I can strengthen Viva Leisure's IT systems.</p>
        </div>
      </section>
    </div>
  );
};

export default CV;
// Updated Sidebar.js with cover letter navigation
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Sidebar.css';
import Amul from './Amul.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = ({ activeSection, setActiveSection, hoveredNav, setHoveredNav }) => {
  const sidebarRef = useRef(null);

  const navItems = [
    { id: 'about', icon: 'fas fa-user', label: 'About Me' },
    { id: 'experience', icon: 'fas fa-briefcase', label: 'Experience' },
    { id: 'skills', icon: 'fas fa-code', label: 'Skills' },
    { id: 'education', icon: 'fas fa-graduation-cap', label: 'Education' },
    // { id: 'coverletter', icon: 'fas fa-envelope', label: 'Cover Letter' }
  ];

  const techStack = [
    { name: 'Windows Server', level: 'primary' },
    { name: 'Active Directory', level: 'primary' },
    { name: 'Office 365', level: 'secondary' },
    { name: 'Intune/SCCM', level: 'secondary' },
    { name: 'Cisco', level: 'tertiary' },
    { name: 'Jira', level: 'tertiary' }
  ];

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleMouseMove = (e) => {
      const rect = sidebar.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      sidebar.style.setProperty('--mouse-x', `${x}%`);
      sidebar.style.setProperty('--mouse-y', `${y}%`);
    };

    sidebar.addEventListener('mousemove', handleMouseMove);
    return () => sidebar.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.aside className="sidebar" ref={sidebarRef}>
      <div className="sidebar-inner">
        <motion.div className="profile-card">
          <div className="avatar-container">
            <div className="avatar-glow"></div>
            <div className="avatar">
              <div className="avatar-face-container">
                <img 
                   src={Amul} 
                   alt="Profile" 
                   className="avatar-face"
                   onError={(e) => {
                     e.target.onerror = null; 
                     e.target.src = 'https://via.placeholder.com/140';
                   }}
                />
              </div>
              <div className="avatar-overlay">
                <div className="tech-grid">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="grid-cell"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="connection-dots">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="dot"></div>
              ))}
            </div>
          </div>

          <div className="profile-info">
            <h1>Amul Regmi</h1>
            <p className="title">IT Support Specialist</p>
            <div className="location-chip">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Canberra, ACT</span>
            </div>
          </div>

          <div className="contact-info">
            {[
              { icon: faPhone, text: '0420 652 360' },
              { icon: faEnvelope, text: 'regmiamul@gmail.com' },
              { icon: faLinkedinIn, text: 'linkedin.com/in/amulregmi' }
            ].map((contact, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={contact.icon} />
                </div>
                <span>{contact.text}</span>
              </div>
            ))}
          </div>

          <div className="quick-stats">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '140+', label: 'Sites Supported' },
              { value: '100%', label: 'Commitment' }
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              onMouseEnter={() => setHoveredNav(item.id)}
              onMouseLeave={() => setHoveredNav(null)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <div className="nav-icon">
                <i className={item.icon}></i>
              </div>
              <span>{item.label}</span>
              <motion.div
                className="nav-indicator"
                initial={{ width: 0 }}
                animate={{
                  width: activeSection === item.id ? '100%' : hoveredNav === item.id ? '30%' : 0
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </button>
          ))}
        </nav>

        <div className="tech-stack">
          <h4>Core Tech Stack</h4>
          <div className="tech-tags">
            {techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className={`tech-tag ${tech.level}`}
                whileHover={{ y: -3 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
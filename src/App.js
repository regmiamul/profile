import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredNav, setHoveredNav] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // For mobile toggle
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app-container">
      {/* Mobile Header */}
      <header className="mobile-header">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <h1 className="mobile-title">Alex Johnson</h1>
      </header>

      <div className="layout-grid">
        {/* Sidebar with animation */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="sidebar-container"
              initial={{ x: -330 }}
              animate={{ x: 0 }}
              exit={{ x: -330 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Sidebar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                hoveredNav={hoveredNav}
                setHoveredNav={setHoveredNav}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="main-content">
          <Homepage activeSection={activeSection} />
        </main>

        {/* Decorative Background Elements */}
        <div className="background-elements">
          <div className="tech-circle"></div>
          <div className="binary-grid"></div>
          <div className="network-lines"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
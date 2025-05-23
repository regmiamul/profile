// Updated Homepage.js with cover letter section
import React, { useEffect, useRef } from 'react';
import './Homepage.css';

const Homepage = ({ activeSection }) => {
  const homepageRef = useRef(null);

  useEffect(() => {
    const el = homepageRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', `${x}%`);
      el.style.setProperty('--mouse-y', `${y}%`);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Content for each section
  const sections = {
    about: {
      title: "About Me",
      content: (
        <div className="section-content">
          <h2>Professional Summary</h2>
          <p>
            Motivated and experienced IT support specialist with over 5 years of hands-on experience across system administration, field engineering, and multi-site technical support. Currently serving as a Level 2 IT Support Specialist at Viva Leisure, with deep knowledge of internal systems, ongoing IT projects, and infrastructure. Adept at troubleshooting, project execution, and staff training. Seeking to transition into a System Administrator role to continue contributing to organizational growth and technological innovation.
          </p>
          
          <h3>Key Skills</h3>
          <ul className="competencies">
            <li>IT Infrastructure Management</li>
            <li>Windows Server & Active Directory</li>
            <li>Networking (Cisco, TCP/IP, VPNs)</li>
            <li>Remote Support & Multi-site Coordination</li>
            <li>Office 365 Administration</li>
            <li>Endpoint Management & Imaging (Intune, SCCM)</li>
            <li>IT Policy & Documentation</li>
            <li>Communication & Staff Training</li>
            <li>Ticketing Systems (Jira, Freshservice)</li>
          </ul>
        </div>
      )
    },
    experience: {
      title: "Professional Experience",
      content: (
        <div className="experience-timeline">
          <div className="experience-item">
            <h3>IT Level 2 Technical Support Specialist</h3>
            <div className="company">Viva Leisure, Canberra, ACT</div>
            <div className="duration">Jun 2023 – Present</div>
            <ul className="achievements">
              <li>Provide advanced technical support across head office and all Viva Leisure brands (Club Lime, Hiit Republic, GroundUp, and others)</li>
              <li>Act as primary point of contact for high-priority incidents involving network outages, system access, and device failures</li>
              <li>Deliver comprehensive remote and on-site support for 140+ locations</li>
              <li>Support end-user hardware (laptops, desktops, POS systems, printers) and software (Office 365, Active Directory, CRM platforms)</li>
              <li>Manage user accounts, group policies, and security permissions in Active Directory and Microsoft 365</li>
              <li>Participate in ongoing infrastructure projects including system upgrades and network enhancements</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <h3>Information Technology Field Engineer</h3>
            <div className="company">Unisys, Canberra, ACT</div>
            <div className="duration">Apr 2022 – Jun 2023</div>
            <ul className="achievements">
              <li>Delivered on-site and remote IT support to enterprise-level clients</li>
              <li>Diagnosed, repaired, and replaced hardware components including printers, desktops, and laptops</li>
              <li>Performed software installations, imaging, and configuration of client devices</li>
              <li>Provided support for LAN/WAN issues and printer queues</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>IT Service Technician</h3>
            <div className="company">MAC1 Service, Canberra, ACT</div>
            <div className="duration">Nov 2021 – Apr 2022</div>
            <ul className="achievements">
              <li>Delivered technical support to Apple and Windows users in retail and business environments</li>
              <li>Handled troubleshooting for macOS and iOS devices, including diagnostics and repairs</li>
              <li>Assisted with network configurations, backups, and data recovery</li>
              <li>Supported Active Directory user management and implemented basic security protocols</li>
            </ul>
          </div>
        </div>
      )
    },
    skills: {
      title: "Technical Skills",
      content: (
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Systems & Administration</h3>
            <ul>
              <li>Windows Server & Active Directory</li>
              <li>Office 365 Administration</li>
              <li>Endpoint Management (Intune, SCCM)</li>
              <li>IT Policy & Documentation</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Networking</h3>
            <ul>
              <li>Cisco Networking</li>
              <li>TCP/IP, VPNs</li>
              <li>Wi-Fi Troubleshooting</li>
              <li>VOIP Phone Systems</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Support & Tools</h3>
            <ul>
              <li>Remote Support & Multi-site Coordination</li>
              <li>Ticketing Systems (Jira, Freshservice)</li>
              <li>Staff Training & Mentoring</li>
              <li>Hardware Troubleshooting</li>
            </ul>
          </div>
        </div>
      )
    },
    // Updated Education section in Homepage.js
education: {
  title: "Education & Certifications",
  content: (
    <div className="education-list">
      <div className="education-item">
        <h3>Professional Year, Information Technology</h3>
        <div className="institution">Performance Education</div>
        <div className="duration">2020 - 2021</div>
        <div className="grade">Status: Completed</div>
        <div className="skills">
          <h4>Skills Gained:</h4>
          <ul>
            <li>Risk Management</li>
            <li>Cybersecurity</li>
            <li>Vulnerability Scanning</li>
            <li>Networking</li>
          </ul>
        </div>
      </div>
      
      <div className="education-item">
        <h3>Bachelor's Degree, Information Technology Network Security</h3>
        <div className="institution">TAFE NSW</div>
        <div className="duration">2017 - 2019</div>
        <div className="grade">Status: Completed</div>
        <div className="skills">
          <h4>Skills Gained:</h4>
          <ul>
            <li>Risk Management</li>
            <li>Cybersecurity</li>
            <li>Vulnerability Scanning</li>
            <li>Networking</li>
          </ul>
        </div>
      </div>

      <div className="education-item">
        <h3>Diploma, Information Technology Network Security</h3>
        <div className="institution">TAFE NSW</div>
        <div className="duration">Jan 2017 - Dec 2017</div>
        <div className="grade">Status: Completed</div>
        <div className="skills">
          <h4>Skills Gained:</h4>
          <ul>
            <li>Networking</li>
          </ul>
        </div>
      </div>

      <div className="education-item">
        <h3>Certificate IV, Information Technology Network Security</h3>
        <div className="institution">TAFE NSW</div>
        <div className="duration">2016 - 2017</div>
        <div className="grade">Status: Completed</div>
        <div className="skills">
          <h4>Skills Gained:</h4>
          <ul>
            <li>Networking</li>
          </ul>
        </div>
      </div>

      <div className="certifications">
        <h3>Certifications</h3>
        <ul>
          <li>Microsoft Certified: Azure Administrator Associate</li>
          <li>Cisco Certified Network Associate (CCNA)</li>
          <li>CompTIA Security+</li>
        </ul>
      </div>
    </div>
  )
}
    
    // coverletter: {
    //   title: "Cover Letter",
    //   content: (
    //     <div className="cover-letter">
    //       <div className="letter-header">
    //         <h2>Application for System Administrator Position</h2>
    //         <p className="date">[Current Date]</p>
    //       </div>
          
    //       {/* <div className="letter-content">
    //         <p>Dear Hiring Manager,</p>
            
    //         <p>I am writing to express my interest in the System Administrator role recently posted for internal recruitment at Viva Leisure. Currently serving as a Level 2 IT Support Specialist, I am confident that my hands-on experience with our IT infrastructure, understanding of our internal systems, and commitment to delivering exceptional support make me an ideal candidate for this role.</p>
            
    //         <p>Over the past two years, I've played an active role in resolving complex IT incidents, supporting multiple locations, and collaborating across departments. My current responsibilities have given me a strong grasp of Viva Leisure's evolving technology ecosystem and insight into the strategic goals of our IT projects. I've also contributed to onboarding processes, system rollouts, and remote support – skills that align directly with the expectations for the System Administrator role.</p>
            
    //         <p>At Viva Leisure, I have consistently resolved high-priority IT tickets, demonstrating both technical expertise and a commitment to fast, effective solutions. I work closely with cross-functional teams across different brands, supporting a wide range of technical environments. My proactive approach to learning and research enables me to identify areas for improvement and contribute to system enhancements and upcoming IT projects. I also take an active role in training new team members and providing supervision when needed, ensuring consistency and knowledge-sharing across the team.</p>
            
    //         <p>I'm excited about the opportunity to grow within Viva Leisure and contribute further to our digital transformation and innovation goals. I would welcome the chance to discuss how my background can support the success of this role and our broader IT objectives.</p>
            
    //         <p>Thank you for considering my application.</p>
            
    //         <div className="letter-closing">
    //           <p>Sincerely,</p>
    //           <p className="signature">Amul Regmi</p>
    //           <p>IT Level 2 Technical Support Specialist</p>
    //           <p>Viva Leisure</p>
    //         </div>
    //       </div> */}
    //     </div>
    //   )
    // }
  };

  return (
    <main className="homepage" ref={homepageRef}>
      <div className="section-container">
        <h1 className="section-title">{sections[activeSection].title}</h1>
        <div className="section-content">
          {sections[activeSection].content}
        </div>
      </div>
    </main>
  );
};

export default Homepage;
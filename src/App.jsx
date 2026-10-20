import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  Mail, 
  Phone,
  Check, 
  FileText,
  Award,
  BookOpen,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Server,
  ExternalLink,
  Menu,
  X,
  Send,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import './App.css';

const CURRENT_YEAR = new Date().getFullYear();

// SVG Brand Icons
const GithubIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [contactFormStatus, setContactFormStatus] = useState('');
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });

  // Update live Karnataka time (IST: UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'experience', 'certificates', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = (e) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText('nnaik5253@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactFormData.email || !contactFormData.name || !contactFormData.message) return;
    
    // Construct mailto link with encoded message
    const subject = encodeURIComponent(`Portfolio Inquiry from ${contactFormData.name}`);
    const body = encodeURIComponent(`Name: ${contactFormData.name}\nEmail: ${contactFormData.email}\n\nMessage:\n${contactFormData.message}`);
    window.location.href = `mailto:nnaik5253@gmail.com?subject=${subject}&body=${body}`;
    
    setContactFormStatus('sent');
    setTimeout(() => {
      setContactFormStatus('');
      setContactFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const techStackList = [
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'Javascript', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'React', category: 'frontend' },
    { name: 'Git', category: 'tools' },
    { name: 'Github', category: 'tools' },
    { name: 'FastAPI', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'Docker', category: 'devops' },
    { name: 'AWS (EC2, S3)', category: 'cloud' },
    { name: 'PostgreSQL', category: 'db' },
    { name: 'Supabase', category: 'db' },
    { name: 'C++', category: 'systems' },
    { name: 'REST APIs', category: 'backend' }
  ];

  const projects = [
    {
      id: 'chaduranga',
      title: 'Chaduranga — Chess Tournament Engine',
      category: 'research',
      categoryLabel: 'Research & OSS',
      badge: 'Scopus Indexed · AITC-2026',
      badgeIcon: <Award size={13} />,
      desc: 'Designed a graph-driven Swiss-system pairing engine for automated round pairings and live tournament standings. Built scalable REST APIs with FastAPI & Supabase. Published with Grenze Scientific Society and presented at the 4th International Conference on Advances in Information, Telecommunication and Computing (AITC-2026).',
      image: '/chaduranga_certificate.jpg',
      isCertPreview: true,
      paperUrl: 'https://thegrenze.com/abstract/journal/7895',
      certUrl: '/chaduranga_certificate.jpg',
      githubUrl: 'https://github.com/Nandan6626',
      tech: ['Python', 'FastAPI', 'Graph Theory', 'Supabase', 'Docker', 'Scopus']
    },
    {
      id: 'mediguardian',
      title: 'MediGuardian AI — Healthcare Operating System',
      category: 'ai',
      categoryLabel: 'AI / Healthcare',
      desc: 'Smart Healthcare Operating System built for elderly users featuring intelligent medication tracking, automated missed-dose alerts, real-time caregiver updates, and emergency healthcare access.',
      image: '/mediguardian.png',
      liveUrl: 'https://medi-guardian-ai.vercel.app/auth/login',
      githubUrl: 'https://github.com/Nandan6626/medi_guardian_ai',
      tech: ['React', 'Node.js', 'FastAPI', 'AI Diagnostics', 'Tailwind', 'Vercel']
    },
    {
      id: 'skillbridge',
      title: 'SkillBridge — Intelligent Workforce Platform',
      category: 'fullstack',
      categoryLabel: 'Full Stack',
      desc: 'Multi-role workforce ecosystem connecting customers, skilled workers, and corporate teams with FastAPI, Supabase, Google OAuth, and an algorithmic Trust Score system.',
      image: '/skillbridge.jpg',
      githubUrl: 'https://github.com/Nandan6626/SKILLBRIDGE',
      tech: ['FastAPI', 'Supabase', 'Python', 'Google OAuth', 'REST APIs']
    },
    {
      id: 'global-bank',
      title: 'Global Digital Bank — Banking Simulation System',
      category: 'backend',
      categoryLabel: 'Python · OOP',
      desc: 'Robust banking simulation application handling end-to-end banking operations — multi-tier account management, secure deposits, fund transfers, and encrypted transaction ledger using strict OOP paradigms.',
      image: '/global_digital_bank.jpg',
      githubUrl: 'https://github.com/Nandan6626/Global-Digital-Bank1/tree/main/Global-Digital-Bank',
      tech: ['Python', 'OOP', 'SQL', 'Security Audits', 'Architecture']
    }
  ];

  const filteredProjects = activeProjectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeProjectFilter || (activeProjectFilter === 'backend' && (p.category === 'backend' || p.category === 'research')));

  const certificates = [
    {
      title: 'Chaduranga Research Paper',
      issuer: 'Grenze Scientific Society · AITC-2026',
      tag: 'Scopus Indexed',
      icon: <BookOpen size={14} />,
      date: '2026',
      image: '/chaduranga_certificate.jpg',
      verifyUrl: 'https://thegrenze.com/abstract/journal/7895'
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL · IIT Roorkee (Elite Score: 70%)',
      tag: 'Elite Tier',
      icon: <Award size={14} />,
      date: '2026',
      image: '/nptel_data_analytics.jpg',
      roll: 'Roll: NPTEL26CS86S560400005'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'IBM Skills Network · Coursera',
      tag: 'Machine Learning',
      icon: <Cpu size={14} />,
      date: 'IBM',
      image: '/cert_ibm_ml.jpg',
      verifyUrl: 'https://coursera.org/verify/7PX1SX6XEJVQ'
    },
    {
      title: 'Introduction to Artificial Intelligence (AI)',
      issuer: 'IBM Skills Network · Coursera',
      tag: 'AI & ML',
      icon: <Cpu size={14} />,
      date: 'IBM',
      image: '/cert_ibm_ai.jpg',
      verifyUrl: 'https://coursera.org/verify/DF5T0UD0LHG0'
    },
    {
      title: 'Networking Fundamentals',
      issuer: 'Packt Publishing · Coursera',
      tag: 'Networks',
      icon: <Globe size={14} />,
      date: 'Packt',
      image: '/cert_networking_fundamentals.jpg',
      verifyUrl: 'https://coursera.org/verify/0N3KZVU469LX'
    },
    {
      title: 'RPA Basics & UiPath Automation',
      issuer: 'UiPath Automation · Coursera',
      tag: 'Robotics & RPA',
      icon: <Layers size={14} />,
      date: 'UiPath',
      image: '/cert_uipath_rpa.jpg',
      verifyUrl: 'https://coursera.org/verify/W5EAGF4XDCKX'
    }
  ];

  return (
    <div className="portfolio-app fade-in">
      {/* =========================================================
          TOP NAVIGATION BAR (Matches Jensen Omega header)
          ========================================================= */}
      <header className="site-header">
        <div className="header-inner">
          <button 
            type="button" 
            className="brand-logo"
            onClick={() => scrollToSection('home')}
            aria-label="Navigate to Home"
          >
            <span className="brand-name">Nandan Naik</span>
            <span className="brand-dot"></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <button 
              type="button" 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              type="button" 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              type="button" 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              type="button" 
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </button>
            <button 
              type="button" 
              className={`nav-item ${activeSection === 'certificates' ? 'active' : ''}`}
              onClick={() => scrollToSection('certificates')}
            >
              Certificates
            </button>
            <button 
              type="button" 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contacts
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="header-actions">
            <button 
              type="button" 
              className="btn-header-resume"
              onClick={() => setResumeModalOpen(true)}
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              type="button" 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-links">
              <button 
                type="button" 
                className={`mobile-nav-item ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
              <button 
                type="button" 
                className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button 
                type="button" 
                className={`mobile-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
              <button 
                type="button" 
                className={`mobile-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
              <button 
                type="button" 
                className={`mobile-nav-item ${activeSection === 'certificates' ? 'active' : ''}`}
                onClick={() => scrollToSection('certificates')}
              >
                Certificates
              </button>
              <button 
                type="button" 
                className={`mobile-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contacts
              </button>
              
              <div className="mobile-drawer-cta">
                <button 
                  type="button" 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => { setMobileMenuOpen(false); scrollToSection('contact'); }}
                >
                  Got a project?
                </button>
                <button 
                  type="button" 
                  className="btn-secondary" 
                  style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                  onClick={() => { setMobileMenuOpen(false); setResumeModalOpen(true); }}
                >
                  My resume
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO SECTION (Strictly matching reference layout)
          ========================================================= */}
      <section id="home" className="hero-section" aria-label="Hero Overview">
        <div className="hero-container">
          <div className="hero-content-col">
            <div className="hero-greeting-box">
              <span className="hero-hello">Hello <span className="accent-dot">.</span></span>
            </div>

            <div className="hero-subline-row">
              <span className="hero-orange-line" aria-hidden="true"></span>
              <span className="hero-im-name">I'm Nandan</span>
            </div>

            <h1 className="hero-main-title">
              Software Developer
            </h1>

            <p className="hero-bio-text">
              Computer Science & Business Systems engineer at PESCE Mandya (CGPA: 8.33). 
              Specializing in scalable backend microservices, graph algorithms, and full-stack systems with Python, FastAPI, React, and AWS.
            </p>

            <div className="hero-btn-group">
              <button 
                type="button" 
                className="btn-primary hero-cta-btn"
                onClick={() => scrollToSection('contact')}
              >
                <span>Got a project?</span>
              </button>

              <button 
                type="button" 
                className="btn-secondary hero-resume-btn"
                onClick={() => setResumeModalOpen(true)}
              >
                <span>My resume</span>
              </button>
            </div>

            {/* Quick Live Status Hint */}
            <div className="hero-live-indicator">
              <span className="live-pulse-dot" aria-hidden="true"></span>
              <span className="live-status-text">Available for Opportunities · Karnataka, IN {currentTime && `(${currentTime})`}</span>
            </div>
          </div>

          {/* Right Column: Hero Portrait in Glowing Circle Halo (with < > chevrons) */}
          <div className="hero-avatar-col">
            <div className="avatar-halo-wrapper">
              {/* Left Angle Chevron Accent */}
              <div className="geometric-chevron left-chevron" aria-hidden="true">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M15 18L9 12L15 6" />
                </svg>
              </div>

              {/* Glowing Concentric Double Rings */}
              <div className="glowing-halo-ring outer-ring"></div>
              <div className="glowing-halo-ring inner-ring"></div>
              
              {/* Photo Frame */}
              <div className="avatar-image-container">
                <img 
                  src="/nandan-photo.jpg" 
                  alt="Nandan Manjunath Naik — Software Developer" 
                  className="avatar-photo"
                  loading="eager"
                />
              </div>

              {/* Right Angle Chevron Accent */}
              <div className="geometric-chevron right-chevron" aria-hidden="true">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 18L15 12L9 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECH SKILLS MARQUEE / STRIP (Matches reference tech bar)
          ========================================================= */}
      <section className="tech-bar-section" aria-label="Technologies Strip">
        <div className="tech-bar-inner">
          <div className="tech-items-row">
            {techStackList.map((tech, idx) => (
              <span key={idx} className="tech-badge-item">
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT ME SECTION (Matches reference 2-column layout)
          ========================================================= */}
      <section id="about" className="about-section" aria-label="About Me">
        <div className="about-container">
          {/* Left Column: Timeline Service Cards with Orange Progress Line */}
          <div className="about-services-col">
            <div className="services-timeline-track">
              <div className="services-vertical-line" aria-hidden="true"></div>

              {/* Service 1: Website Development */}
              <div className="service-timeline-item">
                <div className="timeline-dot-wrapper">
                  <span className="timeline-orange-dot"></span>
                </div>
                <div className="service-card">
                  <div className="service-icon-box">
                    <Code2 size={24} className="service-icon" />
                  </div>
                  <div className="service-details">
                    <h3 className="service-title">Website Development</h3>
                    <p className="service-description">
                      High-performance, dynamic user interfaces built with modern React, JavaScript, sleek CSS, and responsive state architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2: App & Backend Development */}
              <div className="service-timeline-item">
                <div className="timeline-dot-wrapper">
                  <span className="timeline-orange-dot"></span>
                </div>
                <div className="service-card">
                  <div className="service-icon-box">
                    <Server size={24} className="service-icon" />
                  </div>
                  <div className="service-details">
                    <h3 className="service-title">App & Backend Development</h3>
                    <p className="service-description">
                      Production RESTful APIs, distributed microservices, and graph algorithm engines built with FastAPI, Python, Pydantic, and LangChain.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Website Hosting & Cloud */}
              <div className="service-timeline-item">
                <div className="timeline-dot-wrapper">
                  <span className="timeline-orange-dot"></span>
                </div>
                <div className="service-card">
                  <div className="service-icon-box">
                    <Database size={24} className="service-icon" />
                  </div>
                  <div className="service-details">
                    <h3 className="service-title">Website Hosting & Cloud</h3>
                    <p className="service-description">
                      Docker containerization, AWS cloud infrastructure (EC2, S3), relational databases (PostgreSQL/MySQL), and Supabase integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Me Bio, Metrics & Brand Badge */}
          <div className="about-bio-col">
            <h2 className="section-heading-white">About me</h2>
            
            <p className="about-narrative-text">
              I am a Computer Science & Business Systems engineering student at PES College of Engineering, Mandya (graduating 2027 with an 8.33/10 CGPA). 
              My passion lies in architecting high-efficiency backend services, graph algorithms, and intuitive modern web systems from scratch.
            </p>
            <p className="about-narrative-text" style={{ marginTop: '12px' }}>
              I have shipped production APIs and microservices across two engineering internships (Talenciaglobal & Employability.life) and published a peer-reviewed Scopus-indexed research paper on a Swiss-system chess tournament pairing engine (AITC-2026).
            </p>

            {/* Metrics Row (Matches: 120+ Completed Projects | 95% Client satisfaction | 10+ Years of experience) */}
            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-number">
                  15 <span className="stat-orange-plus">+</span>
                </div>
                <div className="stat-label">Completed Projects</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">
                  8.33 <span className="stat-orange-plus">★</span>
                </div>
                <div className="stat-label">Academic CGPA</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">
                  2 <span className="stat-orange-plus">+</span>
                </div>
                <div className="stat-label">Industry Internships</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">
                  6 <span className="stat-orange-plus">+</span>
                </div>
                <div className="stat-label">Verified Certifications</div>
              </div>
            </div>

            {/* Social / Portfolio Brand Badges (Matches Behance pill button in reference image) */}
            <div className="about-badges-group">
              <a 
                href="https://github.com/Nandan6626" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="brand-pill-btn github-badge"
              >
                <div className="brand-pill-icon-box github-icon-bg">
                  <GithubIcon size={18} color="#ffffff" />
                </div>
                <span className="brand-pill-text">github.com/Nandan6626</span>
                <ArrowUpRight size={14} className="brand-pill-arrow" />
              </a>

              <a 
                href="https://www.linkedin.com/in/nandan-naik-43a659295/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="brand-pill-btn linkedin-badge"
              >
                <div className="brand-pill-icon-box linkedin-icon-bg">
                  <LinkedinIcon size={18} color="#ffffff" />
                </div>
                <span className="brand-pill-text">linkedin.com/in/nandan-naik</span>
                <ArrowUpRight size={14} className="brand-pill-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS SECTION (With vertical orange accent line)
          ========================================================= */}
      <section id="projects" className="projects-showcase-section" aria-label="Projects Showcase">
        {/* Section Heading with the reference style's vertical orange line */}
        <div className="section-centered-header">
          <div className="header-vertical-orange-line" aria-hidden="true"></div>
          <h2 className="section-title-large">Projects</h2>
          <p className="section-subtitle-muted">
            Highlighted software engineering projects, algorithmic engines, and production systems.
          </p>

          {/* Filter Pills */}
          <div className="project-filter-tabs">
            <button 
              type="button" 
              className={`filter-pill ${activeProjectFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveProjectFilter('all')}
            >
              All Work
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeProjectFilter === 'research' ? 'active' : ''}`}
              onClick={() => setActiveProjectFilter('research')}
            >
              Research & OSS
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeProjectFilter === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveProjectFilter('ai')}
            >
              AI & Health
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeProjectFilter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setActiveProjectFilter('fullstack')}
            >
              Full Stack
            </button>
            <button 
              type="button" 
              className={`filter-pill ${activeProjectFilter === 'backend' ? 'active' : ''}`}
              onClick={() => setActiveProjectFilter('backend')}
            >
              Backend & OOP
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-container">
          <div className="projects-cards-grid">
            {filteredProjects.map((proj) => (
              <article key={proj.id} className="project-display-card">
                {/* Image / Preview banner */}
                <div className="project-image-banner">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="project-banner-img"
                    onClick={() => {
                      if (proj.isCertPreview) {
                        setSelectedCert({
                          title: 'Chaduranga Research Paper Presentation & Publication Certificate',
                          issuer: 'Grenze Scientific Society · AITC-2026',
                          image: proj.certUrl,
                          verifyUrl: proj.paperUrl
                        });
                      }
                    }}
                    style={{ cursor: proj.isCertPreview ? 'pointer' : 'default' }}
                  />
                  <div className="project-banner-overlay">
                    <span className="project-category-tag">{proj.categoryLabel}</span>
                    {proj.badge && (
                      <span className="project-highlight-badge">
                        {proj.badgeIcon}
                        <span>{proj.badge}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-desc">{proj.desc}</p>

                  {/* Tech stack badges */}
                  <div className="project-tech-pills">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="project-action-buttons">
                    {proj.paperUrl && (
                      <a 
                        href={proj.paperUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn-primary"
                      >
                        <span>Read Paper</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {proj.certUrl && (
                      <button 
                        type="button"
                        onClick={() => setSelectedCert({
                          title: 'Chaduranga Research Presentation Certificate',
                          issuer: 'Grenze Scientific Society · AITC-2026',
                          image: proj.certUrl,
                          verifyUrl: proj.paperUrl
                        })}
                        className="project-btn-secondary"
                      >
                        <Eye size={14} />
                        <span>View Cert</span>
                      </button>
                    )}

                    {proj.liveUrl && (
                      <a 
                        href={proj.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn-primary"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {proj.githubUrl && (
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn-secondary"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WORK EXPERIENCE & INTERNSHIPS SECTION
          ========================================================= */}
      <section id="experience" className="experience-section-custom" aria-label="Experience & Education">
        <div className="section-centered-header">
          <div className="header-vertical-orange-line" aria-hidden="true"></div>
          <h2 className="section-title-large">Experience & Academics</h2>
          <p className="section-subtitle-muted">
            Professional internships, computer science foundations, and academic achievements.
          </p>
        </div>

        <div className="experience-container">
          <div className="dual-experience-grid">
            {/* Column 1: Internships */}
            <div className="exp-column">
              <div className="exp-column-header">
                <Briefcase size={20} className="column-icon" />
                <h3 className="column-title">Work Experience</h3>
              </div>

              <div className="exp-card-list">
                {/* Internship 1: Talenciaglobal */}
                <div className="exp-modern-card">
                  <div className="exp-card-top">
                    <div className="exp-card-avatar">T</div>
                    <div>
                      <h4 className="exp-company-heading">Talenciaglobal</h4>
                      <span className="exp-role-title">Software Engineering Intern</span>
                    </div>
                    <span className="exp-duration-badge">Apr 2026 – May 2026</span>
                  </div>
                  <p className="exp-card-summary">
                    Engineered and deployed production RESTful APIs using FastAPI, Pydantic, Python, and SQL within a distributed microservices architecture. Standardized containerized testing and deployment with Docker and integrated LangChain AI workflows.
                  </p>
                  <div className="exp-skill-tags">
                    <span>FastAPI</span>
                    <span>Docker</span>
                    <span>Python</span>
                    <span>Microservices</span>
                    <span>SQL</span>
                  </div>
                </div>

                {/* Internship 2: Employability.life */}
                <div className="exp-modern-card">
                  <div className="exp-card-top">
                    <div className="exp-card-avatar">E</div>
                    <div>
                      <h4 className="exp-company-heading">Employability.life</h4>
                      <span className="exp-role-title">Cybersecurity & AWS Intern</span>
                    </div>
                    <span className="exp-duration-badge">Aug 2025 – Sep 2025</span>
                  </div>
                  <p className="exp-card-summary">
                    Configured and maintained cloud infrastructure on AWS (EC2, S3), applying least-privilege IAM access policies. Built scalable cloud backend systems while navigating ambiguous real-world requirements.
                  </p>
                  <div className="exp-skill-tags">
                    <span>AWS (EC2, S3)</span>
                    <span>Cloud Security</span>
                    <span>IAM Policies</span>
                    <span>Backend</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Academics */}
            <div className="exp-column">
              <div className="exp-column-header">
                <GraduationCap size={20} className="column-icon" />
                <h3 className="column-title">Academic Background</h3>
              </div>

              <div className="exp-card-list">
                {/* B.E. PESCE Mandya */}
                <div className="exp-modern-card academic-highlight-card">
                  <div className="exp-card-top">
                    <div className="exp-card-avatar academic-badge-icon">P</div>
                    <div>
                      <h4 className="exp-company-heading">PES College of Engineering, Mandya</h4>
                      <span className="exp-role-title">B.E. — Computer Science & Business Systems</span>
                    </div>
                    <span className="academic-cgpa-pill">8.33 / 10 CGPA</span>
                  </div>
                  <div className="academic-meta-line">2023 – 2027 · Autonomous Institute under VTU</div>
                  <p className="exp-card-summary">
                    Rigorous engineering degree combining foundational theoretical computer science, systems design, complexity analysis, and modern enterprise software architectures.
                  </p>
                  <div className="academic-topics-grid">
                    <span>Data Structures & Algorithms</span>
                    <span>Operating Systems</span>
                    <span>Computer Networks</span>
                    <span>Relational DBMS</span>
                    <span>Object-Oriented Design</span>
                    <span>Distributed Systems</span>
                  </div>
                </div>

                {/* Secondary Schooling */}
                <div className="academic-sub-cards-row">
                  <div className="academic-mini-card">
                    <span className="mini-card-badge">PUC (12th) · 77.16%</span>
                    <h5 className="mini-card-school">Govt. PU College, Honnavar</h5>
                    <p className="mini-card-sub">PCMB · Pre-University Education</p>
                  </div>
                  <div className="academic-mini-card">
                    <span className="mini-card-badge highlight">SSLC (10th) · 86.50%</span>
                    <h5 className="mini-card-school">Sharavati High School</h5>
                    <p className="mini-card-sub">KSEEB · Distinction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CERTIFICATES & ACCREDITATIONS SECTION
          ========================================================= */}
      <section id="certificates" className="certificates-section-custom" aria-label="Certificates and Credentials">
        <div className="section-centered-header">
          <div className="header-vertical-orange-line" aria-hidden="true"></div>
          <h2 className="section-title-large">Certificates & Credentials</h2>
          <p className="section-subtitle-muted">
            Verified academic honors, peer-reviewed publications, and industry technical accreditations.
          </p>
        </div>

        <div className="certificates-container">
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="cert-modern-card">
                <div className="cert-card-header">
                  <span className="cert-tag-pill">
                    {cert.icon}
                    <span>{cert.tag}</span>
                  </span>
                  <span className="cert-year-label">{cert.date}</span>
                </div>

                <div className="cert-card-main">
                  <h4 className="cert-name-heading">{cert.title}</h4>
                  <p className="cert-issuer-name">{cert.issuer}</p>
                  {cert.roll && <p className="cert-roll-number">{cert.roll}</p>}
                </div>

                <div className="cert-card-actions">
                  <button 
                    type="button" 
                    className="cert-action-btn primary"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <Eye size={13} />
                    <span>View Certificate</span>
                  </button>

                  {cert.verifyUrl && (
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-action-btn secondary"
                      title="Verify online"
                    >
                      <ExternalLink size={13} />
                      <span>Verify</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT SECTION (Matches "Got a project?" aesthetic)
          ========================================================= */}
      <section id="contact" className="contact-section-custom" aria-label="Get In Touch">
        <div className="section-centered-header">
          <div className="header-vertical-orange-line" aria-hidden="true"></div>
          <h2 className="section-title-large">Contacts</h2>
          <p className="section-subtitle-muted">
            Have a project in mind, an engineering role, or want to collaborate? Let's connect.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-main-grid">
            {/* Left Column: Direct Info & Quick Copy */}
            <div className="contact-info-panel">
              <span className="contact-eyebrow">Direct Contact</span>
              <h3 className="contact-callout-title">Let's build scalable systems together.</h3>
              <p className="contact-subtext">
                I am actively seeking software engineering internships and full-time opportunities. Reach out via email, phone, or send a message below.
              </p>

              <div className="contact-items-list">
                <div className="contact-item-row">
                  <div className="contact-icon-pill">
                    <Mail size={18} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">Email Address</span>
                    <a href="mailto:nnaik5253@gmail.com" className="contact-item-val link-val">
                      nnaik5253@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-pill">
                    <Phone size={18} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">Phone & WhatsApp</span>
                    <a href="tel:+918431976921" className="contact-item-val link-val">
                      +91 8431976921
                    </a>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-pill">
                    <MapPin size={18} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">Location</span>
                    <span className="contact-item-val">Mandya, Karnataka, India</span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-pill">
                    <Clock size={18} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">Current Local Time</span>
                    <span className="contact-item-val">{currentTime || 'IST (UTC+5:30)'}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="contact-quick-buttons">
                <button 
                  type="button" 
                  className={`btn-primary ${copied ? 'copied-btn' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? <Check size={16} /> : <Mail size={16} />}
                  <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
                </button>

                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => setResumeModalOpen(true)}
                >
                  <FileText size={16} />
                  <span>View Resume</span>
                </button>
              </div>
            </div>

            {/* Right Column: Send a Message Form */}
            <div className="contact-form-panel">
              <h4 className="form-panel-title">Send a Direct Message</h4>
              <p className="form-panel-desc">
                Fill out the quick form and it will prepare an email directly to my inbox.
              </p>

              {contactFormStatus === 'sent' ? (
                <div className="form-success-banner">
                  <CheckCircle2 size={32} className="success-icon" />
                  <h4>Message Prepared!</h4>
                  <p>Your default email client has been launched with your inquiry. Looking forward to talking soon!</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      required
                      placeholder="e.g. Alex Jensen"
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Your Email</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      required
                      placeholder="e.g. alex@company.com"
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-msg">Message or Project Inquiry</label>
                    <textarea 
                      id="contact-msg"
                      rows="4"
                      required
                      placeholder="Hello Nandan, I saw your portfolio and would like to discuss..."
                      value={contactFormData.message}
                      onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SITE FOOTER
          ========================================================= */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <span className="footer-brand">Nandan Manjunath Naik</span>
            <span className="footer-copyright">
              © {CURRENT_YEAR} All rights reserved. Designed & built with React.
            </span>
          </div>

          <div className="footer-social-links">
            <a 
              href="https://github.com/Nandan6626" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nandan-naik-43a659295/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href="mailto:nnaik5253@gmail.com" 
              className="footer-social-icon"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="tel:+918431976921" 
              className="footer-social-icon"
              title="Call Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* =========================================================
          CERTIFICATE LIGHTBOX MODAL
          ========================================================= */}
      {selectedCert && (
        <div className="modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="modal-dialog cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="modal-title">{selectedCert.title}</h3>
                <p className="modal-subtitle">{selectedCert.issuer}</p>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body cert-modal-body">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="cert-modal-image"
              />
            </div>

            <div className="modal-footer">
              <a 
                href={selectedCert.image} 
                download 
                className="btn-secondary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download size={14} />
                <span>Open Full Size</span>
              </a>

              {selectedCert.verifyUrl && (
                <a 
                  href={selectedCert.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={14} />
                  <span>Verify Credential</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          RESUME MODAL
          ========================================================= */}
      {resumeModalOpen && (
        <div className="modal-backdrop" onClick={() => setResumeModalOpen(false)}>
          <div className="modal-dialog resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="modal-title">Nandan Manjunath Naik — Resume</h3>
                <p className="modal-subtitle">Software Developer · Backend & Microservices</p>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setResumeModalOpen(false)}
                aria-label="Close resume modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body resume-modal-body">
              {/* Resume summary */}
              <div className="resume-section-block">
                <h4 className="resume-block-title">Summary</h4>
                <p className="resume-block-text">
                  Computer Science & Business Systems engineering student at PESCE Mandya (CGPA: 8.33/10, graduating 2027). Built and shipped production RESTful APIs and microservices using Python (FastAPI/Pydantic), SQL, Docker, and AWS across two engineering internships. Author of a peer-reviewed research paper on a graph- and algorithm-driven Swiss-system pairing engine (Scopus Indexed, AITC-2026).
                </p>
              </div>

              {/* Education */}
              <div className="resume-section-block">
                <h4 className="resume-block-title">Education</h4>
                <div className="resume-item">
                  <div className="resume-item-top">
                    <strong>PES College of Engineering, Mandya</strong>
                    <span className="resume-date">2023 – 2027</span>
                  </div>
                  <div className="resume-item-sub">B.E. Computer Science & Business Systems · Current CGPA: 8.33 / 10</div>
                </div>
              </div>

              {/* Experience */}
              <div className="resume-section-block">
                <h4 className="resume-block-title">Work Experience</h4>
                <div className="resume-item">
                  <div className="resume-item-top">
                    <strong>Talenciaglobal — Software Engineering Intern</strong>
                    <span className="resume-date">Apr 2026 – May 2026</span>
                  </div>
                  <ul className="resume-bullets">
                    <li>Developed production RESTful APIs using FastAPI, Pydantic, Python, and SQL.</li>
                    <li>Integrated microservices with Docker containerization and LangChain workflows.</li>
                  </ul>
                </div>

                <div className="resume-item" style={{ marginTop: '12px' }}>
                  <div className="resume-item-top">
                    <strong>Employability.life — Cybersecurity & AWS Intern</strong>
                    <span className="resume-date">Aug 2025 – Sep 2025</span>
                  </div>
                  <ul className="resume-bullets">
                    <li>Deployed and monitored scalable cloud infrastructure on AWS (EC2, S3) with strict IAM roles.</li>
                  </ul>
                </div>
              </div>

              {/* Key Skills */}
              <div className="resume-section-block">
                <h4 className="resume-block-title">Technical Skills</h4>
                <div className="resume-skills-group">
                  <strong>Languages & Frameworks:</strong> Python, C++, C, JavaScript, React.js, FastAPI, Node.js, Express.js
                </div>
                <div className="resume-skills-group" style={{ marginTop: '4px' }}>
                  <strong>Cloud & Databases:</strong> AWS (EC2, S3), Docker, PostgreSQL, MySQL, Supabase, Git
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href="mailto:nnaik5253@gmail.com?subject=Requesting%20PDF%20Resume&body=Hi%20Nandan,%20I%20would%20like%20to%20request%20your%20PDF%20resume."
                className="btn-primary"
              >
                <Mail size={14} />
                <span>Request Custom PDF via Email</span>
              </a>

              <button 
                type="button" 
                className="btn-secondary"
                onClick={() => window.print()}
              >
                <Download size={14} />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {copied && (
        <div className="toast-notification" role="status" aria-live="polite">
          <Check size={16} />
          <span>Email copied to clipboard (nnaik5253@gmail.com)</span>
        </div>
      )}
    </div>
  );
}

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
  ShieldCheck,
  Server,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import './App.css';

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
  const [activeSection, setActiveSection] = useState('main');

  // Update live Karnataka time (IST: UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
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
    const sectionIds = ['main', 'projects', 'experience', 'academics', 'certificates', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 160;
      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section === 'academics' ? 'experience' : section);
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nnaik5253@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="portfolio-container fade-in">
      {/* =========================================================
          SAME THEME FLOATING BENTO NAVBAR
          ========================================================= */}
      <header className="navbar-wrapper">
        <nav className="bento-navbar" aria-label="Main Navigation">
          <button 
            type="button" 
            className="navbar-brand"
            onClick={() => scrollToSection('main')}
          >
            <span className="navbar-brand-spark" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
              </svg>
            </span>
            <span>Nandan Manjunath Naik</span>
          </button>

          <ul className="navbar-nav">
            <li>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'main' ? 'active' : ''}`}
                onClick={() => scrollToSection('main')}
              >
                Main
              </button>
            </li>
            <li>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`}
                onClick={() => scrollToSection('certificates')}
              >
                Certificates
              </button>
            </li>
            <li>
              <button 
                type="button" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>

          <a 
            href="mailto:nnaik5253@gmail.com?subject=Regarding%20Software%20Engineering%20Opportunity&body=Hi%20Nandan,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding..." 
            className="navbar-cta"
          >
            <Mail size={14} />
            <span>Get in touch</span>
          </a>
        </nav>
      </header>

      {/* =========================================================
          HERO BENTO GRID (NANDAN MANJUNATH NAIK)
          ========================================================= */}
      <section id="main" className="hero-section" aria-label="Introduction">
        {/* Top Row: Large Intro + Profile Image */}
        <div className="hero-grid-top">
          {/* Main Profile Info Card */}
          <div className="bento-card hero-intro-card interactive">
            <div>
              <span className="eyebrow">Available · Graduating 2027</span>
              <h1 className="hero-name">Nandan Manjunath Naik</h1>
              <p className="hero-bio">
                Pursuing Computer Science & Business Systems at PES College of Engineering, Mandya (CGPA: 8.33/10, graduating 2027). Built and shipped production RESTful APIs and microservices using Python (FastAPI/Pydantic), SQL, Docker, and AWS across two engineering internships. Author of a peer-reviewed research paper on a graph- and algorithm-driven Swiss-system pairing engine.
              </p>
            </div>

            <div className="hero-footer-row">
              <div className="hero-spark-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* User's Actual Profile Photo Card */}
          <div className="bento-card hero-image-card interactive">
            <img 
              src="/nandan-photo.jpg" 
              alt="Nandan Manjunath Naik portrait" 
              className="hero-image"
            />
            <div className="online-badge">
              <span className="online-dot" aria-hidden="true"></span>
              <span>Available</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Bento Badges */}
        <div className="hero-grid-sub">
          {/* Location */}
          <div className="bento-card hero-sub-card interactive">
            <span className="eyebrow">Where</span>
            <div>
              <div className="hero-sub-val">Mandya, IN</div>
              <div className="hero-sub-hint">Karnataka · GMT+5:30 {currentTime && `· ${currentTime}`}</div>
            </div>
          </div>

          {/* Building (Tinted Accent) */}
          <div className="bento-card hero-sub-card tinted interactive">
            <span className="eyebrow" style={{ color: '#6366F1' }}>Building</span>
            <p className="hero-sub-text">
              Chaduranga: Graph-driven Swiss-system pairing engine & microservices
            </p>
          </div>

          {/* Academic CGPA */}
          <div className="bento-card hero-sub-card interactive">
            <span className="eyebrow">Academic CGPA</span>
            <div className="hero-sub-val-row">
              <span className="hero-sub-val">8.33</span>
              <span className="hero-sub-val-star" aria-hidden="true">★</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginLeft: '4px' }}>/ 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTED PROJECTS SECTION
          ========================================================= */}
      <section id="projects" className="projects-section" aria-label="Selected Projects">
        <div className="section-header">
          <span className="eyebrow">Selected Projects</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {/* Project 1: Chaduranga (Featured Research & Publication with Certificate) */}
          <article 
            className="bento-card project-card project-tatkal has-bg interactive"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1200&q=80")' 
            }}
          >
            <div className="chaduranga-details-col">
              <div className="project-top-bar" style={{ marginBottom: '14px' }}>
                <span className="project-pill">Research & OSS</span>
                <span className="project-metric" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={13} />
                  <span>Scopus Indexed · AITC-2026</span>
                </span>
              </div>

              <div className="project-bottom-info" style={{ marginTop: 0 }}>
                <h3 className="project-title" style={{ fontSize: '1.65rem' }}>
                  Chaduranga — Chess Tournament Engine
                </h3>
                <p className="project-desc" style={{ marginBottom: '16px' }}>
                  Designed a graph-driven Swiss-system pairing engine for automated round pairings and live standings. 
                  Built scalable REST APIs with FastAPI & Supabase. Published with <strong>Grenze Scientific Society</strong> and presented at the 4th International Conference on Advances in Information, Telecommunication and Computing (AITC-2026).
                </p>

                <div className="chaduranga-links-group">
                  <a 
                    href="https://thegrenze.com/abstract/journal/7895" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="chaduranga-paper-btn"
                  >
                    <span>Read Research Paper</span>
                    <ExternalLink size={13} />
                  </a>

                  <a 
                    href="/chaduranga_certificate.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="chaduranga-cert-btn"
                  >
                    <span>Presentation Certificate</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="chaduranga-cert-showcase">
              <a 
                href="/chaduranga_certificate.jpg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="chaduranga-cert-link"
                title="Click to view full-resolution Certificate of Presentation"
              >
                <div className="chaduranga-cert-frame">
                  <img 
                    src="/chaduranga_certificate.jpg" 
                    alt="Certificate of Presentation & Publication - Chaduranga Research Paper, AITC-2026" 
                    className="chaduranga-cert-img" 
                  />
                  <div className="chaduranga-cert-overlay">
                    <span className="chaduranga-cert-badge">
                      <span>Presentation & Publication Certificate</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </article>

          {/* Project 2: MediGuardianAI with Image & Live Demo */}
          <article className="bento-card project-card project-lumber interactive">
            <div className="project-top-bar">
              <span className="project-pill">AI / Health</span>
              <div className="project-links-group">
                <a 
                  href="https://medi-guardian-ai.vercel.app/auth/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-live-btn"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={11} />
                </a>
                <a 
                  href="https://github.com/Nandan6626/medi_guardian_ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-metric"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="project-preview-img-box">
              <img 
                src="/mediguardian.png" 
                alt="MediGuardian AI — Healthcare Operating System" 
                className="project-preview-img"
              />
            </div>

            <div className="project-bottom-info" style={{ marginTop: 0 }}>
              <h3 className="project-title">MediGuardian AI</h3>
              <p className="project-desc">
                Healthcare Operating System for elderly users featuring intelligent medication tracking, 
                missed-dose alerts, real-time caregiver updates, and emergency healthcare access.
              </p>
            </div>
          </article>

          {/* Project 3: SkillBridge with Image */}
          <article className="bento-card project-card project-nudge interactive">
            <div className="project-top-bar">
              <span className="project-pill">Full Stack</span>
              <a 
                href="https://github.com/Nandan6626/SKILLBRIDGE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-metric"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="project-preview-img-box">
              <img 
                src="/skillbridge.jpg" 
                alt="SkillBridge — Intelligent Workforce Management Platform" 
                className="project-preview-img"
              />
            </div>

            <div className="project-bottom-info" style={{ marginTop: 0 }}>
              <h3 className="project-title">SkillBridge</h3>
              <p className="project-desc">
                Multi-role workforce platform connecting customers, workers, and companies with FastAPI, Supabase, Google OAuth, and an algorithmic worker Trust Score.
              </p>
            </div>
          </article>

          {/* Project 4: Global Digital Bank with Image */}
          <article className="bento-card project-card project-bank interactive">
            <div className="project-top-bar">
              <span className="project-pill">Python · OOP</span>
              <a 
                href="https://github.com/Nandan6626/Global-Digital-Bank1/tree/main/Global-Digital-Bank" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-metric"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="project-preview-img-box">
              <img 
                src="/global_digital_bank.jpg" 
                alt="Global Digital Bank — Banking Simulation System" 
                className="project-preview-img"
              />
            </div>

            <div className="project-bottom-info" style={{ marginTop: 0 }}>
              <h3 className="project-title">Global Digital Bank</h3>
              <p className="project-desc">
                Python-based banking application simulating real-world operations — account management, deposits, withdrawals, fund transfers, and transaction history using robust OOP design.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          STACK SECTION (FROM TECHNICAL SKILLS)
          ========================================================= */}
      <section className="stack-section" aria-label="Technical Stack">
        <div className="section-header">
          <span className="eyebrow">Technical Skills</span>
          <h2 className="section-title">What's running in the background</h2>
        </div>

        <div className="stack-grid">
          {/* Tile 1: Languages (Tinted) */}
          <div className="bento-card stack-card tinted interactive">
            <span className="eyebrow" style={{ color: '#6366F1' }}>Languages</span>
            <div>
              <div className="stack-val">C · C++ · Python · JavaScript</div>
              <div className="stack-sub">Strong OOP & algorithmic foundation</div>
            </div>
          </div>

          {/* Tile 2: Full Stack & Frameworks */}
          <div className="bento-card stack-card interactive">
            <span className="eyebrow">Full Stack & Frameworks</span>
            <div>
              <div className="stack-val">React.js · FastAPI · Node.js</div>
              <div className="stack-sub">Pydantic · Express.js · REST API design</div>
            </div>
          </div>

          {/* Tile 3: Distributed & Cloud */}
          <div className="bento-card stack-card interactive">
            <span className="eyebrow">Cloud & Distributed</span>
            <div>
              <div className="stack-val">Docker · AWS (EC2, S3)</div>
              <div className="stack-sub">Microservices · Multi-tiered systems</div>
            </div>
          </div>

          {/* Tile 4: Databases */}
          <div className="bento-card stack-card interactive">
            <span className="eyebrow">Databases & Storage</span>
            <div>
              <div className="stack-val">PostgreSQL · MySQL · Supabase</div>
              <div className="stack-sub">MongoDB · Normalized Relational Schemas</div>
            </div>
          </div>

          {/* Tile 5: CS Foundations (Tinted) */}
          <div className="bento-card stack-card tinted interactive">
            <span className="eyebrow" style={{ color: '#6366F1' }}>CS Foundations</span>
            <div>
              <div className="stack-val">DSA · OS · Networks · DBMS</div>
              <div className="stack-sub">Complexity Analysis · System Design</div>
            </div>
          </div>

          {/* Tile 6: AI-Native Engineering */}
          <div className="bento-card stack-card interactive">
            <span className="eyebrow">AI-Native & Tooling</span>
            <div>
              <div className="stack-val">LangGraph · Cursor · Copilot</div>
              <div className="stack-sub">Claude Code · Critical Code Verification</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKED ON / INTERNSHIPS SECTION
          ========================================================= */}
      <section id="experience" className="experience-section" aria-label="Internships & Work Experience">
        <div className="section-header">
          <span className="eyebrow">Work History</span>
          <h2 className="section-title">Internships & practical experience</h2>
        </div>

        <div className="experience-list">
          {/* Internship 1: Talenciaglobal */}
          <div className="bento-card experience-card interactive">
            <div className="exp-company-group">
              <div className="exp-avatar">T</div>
              <div>
                <div className="exp-company-name">Talenciaglobal</div>
                <div className="exp-period">Apr 2026 – May 2026</div>
              </div>
            </div>
            <div className="exp-role">Software Engineering Intern</div>
            <p className="exp-note">
              Built and deployed production RESTful APIs using FastAPI, Pydantic, Python, and SQL within a distributed microservices architecture. Standardized testing and deployment with Docker and integrated LangChain-based AI workflows.
            </p>
          </div>

          {/* Internship 2: Employability.life */}
          <div className="bento-card experience-card interactive">
            <div className="exp-company-group">
              <div className="exp-avatar">E</div>
              <div>
                <div className="exp-company-name">Employability.life</div>
                <div className="exp-period">Aug 2025 – Sep 2025</div>
              </div>
            </div>
            <div className="exp-role">Cybersecurity & AWS Intern</div>
            <p className="exp-note">
              Deployed and maintained cloud infrastructure on AWS (EC2, S3), applying least-privilege IAM roles and access policies. Built scalable cloud backend solutions independently navigating ambiguous problem spaces.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACADEMICS / FORMAL EDUCATION SECTION
          ========================================================= */}
      <section id="academics" className="academics-section" aria-label="Academics & Formal Education">
        <div className="section-header">
          <span className="eyebrow">Academic Background</span>
          <h2 className="section-title">Academics & formal education</h2>
        </div>

        <div className="academics-grid">
          {/* Main Degree: PESCE Mandya */}
          <div className="bento-card academic-card-featured interactive">
            <div className="academic-top">
              <div className="exp-company-group">
                <div className="exp-avatar academic-avatar">P</div>
                <div>
                  <h3 className="exp-company-name">PES College of Engineering, Mandya</h3>
                  <div className="exp-period">2023 — 2027 · Autonomous Institute under VTU</div>
                </div>
              </div>
              <div className="academic-cgpa-badge">
                <span className="cgpa-label">Current CGPA</span>
                <span className="cgpa-value">8.33 / 10</span>
              </div>
            </div>

            <div className="academic-body">
              <div className="academic-degree-title">
                Bachelor of Engineering (B.E.) — Computer Science & Business Systems
              </div>
              <p className="academic-desc">
                Rigorous four-year engineering curriculum combining deep foundational computer science, systems engineering, complexity analysis, and modern enterprise software architectures.
              </p>
              <div className="academic-coursework">
                <span className="coursework-label">Core Coursework:</span>
                <div className="coursework-tags">
                  <span className="coursework-tag">Data Structures & Algorithms</span>
                  <span className="coursework-tag">Object-Oriented Design</span>
                  <span className="coursework-tag">Operating Systems</span>
                  <span className="coursework-tag">Relational DBMS</span>
                  <span className="coursework-tag">Computer Networks</span>
                  <span className="coursework-tag">Distributed Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary & Pre-University Grid */}
          <div className="academic-sub-grid">
            {/* Pre-University */}
            <div className="bento-card academic-sub-card interactive">
              <div className="academic-sub-top">
                <span className="cert-badge-tag" style={{ background: 'rgba(22, 21, 26, 0.05)', color: 'var(--text-main)' }}>
                  <Award size={12} />
                  <span>Pre-University (12th)</span>
                </span>
                <span className="academic-score-pill">77.16%</span>
              </div>
              <div className="academic-sub-middle">
                <h4 className="academic-school-name">Govt. PU College, Honnavar</h4>
                <p className="academic-school-sub">Department of Pre-University Education · PCMB</p>
              </div>
            </div>

            {/* High School */}
            <div className="bento-card academic-sub-card interactive">
              <div className="academic-sub-top">
                <span className="cert-badge-tag" style={{ background: 'rgba(99, 102, 241, 0.08)', color: 'var(--accent)' }}>
                  <Award size={12} />
                  <span>Secondary School (10th)</span>
                </span>
                <span className="academic-score-pill highlight">86.50%</span>
              </div>
              <div className="academic-sub-middle">
                <h4 className="academic-school-name">Sharavati High School, Honnavar</h4>
                <p className="academic-school-sub">Karnataka Secondary Education Examination Board · Distinction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CERTIFICATES & ACHIEVEMENTS SECTION
          ========================================================= */}
      <section id="certificates" className="certificates-section" aria-label="Certificates & Accreditations">
        <div className="section-header">
          <span className="eyebrow">Certifications & Achievements</span>
          <h2 className="section-title">Verified research, honors, and credentials</h2>
        </div>

        <div className="certificates-grid">
          {/* Achievement 1: Chaduranga Research Paper */}
          <div className="bento-card cert-card tinted interactive">
            <div className="cert-top">
              <span className="cert-badge-tag">
                <BookOpen size={13} />
                <span>Publication</span>
              </span>
              <span className="cert-date">Scopus</span>
            </div>
            <div className="cert-middle">
              <h3 className="cert-title">Chaduranga Research Paper</h3>
              <p className="cert-issuer">Grenze Scientific Society · AITC-2026</p>
            </div>
            <div className="cert-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <a 
                href="/chaduranga_certificate.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-secondary-link"
                title="View Presentation & Publication Certificate"
              >
                <span>Presentation Cert</span>
                <ArrowUpRight size={12} />
              </a>
              <a 
                href="https://thegrenze.com/abstract/journal/7895" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-verify-link"
                title="Read Research Paper on Grenze"
              >
                <span>Read Paper</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Achievement 2: NPTEL Elite Certification */}
          <a 
            href="/nptel_data_analytics.jpg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bento-card cert-card interactive"
            style={{ textDecoration: 'none', color: 'inherit' }}
            title="Click to view official NPTEL Elite Certificate"
          >
            <div className="cert-top">
              <span className="cert-badge-tag" style={{ background: 'rgba(22, 21, 26, 0.05)', color: 'var(--text-main)' }}>
                <Award size={13} />
                <span>Elite Tier (Score: 70%)</span>
              </span>
              <span className="cert-date">IIT Roorkee</span>
            </div>
            <div className="cert-middle">
              <h3 className="cert-title">Data Analytics with Python</h3>
              <p className="cert-issuer">NPTEL · Indian Institute of Technology Roorkee</p>
            </div>
            <div className="cert-footer">
              <span className="cert-id">Roll: NPTEL26CS86S560400005</span>
              <span className="cert-verify-link">
                <span>View Certificate</span>
                <ArrowUpRight size={14} />
              </span>
            </div>
          </a>

          {/* Achievement 3: IBM Machine Learning with Python */}
          <div className="bento-card cert-card interactive">
            <div className="cert-top">
              <span className="cert-badge-tag" style={{ background: 'rgba(99, 102, 241, 0.08)', color: 'var(--accent)' }}>
                <Cpu size={13} />
                <span>Machine Learning</span>
              </span>
              <span className="cert-date">IBM</span>
            </div>
            <div className="cert-middle">
              <h3 className="cert-title">Machine Learning with Python</h3>
              <p className="cert-issuer">IBM Skills Network · Offered through Coursera</p>
            </div>
            <div className="cert-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <a 
                href="/cert_ibm_ml.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-secondary-link"
                title="View Full Certificate Image"
              >
                <span>View Cert</span>
                <ArrowUpRight size={12} />
              </a>
              <a 
                href="https://coursera.org/verify/7PX1SX6XEJVQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-verify-link"
                title="Verify on Coursera"
              >
                <span>Verify Online</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Achievement 3: IBM Introduction to AI */}
          <div className="bento-card cert-card interactive">
            <div className="cert-top">
              <span className="cert-badge-tag" style={{ background: 'rgba(22, 21, 26, 0.05)', color: 'var(--text-main)' }}>
                <Cpu size={13} />
                <span>AI & ML</span>
              </span>
              <span className="cert-date">IBM</span>
            </div>
            <div className="cert-middle">
              <h3 className="cert-title">Introduction to Artificial Intelligence (AI)</h3>
              <p className="cert-issuer">IBM Skills Network · Offered through Coursera</p>
            </div>
            <div className="cert-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <a 
                href="/cert_ibm_ai.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-secondary-link"
                title="View Full Certificate Image"
              >
                <span>View Cert</span>
                <ArrowUpRight size={12} />
              </a>
              <a 
                href="https://coursera.org/verify/DF5T0UD0LHG0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-verify-link"
                title="Verify on Coursera"
              >
                <span>Verify Online</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Achievement 4: Packt Networking Fundamentals */}
          <div className="bento-card cert-card interactive">
            <div className="cert-top">
              <span className="cert-badge-tag" style={{ background: 'rgba(22, 21, 26, 0.05)', color: 'var(--text-main)' }}>
                <Globe size={13} />
                <span>Networks</span>
              </span>
              <span className="cert-date">Packt</span>
            </div>
            <div className="cert-middle">
              <h3 className="cert-title">Networking Fundamentals</h3>
              <p className="cert-issuer">Packt Publishing · Offered through Coursera</p>
            </div>
            <div className="cert-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <a 
                href="/cert_networking_fundamentals.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-secondary-link"
                title="View Full Certificate Image"
              >
                <span>View Cert</span>
                <ArrowUpRight size={12} />
              </a>
              <a 
                href="https://coursera.org/verify/0N3KZVU469LX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-verify-link"
                title="Verify on Coursera"
              >
                <span>Verify Online</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Achievement 5: UiPath RPA & Robotics */}
          <div className="bento-card cert-card interactive">
            <div className="cert-top">
              <span className="cert-badge-tag" style={{ background: 'rgba(99, 102, 241, 0.08)', color: 'var(--accent)' }}>
                <Layers size={13} />
                <span>Robotics & RPA</span>
              </span>
              <span className="cert-date">UiPath</span>
            </div>
            <div className="cert-middle">
              <h3 className="cert-title">RPA Basics and Introduction to UiPath</h3>
              <p className="cert-issuer">UiPath Automation · Offered through Coursera</p>
            </div>
            <div className="cert-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <a 
                href="/cert_uipath_rpa.jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-secondary-link"
                title="View Full Certificate Image"
              >
                <span>View Cert</span>
                <ArrowUpRight size={12} />
              </a>
              <a 
                href="https://coursera.org/verify/W5EAGF4XDCKX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-verify-link"
                title="Verify on Coursera"
              >
                <span>Verify Online</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT & FOOTER
          ========================================================= */}
      <section id="contact" className="bento-card contact-section interactive" aria-label="Contact">
        <div className="contact-top">
          <div className="contact-heading-group">
            <span className="eyebrow">Get in touch</span>
            <h2 className="contact-heading">Let's build scalable systems together.</h2>
            <div className="contact-pin-row">
              <MapPin size={16} color="#6366F1" />
              <span>Mandya, Karnataka, India</span>
              <span style={{ margin: '0 6px', color: 'var(--text-subtle)' }}>•</span>
              <Phone size={14} color="#6366F1" />
              <span>+91 8431976921</span>
            </div>
          </div>

          <a 
            href="mailto:nnaik5253@gmail.com?subject=Regarding%20Software%20Engineering%20Opportunity&body=Hi%20Nandan,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding..." 
            className="email-cta-btn"
            onClick={() => {
              try {
                navigator.clipboard.writeText('nnaik5253@gmail.com');
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
              } catch (e) {}
            }}
            aria-label="Email Nandan Naik"
          >
            {copied ? <Check size={18} /> : <Mail size={18} />}
            <span>{copied ? 'Opening Email & Copied!' : 'Email me'}</span>
          </a>
        </div>

        {/* Social / Links */}
        <div className="contact-links-grid">
          <a 
            href="https://github.com/Nandan6626" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link-card"
          >
            <div>
              <span className="social-label">GitHub</span>
              <div className="social-handle">@Nandan6626</div>
            </div>
            <GithubIcon size={18} color="rgba(22, 21, 26, 0.4)" />
          </a>

          <a 
            href="https://www.linkedin.com/in/nandan-naik-43a659295/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link-card"
          >
            <div>
              <span className="social-label">LinkedIn</span>
              <div className="social-handle">in/nandan-naik</div>
            </div>
            <LinkedinIcon size={18} color="rgba(22, 21, 26, 0.4)" />
          </a>

          <a 
            href="mailto:nnaik5253@gmail.com" 
            className="social-link-card"
          >
            <div>
              <span className="social-label">Email</span>
              <div className="social-handle">nnaik5253@gmail.com</div>
            </div>
            <Mail size={18} color="rgba(22, 21, 26, 0.4)" />
          </a>

          <a 
            href="tel:+918431976921" 
            className="social-link-card"
          >
            <div>
              <span className="social-label">Phone</span>
              <div className="social-handle">+91 8431976921</div>
            </div>
            <Phone size={18} color="rgba(22, 21, 26, 0.4)" />
          </a>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="footer-bar">
        <span>© {new Date().getFullYear()} Nandan Manjunath Naik. All rights reserved.</span>
        <span>Built with React · Bento Portfolio</span>
      </footer>

      {/* Toast popup */}
      {copied && (
        <div className="toast-notice" role="alert">
          <Check size={16} color="#6366F1" />
          <span>Email copied to clipboard (nnaik5253@gmail.com)</span>
        </div>
      )}
    </div>
  );
}

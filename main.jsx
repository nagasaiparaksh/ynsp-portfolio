import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Terminal,
  UserRound,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Y Naga Sai Paraksh',
  role: 'Computer Science Student',
  location: 'Bangalore, India',
  email: 'nagasaiparaksh@gmail.com',
  phone: '+91 7760152890',
  github: 'github.com/nagasaiparaksh',
  linkedin: 'linkedin.com/in/nagasaiparaksh',
  resumeUrl: '/ynsp-resume.pdf',
  avatar: '/ynsp_photo.jpeg',
  summary:
    'Computer Science student at SRM Institute of Science and Technology with a 9.5 CGPA. I build full-stack and AI-focused projects across React, Node.js, FastAPI, PostgreSQL, MongoDB, and NLP, with internship experience in machine learning research and frontend development.',
};

const education = [
  {
    institution: 'SRM Institute of Science and Technology',
    place: 'Tamil Nadu, India',
    degree: 'Bachelor of Technology, Computer Science',
    detail: 'CGPA: 9.5',
    period: 'May 2023 - May 2027',
  },
];

const experience = [
  {
    role: 'Machine Learning Research Intern',
    company: 'IIIT Allahabad',
    place: 'Uttar Pradesh, India',
    period: 'May 2025 - July 2025',
    points: [
      'Developed a multimodal deep learning model using XLM-RoBERTa and EfficientNet-B3 for text and image analysis.',
      'Optimised training using Automatic Mixed Precision and built an end-to-end preprocessing, training, and evaluation pipeline.',
      'Applied concatenation and attention-based fusion on the FakeDdit dataset for 6-way classification.',
    ],
  },
  {
    role: 'SDE Developer Intern',
    company: 'iStudio',
    place: 'Bangalore, India',
    period: 'Aug 2025 - Oct 2025',
    points: [
      'Developed a responsive frontend using React.js and Tailwind CSS for a modern, scalable UI.',
      'Implemented user authentication and a dynamic dashboard interface for personalised user experiences.',
      'Integrated REST APIs for real-time data rendering and seamless user interactions.',
    ],
  },
];

const projects = [
  {
    name: 'IPL Insights',
    date: 'Jan 2026',
    stack: 'React.js, Node.js, WebSockets, REST APIs, PostgreSQL',
    highlights: ['Live APIs', 'WebSockets', 'Dashboards'],
    image: '/ipl-logo.jpg',
    link: 'https://github.com/nagasaiparaksh',
    description:
      'Real-time sports analytics web app for visualising live match data, player statistics, charts, and performance comparisons.',
  },
  {
    name: 'Smart Price Comparision',
    date: 'Feb 2026',
    stack: 'FastAPI, MongoDB, Web Scraping, REST APIs',
    status: 'Full stack',
    accent: 'Price engine',
    highlights: ['Scraping', 'Aggregation', 'Search APIs'],
    image: '/smart-price.png',
    link: 'https://github.com/nagasaiparaksh',
    description:
      'Full-stack product price comparison app with scraping pipelines, product search, price aggregation, and optimized query handling.',
  },
  {
    name: 'Resume Gap Analyzer',
    date: 'Mar 2026',
    stack: 'Python, NLP, spaCy, Scikit-learn, Regex',
    status: 'NLP tool',
    accent: 'Skill matcher',
    highlights: ['spaCy', 'TF-IDF', 'Cosine similarity'],
    image: '/resume.jpg',
    link: 'https://github.com/nagasaiparaksh',
    description:
      'NLP pipeline for extracting skills from resumes and job descriptions, then matching gaps using TF-IDF, embeddings, and cosine similarity.',
  },
];

const certificates = [
  {
    name: 'Introduction to Machine Learning',
    issuer: 'NPTEL',
    category: 'Machine Learning',
    credential: 'Verified credential',
    image: '/machine-learning.png',
    link: 'https://drive.google.com/file/d/1F2J8aMSdQWrSkDl_Pj-20ikuZC1ctV0k/view?usp=drive_link',
  },
  {
    name: 'Data Base Management System',
    issuer: 'NPTEL',
    category: 'Databases',
    credential: 'Verified credential',
    image: '/database.png',
    link: 'https://drive.google.com/file/d/1URt4JVMpxS-D-eNpExt-MWrpxZL-b1ZS/view?usp=drive_link',
  },
  {
    name: 'Gen AI Practitioner',
    issuer: 'AWS',
    category: 'Generative AI',
    credential: 'Cloud credential',
    image: '/ai.png',
    link: 'https://drive.google.com/file/d/1qT6JgqcD8CsuiEmKCpMcoN2So9KvDxPW/view?usp=sharing',
  },
];

const skillGroups = [
  { label: 'Programming', items: ['Python', 'C', 'C++', 'SQL', 'JavaScript', 'HTML/CSS'] },
  { label: 'Frameworks', items: ['React.js', 'Node.js', 'FastAPI', 'Flask', 'Tailwind CSS', 'REST APIs'] },
  { label: 'Tools', items: ['GitHub', 'VS Code', 'Kaggle'] },
  { label: 'Libraries', items: ['Scikit-learn', 'TensorFlow', 'Matplotlib', 'PyTorch', 'pandas', 'NumPy'] },
  { label: 'Core Skills', items: ['DSA', 'System Design', 'OOPs', 'DBMS', 'Operating Systems', 'Computer Networks', 'Machine Learning'] },
];

const navItems = ['about', 'resume', 'projects', 'certificates', 'contact'];

function ContactRow({ icon: Icon, text }) {
  return (
    <p className="contact-row">
      <Icon size={17} aria-hidden="true" />
      <span>{text}</span>
    </p>
  );
}

function SectionHeading({ eyebrow, title, icon: Icon }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>
        <Icon size={30} aria-hidden="true" />
        {title}
      </h2>
    </div>
  );
}

function Preview({ image, title, type }) {
  if (image) {
    return <img src={image} alt={`${title} preview`} />;
  }

  return (
    <div className="preview-placeholder" aria-label={`${title} preview placeholder`}>
      {type === 'certificate' ? <Award size={42} /> : <Code2 size={42} />}
      <span>Add preview image</span>
    </div>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className="preview-frame project-preview">
      <Preview image={project.image} title={project.name} type="project" />
      <div className="preview-command">
        <span>{project.accent}</span>
        <strong>{project.status}</strong>
      </div>
    </div>
  );
}

function CertificatePreview({ certificate }) {
  return (
    <div className="preview-frame certificate-preview">
      <Preview image={certificate.image} title={certificate.name} type="certificate" />
      <div className="certificate-stamp">
        <Award size={24} aria-hidden="true" />
        <span>{certificate.issuer}</span>
      </div>
    </div>
  );
}

const carouselPageSize = 3;

function getVisibleItems(items, start, count = carouselPageSize) {
  return items.slice(start, start + count).map((item, offset) => {
    return { item, itemIndex: start + offset };
  });
}

function ShowcaseCarousel({ items, label, children }) {
  const [start, setStart] = useState(0);
  const visibleItems = getVisibleItems(items, start);
  const pageCount = Math.ceil(items.length / carouselPageSize);
  const currentPage = Math.floor(start / carouselPageSize) + 1;
  const visibleEnd = Math.min(start + carouselPageSize, items.length);

  const move = (direction) => {
    setStart((current) => {
      const currentPageIndex = Math.floor(current / carouselPageSize);
      const nextPageIndex = (currentPageIndex + direction + pageCount) % pageCount;
      return nextPageIndex * carouselPageSize;
    });
  };

  return (
    <div className="carousel-shell" aria-label={label}>
      <button
        className="carousel-arrow carousel-arrow-left"
        type="button"
        onClick={() => move(-1)}
        aria-label={`Previous ${label}`}
      >
        <ChevronLeft size={26} aria-hidden="true" />
      </button>
      <div className="carousel-window">
        <div className="carousel-track">
          {visibleItems.map(({ item, itemIndex }) => children(item, itemIndex))}
        </div>
      </div>
      <button
        className="carousel-arrow carousel-arrow-right"
        type="button"
        onClick={() => move(1)}
        aria-label={`Next ${label}`}
      >
        <ChevronRight size={26} aria-hidden="true" />
      </button>
      <div className="carousel-counter">
        <span>{String(start + 1).padStart(2, '0')}</span>
        <em>-</em>
        <span>{String(visibleEnd).padStart(2, '0')}</span>
        <strong>/ {String(items.length).padStart(2, '0')}</strong>
        <em>page</em>
        <span>{currentPage}</span>
        <strong>/ {pageCount}</strong>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#about">
        <span>YNSP</span>
        Portfolio
      </a>
      <nav aria-label="Portfolio sections">
        {navItems.map((item) => (
          <a href={`#${item}`} key={item}>{item}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="about">
      <div className="hero-copy">
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Open to internships
        </p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            <Code2 size={18} aria-hidden="true" />
            View Projects
          </a>
          <a className="secondary-button" href={profile.resumeUrl} download>
            <Download size={18} aria-hidden="true" />
            Download Resume
          </a>
        </div>
        <div className="contact-strip">
          <ContactRow icon={Phone} text={profile.phone} />
          <ContactRow icon={Mail} text={profile.email} />
          <ContactRow icon={MapPin} text={profile.location} />
        </div>
      </div>

      <aside className="profile-card">
        <div className="avatar" aria-label="Profile photo">
          {profile.avatar ? (
            <img src={profile.avatar} alt={`${profile.name} profile`} />
          ) : (
            <UserRound size={76} strokeWidth={1.8} />
          )}
        </div>
        <div>
          <strong>9.5 CGPA</strong>
          <span>SRM Institute of Science and Technology</span>
        </div>
        <div className="socials">
          <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">
            <Github size={19} aria-hidden="true" />
            GitHub
          </a>
          <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
            <Linkedin size={19} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </aside>
    </section>
  );
}

function ResumeSection() {
  return (
    <section className="section" id="resume">
      <SectionHeading eyebrow="Background" title="Resume" icon={GraduationCap} />
      <div className="resume-download">
        <p>Download the full resume PDF or scan the highlights below.</p>
        <a className="primary-button" href={profile.resumeUrl} download>
          <Download size={18} aria-hidden="true" />
          Download Resume
        </a>
      </div>

      <div className="resume-grid">
        {education.map((item) => (
          <article className="detail-card" key={item.degree}>
            <GraduationCap size={28} aria-hidden="true" />
            <div>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <span>{item.place}</span>
            </div>
            <strong>{item.detail}</strong>
            <em>{item.period}</em>
          </article>
        ))}
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="detail-card experience-card" key={item.role}>
            <div className="card-heading">
              <div>
                <h3>{item.role}</h3>
                <p>{item.company} - {item.place}</p>
              </div>
              <span>
                <CalendarDays size={15} aria-hidden="true" />
                {item.period}
              </span>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section skills-section">
      <SectionHeading eyebrow="Toolkit" title="Technical Skills" icon={Terminal} />
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="skill-grid">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <SectionHeading eyebrow="Builds" title="Projects" icon={Code2} />
      <ShowcaseCarousel items={projects} label="projects">
        {(project, index) => (
          <article className="showcase-card" key={project.name}>
            <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
            <ProjectPreview project={project} />
            <div className="showcase-body">
              <div className="card-heading">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.stack}</p>
                </div>
                <span>{project.date}</span>
              </div>
              <p>{project.description}</p>
              <div className="card-tags">
                {project.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">
                <ExternalLink size={17} aria-hidden="true" />
                Open Project
              </a>
            </div>
          </article>
        )}
      </ShowcaseCarousel>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section className="section" id="certificates">
      <SectionHeading eyebrow="Proof of Work" title="Certificates" icon={Award} />
      <ShowcaseCarousel items={certificates} label="certificates">
        {(certificate, index) => (
          <article className="showcase-card certificate-card" key={certificate.name}>
            <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
            <CertificatePreview certificate={certificate} />
            <div className="showcase-body">
              <span className="certificate-ribbon">{certificate.category}</span>
              <h3>{certificate.name}</h3>
              <p>{certificate.credential} by {certificate.issuer}</p>
              <a href={certificate.link} target="_blank" rel="noreferrer">
                <BadgeCheck size={17} aria-hidden="true" />
                View Certificate
              </a>
            </div>
          </article>
        )}
      </ShowcaseCarousel>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeading eyebrow="Let's Connect" title="Contact" icon={Send} />
      <p className="summary">
        I am available for internships, software projects, research collaborations, and hackathon teams.
      </p>
      <div className="contact-actions">
        <a href={`mailto:${profile.email}`}>
          <Mail size={18} aria-hidden="true" />
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
          <Phone size={18} aria-hidden="true" />
          {profile.phone}
        </a>
        <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">
          <Github size={18} aria-hidden="true" />
          GitHub
        </a>
        <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
          <Linkedin size={18} aria-hidden="true" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ResumeSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <footer>
        <span><BookOpen size={16} aria-hidden="true" /> CS Portfolio</span>
        <span><BriefcaseBusiness size={16} aria-hidden="true" /> Built with React</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

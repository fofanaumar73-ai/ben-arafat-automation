
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Menu, X, Zap, Settings,
  Cpu, CircuitBoard, ShieldCheck, Factory, Gauge,
  Wrench, Activity, ChevronDown, Phone, Mail,
  MapPin, CheckCircle2, Plus, Instagram, Linkedin,
  Facebook, MoveUpRight
} from "lucide-react";
import "./App.css";

const services = [
  {
    number: "01",
    icon: Cpu,
    title: "PLC Programming",
    description: "Intelligent programmable logic controller solutions designed to automate, monitor and optimize industrial operations.",
    tags: ["PLC Systems", "Logic Control"]
  },
  {
    number: "02",
    icon: CircuitBoard,
    title: "Electrical Automation",
    description: "Advanced electrical automation systems that improve operational precision, productivity and process reliability.",
    tags: ["Electrical Systems", "Automation"]
  },
  {
    number: "03",
    icon: Settings,
    title: "Control Panel Design",
    description: "Professionally designed control panels engineered for efficient power distribution, monitoring and industrial control.",
    tags: ["Panel Design", "Wiring"]
  },
  {
    number: "04",
    icon: Factory,
    title: "Installation & Integration",
    description: "Industrial equipment installation and system integration to connect your machinery into one efficient operation.",
    tags: ["Installation", "Integration"]
  },
  {
    number: "05",
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Technical maintenance, fault diagnosis and troubleshooting to keep industrial systems operating reliably.",
    tags: ["Diagnostics", "Maintenance"]
  },
  {
    number: "06",
    icon: Activity,
    title: "Industrial Optimization",
    description: "Practical engineering improvements that help streamline production processes and enhance system performance.",
    tags: ["Performance", "Efficiency"]
  }
];

const projects = [
  {
    number: "01",
    category: "INDUSTRIAL CONTROL",
    title: "Intelligent Control Systems",
    description: "Integrated industrial control architecture for reliable machine operation.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85"
  },
  {
    number: "02",
    category: "ELECTRICAL ENGINEERING",
    title: "Electrical Infrastructure",
    description: "Precision-focused electrical engineering and automation infrastructure.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85"
  },
  {
    number: "03",
    category: "INDUSTRIAL SYSTEMS",
    title: "Automation Integration",
    description: "Connecting industrial technologies for smarter operational workflows.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85"
  }
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["Contact", "#contact"]
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <span className="brand-icon"><Zap size={21} fill="currentColor" /></span>
        <span className="brand-text">
          BEN AR<span className="orange">AFAT</span>
          <small>INDUSTRIAL AUTOMATION</small>
        </span>
      </a>

      <nav className={open ? "nav-links active" : "nav-links"}>
        {links.map(([name, href]) => (
          <a key={name} href={href} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
        <a className="mobile-contact" href="#contact" onClick={() => setOpen(false)}>
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>

      <a href="#contact" className="nav-cta">
        Let's Talk <ArrowUpRight size={17} />
      </a>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" />
      <div className="hero-overlay" />
      <div className="hero-grid" />

      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="pulse-dot" />
          ENGINEERING THE FUTURE OF INDUSTRY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          POWERING
          <br />
          INDUSTRY<span className="orange">.</span>
          <br />
          <span className="outline-text">INTELLIGENTLY.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Advanced industrial automation, PLC programming and
          electrical engineering solutions built to move your
          operations forward.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#services" className="btn-primary">
            Explore Our Services <ArrowUpRight size={19} />
          </a>
          <a href="#about" className="btn-secondary">
            Discover More <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>ENGINEERING / AUTOMATION / INNOVATION</span>
        <a href="#about">SCROLL TO EXPLORE <ChevronDown size={15} /></a>
        <span className="hero-index">01 — 05</span>
      </div>

      <div className="hero-side-label">BEN ARAFAT · INDUSTRIAL SYSTEMS</div>
    </section>
  );
}

function Marquee() {
  const words = ["PLC PROGRAMMING", "ELECTRICAL AUTOMATION", "CONTROL SYSTEMS", "INDUSTRIAL ENGINEERING"];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...words, ...words].map((word, i) => (
          <span key={i}>{word} <b>✳</b></span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <motion.div className="about-image-wrap" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85"
          alt="Industrial engineer working on automation equipment"
          className="about-image"
        />
        <div className="image-corner">ENGINEERING / 001</div>
        <div className="about-image-badge">
          <Zap size={24} />
          <span>SMARTER<br />INDUSTRY</span>
        </div>
      </motion.div>

      <motion.div className="about-content" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionLabel>WHO WE ARE</SectionLabel>
        <h2>
          Engineering
          <br />
          <span className="orange">possibilities.</span>
          <br />
          Delivering precision.
        </h2>
        <p>
          Ben Arafat is focused on industrial automation and electrical
          engineering solutions that help businesses improve the way
          their systems operate.
        </p>
        <p>
          From PLC programming and control panel systems to installation
          and maintenance, our approach is built around practical
          engineering, dependable performance and intelligent solutions.
        </p>

        <div className="about-points">
          <div><CheckCircle2 /> Automation-focused solutions</div>
          <div><CheckCircle2 /> Practical engineering approach</div>
          <div><CheckCircle2 /> Performance and reliability</div>
        </div>

        <a href="#contact" className="text-link">
          WORK WITH US <ArrowUpRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-heading">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h2>ENGINEERED FOR<br /><span className="orange">PERFORMANCE.</span></h2>
        </motion.div>
        <p>
          Industrial expertise meets intelligent technology.
          Explore our engineering and automation capabilities.
        </p>
      </div>

      <motion.div
        className="services-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article className="service-card" variants={reveal} key={service.number}>
              <div className="service-top">
                <span>{service.number} / 06</span>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <a href="#contact" className="service-arrow" aria-label={`Enquire about ${service.title}`}>
                <ArrowUpRight size={20} />
              </a>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="expertise">
      <div className="expertise-image" />
      <div className="expertise-overlay" />
      <div className="expertise-content section-pad">
        <SectionLabel>OUR APPROACH</SectionLabel>
        <h2>WHERE TECHNOLOGY<br />MEETS <span className="orange">PRECISION.</span></h2>
        <p>
          We believe efficient industrial operations begin with
          intelligently designed systems. Every connection, control
          and process has a purpose.
        </p>
        <a href="#contact" className="btn-primary">
          Discuss Your Project <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="expertise-number">02 / ENGINEERING</div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects section-pad" id="projects">
      <div className="section-heading">
        <div>
          <SectionLabel>SELECTED WORK</SectionLabel>
          <h2>BUILT TO <span className="orange">WORK.</span></h2>
        </div>
        <p>
          A look at the industrial environments, systems and
          engineering possibilities that inspire our work.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <span className="project-number">{project.number}</span>
              <a href="#contact" aria-label="Enquire about a similar project">
                <ArrowUpRight />
              </a>
            </div>
            <div className="project-info">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="project-note">
        Project visuals are illustrative placeholders and will be replaced
        with verified Ben Arafat project photographs as they become available.
      </p>
    </section>
  );
}

function Stats() {
  const stats = [
    ["PLC", "PROGRAMMING"],
    ["24/7", "INDUSTRIAL THINKING"],
    ["360°", "SYSTEMS APPROACH"]
  ];

  return (
    <section className="stats section-pad">
      <div className="stats-heading">
        <SectionLabel>THE BIGGER PICTURE</SectionLabel>
        <h2>THINK BEYOND<br /><span className="orange">THE MACHINE.</span></h2>
      </div>
      <div className="stats-grid">
        {stats.map(([value, label]) => (
          <div className="stat-item" key={value}>
            <span>{value}</span>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    ["01", "Engineering-led thinking", "Solutions designed around the real requirements of your operations."],
    ["02", "Integrated capabilities", "A connected approach to automation, electrical systems and installation."],
    ["03", "Reliability-focused", "A commitment to system performance, safety and operational continuity."],
    ["04", "Practical problem solving", "Technical thinking focused on real industrial challenges."]
  ];

  return (
    <section className="why section-pad">
      <div className="why-intro">
        <SectionLabel>WHY BEN ARAFAT</SectionLabel>
        <h2>ENGINEERING<br />YOU CAN <span className="orange">TRUST.</span></h2>
        <p>
          Industrial systems demand more than technology.
          They demand precision, thoughtful execution and
          dependable engineering.
        </p>
        <a href="#contact" className="text-link">LET'S CONNECT <ArrowUpRight size={18} /></a>
      </div>
      <div className="why-list">
        {items.map(([number, title, description]) => (
          <div className="why-item" key={number}>
            <span>{number}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
            <Plus size={20} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const whatsapp = "https://wa.me/2340000000000";

  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-panel">
        <div className="contact-main">
          <SectionLabel>LET'S BUILD SOMETHING BETTER</SectionLabel>
          <h2>YOUR NEXT<br />PROJECT STARTS<br /><span className="orange">HERE.</span></h2>
          <p>
            Have an automation challenge or an industrial project in mind?
            Let's discuss how we can help.
          </p>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
            Start a Conversation <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="contact-details">
          <div><MapPin /><span><small>LOCATION</small>Nigeria</span></div>
          <div><Mail /><span><small>EMAIL</small>Contact details to be added</span></div>
          <div><Phone /><span><small>PHONE / WHATSAPP</small>Contact details to be added</span></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="brand">
          <span className="brand-icon"><Zap size={21} fill="currentColor" /></span>
          <span className="brand-text">
            BEN AR<span className="orange">AFAT</span>
            <small>INDUSTRIAL AUTOMATION</small>
          </span>
        </a>
        <p>POWERING INDUSTRY. INTELLIGENTLY.</p>
        <a href="#home" className="back-top">BACK TO TOP <MoveUpRight size={17} /></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BEN ARAFAT AUTOMATION.</span>
        <span>ENGINEERED FOR WHAT'S NEXT.</span>
        <div className="footer-social">
          <a href="#contact" aria-label="Instagram"><Instagram /></a>
          <a href="#contact" aria-label="LinkedIn"><Linkedin /></a>
          <a href="#contact" aria-label="Facebook"><Facebook /></a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Expertise />
        <Projects />
        <Stats />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import './style.css';
import ShinyText from './components/ShinyText';
import MagicBento from './components/MagicBento';
import FloatingLines from './components/FloatingLines';
import TextPressure from './components/TextPressure';
import LogoLoop from './components/LogoLoop';
import StarBorder from './components/StarBorder';
import StaggeredMenu from './components/StaggeredMenu';
import GradientText from './components/GradientText';
import WhatsAppButton from './components/WhatsAppButton';
import SIPCalculator from './components/SIPCalculator';
import { FaChartLine, FaMoneyBillWave, FaCoins, FaPiggyBank, FaChartPie, FaWallet, FaTrophy, FaHandHoldingUsd } from 'react-icons/fa';
import { defaultContent } from './data';

const FLOATING_LINES_CONFIG = {
  enabledWaves: ['top', 'middle', 'bottom'],
  lineCount: [8, 10, 15],
  lineDistance: [10, 8, 6],
  linesGradient: ['#00FFAA', '#004466', '#00FFAA']
};

const LOGO_LOOP_LOGOS = [
  { node: <FaChartLine />, title: "Stock Analysis", ariaLabel: "Stock Market Analysis" },
  { node: <FaMoneyBillWave />, title: "Mutual Funds", ariaLabel: "Mutual Funds Investment" },
  { node: <FaCoins />, title: "Cryptocurrency", ariaLabel: "Digital Assets" },
  { node: <FaPiggyBank />, title: "Savings", ariaLabel: "Investment Savings" },
  { node: <FaChartPie />, title: "Portfolio", ariaLabel: "Portfolio Management" },
  { node: <FaWallet />, title: "Wallet", ariaLabel: "Digital Wallet" },
  { node: <FaTrophy />, title: "Returns", ariaLabel: "Investment Returns" },
  { node: <FaHandHoldingUsd />, title: "Wealth", ariaLabel: "Wealth Management" },
];

const MENU_ITEMS = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
  { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
  { label: 'Services', ariaLabel: 'View services', link: '#services' },
  { label: 'Green Portfolio', ariaLabel: 'Green investment portfolio', link: '#green-portfolio' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const SOCIAL_ITEMS = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },

];

function App() {
  const [content, setContent] = useState(defaultContent);
  const [formStatus, setFormStatus] = useState({ submitted: false, error: null });

  // Load content from localStorage if available (mimicking original logic)
  useEffect(() => {
    const storedData = localStorage.getItem('navneet_portfolio_data');
    if (storedData) {
      try {
        setContent(JSON.parse(storedData));
      } catch (e) {
        console.error("Error parsing stored data", e);
      }
    }
  }, []);

  // Handle contact form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: null });

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mkgdzgby', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ submitted: true, error: null });
        e.target.reset();
        setTimeout(() => setFormStatus({ submitted: false, error: null }), 5000);
      } else {
        setFormStatus({ submitted: false, error: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ submitted: false, error: 'Network error. Please check your connection.' });
    }
  };

  return (
    <div className="App">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber="916307586760" message="Hi! I'm interested in your investment advisory services." />
      {/* Navigation - StaggeredMenu */}
      <StaggeredMenu
        position="right"
        items={MENU_ITEMS}
        socialItems={SOCIAL_ITEMS}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#0A0A0A', '#00FFAA']}
        logoUrl="TEXT:Navneet."
        accentColor="#00FFAA"
        isFixed={true}
        closeOnClickAway={true}
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="container hero-content">
          <h1 id="hero-headline" className="hero-title">
            <ShinyText text={content.home.headline} speed={3} />
          </h1>
          <p id="hero-subheadline" className="hero-subtitle">{content.home.subheadline}</p>
          <div className="hero-buttons">
            <a href="#services" id="hero-cta-primary" className="btn btn-primary">{content.home.cta_primary}</a>
            <a href="#contact" id="hero-cta-secondary" className="btn btn-secondary">{content.home.cta_secondary}</a>
          </div>
        </div>
        <div className="hero-background">
          <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            <FloatingLines
              enabledWaves={FLOATING_LINES_CONFIG.enabledWaves}
              lineCount={FLOATING_LINES_CONFIG.lineCount}
              lineDistance={FLOATING_LINES_CONFIG.lineDistance}
              bendRadius={5.0}
              bendStrength={-0.5}
              interactive={true}
              parallax={true}
              linesGradient={FLOATING_LINES_CONFIG.linesGradient}
            />
          </div>
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <div style={{ position: 'relative', height: '300px' }}>
              <TextPressure
                text={content.about.title}
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p id="about-section-1" className="text-lg">
                <GradientText
                  colors={["#00FFAA", "#0099FF", "#00FFAA", "#0099FF", "#00FFAA"]}
                  animationSpeed={5}
                  showBorder={false}
                >
                  {content.about.section_1}
                </GradientText>
              </p>
              <p id="about-section-2" className="text-md">
                <GradientText
                  colors={["#00FFAA", "#00DDFF", "#00FFAA"]}
                  animationSpeed={4}
                  showBorder={false}
                >
                  {content.about.section_2}
                </GradientText>
              </p>
              <p id="about-section-3" className="text-md">
                <GradientText
                  colors={["#00FFAA", "#00BBFF", "#00FFAA"]}
                  animationSpeed={6}
                  showBorder={false}
                >
                  {content.about.section_3}
                </GradientText>
              </p>
            </div>
            <div className="about-highlights">
              <h3 className="highlight-title">Key Highlights</h3>
              <ul id="about-highlights-list" className="highlight-list">
                {content.about.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Platforms Section */}
      <section className="section platforms-section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>Trusted Platforms & Investment Tools</h3>
          </div>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={LOGO_LOOP_LOGOS}
              speed={60}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#0A0A0A"
              ariaLabel="Investment platforms and tools"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 id="services-title" className="section-title">{content.services.title}</h2>
            <div className="title-bar"></div>
          </div>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={18}
            glowColor="0, 255, 170"
          />
        </div>
      </section>

      {/* SIP Calculator Section */}
      <section id="sip-calculator" className="section calculator-section">
        <div className="container">
          <SIPCalculator />
        </div>
      </section>

      <section id="green-portfolio" className="section green-section">
        <div className="container">
          <StarBorder as="div" color="#00FFAA" speed="8s" thickness={2}>
            <div className="green-content-wrapper glass-card">
              <div className="green-text">
                <h2 id="green-title" className="section-title">{content.green_portfolio.title}</h2>
                <p id="green-intro" className="green-intro">{content.green_portfolio.intro}</p>

                <div className="green-lists">
                  <div className="green-list-group">
                    <h4>Why Go Green?</h4>
                    <ul id="green-why-list">
                      {content.green_portfolio.why_green.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="green-list-group">
                    <h4>Our Process</h4>
                    <ul id="green-process-list">
                      {content.green_portfolio.process.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="green-visual">
                <div className="leaf-icon">🌱</div>
              </div>
            </div>
          </StarBorder>
        </div>
      </section>

      {/* Portfolio Samples Section */}
      <section id="portfolio-samples" className="section samples-section">
        <div className="container">
          <div className="section-header">
            <h2 id="samples-title" className="section-title">{content.portfolio_samples.title}</h2>
            <div className="title-bar"></div>
          </div>
          <div id="samples-grid" className="samples-grid">
            {content.portfolio_samples.examples.map((sample, index) => (
              <div key={index} className="sample-card">
                <div className="sample-header">
                  <h3>{sample.name}</h3>
                </div>
                <div className="sample-body">
                  <p>{sample.description}</p>
                  <span className="sample-tag">View Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <StarBorder as="div" color="#00FFAA" speed="7s" thickness={2}>
            <div className="contact-wrapper glass-card">
              <div className="contact-info">
                <h2 id="contact-title">{content.contact.title}</h2>
                <p id="contact-description">{content.contact.description}</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="icon">📧</span>
                    <span>navneetknight@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon">📞</span>
                    <span>+91 6307586760</span>
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="How can I help you?" required></textarea>
                </div>
                {formStatus.submitted && (
                  <div className="form-success">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
                {formStatus.error && (
                  <div className="form-error">
                    ✕ {formStatus.error}
                  </div>
                )}
                <button type="submit" id="contact-button" className="btn btn-primary" disabled={formStatus.submitted}>
                  {formStatus.submitted ? 'Message Sent!' : content.contact.button_text}
                </button>
              </form>
            </div>
          </StarBorder>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2025 Navneet Kumar. All rights reserved.</p>
          <p className="footer-tagline">Invest Smart. Invest Green.</p>
          <p className="footer-credits">
            Managed and Designed by{' '}
            <a href="https://lancealot.in" target="_blank" rel="noopener noreferrer" className="lancealot-link">
              Lancealot
            </a>
          </p>

        </div>
      </footer>
    </div>
  );
}

export default App;

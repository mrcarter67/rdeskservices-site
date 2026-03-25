import React, { useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../assets/Footer';
import Slideshow from '../assets/Slideshow';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for Website Development Setup and Best Practices.   
 * 
 * @return {JSX.Element} - The WebsiteDevelopmentSetup component.
 */
const WebsiteDevelopmentSetup = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const setupPhases = [
    {
      title: "Discovery & Planning",
      items: [
        "Project Requirements Analysis: Understand business goals, target audience, and website objectives.",
        "Competitive Analysis: Research industry standards and competitor websites.",
        "Sitemap Architecture: Plan the information structure and user navigation flow.",
        "Wireframing: Create low-fidelity mockups to visualize page layouts."
      ]
    },
    {
      title: "Design Phase",
      items: [
        "UI/UX Design: Create professional, user-centric designs aligned with your brand.",
        "Responsive Design: Ensure optimal viewing across desktop, tablet, and mobile devices.",
        "Brand Integration: Apply your company colors, logos, and brand guidelines.",
        "Accessibility Compliance: Build websites accessible to users with disabilities (WCAG 2.1)."
      ]
    },
    {
      title: "Development",
      items: [
        "Front-End Development: Build responsive interfaces using React, Vue, or Angular.",
        "Back-End Development: Develop server-side logic using Node.js, Python, Java, or .NET.",
        "Database Design: Create efficient, scalable databases (MySQL, PostgreSQL, MongoDB).",
        "API Development: Build RESTful APIs for seamless data exchange and integrations."
      ]
    },
    {
      title: "Integration & Testing",
      items: [
        "Third-Party Integrations: Connect payment gateways, CRM systems, analytics tools.",
        "Automated Testing: Implement unit tests, integration tests, and end-to-end testing.",
        "Performance Optimization: Optimize load times, caching, and CDN integration.",
        "Security Testing: Conduct penetration testing and vulnerability assessments."
      ]
    },
    {
      title: "Deployment & Hosting",
      items: [
        "Cloud Hosting Setup: Deploy on AWS, Azure, Google Cloud, or Render.",
        "Domain & SSL: Register domain, configure DNS, and set up SSL/TLS certificates.",
        "CI/CD Pipeline: Automate deployments using GitHub Actions, Jenkins, or GitLab CI.",
        "Environment Configuration: Set up production, staging, and development environments."
      ]
    },
    {
      title: "Maintenance & Support",
      items: [
        "Performance Monitoring: Track uptime, load times, and user experience metrics.",
        "Security Updates: Apply patches and updates to all dependencies and frameworks.",
        "Backup & Recovery: Implement automated backups and disaster recovery procedures.",
        "24/7 Support: Provide ongoing technical support and issue resolution."
      ]
    }
  ];

  const websiteTypes = [
    {
      name: "E-Commerce Websites",
      description: "Feature-rich online stores with product catalogs, shopping carts, and secure payments."
    },
    {
      name: "Corporate Websites",
      description: "Professional company websites showcasing services, team, and contact information."
    },
    {
      name: "Content Management Systems",
      description: "Custom CMS solutions for easy content updates and team collaboration."
    },
    {
      name: "SaaS Platforms",
      description: "Cloud-based software applications with user authentication and multi-tenancy."
    },
    {
      name: "Progressive Web Apps (PWA)",
      description: "App-like websites that work offline and provide app-like experiences."
    },
    {
      name: "Real-Time Collaboration Tools",
      description: "Interactive platforms for team communication, project management, and data sharing."
    }
  ];

  return (
    <div>
      <Header />
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>Website Development Setup</h1>
          <div className='landing-links'>
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/solutions')}>Solutions</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/solutions/full-stack-development')}>Full Stack Development</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn"><strong>Website Development Setup</strong></p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>Complete Website Development Lifecycle</h2>
            <p style={{ textAlign: 'center', marginBottom: '3em', fontSize: '1.1em' }}>
              From concept to deployment, we manage every phase of your website development with expertise and precision.
            </p>
          </div>
        </div>

        {/* Slideshow */}
        <div className="row" style={{ marginBottom: '2em' }}>
          <div className="col-md-12">
            <Slideshow images={['./images/development.jpg', './images/api-development.jpg', './images/web-development.jpg', './images/software-development.jpg']} />
          </div>
        </div>

        {/* Development Phases */}
        <div className="row" style={{ marginBottom: '3em' }}>
          {setupPhases.map((phase, idx) => (
            <div key={idx} className="col-md-6" style={{ marginBottom: '2em' }}>
              <div className="card" style={{ padding: '1.5em', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#0056b3', marginBottom: '1em' }}>{phase.title}</h3>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ marginBottom: '0.8em', paddingLeft: '1.5em', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#0056b3', fontWeight: 'bold' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Website Types */}
        <div className="row" style={{ marginTop: '3em', marginBottom: '2em' }}>
          <div className="col-md-12">
            <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>Website Types We Build</h2>
          </div>
          {websiteTypes.map((type, idx) => (
            <div key={idx} className="col-md-6" style={{ marginBottom: '1.5em' }}>
              <div className="card" style={{ padding: '1.5em', borderRadius: '8px', marginBottom: '1em', borderLeft: '4px solid #0056b3' }}>
                <h4 style={{ color: '#0056b3', marginBottom: '0.5em' }}>{type.name}</h4>
                <p style={{ margin: 0, color: '#555' }}>{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="row" style={{ marginTop: '3em', backgroundColor: '#f8f9fa', padding: '2em', borderRadius: '8px' }}>
          <div className="col-md-12">
            <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>Technologies We Use</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5em' }}>
              <div>
                <h4 style={{ color: '#0056b3', marginBottom: '1em' }}>Front-End</h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '0.5em' }}>• React.js / Next.js</li>
                  <li style={{ marginBottom: '0.5em' }}>• Vue.js / Nuxt.js</li>
                  <li style={{ marginBottom: '0.5em' }}>• Angular</li>
                  <li style={{ marginBottom: '0.5em' }}>• TypeScript</li>
                  <li style={{ marginBottom: '0.5em' }}>• Tailwind CSS / Bootstrap</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#0056b3', marginBottom: '1em' }}>Back-End</h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '0.5em' }}>• Node.js / Express</li>
                  <li style={{ marginBottom: '0.5em' }}>• Python / Django / FastAPI</li>
                  <li style={{ marginBottom: '0.5em' }}>• Java / Spring Boot</li>
                  <li style={{ marginBottom: '0.5em' }}>• .NET / C#</li>
                  <li style={{ marginBottom: '0.5em' }}>• PHP / Laravel</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#0056b3', marginBottom: '1em' }}>Databases</h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '0.5em' }}>• PostgreSQL / MySQL</li>
                  <li style={{ marginBottom: '0.5em' }}>• MongoDB</li>
                  <li style={{ marginBottom: '0.5em' }}>• Redis</li>
                  <li style={{ marginBottom: '0.5em' }}>• Firebase</li>
                  <li style={{ marginBottom: '0.5em' }}>• DynamoDB</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#0056b3', marginBottom: '1em' }}>DevOps & Hosting</h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '0.5em' }}>• Docker / Kubernetes</li>
                  <li style={{ marginBottom: '0.5em' }}>• AWS / Azure / GCP</li>
                  <li style={{ marginBottom: '0.5em' }}>• GitHub Actions / GitLab CI</li>
                  <li style={{ marginBottom: '0.5em' }}>• nginx / Apache</li>
                  <li style={{ marginBottom: '0.5em' }}>• Render / Vercel / Netlify</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="row" style={{ marginTop: '3em', textAlign: 'center' }}>
          <div className="col-md-12">
            <h3>Ready to Build Your Website?</h3>
            <p style={{ marginBottom: '1.5em', fontSize: '1.1em' }}>Let's discuss your project requirements and create a tailored development plan.</p>
            <button 
              onClick={() => navigate('/contact#request-service#full-stack-development#website-setup')}
              style={{
                backgroundColor: '#0056b3',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                fontSize: '1em',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#003d82'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0056b3'}
            >
              Request Website Development Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopmentSetup;

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
 * Component for Business Solutions and Industry-Specific Applications.   
 * 
 * @return {JSX.Element} - The BusinessSolutions component.
 */
const BusinessSolutions = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const solutions = [
    {
      category: "Financial Services",
      icon: "💰",
      description: "Solutions tailored for banks, investment firms, and fintech companies.",
      features: [
        "Trading Platform Development",
        "Payment Processing Systems",
        "Risk Management Tools",
        "Compliance & Regulatory Reporting",
        "Portfolio Management Systems",
        "Blockchain & Cryptocurrency Solutions"
      ]
    },
    {
      category: "Retail & E-Commerce",
      icon: "🛍️",
      description: "Complete solutions for online and brick-and-mortar retail operations.",
      features: [
        "Omnichannel Commerce Platforms",
        "Inventory Management Systems",
        "Point-of-Sale (POS) Solutions",
        "Customer Loyalty Programs",
        "Supply Chain Management",
        "Dynamic Pricing Engines"
      ]
    },
    {
      category: "Healthcare",
      icon: "⚕️",
      description: "HIPAA-compliant solutions for healthcare providers and institutions.",
      features: [
        "Electronic Health Records (EHR)",
        "Patient Management Systems",
        "Telemedicine Platforms",
        "Medical Billing & Collections",
        "Healthcare Analytics",
        "Appointment Scheduling Systems"
      ]
    },
    {
      category: "Manufacturing",
      icon: "🏭",
      description: "Enterprise solutions for production, quality, and supply chain management.",
      features: [
        "MES (Manufacturing Execution Systems)",
        "Production Scheduling & Planning",
        "Quality Assurance Tracking",
        "Asset & Equipment Management",
        "Supply Chain Visibility",
        "Predictive Maintenance Systems"
      ]
    },
    {
      category: "Logistics & Transportation",
      icon: "🚚",
      description: "Solutions for fleet management and supply chain logistics.",
      features: [
        "Fleet Tracking & Management",
        "Route Optimization",
        "Shipment Management",
        "Real-Time Tracking",
        "Warehouse Management Systems",
        "Last-Mile Delivery Solutions"
      ]
    },
    {
      category: "Real Estate & Property Management",
      icon: "🏢",
      description: "Comprehensive solutions for property management and real estate operations.",
      features: [
        "Property Management Systems",
        "Tenant Portals",
        "Maintenance Request Management",
        "Rent Collection & Accounting",
        "Lease Management",
        "Occupancy Analysis & Reporting"
      ]
    },
    {
      category: "Education & Training",
      icon: "📚",
      description: "Learning management and administration solutions for educational institutions.",
      features: [
        "Learning Management Systems (LMS)",
        "Student Information Systems",
        "Online Course Platforms",
        "Virtual Classroom Solutions",
        "Assessment & Grading Tools",
        "Alumni Management"
      ]
    },
    {
      category: "Human Resources",
      icon: "👥",
      description: "HR solutions for talent management, payroll, and employee engagement.",
      features: [
        "Applicant Tracking Systems (ATS)",
        "Employee Management Systems",
        "Payroll Processing",
        "Benefits Administration",
        "Performance Management",
        "Employee Learning & Development"
      ]
    },
    {
      category: "Legal & Compliance",
      icon: "⚖️",
      description: "Solutions for law firms and compliance-focused organizations.",
      features: [
        "Case Management Systems",
        "Contract Management",
        "Document Automation",
        "Time & Billing Systems",
        "Compliance Tracking",
        "Legal Research Portals"
      ]
    },
    {
      category: "Hospitality & Tourism",
      icon: "🏨",
      description: "Solutions for hotels, restaurants, and travel companies.",
      features: [
        "Hotel Management Systems",
        "Reservation & Booking Systems",
        "Tour Operator Management",
        "Guest Experience Platforms",
        "Revenue Management Systems",
        "Loyalty Programs"
      ]
    },
    {
      category: "Project Management",
      icon: "📊",
      description: "Collaborative tools for project planning, tracking, and resource management.",
      features: [
        "Project Planning & Scheduling",
        "Resource Allocation",
        "Time Tracking & Reporting",
        "Budget Management",
        "Team Collaboration Portals",
        "Portfolio Management"
      ]
    },
    {
      category: "Energy & Utilities",
      icon: "⚡",
      description: "Solutions for energy companies and utility management.",
      features: [
        "Smart Meter Management",
        "Billing & Collections",
        "Grid Management Systems",
        "Customer Portals",
        "Outage Management",
        "Energy Analytics & Reporting"
      ]
    }
  ];

  const developmentApproach = [
    {
      step: "1",
      title: "Understand Your Business",
      description: "We conduct in-depth consultations to understand your industry, processes, challenges, and goals."
    },
    {
      step: "2",
      title: "Design Custom Solution",
      description: "We architect a tailored solution that addresses your specific business requirements and scalability needs."
    },
    {
      step: "3",
      title: "Develop & Integrate",
      description: "Our expert developers build the solution and integrate it seamlessly with your existing systems."
    },
    {
      step: "4",
      title: "Test & Deploy",
      description: "Comprehensive testing ensures reliability, security, and performance before production deployment."
    },
    {
      step: "5",
      title: "Train & Support",
      description: "We provide training, documentation, and ongoing support to ensure successful adoption and use."
    }
  ];

  return (
    <div>
      <Header />
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>Business Solutions</h1>
          <div className='landing-links'>
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/solutions')}>Solutions</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/solutions/full-stack-development')}>Full Stack Development</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn"><strong>Business Solutions</strong></p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>Industry-Specific Solutions</h2>
            <p style={{ textAlign: 'center', marginBottom: '3em', fontSize: '1.1em', color: '#666' }}>
              Custom-built applications designed for your industry's unique challenges and opportunities.
            </p>
          </div>
        </div>

        {/* Slideshow */}
        <div className="row" style={{ marginBottom: '2em' }}>
          <div className="col-md-12">
            <Slideshow images={['/images/development.jpg', '/images/api-development.jpg', '/images/web-development.jpg', '/images/software-development.jpg']} />
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="row" style={{ marginBottom: '3em' }}>
          {solutions.map((solution, idx) => (
            <div key={idx} className="col-md-6" style={{ marginBottom: '2em' }}>
              <div className="card" style={{ 
                padding: '1.5em', 
                borderRadius: '8px', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}>
                <div style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>{solution.icon}</div>
                <h3 style={{ color: '#0056b3', marginBottom: '0.5em' }}>{solution.category}</h3>
                <p style={{ color: '#666', marginBottom: '1em', fontSize: '0.95em' }}>{solution.description}</p>
                <h5 style={{ color: '#0056b3', marginBottom: '0.8em', fontWeight: 'bold' }}>Key Features:</h5>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                  {solution.features.map((feature, featureIdx) => (
                    <li key={featureIdx} style={{ marginBottom: '0.5em', paddingLeft: '1.2em', position: 'relative', fontSize: '0.9em' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#0056b3' }}>→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Development Approach */}
        <div className="row" style={{ marginTop: '3em', marginBottom: '3em' }}>
          <div className="col-md-12">
            <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>Our Development Approach</h2>
          </div>
          <div className="col-md-12">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
              {/* Connection Line */}
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '5%',
                right: '5%',
                height: '2px',
                backgroundColor: '#0056b3',
                zIndex: 0
              }}></div>

              {/* Steps */}
              {developmentApproach.map((item, idx) => (
                <div key={idx} style={{ flex: 1, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#0056b3',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2em',
                    fontWeight: 'bold',
                    margin: '0 auto 1em',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}>
                    {item.step}
                  </div>
                  <h4 style={{ marginBottom: '0.5em', color: '#0056b3' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9em', color: '#666' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row" style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '2em', 
          borderRadius: '8px',
          marginBottom: '3em'
        }}>
          <div className="col-md-12">
            <h2 style={{ textAlign: 'center', marginBottom: '2em' }}>Why Choose Our Business Solutions?</h2>
          </div>
          <div className="col-md-6">
            <div style={{ marginBottom: '1.5em' }}>
              <h5 style={{ color: '#0056b3', marginBottom: '0.5em' }}>✓ Industry Expertise</h5>
              <p style={{ color: '#666', margin: 0 }}>Years of experience building solutions across diverse industries with deep understanding of industry-specific requirements.</p>
            </div>
            <div style={{ marginBottom: '1.5em' }}>
              <h5 style={{ color: '#0056b3', marginBottom: '0.5em' }}>✓ Scalable Architecture</h5>
              <p style={{ color: '#666', margin: 0 }}>Solutions built to grow with your business, from startup to enterprise scale.</p>
            </div>
            <div style={{ marginBottom: '1.5em' }}>
              <h5 style={{ color: '#0056b3', marginBottom: '0.5em' }}>✓ Security & Compliance</h5>
              <p style={{ color: '#666', margin: 0 }}>Industry-standard security practices and compliance with regulations like HIPAA, GDPR, SOC 2.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ marginBottom: '1.5em' }}>
              <h5 style={{ color: '#0056b3', marginBottom: '0.5em' }}>✓ Custom Integrations</h5>
              <p style={{ color: '#666', margin: 0 }}>Seamlessly integrate with your existing systems and third-party applications.</p>
            </div>
            <div style={{ marginBottom: '1.5em' }}>
              <h5 style={{ color: '#0056b3', marginBottom: '0.5em' }}>✓ Ongoing Support</h5>
              <p style={{ color: '#666', margin: 0 }}>Dedicated support team available 24/7 for maintenance, updates, and enhancements.</p>
            </div>
            <div style={{ marginBottom: '1.5em' }}>
              <h5 style={{ color: '#0056b3', marginBottom: '0.5em' }}>✓ Data-Driven Insights</h5>
              <p style={{ color: '#666', margin: 0 }}>Built-in analytics and reporting tools to help you make informed business decisions.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="row" style={{ textAlign: 'center', marginBottom: '2em' }}>
          <div className="col-md-12">
            <h3>Transform Your Business with Custom Solutions</h3>
            <p style={{ marginBottom: '1.5em', fontSize: '1.1em' }}>
              Let's discuss how we can solve your unique business challenges with tailored technology.
            </p>
            <button 
              onClick={() => navigate('/contact#request-service#full-stack-development#business-solutions')}
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
              Request a Business Solution Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessSolutions;

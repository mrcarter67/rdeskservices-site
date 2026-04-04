import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import servicesData from '../data/services.json';
import '../css/gov-homepage.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const TrustCheck = () => (
  <div className="gh-trust-check">
    <svg viewBox="0 0 10 10"><polyline points="1.5,5.5 4,8 8.5,2" /></svg>
  </div>
);

const RFPCheck = () => (
  <div className="gh-rfp-check">
    <svg viewBox="0 0 10 10"><polyline points="1.5,5.5 4,8 8.5,2" /></svg>
  </div>
);

const IT_ICONS = {
  'helpdesk-solutions': '🖥️',
  'security-scans':     '🔍',
  'network-services':   '🌐',
  'cyber-security':     '🛡️',
  'cloud-engineering':  '☁️',
  'virtualization':     '⚙️',
  'data-storage':       '🗄️',
  'data-recovery':      '🔄',
  'professional-wiring':'🔌',
  'tablet-repairs':     '📱',
  'full-stack-development': '💻',
};

const getItIcon = (pageLink) => {
  if (!pageLink) return '🔧';
  for (const [key, icon] of Object.entries(IT_ICONS)) {
    if (pageLink.includes(key)) return icon;
  }
  return '🔧';
};

const JUNK_ICONS = {
  'junk-removal':   '🗑️',
  'ewaste-disposal':'♻️',
  'office-moves':   '📦',
};

const getJunkIcon = (pageLink) => {
  if (!pageLink) return '🔧';
  for (const [key, icon] of Object.entries(JUNK_ICONS)) {
    if (pageLink.includes(key)) return icon;
  }
  return '🔧';
};

const GovHomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navShadow, setNavShadow] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', agency: '', email: '',
    contractType: '', scope: '', timeline: '',
  });
  const [submitState, setSubmitState] = useState('idle');
  const navRef = useRef(null);

  const itSolutions       = servicesData['IT Solutions']            || [];
  const complianceServices = servicesData['Compliance Services']    || [];
  const junkServices      = servicesData['Junk & E-Waste Services'] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setNavShadow(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => { setMenuOpen(false); scrollTo(id); };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState('loading');
    try {
      await axios.post('/api/request', {
        name:       `${form.firstName} ${form.lastName}`.trim(),
        email:      form.email,
        subject:    `Government RFP Inquiry — ${form.contractType || 'General'}`,
        service:    form.contractType,
        it_service: form.timeline,
        compliance: '',
        message:    `Agency / Organization: ${form.agency}\n\nScope / Description:\n${form.scope}\n\nEstimated Timeline: ${form.timeline}`,
      });
      setSubmitState('success');
      setTimeout(() => setSubmitState('idle'), 4000);
      setForm({ firstName: '', lastName: '', agency: '', email: '', contractType: '', scope: '', timeline: '' });
    } catch {
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 4000);
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV (with announcement bar) ─────────────────────────── */}
      <nav ref={navRef} className={`gh-nav${navShadow ? ' gh-nav--shadow' : ''}`}>
        <div className="gh-announcement">
          <span className="gh-ann-badge">NEW</span>
          Junk Removal, E-Waste Disposal &amp; Office Moves &mdash; Call{' '}
          <a href="tel:8315294490">831-529-4490</a> for a FREE estimate!
        </div>
        <div className="gh-nav-inner">
          <div className="gh-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="gh-logo-mark">R</div>
            <div className="gh-logo-text">
              RDesk Services
              <span>LLC &middot; Managed IT &amp; Cybersecurity</span>
            </div>
          </div>
          <ul className="gh-nav-links">
            <li><a onClick={() => handleNav('services')}>Services</a></li>
            <li><a onClick={() => handleNav('it-solutions')}>IT Solutions</a></li>
            <li><a onClick={() => handleNav('compliance')}>Compliance</a></li>
            <li><a onClick={() => handleNav('government')}>Government</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a className="gh-nav-cta" onClick={() => handleNav('rfp')}>Submit RFP Inquiry &#8599;</a></li>
          </ul>
          <button className="gh-nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="2" y1="7" x2="20" y2="7" />
              <line x1="2" y1="11" x2="20" y2="11" />
              <line x1="2" y1="15" x2="20" y2="15" />
            </svg>
          </button>
        </div>
        <div className={`gh-mobile-menu${menuOpen ? ' open' : ''}`}>
          <a onClick={() => handleNav('services')}>Services</a>
          <a onClick={() => handleNav('it-solutions')}>IT Solutions</a>
          <a onClick={() => handleNav('compliance')}>Compliance</a>
          <a onClick={() => handleNav('government')}>Government</a>
          <a onClick={() => handleNav('education')}>Education Technology</a>
          <a onClick={() => handleNav('junk-ewaste')}>Junk &amp; E-Waste</a>
          <a onClick={() => handleNav('other-services')}>Other Services</a>
          <a href="/contact">Contact</a>
          <a onClick={() => handleNav('rfp')}>Submit RFP Inquiry &#8599;</a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="gh-hero">
        <div className="gh-hero-grid" />
        <div className="gh-hero-glow" />
        <div className="gh-hero-glow2" />
        <div className="gh-hero-inner">
          <div>
            <div className="gh-hero-badge">
              <span className="gh-badge-dot" />
              SAM.gov Registered &middot; Active Vendor
            </div>
            <h1>Enterprise IT &amp;<br /><em>Cybersecurity</em><br />Built for Gov</h1>
            <p className="gh-hero-desc">
              RDesk Services LLC delivers mission-critical managed IT, network security, and cloud
              infrastructure to federal, state, county, and enterprise clients &mdash; with the compliance
              posture and response speed government contracts demand.
            </p>
            <div className="gh-hero-actions">
              <a className="gh-btn-primary" onClick={() => handleNav('rfp')}>
                Submit RFP Inquiry
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 7h10M7 2l5 5-5 5" /></svg>
              </a>
              <a className="gh-btn-outline" onClick={() => handleNav('government')}>View Credentials</a>
            </div>
            <div className="gh-hero-stats">
              <div><div className="gh-stat-num">50+</div><div className="gh-stat-label">Years Combined Experience</div></div>
              <div><div className="gh-stat-num">24/7</div><div className="gh-stat-label">SOC Monitoring</div></div>
              <div><div className="gh-stat-num">4</div><div className="gh-stat-label">NAICS Codes</div></div>
            </div>
          </div>
          <div className="gh-hero-right">
            <div className="gh-hero-card-wrap">
              <div className="gh-hero-float-badge">Gov-Ready</div>
              <div className="gh-hero-card">
                <div className="gh-card-title">Vendor Credentials</div>
                {[
                  { icon: '🏛️', label: 'SAM.gov Registration',    sub: 'System for Award Management' },
                  { icon: '🔒', label: 'Small Business Certified', sub: 'SB · NAICS 541512 Primary' },
                  { icon: '🛡️', label: 'NIST 800-171 Aligned',    sub: 'CIS Controls · CMMC Ready' },
                  { icon: '📋', label: 'Cal eProcure Registered',  sub: 'CA DGS · State Contracts' },
                  { icon: '🌐', label: 'Section 508 Compliant',    sub: 'ADA · WCAG 2.1 AA' },
                ].map(({ icon, label, sub }) => (
                  <div className="gh-cred-row" key={label}>
                    <div className="gh-cred-icon">{icon}</div>
                    <div>
                      <div className="gh-cred-label">{label}</div>
                      <div className="gh-cred-sub">{sub}</div>
                    </div>
                    <div className="gh-status-dot" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────── */}
      <div className="gh-trust-bar">
        <div className="gh-trust-inner">
          {['SAM.gov Registered', 'Small Business Certified', 'NIST 800-171 Aligned', 'Cal eProcure Vendor', 'Section 508 Compliant'].map(label => (
            <div className="gh-trust-item" key={label}>
              <TrustCheck />
              <span className="gh-trust-label">{label}</span>
            </div>
          ))}
          <span className="gh-trust-naics">NAICS 541512 &middot; 541513 &middot; 541519 &middot; 541611</span>
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="gh-section">
        <div className="gh-section-inner">
          <div className="gh-about-grid">
            <div className="gh-about-left">
              <div className="gh-tag">About RDesk Services</div>
              <h2 className="gh-title">California-Based IT Firm.<br />Enterprise-Grade Results.</h2>
              <p className="gh-desc">
                RDesk Services LLC is a California-based managed IT and cybersecurity firm with over
                50 years of combined experience. We serve businesses, government agencies, educational
                institutions, and regulated industries across the state and beyond.
              </p>
              <p className="gh-about-para">
                From proactive network monitoring and cloud infrastructure to compliance readiness and
                full-stack development, RDesk delivers enterprise-grade technology with a local touch.
                Our team brings deep expertise across legal, biotech, education, energy, and public sector
                environments. We offer both Fixed Fee and Hourly IT service plans to fit your budget.
              </p>
              <div className="gh-about-actions">
                <a href="/contact" className="gh-btn-primary">Get in Touch</a>
                <a href="/solutions" className="gh-btn-secondary">View All Solutions</a>
              </div>
            </div>
            <div className="gh-about-right">
              <div className="gh-about-stats-grid">
                {[
                  { num: '50+',  label: 'Years Combined Experience' },
                  { num: '24/7', label: 'Proactive IT Monitoring' },
                  { num: '11+',  label: 'IT Service Lines' },
                  { num: 'CA',   label: 'Statewide Coverage' },
                ].map(({ num, label }) => (
                  <div className="gh-about-stat" key={label}>
                    <div className="gh-about-stat-num">{num}</div>
                    <div className="gh-about-stat-label">{label}</div>
                  </div>
                ))}
              </div>
              <div className="gh-about-features">
                {[
                  'Fixed Fee &amp; Hourly IT service plans available',
                  'SAM.gov registered &middot; Cal eProcure vendor',
                  'Small Business Certified',
                  'Serving legal, biotech, education, energy &amp; gov sectors',
                ].map((text) => (
                  <div className="gh-about-feature" key={text}>
                    <span className="gh-about-check">
                      <svg viewBox="0 0 10 10"><polyline points="1.5,5.5 4,8 8.5,2" /></svg>
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES (Gov-focused) ─────────────────────── */}
      <section id="services" className="gh-section gh-section--alt">
        <div className="gh-section-inner">
          <div className="gh-tag">Core Capabilities</div>
          <h2 className="gh-title">Full-Spectrum IT<br />Solutions</h2>
          <p className="gh-desc">Comprehensive managed services built for government procurement, compliance frameworks, and enterprise-scale operations.</p>
          <div className="gh-services-grid">
            {[
              { icon: '🌐', name: 'Network Management',      desc: 'Enterprise network design, VLAN segmentation, FortiGate firewall administration, monitoring, and 24/7 NOC support for critical infrastructure.',      tags: ['FortiGate', 'VLAN', 'NOC 24/7', 'SD-WAN'] },
              { icon: '🛡️', name: 'Cybersecurity & SOC',    desc: 'Threat detection, incident response, Microsoft 365 Defender management, endpoint protection, BEC monitoring, and SIEM/Splunk operations.',          tags: ['M365 Defender', 'Splunk', 'Bitdefender', 'BEC Response'] },
              { icon: '☁️', name: 'Cloud Infrastructure',    desc: 'Microsoft Azure and M365 administration, cloud migrations, hybrid environments, identity management, and compliance-grade cloud architecture.',       tags: ['Azure', 'Microsoft 365', 'Hybrid Cloud', 'Entra ID'] },
              { icon: '💻', name: 'Managed IT / Help Desk',  desc: 'Tier 1–3 help desk support, endpoint management, patch administration, hardware lifecycle, onboarding/offboarding, and SLA-backed response.',        tags: ['Tier 1–3', 'Endpoint Mgmt', 'SLA Backed', 'Remote+Onsite'] },
              { icon: '🏗️', name: 'IT Transition Services', desc: 'Seamless vendor transitions, contract exit strategy, system migrations, phone and internet infrastructure changeovers with zero-downtime planning.',  tags: ['Vendor Exit', 'Migration', 'VoIP', 'Zero Downtime'] },
              { icon: '🗄️', name: 'Data Center Operations', desc: 'Server administration, virtualization, backup and disaster recovery, storage management, and compliance-ready data center support services.',          tags: ['Virtualization', 'DR/BCP', 'Backup', 'VMware'] },
            ].map(({ icon, name, desc, tags }) => (
              <div className="gh-service-card" key={name}>
                <div className="gh-service-icon">{icon}</div>
                <div className="gh-service-name">{name}</div>
                <p className="gh-service-desc">{desc}</p>
                <div className="gh-service-tags">{tags.map(t => <span className="gh-service-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL IT SOLUTIONS (full catalog) ─────────────────────── */}
      <section id="it-solutions" className="gh-section">
        <div className="gh-section-inner">
          <div className="gh-tag">IT Solutions Catalog</div>
          <h2 className="gh-title">All IT Services</h2>
          <p className="gh-desc">Browse our complete catalog of managed IT services — each with dedicated service pages and detailed capability descriptions.</p>
          <div className="gh-it-grid">
            {itSolutions.map((service) => (
              <a href={service['page-link']} className="gh-it-card" key={service.name}>
                <div className="gh-it-icon">{getItIcon(service['page-link'])}</div>
                <div className="gh-it-name">{service.name}</div>
                {service.description && (
                  <p className="gh-it-desc">
                    {service.description.length > 110
                      ? service.description.substring(0, 110) + '…'
                      : service.description}
                  </p>
                )}
                <span className="gh-it-link">View Service Details &#8594;</span>
              </a>
            ))}
          </div>
          <div className="gh-section-cta-row">
            <a href="/solutions" className="gh-section-cta-btn">View All IT Solutions</a>
          </div>
        </div>
      </section>

      {/* ── GOVERNMENT HUB ──────────────────────────────────────── */}
      <section id="government" className="gh-section gh-section--dark">
        <div className="gh-section-inner">
          <div className="gh-tag">Government Hub</div>
          <h2 className="gh-title gh-title--white">Procurement-Ready.<br />Contract-Experienced.</h2>
          <p className="gh-desc gh-desc--muted">
            RDesk Services LLC maintains all registrations, certifications, and compliance documentation
            required for federal, state, and local government contract vehicles.
          </p>
          <div className="gh-gov-layout">
            <div className="gh-gov-creds">
              {[
                { icon: '🏛️', label: 'SAM.gov — System for Award Management',       value: 'Active Registration · Federal Procurement' },
                { icon: '📜', label: 'California DGS — Small Business Certified',    value: 'Cal eProcure · State Contract Vehicle' },
                { icon: '🏙️', label: 'County Vendor Portals — CA Local Government', value: 'Santa Clara · LA County · Bay Area Registered' },
                { icon: '🔐', label: 'CMMC Level 1/2 — Cyber Readiness',            value: 'DoD Cybersecurity Maturity Model Certification' },
                { icon: '♿', label: 'Section 508 — Accessibility Compliance',       value: 'ADA · WCAG 2.1 AA · Federal Web Standards' },
              ].map(({ icon, label, value }) => (
                <div className="gh-cred-card" key={label}>
                  <div className="gh-cred-card-icon">{icon}</div>
                  <div>
                    <div className="gh-cred-card-label">{label}</div>
                    <div className="gh-cred-card-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="gh-gov-right">
              <div className="gh-naics-block">
                <div className="gh-naics-title">NAICS Codes</div>
                {[
                  { code: '541512', desc: 'Computer Systems Design Services (Primary)' },
                  { code: '541513', desc: 'Computer Facilities Management Services' },
                  { code: '541519', desc: 'Other Computer-Related Services' },
                  { code: '541611', desc: 'Administrative Management Consulting' },
                ].map(({ code, desc }) => (
                  <div className="gh-naics-row" key={code}>
                    <div className="gh-naics-code">{code}</div>
                    <div className="gh-naics-desc">{desc}</div>
                  </div>
                ))}
              </div>
              <div className="gh-caps-cta">
                <div className="gh-caps-cta-text">
                  <div className="gh-caps-cta-title">Download Capabilities Statement</div>
                  <div className="gh-caps-cta-sub">One-page summary &middot; CAGE code &middot; Core competencies &middot; Past performance</div>
                </div>
                <a href="/capabilities-statement.pdf" download className="gh-caps-btn">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 2v7M4 6l3 3 3-3M2 10v2h10v-2" /></svg>
                  Download PDF
                </a>
              </div>
              <div className="gh-vehicles-block">
                <div className="gh-vehicles-title">Contract Vehicles Pursued</div>
                <div className="gh-vehicles-tags">
                  {['GSA MAS', 'State MSA', 'BPA', 'IDIQ', 'County RFP', 'SEWP V'].map(v => (
                    <span className="gh-vehicle-tag" key={v}>{v}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE FRAMEWORKS ───────────────────────────────── */}
      <section id="compliance" className="gh-section">
        <div className="gh-section-inner">
          <div className="gh-tag">Security &amp; Compliance</div>
          <h2 className="gh-title">Frameworks We Operate In</h2>
          <p className="gh-desc">RDesk aligns all operations with recognized federal and industry security standards &mdash; giving procurement officers the confidence to award.</p>
          <div className="gh-compliance-grid">
            {[
              { name: 'NIST SP 800-171',     detail: 'Protecting Controlled Unclassified Information in non-federal systems. Full alignment for DoD subcontractors.',        status: 'Aligned' },
              { name: 'CMMC Level 1 / 2',    detail: 'Cybersecurity Maturity Model Certification readiness for DoD contract eligibility across supply chain tiers.',         status: 'Ready' },
              { name: 'CIS Controls v8',      detail: 'Implementation Group 2 controls applied across endpoint management, network security, and data protection.',           status: 'Implemented' },
              { name: 'Section 508 / ADA',    detail: 'All client-facing digital deliverables meet federal accessibility requirements under WCAG 2.1 AA.',                   status: 'Compliant' },
              { name: 'FISMA Awareness',      detail: 'Federal Information Security Modernization Act requirements factored into all federal engagement scoping.',            status: 'Aware' },
              { name: 'Microsoft Zero Trust', detail: 'Identity-first Zero Trust architecture using Entra ID, Conditional Access, and Defender XDR.',                        status: 'Deployed' },
            ].map(({ name, detail, status }) => (
              <div className="gh-compliance-card" key={name}>
                <div className="gh-comp-name">{name}</div>
                <div className="gh-comp-detail">{detail}</div>
                <div className="gh-comp-status"><span className="gh-comp-dot" />{status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ISO STANDARDS ───────────────────────────────────────── */}
      <section id="iso-standards" className="gh-section gh-section--alt">
        <div className="gh-section-inner">
          <div className="gh-tag">ISO &amp; Quality Standards</div>
          <h2 className="gh-title">Compliance Consulting<br />&amp; Certification Support</h2>
          <p className="gh-desc">RDesk helps organizations achieve and maintain ISO certifications and compliance standards. Click any standard to learn more about our approach.</p>
          <div className="gh-iso-grid">
            {complianceServices.map((iso) => (
              <a href={iso['page-link']} className="gh-iso-card" key={iso.name}>
                <div className="gh-iso-badge">&#10003;</div>
                <div className="gh-iso-name">{iso.name}</div>
                {iso.description
                  ? <div className="gh-iso-desc">{iso.description.substring(0, 80)}&#8230;</div>
                  : null}
                <span className="gh-iso-link">Learn More &#8594;</span>
              </a>
            ))}
          </div>
          <div className="gh-section-cta-row">
            <a href="/compliance" className="gh-section-cta-btn">View All Compliance Services</a>
          </div>
        </div>
      </section>

      {/* ── EDUCATION TECHNOLOGY ────────────────────────────────── */}
      <section id="education" className="gh-section">
        <div className="gh-section-inner">
          <div className="gh-edu-grid">
            <div>
              <div className="gh-tag">Education Technology</div>
              <h2 className="gh-title">IT Solutions Built<br />for Education</h2>
              <p className="gh-desc">
                We bring enterprise-grade IT solutions to K&ndash;12 schools and colleges &mdash; tailored for the
                classroom, built for the future. RDesk understands school environments: tight budgets,
                limited staff, and growing tech needs.
              </p>
              <p className="gh-about-para">
                Our education technology services include device deployment and management, network
                infrastructure, cybersecurity, and iPad/tablet repair programs for student 1:1 initiatives.
                We deliver enterprise-level service with an educator-friendly mindset.
              </p>
              <div className="gh-about-actions" style={{ marginTop: '1.75rem' }}>
                <a href="/education-technology-solutions" className="gh-btn-primary">View Ed Solutions</a>
                <a href="/solutions/tablet-repairs" className="gh-btn-secondary">Tablet Repair &amp; Deployment</a>
              </div>
            </div>
            <div className="gh-edu-cards">
              {[
                { icon: '📚', title: 'K-12 IT Management',        desc: 'Proactive support for school district networks, devices, and infrastructure.' },
                { icon: '📱', title: 'Device Repair & Deployment', desc: 'iPad and tablet repair, imaging, and 1:1 student deployment programs.' },
                { icon: '🔒', title: 'CIPA Compliance',            desc: 'Internet filtering and acceptable-use policy support for K-12 compliance.' },
                { icon: '☁️', title: 'Cloud & Collaboration',      desc: 'Google Workspace and Microsoft 365 for Education setup and administration.' },
              ].map(({ icon, title, desc }) => (
                <div className="gh-edu-card" key={title}>
                  <div className="gh-edu-card-icon">{icon}</div>
                  <div>
                    <div className="gh-edu-card-title">{title}</div>
                    <div className="gh-edu-card-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JUNK & E-WASTE ──────────────────────────────────────── */}
      <section id="junk-ewaste" className="gh-section gh-section--alt">
        <div className="gh-section-inner">
          <div className="gh-tag">Junk &amp; E-Waste Services</div>
          <h2 className="gh-title">Removal, Disposal<br />&amp; Office Moves</h2>
          <p className="gh-desc">
            Professional junk removal, certified e-waste disposal, and full-service commercial office
            moves &mdash; all backed by licensed, insured technicians.
            Call <strong>831-529-4490</strong> for a FREE estimate.
          </p>
          <div className="gh-junk-grid">
            {junkServices.map((service) => (
              <a href={service['page-link']} className="gh-junk-card" key={service.name}>
                <div className="gh-junk-icon">{getJunkIcon(service['page-link'])}</div>
                <div className="gh-junk-name">{service.name}</div>
                <p className="gh-junk-desc">
                  {service.description && service.description.length > 130
                    ? service.description.substring(0, 130) + '…'
                    : service.description}
                </p>
                <span className="gh-it-link">Learn More &#8594;</span>
              </a>
            ))}
          </div>
          <div className="gh-section-cta-row">
            <a href="/junk-ewaste" className="gh-section-cta-btn">View All Junk &amp; E-Waste Services</a>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ──────────────────────────────────────── */}
      <section id="other-services" className="gh-section">
        <div className="gh-section-inner">
          <div className="gh-other-grid">
            <div>
              <div className="gh-tag">Office &amp; Other Services</div>
              <h2 className="gh-title">Beyond IT &mdash; Complete<br />Business Solutions</h2>
              <p className="gh-desc">
                RDesk recognizes that businesses require a broad range of services to maintain and enhance
                their operations. We have expanded our expertise to include comprehensive solutions in
                Electrical, Plumbing, HVAC, and General Contracting.
              </p>
              <p className="gh-about-para">
                These additional services allow us to be a one-stop provider for both your technical and
                operational infrastructure needs. Let us handle the full scope of your facility requirements.
              </p>
              <div className="gh-about-actions" style={{ marginTop: '1.75rem' }}>
                <a href="/other_services" className="gh-btn-primary">View All Other Services</a>
                <a href="/contact" className="gh-btn-secondary">Request a Quote</a>
              </div>
            </div>
            <div className="gh-other-icons">
              {[
                { icon: '⚡', label: 'Electrical' },
                { icon: '🔧', label: 'Plumbing' },
                { icon: '❄️', label: 'HVAC' },
                { icon: '🏗️', label: 'General Contracting' },
                { icon: '🏢', label: 'Office Setup' },
                { icon: '📦', label: 'Facility Management' },
              ].map(({ icon, label }) => (
                <div className="gh-other-icon-card" key={label}>
                  <div className="gh-other-icon">{icon}</div>
                  <div className="gh-other-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY RDESK ───────────────────────────────────────────── */}
      <section className="gh-section gh-section--alt">
        <div className="gh-section-inner">
          <div className="gh-why-grid">
            <div>
              <div className="gh-tag">Why RDesk</div>
              <h2 className="gh-title">Speed, Security,<br />and Accountability</h2>
              <p className="gh-desc">We serve as a strategic IT partner with the responsiveness government clients require and the depth enterprise operations demand.</p>
              <div className="gh-why-feats">
                {[
                  { dot: '⚡', title: 'Rapid Incident Response',        desc: 'Same-day escalation protocols with hands-on cybersecurity response. We act on active threats immediately.' },
                  { dot: '📋', title: 'Documentation-First Operations', desc: 'Full audit trails, change logs, and incident reports — ready for government oversight requirements.' },
                  { dot: '🤝', title: 'SLA-Backed Commitments',         desc: 'Written SLAs with defined response windows, escalation paths, and performance accountability.' },
                  { dot: '🔎', title: 'Independent, Vendor-Neutral',    desc: 'Technology evaluated on fit and security — not commissions. Our recommendations serve the mission.' },
                ].map(({ dot, title, desc }) => (
                  <div className="gh-why-feat" key={title}>
                    <div className="gh-why-dot">{dot}</div>
                    <div>
                      <div className="gh-why-feat-title">{title}</div>
                      <div className="gh-why-feat-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="gh-metrics-grid">
              <div className="gh-metric-full">
                <div className="gh-metric-full-num">50+</div>
                <div className="gh-metric-full-label">Years Combined Expertise</div>
              </div>
              <div className="gh-metric-half gh-metric-half--white">
                <div className="gh-metric-half-num">24/7</div>
                <div className="gh-metric-half-label">Monitoring</div>
              </div>
              <div className="gh-metric-half gh-metric-half--gold">
                <div className="gh-metric-half-num">&lt;2hr</div>
                <div className="gh-metric-half-label">Response SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────────────── */}
      <section id="industries" className="gh-section">
        <div className="gh-section-inner">
          <div className="gh-tag">Industries Served</div>
          <h2 className="gh-title">Sector Experience</h2>
          <p className="gh-desc">Proven IT and cybersecurity delivery across regulated, high-stakes industries that demand security, uptime, and compliance.</p>
          <div className="gh-industries-grid">
            {[
              { icon: '🏛️', name: 'Government & Public Sector', desc: 'Federal, state, and county agency IT support with full compliance documentation' },
              { icon: '⚖️', name: 'Legal',                       desc: 'Law firms and courts — data security, e-discovery support, and confidential communications' },
              { icon: '🔬', name: 'Biotech & Life Sciences',     desc: 'Regulated environments with IP protection, audit logging, and 21 CFR Part 11 awareness' },
              { icon: '🏭', name: 'Manufacturing',               desc: 'OT/IT convergence, network segmentation, and operational continuity for shop-floor environments' },
              { icon: '⚡', name: 'Energy & Utilities',          desc: 'Critical infrastructure protection, SCADA-adjacent security, and regulatory compliance support' },
              { icon: '🎓', name: 'Education',                   desc: 'K-12 and higher ed IT modernization, CIPA compliance, and secure student data management' },
            ].map(({ icon, name, desc }) => (
              <div className="gh-industry-card" key={name}>
                <div className="gh-industry-icon">{icon}</div>
                <div className="gh-industry-name">{name}</div>
                <div className="gh-industry-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RFP INQUIRY ─────────────────────────────────────────── */}
      <section id="rfp" className="gh-section gh-section--dark">
        <div className="gh-section-inner">
          <div className="gh-rfp-layout">
            <div>
              <div className="gh-tag">RFP &amp; Contract Inquiries</div>
              <h2 className="gh-title gh-title--white">Let&apos;s Respond<br />to Your RFP</h2>
              <p className="gh-desc gh-desc--muted">
                Whether you&apos;re a government agency, prime contractor, or enterprise client &mdash; tell us about
                your scope and timeline. We respond within one business day.
              </p>
              <div className="gh-rfp-points">
                {[
                  'Federal, state, and county RFP responses',
                  'Subcontractor and teaming arrangements',
                  'Sole-source justification support',
                  'Statement of work and technical volume',
                  'Enterprise managed services agreements',
                ].map(p => (
                  <div className="gh-rfp-point" key={p}><RFPCheck />{p}</div>
                ))}
              </div>
              <div className="gh-contact-box">
                <div className="gh-contact-box-title">Direct Contact</div>
                <div className="gh-contact-box-item">&#128231; info@rdeskservices.com</div>
                <div className="gh-contact-box-item">&#127758; rdeskservices.com</div>
              </div>
            </div>
            <div>
              <form className="gh-rfp-form" onSubmit={handleSubmit}>
                <div className="gh-form-title">RFP &amp; Contract Inquiry Form</div>
                <div className="gh-form-row">
                  <div className="gh-form-group" style={{ marginBottom: 0 }}>
                    <label className="gh-form-label" htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" className="gh-form-input" type="text" placeholder="Michael" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="gh-form-group" style={{ marginBottom: 0 }}>
                    <label className="gh-form-label" htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" className="gh-form-input" type="text" placeholder="Johnson" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div style={{ height: '1rem' }} />
                <div className="gh-form-group">
                  <label className="gh-form-label" htmlFor="agency">Agency / Organization</label>
                  <input id="agency" name="agency" className="gh-form-input" type="text" placeholder="County of Santa Clara" value={form.agency} onChange={handleChange} />
                </div>
                <div className="gh-form-group">
                  <label className="gh-form-label" htmlFor="email">Email Address</label>
                  <input id="email" name="email" className="gh-form-input" type="email" placeholder="procurement@agency.gov" value={form.email} onChange={handleChange} required />
                </div>
                <div className="gh-form-group">
                  <label className="gh-form-label" htmlFor="contractType">Contract Type</label>
                  <select id="contractType" name="contractType" className="gh-form-select" value={form.contractType} onChange={handleChange}>
                    <option value="">Select contract type…</option>
                    <option>Federal RFP / RFQ</option>
                    <option>State RFP</option>
                    <option>County / Local RFP</option>
                    <option>Prime / Subcontractor Teaming</option>
                    <option>Enterprise Managed Services</option>
                    <option>Sole Source / Emergency</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div className="gh-form-group">
                  <label className="gh-form-label" htmlFor="scope">Scope / Description</label>
                  <textarea id="scope" name="scope" className="gh-form-textarea" placeholder="Briefly describe your IT or cybersecurity requirements, contract vehicle, and performance period…" value={form.scope} onChange={handleChange} />
                </div>
                <div className="gh-form-group" style={{ marginBottom: 0 }}>
                  <label className="gh-form-label" htmlFor="timeline">Estimated Timeline</label>
                  <select id="timeline" name="timeline" className="gh-form-select" value={form.timeline} onChange={handleChange}>
                    <option value="">Select timeline…</option>
                    <option>Immediate (RFP open now)</option>
                    <option>Within 30 days</option>
                    <option>60–90 days</option>
                    <option>Planning phase (6+ months)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className={`gh-form-submit${submitState === 'success' ? ' gh-form-submit--success' : ''}`}
                  disabled={submitState === 'loading'}
                >
                  {submitState === 'loading' ? 'Sending…' : submitState === 'success' ? 'Inquiry Submitted ✓' : submitState === 'error' ? 'Error — Try Again' : 'Submit Inquiry →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="gh-footer">
        <div className="gh-footer-inner">
          <div className="gh-footer-top">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="gh-logo-mark">R</div>
                <div className="gh-logo-text">RDesk Services LLC<span>Managed IT &amp; Cybersecurity</span></div>
              </div>
              <p className="gh-footer-brand-desc">Delivering enterprise IT and cybersecurity solutions to government agencies and regulated industries. Trusted. Compliant. Responsive.</p>
              <div className="gh-footer-contact">
                <div>&#128231; info@rdeskservices.com</div>
                <div>&#128222; 831-529-4490</div>
                <div>&#127758; rdeskservices.com</div>
              </div>
            </div>
            <div>
              <div className="gh-footer-col-title">IT Solutions</div>
              <ul className="gh-footer-links">
                <li><a href="/solutions/helpdesk-solutions">Helpdesk &amp; Managed Support</a></li>
                <li><a href="/solutions/network-services">Network Services</a></li>
                <li><a href="/solutions/cyber-security">Cyber Security</a></li>
                <li><a href="/solutions/cloud-engineering-devops">Cloud Engineering / DevOps</a></li>
                <li><a href="/solutions/data-recovery">Disaster Recovery</a></li>
                <li><a href="/solutions/full-stack-development">Full Stack Development</a></li>
                <li><a href="/solutions">View All IT Services &#8594;</a></li>
              </ul>
            </div>
            <div>
              <div className="gh-footer-col-title">Compliance &amp; Gov</div>
              <ul className="gh-footer-links">
                <li><a onClick={() => handleNav('government')}>SAM.gov Registration</a></li>
                <li><a onClick={() => handleNav('government')}>Capabilities Statement</a></li>
                <li><a onClick={() => handleNav('government')}>NAICS Codes</a></li>
                <li><a href="/compliance/ISO9001">ISO 9001 : 2015</a></li>
                <li><a href="/compliance/ISO27001">ISO 27001 : 2022</a></li>
                <li><a href="/compliance/CMMC">CMMC : 2018</a></li>
                <li><a href="/compliance">View All Standards &#8594;</a></li>
              </ul>
            </div>
            <div>
              <div className="gh-footer-col-title">More Services</div>
              <ul className="gh-footer-links">
                <li><a href="/education-technology-solutions">Education Technology</a></li>
                <li><a href="/junk-ewaste/junk-removal">Junk Removal</a></li>
                <li><a href="/junk-ewaste/ewaste-disposal">E-Waste Disposal</a></li>
                <li><a href="/junk-ewaste/office-moves">Office Moves</a></li>
                <li><a href="/other_services">Other Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a onClick={() => handleNav('rfp')}>Submit RFP Inquiry</a></li>
              </ul>
            </div>
          </div>
          <div className="gh-footer-bottom">
            <div className="gh-footer-copy">&#169; 2026 RDesk Services LLC. All rights reserved.</div>
            <div className="gh-footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GovHomePage;

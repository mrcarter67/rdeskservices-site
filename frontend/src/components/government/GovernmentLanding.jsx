import React, { useEffect } from 'react';
import Header from '../assets/Header';
import Footer from '../assets/Footer';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faNetworkWired,
  faCloud,
  faShieldHalved,
  faHeadset,
  faFileArrowDown,
  faCircleCheck,
  faBuilding,
  faIdCard,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/* ─────────────────────────────────────────────────────────────
   Inline styles scoped to this page only — uses site tokens
   Primary: #3fa1c1  |  Text: #414445  |  Gray bg: #f5f5f5
───────────────────────────────────────────────────────────── */
const S = {
  accentBar: {
    width: 40,
    height: 3,
    background: '#00AAB3',
    margin: '8px 0 18px',
  },
  sectionAlt: {
    background: '#f5f5f5',
    padding: '50px 0 60px',
  },
  statBar: {
    background: '#3fa1c1',
    padding: '28px 0',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 700,
    fontFamily: 'Raleway, sans-serif',
    color: '#fff',
    display: 'block',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    color: 'rgba(255,255,255,.85)',
  },
  infoBox: {
    background: '#1e4280',
    borderRadius: 6,
    padding: '28px 32px',
    color: '#fff',
    height: '100%',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,.12)',
    fontSize: 14,
  },
  infoLabel: { color: 'rgba(255,255,255,.65)' },
  infoValue: { fontWeight: 600, textAlign: 'right' },
  naicsTable: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 14,
    boxShadow: '0 4px 8px rgba(0,0,0,.1)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  samCard: {
    background: '#fff',
    border: '1px solid #CFCBCB',
    borderTop: '4px solid #3fa1c1',
    borderRadius: 6,
    padding: '24px 20px',
    boxShadow: '0 4px 8px rgba(0,0,0,.07)',
    marginBottom: 24,
  },
  competencyCard: {
    background: '#fff',
    borderRadius: 6,
    padding: '28px 24px',
    boxShadow: '0 4px 8px rgba(0,0,0,.1)',
    borderBottom: '4px solid #1e4280',
    height: '100%',
    transition: 'transform .2s',
  },
  certCard: {
    background: '#fff',
    border: '1px solid #CFCBCB',
    borderRadius: 6,
    padding: '20px 16px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,.06)',
    marginBottom: 20,
  },
  perfCard: {
    background: '#fff',
    borderRadius: 6,
    padding: '28px',
    boxShadow: '0 4px 8px rgba(0,0,0,.1)',
    borderLeft: '5px solid #3fa1c1',
    marginBottom: 24,
  },
  primaryTag: {
    display: 'inline-block',
    background: '#3fa1c1',
    color: '#fff',
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.06em',
    padding: '2px 8px',
    borderRadius: 10,
    marginLeft: 8,
    verticalAlign: 'middle',
  },
  tag: {
    background: '#eef1f6',
    color: '#1e4280',
    fontSize: 11,
    fontWeight: 700,
    padding: '3px 10px',
    borderRadius: 10,
    textTransform: 'uppercase',
    letterSpacing: '.05em',
    display: 'inline-block',
    margin: '3px 4px 3px 0',
  },
  verifiedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    fontSize: 12,
    fontWeight: 700,
    color: '#1a7a3c',
    background: '#e6f5ec',
    border: '1px solid #a3d9b3',
    borderRadius: 12,
    padding: '3px 10px',
    marginTop: 10,
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #0d1f3c 0%, #14305a 100%)',
    padding: '80px 0',
    textAlign: 'center',
  },
  btnGold: {
    background: '#c49a10',
    color: '#fff',
    border: 'none',
    padding: '13px 32px',
    borderRadius: 20,
    fontWeight: 700,
    fontSize: 16,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background .2s',
    marginRight: 12,
    marginBottom: 12,
  },
  btnOutline: {
    background: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255,255,255,.4)',
    padding: '11px 28px',
    borderRadius: 20,
    fontWeight: 700,
    fontSize: 15,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'border-color .2s',
    marginBottom: 12,
  },
};

/* ─── Small reusable sub-components ─────────────────────────── */

const SectionTitle = ({ label, title }) => (
  <div style={{ marginBottom: 36 }}>
    <p style={{ textTransform: 'uppercase', letterSpacing: '.12em', fontSize: 12, fontWeight: 700, color: '#3fa1c1', marginBottom: 4 }}>
      {label}
    </p>
    <h2 style={{ margin: '0 0 8px', fontFamily: 'Raleway, sans-serif' }}>{title}</h2>
    <div style={S.accentBar} />
  </div>
);

const CompetencyCard = ({ icon, title, description, tags }) => (
  <div className="col-md-3 col-sm-6" style={{ marginBottom: 24 }}>
    <div style={S.competencyCard}>
      <div style={{ fontSize: 28, color: '#3fa1c1', marginBottom: 14 }}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4 style={{ marginBottom: 10 }}>{title}</h4>
      <p style={{ fontSize: 14, lineHeight: '22px', marginBottom: 14 }}>{description}</p>
      <div>{tags.map(t => <span key={t} style={S.tag}>{t}</span>)}</div>
    </div>
  </div>
);

const PerfCard = ({ agency, title, value, period, description, naics }) => (
  <div className="col-md-6" style={{ marginBottom: 24 }}>
    <div style={S.perfCard}>
      <p style={{ fontSize: 11, fontWeight: 700, color: '#3fa1c1', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>
        {agency}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <h4 style={{ margin: 0, flex: 1, paddingRight: 12 }}>{title}</h4>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 16, color: '#414445', display: 'block' }}>{value}</span>
          <span style={{ fontSize: 12, color: '#727272' }}>{period}</span>
        </div>
      </div>
      <p style={{ fontSize: 14, lineHeight: '22px', marginBottom: 12 }}>{description}</p>
      <code style={{ fontSize: 12, background: '#f5f5f5', padding: '2px 8px', borderRadius: 4, color: '#1e4280' }}>NAICS {naics}</code>
    </div>
  </div>
);

/* ─── Main Page Component ─────────────────────────────────────── */

const GovernmentLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

      {/* ── Hero / Page Header ─────────────────────────────── */}
      <section id="page-header" className="parallax">
        <div className="overlay" />
        <div className="container">
          <h1>Government Services</h1>
          <div className="landing-links">
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color="white" size="lg" /></p>
            <p className="btn"><strong>Government</strong></p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────── */}
      <div style={S.statBar}>
        <div className="container">
          <div className="row text-center">
            {[
              { num: '10+',   label: 'Years in Business' },
              { num: '50+',   label: "Gov't Engagements" },
              { num: '5K+',   label: 'Endpoints Managed' },
              { num: '99%',   label: 'SLA Compliance Rate' },
              { num: '15',    label: 'States Served' },
            ].map(({ num, label }) => (
              <div className="col-md-2 col-xs-4" key={label} style={{ padding: '8px 0' }}>
                <span style={S.statNumber}>{num}</span>
                <span style={S.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Company Overview ───────────────────────────────── */}
      <section id="overview" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <SectionTitle label="Company Overview" title="Who We Are" />
              <p>
                RDesk Services is a <strong>US-based IT managed services provider</strong> with
                proven experience supporting government clients at the federal, state, and local levels.
                Founded on the principle that public-sector agencies deserve enterprise-grade IT without
                the enterprise-grade complexity, we bring deep expertise across networking, cloud
                infrastructure, cybersecurity, and service-desk operations.
              </p>
              <p>
                Our team maintains active security clearances and industry-recognized certifications,
                enabling rapid onboarding to sensitive environments. We operate under NIST 800-53, FISMA,
                and CMMC compliance frameworks, ensuring mission-critical data and infrastructure remain
                secure, available, and fully auditable.
              </p>
              <p>
                As a <strong>small business</strong>,
                RDesk Services qualifies for set-aside contracting vehicles, helping agencies meet small
                business utilization goals while receiving high-caliber technical performance.
              </p>
            </div>
            <div className="col-md-5">
              <div style={S.infoBox}>
                <p style={{ color: '#3fa1c1', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 18 }}>
                  <FontAwesomeIcon icon={faBuilding} style={{ marginRight: 8 }} />
                  Company Profile
                </p>
                {[
                  ['Legal Name',      'RDesk Services LLC'],
                  ['Founded',         '—'],
                  ['Headquarters',    '—'],
                  ['Business Size',   'Small Business'],
                  ['Business Type',   '—'],
                  ['Entity Type',     'LLC'],
                  ['EIN',             '—'],
                  ['UEI',             '—'],
                  ['CAGE Code',       '—'],
                  ['SAM Expiration',  '—'],
                  ['Point of Contact','—'],
                ].map(([label, value]) => (
                  <div key={label} style={S.infoRow}>
                    <span style={S.infoLabel}>{label}</span>
                    <span style={S.infoValue}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NAICS Codes ────────────────────────────────────── */}
      <section id="naics" style={S.sectionAlt}>
        <div className="container">
          <SectionTitle label="Procurement Reference" title="NAICS Codes" />
          <p style={{ maxWidth: 680, marginBottom: 32 }}>
            RDesk Services is registered under the following NAICS codes, covering the full scope
            of IT managed services, cybersecurity, and technical support for government procurement.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.naicsTable}>
              <thead style={{ background: '#0d1f3c', color: '#fff' }}>
                <tr>
                  {['NAICS Code', 'Description', 'Size Standard'].map(h => (
                    <th key={h} style={{ padding: '13px 20px', textAlign: 'left', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { code: '541512', label: 'PRIMARY', desc: 'Computer Systems Design Services',                            size: '$34.0M avg. annual receipts' },
                  { code: '541519', label: null,      desc: 'Other Computer Related Services',                             size: '$34.0M avg. annual receipts' },
                  { code: '541513', label: null,      desc: 'Computer Facilities Management Services',                     size: '$34.0M avg. annual receipts' },
                  { code: '541611', label: null,      desc: 'Administrative Management Consulting Services',               size: '$24.5M avg. annual receipts' },
                  { code: '518210', label: null,      desc: 'Data Processing, Hosting, and Related Services',              size: '$47.0M avg. annual receipts' },
                  { code: '561320', label: null,      desc: 'Temporary Help Services (IT Staffing)',                       size: '500 employees' },
                ].map(({ code, label, desc, size }, i) => (
                  <tr key={code} style={{ background: i % 2 === 0 ? '#fff' : '#f5f5f5' }}>
                    <td style={{ padding: '12px 20px', fontFamily: 'Courier New, monospace', fontWeight: 700, color: '#1e4280', whiteSpace: 'nowrap', borderBottom: '1px solid #CFCBCB' }}>
                      {code}
                      {label && <span style={S.primaryTag}>{label}</span>}
                    </td>
                    <td style={{ padding: '12px 20px', borderBottom: '1px solid #CFCBCB' }}>{desc}</td>
                    <td style={{ padding: '12px 20px', borderBottom: '1px solid #CFCBCB', color: '#727272', fontSize: 13 }}>{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SAM / UEI Registration ─────────────────────────── */}
      <section id="sam" className="section">
        <div className="container">
          <SectionTitle label="Federal Registration" title="UEI & SAM.gov Registration" />
          <p style={{ maxWidth: 680, marginBottom: 36 }}>
            RDesk Services maintains an active registration in the System for Award Management
            (SAM.gov), the federal government's official database of approved vendors.
          </p>
          <div className="row">
            {[
              {
                icon: faIdCard,
                label: 'Unique Entity Identifier (UEI)',
                value: '—',
                desc: 'Issued by SAM.gov. Replaces the legacy DUNS number for all federal procurement and grant award purposes.',
                badge: true,
              },
              {
                icon: faBuilding,
                label: 'CAGE Code',
                value: '—',
                desc: 'Commercial and Government Entity code assigned by the Defense Logistics Agency for DoD and federal contracting.',
                badge: false,
              },
              {
                icon: faCircleCheck,
                label: 'SAM Registration Status',
                value: 'Active',
                desc: 'Registration renewed annually. Compliant with all FAR Part 4 requirements.',
                badge: true,
              },
              {
                icon: faAward,
                label: 'Set-Aside Qualifications',
                value: 'Small Business',
                desc: 'Eligible for small business set-aside contracts, helping agencies meet small business utilization goals.',
                badge: false,
              },
            ].map(({ icon, label, value, desc, badge }) => (
              <div className="col-md-3 col-sm-6" key={label} style={{ marginBottom: 24 }}>
                <div style={S.samCard}>
                  <div style={{ fontSize: 26, color: '#3fa1c1', marginBottom: 12 }}>
                    <FontAwesomeIcon icon={icon} />
                  </div>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#727272', marginBottom: 6 }}>{label}</p>
                  <p style={{ fontFamily: 'Courier New, monospace', fontWeight: 700, fontSize: 15, color: '#414445', marginBottom: 10 }}>{value}</p>
                  <p style={{ fontSize: 13, lineHeight: '20px', marginBottom: 0 }}>{desc}</p>
                  {badge && (
                    <div style={S.verifiedBadge}>
                      <FontAwesomeIcon icon={faCircleCheck} size="sm" /> SAM.gov Verified
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Competencies ──────────────────────────────── */}
      <section id="competencies" style={S.sectionAlt}>
        <div className="container">
          <SectionTitle label="Core Competencies" title="What We Deliver" />
          <p style={{ maxWidth: 680, marginBottom: 36 }}>
            Our service-delivery model is purpose-built for government environments — compliant,
            fully documented, and performance-driven with SLA accountability.
          </p>
          <div className="row">
            <CompetencyCard
              icon={faNetworkWired}
              title="Network Management"
              description="Design, deployment, and 24/7 monitoring of LAN/WAN infrastructure. Full NOC support across multi-site government networks with SLA-backed uptime guarantees."
              tags={['Cisco', 'Fortinet', 'SD-WAN', 'MPLS', 'NOC']}
            />
            <CompetencyCard
              icon={faCloud}
              title="Cloud Services"
              description="Migration, management, and optimization of government workloads on FedRAMP-authorized platforms. Hybrid architectures and agency-specific compliance support."
              tags={['AWS GovCloud', 'Azure Gov', 'FedRAMP', 'IaaS / PaaS']}
            />
            <CompetencyCard
              icon={faShieldHalved}
              title="Cybersecurity"
              description="End-to-end security operations: threat detection, incident response, vulnerability management, and compliance assessments aligned to NIST 800-53 and CMMC."
              tags={['SIEM / SOC', 'NIST 800-53', 'CMMC', 'Zero Trust', 'FISMA']}
            />
            <CompetencyCard
              icon={faHeadset}
              title="Help Desk & End-User Support"
              description="Tier 1–3 service desk with ITIL-based processes, ticketing integration, and remote/onsite resolution. Monthly SLA reporting delivered to agency POCs."
              tags={['ITIL v4', 'ServiceNow', 'Tier 1–3', 'Remote & Onsite']}
            />
          </div>
        </div>
      </section>

      {/* ── Certifications ─────────────────────────────────── */}
      <section id="certifications" className="section">
        <div className="container">
          <SectionTitle label="Credentials & Compliance" title="Certifications" />
          <p style={{ maxWidth: 680, marginBottom: 36 }}>
            Our team holds current industry certifications across networking, cloud, security,
            and service management disciplines. Full roster available on request.
          </p>
          <div className="row">
            {[
              { name: 'CompTIA Security+',         org: 'CompTIA',             icon: '🔐' },
              { name: 'CompTIA Network+',          org: 'CompTIA',             icon: '🌐' },
              { name: 'AWS Solutions Architect',   org: 'Amazon Web Services', icon: '☁️' },
              { name: 'Azure Administrator',       org: 'Microsoft',           icon: '🔵' },
              { name: 'ITIL v4 Foundation',        org: 'Axelos / PeopleCert', icon: '📦' },
              { name: 'CISSP / CISM',              org: 'ISC² / ISACA',        icon: '🛡️' },
              { name: 'Cisco CCNA / CCNP',         org: 'Cisco Systems',       icon: '🔺' },
              { name: 'PMP',                       org: 'PMI',                 icon: '📋' },
            ].map(({ name, org, icon }) => (
              <div className="col-md-3 col-sm-4 col-xs-6" key={name}>
                <div style={S.certCard}>
                  <div style={{ fontSize: 30, marginBottom: 8 }}>{icon}</div>
                  <p style={{ fontWeight: 700, fontSize: 13, color: '#414445', marginBottom: 4 }}>{name}</p>
                  <p style={{ fontSize: 12, color: '#727272', marginBottom: 0 }}>{org}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#727272', marginTop: 12 }}>
            * Certifications held by current full-time staff. Remove any not applicable before publishing.
          </p>
        </div>
      </section>

      {/* ── Past Performance ───────────────────────────────── */}
      <section id="past-performance" style={S.sectionAlt}>
        <div className="container">
          <SectionTitle label="Proven Track Record" title="Past Performance" />
          <p style={{ maxWidth: 680, marginBottom: 36 }}>
            Selected engagements demonstrating on-time delivery, technical competency,
            and measurable mission impact across federal, state, and county clients.
          </p>
          <div className="row">
            <PerfCard
              agency="Federal Agency"
              title="IT Managed Services — Network Infrastructure"
              value="Contract Value TBD"
              period="FY2022–FY2024"
              description="Add 2–3 sentences describing scope and measurable outcome. Example: Managed enterprise LAN for 1,200 endpoints across 4 facilities, reducing MTTR by 42% and achieving 99.97% uptime."
              naics="541512"
            />
            <PerfCard
              agency="State Agency"
              title="Help Desk & End-User Support Services"
              value="Contract Value TBD"
              period="FY2023–Present"
              description="Add 2–3 sentences describing scope and measurable outcome. Example: Delivered Tier 1–3 help desk for 800 concurrent users with a 98.5% first-call resolution rate for 22 consecutive months."
              naics="541512"
            />
            <PerfCard
              agency="County / Municipal Agency"
              title="Cybersecurity Assessment & Remediation"
              value="Contract Value TBD"
              period="FY2021–FY2023"
              description="Add 2–3 sentences describing scope and measurable outcome. Example: Achieved NIST CSF compliance and closed 147 open vulnerabilities within 90 days of award."
              naics="541519"
            />
            <PerfCard
              agency="Agency Name"
              title="Cloud Migration & Managed Hosting"
              value="Contract Value TBD"
              period="FY2023–FY2024"
              description="Add 2–3 sentences describing the scope and measurable outcome of this engagement."
              naics="518210"
            />
          </div>
          <p style={{ fontSize: 13, color: '#727272' }}>
            References and CPARS ratings available upon written request.
          </p>
        </div>
      </section>

      {/* ── Capabilities Statement CTA ─────────────────────── */}
      <section id="capabilities-statement" style={S.ctaSection}>
        <div className="container">
          <p style={{ textTransform: 'uppercase', letterSpacing: '.12em', fontSize: 12, fontWeight: 700, color: '#c49a10', marginBottom: 8 }}>
            Ready to Procure?
          </p>
          <h2 style={{ color: '#fff', fontFamily: 'Raleway, sans-serif', marginBottom: 16 }}>
            Download Our Capabilities Statement
          </h2>
          <p style={{ color: 'rgba(255,255,255,.75)', maxWidth: 620, margin: '0 auto 36px', fontSize: 15, lineHeight: '26px' }}>
            Our one-page Capabilities Statement summarizes our NAICS codes, UEI, set-aside status,
            core competencies, and key differentiators — formatted for quick review by procurement
            officers and acquisition personnel.
          </p>
          <div>
            <a
              href="/capabilities-statement.pdf"
              download
              style={S.btnGold}
            >
              <FontAwesomeIcon icon={faFileArrowDown} style={{ marginRight: 8 }} />
              Download PDF (1-Page)
            </a>
            <a
              href="/contact?service=Government+Contracting"
              style={S.btnOutline}
            >
              Contact Our Contracting Lead
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 12, marginTop: 20 }}>
            PDF · Updated 2025 · SBA Capabilities Statement compliant
          </p>
        </div>
      </section>

      <div className="footer" />
      <Footer />
    </div>
  );
};

export default GovernmentLanding;

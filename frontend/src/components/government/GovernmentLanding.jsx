import '../../css/government.css';

const GovernmentLanding = () => {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }}>

      {/* ── TOP BAR ──────────────────────────────────────── */}
      <div className="gv-topbar">
        <a href="/" className="gv-topbar-logo">
          <div className="gv-topbar-logo-mark">R</div>
          RDesk Services LLC
        </a>
        <a href="/" className="gv-topbar-back">
          &#8592; Back to Main Site
        </a>
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="gv-hero">
        <div className="gv-hero-tag">Government Contracting Hub</div>
        <h1>Procurement-Ready.<br /><em>Contract-Experienced.</em></h1>
        <p className="gv-hero-desc">
          RDesk Services LLC is SAM.gov registered, Small Business certified, and
          actively pursuing federal, state, and county contract vehicles across California
          and beyond.
        </p>
        <div className="gv-hero-badges">
          {[
            'SAM.gov Active',
            'Small Business Certified',
            'Cal eProcure Registered',
            'CMMC Level 1/2 Ready',
            'Section 508 Compliant',
            'NIST 800-171 Aligned',
          ].map(b => (
            <span className="gv-badge" key={b}>
              <span className="gv-badge-dot" />
              {b}
            </span>
          ))}
        </div>
        <div className="gv-hero-actions">
          <a href="/contact" className="gv-btn">Submit RFP Inquiry</a>
          <a href="/capabilities-statement.pdf" download className="gv-btn gv-btn-outline">
            Download Capabilities Statement
          </a>
        </div>
      </section>

      {/* ── NAICS STRIP ──────────────────────────────────── */}
      <div className="gv-naics-strip">
        <div className="gv-naics-strip-inner">
          <span className="gv-naics-label">NAICS Codes:</span>
          {['541512', '541513', '541519', '541611'].map(c => (
            <span className="gv-naics-chip" key={c}>{c}</span>
          ))}
        </div>
      </div>

      {/* ── GOV SERVICES — glass backdrop highlight ───────── */}
      <section className="gv-glass-section">
        <div className="gv-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="gv-section-tag" style={{ color: '#e0ac50' }}>Government IT Services</div>
          <h2 className="gv-title gv-title--white">
            Core Capabilities for<br />Government Contracts
          </h2>
          <p className="gv-desc gv-desc--light">
            Every service is scoped, documented, and deliverable under federal and state
            contract vehicles &mdash; with SLA-backed performance accountability.
          </p>
          <div className="gv-glass-grid">
            {[
              { icon: '🌐', title: 'Network Management',      desc: 'Enterprise network design, VLAN segmentation, FortiGate administration, SD-WAN, and 24/7 NOC support.',                   status: 'Contract Ready' },
              { icon: '🛡️', title: 'Cybersecurity & SOC',    desc: 'Threat detection, SIEM/Splunk operations, Microsoft 365 Defender, endpoint protection, and incident response.',           status: 'NIST Aligned' },
              { icon: '☁️', title: 'Cloud Infrastructure',    desc: 'Azure and M365 administration, cloud migrations, hybrid environments, Entra ID, and compliance architecture.',            status: 'FedRAMP Aware' },
              { icon: '💻', title: 'Managed Help Desk',       desc: 'Tier 1–3 support, endpoint management, patch administration, onboarding/offboarding, and SLA-backed response.',           status: 'SLA Backed' },
              { icon: '🔐', title: 'CMMC / Compliance',       desc: 'CMMC Level 1 and 2 readiness, NIST 800-171 gap assessments, CIS Controls, and documentation for DoD engagements.',       status: 'CMMC Ready' },
              { icon: '🗄️', title: 'Data Center & DR',       desc: 'Server administration, VMware virtualization, backup and disaster recovery, and compliance-ready infrastructure ops.',     status: 'Active' },
              { icon: '🔌', title: 'Professional Wiring',     desc: 'Structured cabling, network infrastructure installation, and site-ready connectivity for government facilities.',          status: 'Active' },
              { icon: '📱', title: 'Device Repair & Deploy',  desc: 'iPad and tablet repair, device imaging, and 1:1 deployment for education and government field operations.',               status: 'Active' },
              { icon: '💡', title: 'Full Stack Development',  desc: 'Custom application development, API integration, CRM/ERP implementation, and enterprise automation solutions.',           status: 'Contract Ready' },
            ].map(({ icon, title, desc, status }) => (
              <div className="gv-glass-card" key={title}>
                <div className="gv-glass-icon">{icon}</div>
                <div className="gv-glass-title">{title}</div>
                <div className="gv-glass-desc">{desc}</div>
                <div className="gv-glass-status">
                  <span className="gv-glass-status-dot" />{status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────── */}
      <section className="gv-section gv-section--alt">
        <div className="gv-inner">
          <div className="gv-section-tag">Registrations &amp; Certifications</div>
          <h2 className="gv-title">Vendor Credentials</h2>
          <p className="gv-desc">
            Active registrations across federal, state, and local government procurement
            platforms required for contract awards.
          </p>
          <div className="gv-creds-grid">
            {[
              { icon: '🏛️', title: 'SAM.gov — System for Award Management',     sub: 'Active federal registration required for all federal prime and subcontract awards.',                      status: 'Active' },
              { icon: '📜', title: 'California DGS — Small Business Certified', sub: 'Certified through CA Dept of General Services for state set-aside contracts via Cal eProcure.',           status: 'State Certified' },
              { icon: '🏙️', title: 'County Vendor Portals — CA Local Gov',      sub: 'Registered across California county procurement portals including Santa Clara and LA County.',            status: 'Multi-County' },
              { icon: '🔐', title: 'CMMC Level 1 / Level 2 Ready',              sub: 'NIST 800-171 aligned operations across all managed environments. DoD contract eligible.',                  status: 'CMMC Ready' },
              { icon: '♿', title: 'Section 508 — Accessibility Compliance',     sub: 'All digital deliverables meet Section 508 and WCAG 2.1 AA federal accessibility standards.',              status: '508 Compliant' },
              { icon: '🏢', title: 'Small Business Enterprise — California',     sub: 'SBE-certified for California state and local government procurement preferences and set-asides.',          status: 'SBE Certified' },
            ].map(({ icon, title, sub, status }) => (
              <div className="gv-cred-card" key={title}>
                <div className="gv-cred-icon">{icon}</div>
                <div>
                  <div className="gv-cred-title">{title}</div>
                  <div className="gv-cred-sub">{sub}</div>
                  <span className="gv-badge-active">&#10003; {status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NAICS + CAPABILITIES ─────────────────────────── */}
      <section className="gv-section">
        <div className="gv-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="gv-two-col">

            <div>
              <div className="gv-section-tag">NAICS Codes</div>
              <h2 className="gv-title">Industry Classification</h2>
              <p className="gv-desc">
                Registered under four NAICS codes covering the full spectrum of IT and
                consulting capabilities.
              </p>
              <table className="gv-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>541512</td><td>Computer Systems Design Services</td><td>Primary</td></tr>
                  <tr><td>541513</td><td>Computer Facilities Management Services</td><td>Secondary</td></tr>
                  <tr><td>541519</td><td>Other Computer-Related Services</td><td>Secondary</td></tr>
                  <tr><td>541611</td><td>Administrative Management Consulting</td><td>Secondary</td></tr>
                </tbody>
              </table>

              <div style={{ marginTop: '2.5rem' }}>
                <div className="gv-section-tag">Contract Vehicles</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', marginTop: '1rem' }}>
                  {['GSA MAS', 'SEWP V', 'State MSA', 'BPA', 'IDIQ', 'County RFP', 'Sole Source', 'T&M', 'FFP'].map(v => (
                    <span key={v} style={{
                      fontSize: '12px', fontWeight: 600, color: '#2d5499',
                      background: '#eef2fb', border: '1px solid #c7d5f0',
                      padding: '4px 12px', borderRadius: '100px',
                    }}>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="gv-section-tag">Capabilities Statement</div>
              <h2 className="gv-title">One-Page Summary</h2>
              <p className="gv-desc">
                Formatted to APTAC and SBA standards &mdash; core competencies, differentiators,
                past performance, NAICS codes, and CAGE code on one page.
              </p>
              <div className="gv-caps-box">
                <div className="gv-caps-text">
                  <h3>Download Capabilities Statement</h3>
                  <p>PDF &middot; 1 page &middot; Includes CAGE code, NAICS, past performance</p>
                </div>
                <a href="/capabilities-statement.pdf" download className="gv-caps-dl">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 2v7M4 6l3 3 3-3M2 10v2h10v-2" />
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="gv-reg-summary">
                <div className="gv-reg-title">Registration Summary</div>
                {[
                  { k: 'Legal Name',    v: 'RDesk Services LLC',      mono: false },
                  { k: 'SAM.gov',       v: 'Active',                  mono: false },
                  { k: 'Primary NAICS', v: '541512',                  mono: true  },
                  { k: 'Business Type', v: 'Small Business (SB)',      mono: false },
                  { k: 'State',         v: 'California',              mono: false },
                  { k: 'Email',         v: 'info@rdeskservices.com',  mono: false },
                  { k: 'Phone',         v: '(831) 529-4490',          mono: false },
                  { k: 'Website',       v: 'rdeskservices.com',       mono: true  },
                ].map(({ k, v, mono }) => (
                  <div className="gv-reg-row" key={k}>
                    <span className="gv-reg-key">{k}</span>
                    <span className={mono ? 'gv-reg-val gv-reg-val--mono' : 'gv-reg-val'}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────── */}
      <section className="gv-cta-strip">
        <h2>Ready to Respond to Your RFP?</h2>
        <p>Federal, state, county, or enterprise &mdash; we respond within one business day.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" className="gv-btn">Submit RFP Inquiry</a>
          <a href="/" className="gv-btn gv-btn-outline">Back to Main Site</a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="gv-footer">
        <div>&#169; 2026 RDesk Services LLC &mdash; All rights reserved.</div>
        <div style={{ marginTop: '.4rem' }}>
          <a href="/">rdeskservices.com</a>
          <a href="/contact">Contact</a>
          <a href="/compliance">Compliance</a>
          <a href="/solutions">IT Solutions</a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .gv-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
};

export default GovernmentLanding;

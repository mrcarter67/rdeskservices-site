import '../../css/style.css';
import '../../css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

/**
 * Component for Junk & E-Waste Services section on home page.
 *
 * @return {JSX.Element} - The JunkEWasteSection component.
 */
const JunkEWasteSection = () => {
    const navigate = useNavigate();

    return (
        <section id="junk-ewaste" className="section">
            <div className="container">
                <div className="title-box text-center">
                    <h2 className="title">Junk, E-Waste &amp; Office Moves</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="core-features">
                            <p>
                                RDESK offers comprehensive junk removal, secure e-waste disposal, and
                                professional office move services for businesses and homeowners. From
                                furniture and debris cleanouts to certified data destruction and IT rack
                                installation — we handle it all. Licensed, insured, and committed to fast,
                                reliable service.
                            </p>
                            <ul style={{ paddingLeft: '1.5em', marginTop: '1em', listStyle: 'none' }}>
                                <li style={{ padding: '4px 0' }}>&#10003; Office Cleanouts, Furniture &amp; Debris Removal</li>
                                <li style={{ padding: '4px 0' }}>&#10003; Secure E-Waste Disposal &amp; Certified Data Destruction</li>
                                <li style={{ padding: '4px 0' }}>&#10003; Commercial &amp; Residential Office Moves</li>
                                <li style={{ padding: '4px 0' }}>&#10003; IT Server Rack Installation &amp; Setup</li>
                                <li style={{ padding: '4px 0' }}>&#10003; Asset Tagging &amp; Inventory Reports</li>
                                <li style={{ padding: '4px 0' }}>&#10003; Monthly &amp; Quarterly Pickup Plans</li>
                            </ul>
                            <p style={{ marginTop: '1em', fontWeight: 'bold', color: '#3fa1c1' }}>
                                Licensed &amp; Insured &nbsp;|&nbsp; Call for a Free Estimate: 831-529-4490
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <a onClick={() => navigate('/junk-ewaste')} className="middle btn-gray-border hover-btn-blue">
                                    Learn More
                                </a>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <a onClick={() => navigate('/contact#request-service#junk-ewaste')} className="middle btn-gray-border hover-btn-blue">
                                    Request Service
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="devices-image">
                            <img src="images/installation.jpg" alt="Junk and E-Waste Removal Services" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JunkEWasteSection;

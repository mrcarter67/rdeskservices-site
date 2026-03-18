import { useNavigate } from 'react-router-dom';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Card component for an individual Junk & E-Waste service on the landing page.
 *
 * @param {Object} props.service - Service data object.
 * @return {JSX.Element} - The JunkEWasteCard component.
 */
const JunkEWasteCard = ({ service }) => {
    const navigate = useNavigate();

    return (
        <div className="tab-content-main">
            <div className="container">
                <div className="tab-content">
                    <div className="tab-panel" id={`${service.id}`}>
                        <div className="tab-content-2">
                            <div className="col-md-6">
                                <div className="core-features">
                                    <p>{service.description}</p>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                        <a onClick={() => navigate(service['page-link'])} className="middle btn-gray-border hover-btn-blue">
                                            Learn More
                                        </a>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                        <a onClick={() => navigate(`/contact#request-service#junk-ewaste#${service.id}`)} className="middle btn-gray-border hover-btn-blue">
                                            Request Service
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="devices-image">
                                    <img src={`images/${service.images[0]}`} alt={service.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JunkEWasteCard;

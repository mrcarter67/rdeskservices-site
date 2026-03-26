import '../css/style.css'
import '../css/bootstrap.min.css'

import { useState } from 'react';

/**
 * Component for expandable core services section.  
 * 
 * @return {JSX.Element} - The CoreCard component.
 */
const CoreCard = ({info}) => {
    const [expanded, setExpanded] = useState(false);
    const toggleCard = () => setExpanded(!expanded);

    return (
        <div className="panel-default">
            <div className="panel-heading" onClick={toggleCard} 
                  style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
                <h4 className="panel-title" style={{textAlign: 'center'}}>
                    {info.name}
                </h4>
                <span className={'symbol'}>{expanded ? '-' : '+'}</span>
            </div>
            <div style={{ maxHeight: expanded ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.25s ease' }} className={`${expanded ? 'show' : ''}`}>
                <div className="panel-body">
                    <p>{info.description}</p>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '1em' }}>
                        <a href={info['page-link'] || '/solutions'} className="middle btn-gray-border hover-btn-blue" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            Learn More
                        </a>
                        <a href="/contact#get-quote" className="middle btn-gray-border hover-btn-blue" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            Get a Free Quote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreCard;
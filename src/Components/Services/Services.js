import React from 'react';
import "./Services.css"

function Services({no, title, description}) {
    return (
        <div className="item col-lg-4 col-md-6 col-sm-12">
            <div className="card">
                <div className="box-wrap">
                    <div className="icon">
                        <img className="header__laptopIcon" src="./laptop-icon.png" />
                    </div>
                    <h4 className="number">{no}</h4>
                    <h4><a href="#url">{title}</a></h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Services

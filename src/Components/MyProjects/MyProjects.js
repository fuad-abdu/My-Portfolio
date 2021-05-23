import React from 'react';
import { Link } from 'react-router-dom';
import "./MyProjects.css";

function MyProjects({ img, URL, title }) {
    return (
        <div className="projects mb-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="image">
                        <img src={img} alt="" />
                        <div className="overlay">
                            <Link to={`/project-images/${title}/`}>
                                See More Images
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text col-md-6">
                    <h2>{title}</h2>
                    <a href={URL} target="_blank" >See The Website</a>
                </div>
            </div>
        </div>
    )
}

export default MyProjects

import React from 'react'
import "./About.css"

function About() {
    return (
        <div>
            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">About Me</h2>
                        <ul className="breadcrumbs-custom-path mt-2 mr-5">
                            <li className=""><a href="#url">Home</a></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> About Me </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w3l-aboutblock1 bg-white" id="about">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row">
                            {/* <!-- <div className="col-lg-4">
            <div className="position-relative">
              <img src="assets/images/myphoto1.jpg" alt="" className="radius-image img-fluid">
            </div>
          </div> --> */}
                            <div className="col-lg-8 mt-lg-0 mt-5">
                                <h5 className="title-small mb-2">Hello, I am a Web Developer</h5>
                                <h3 className="title-big">I'm a Self Taught Web Developer</h3>
                                <p className="mt-4">Hi My Name Is Fuad, I am Studying In 10th Standard.</p>
                                <div className="my-info mt-4">
                                    <div className="single-info"><span>Name:</span>
                                        <p>Fuad</p>
                                    </div>
                                    <div className="single-info"><span>Age:</span>
                                        <p>15 Years</p>
                                    </div>
                                    <div className="single-info"><span>From:</span>
                                        <p>India</p>
                                    </div>
                                    <div className="single-info"><span>Email:</span>
                                        <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdXbMSGBMHxnZmbmVXtkWztgpwVlnJDNBLJLzPDvjBtNLxSPddJsXFQSWZsSqfPcrWDGb" target="__blank">fvkfuad@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="my-social mt-lg-5 mt-4">
                                    <a href="#download" className="btn btn-style btn-primary">Download CV</a>
                                    <ul className="social m-0 p-0">
                                        <li><a href="https://www.instagram.com/f_u_a_d_a_b_d_u/"><span class="fab fa-instagram"></span></a></li>
                                        <li><a href="https://www.facebook.com/fuad.abdu.3348390"><span
                                            className="fab fa-facebook-square"></span></a></li>
                                        <li><a href="https://github.com/fuadabdu123?tab=repositories"><span
                                            className="fab fa-github"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About

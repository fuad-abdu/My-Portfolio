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
                            <li className=""><a href="/">Home</a></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> About Me </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w3l-aboutblock1" id="about">
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
                                    <a href="https://docs.google.com/document/d/1qNzkgmWw9wIph51GlPsu1IkD6SGhTZJeX9ECRJYicOo/edit?usp=sharing" target="_blank" className="btn btn-style btn-primary">Download CV</a>
                                    <ul className="social m-0 p-0">
                                        <li><a href="https://www.instagram.com/f_u_a_d_a_b_d_u/" target="_blank"><span className="fab fa-instagram"></span></a></li>
                                        <li><a href="https://www.facebook.com/fuad.abdu.3348390" target="_blank"><span
                                            className="fab fa-facebook-square"></span></a></li>
                                        <li><a href="https://github.com/fuadabdu123?tab=repositories" target="_blank"><span
                                            className="fab fa-github"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="py-5 about_resume">
                <div class="container py-lg-5 py-3 ">
                    <h5 class="title-small mb-2 text-center"> Hello</h5>
                    <h3 class="title-big mb-4 text-center">I Can give your business a new Creative start right away! </h3>
                    {/* <!-- <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites
                    for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful
                    and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and
        deliver faster</p> --> */}
                    <div class="row features-w3pvt-main mt-5 pt-md-3 " id="features">
                        <div class="col-lg-4 feature-gird mb-4">
                            <div class="row features-hny-inner-gd">
                                <div class=" featured_grid_left">
                                    <div class="icon_left_grid">
                                        <span class="fa fa-laptop" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class=" featured_grid_right_info">
                                    <h4><a class="link-hny" href="#url">Responsive Design </a></h4>
                                    {/* <!-- <p>Lorem ipsum dolor sit amet elit consec tetur adipisi elit., rem!</p> --> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 feature-gird mb-4">
                            <div class="row features-hny-inner-gd">
                                <div class="featured_grid_left">
                                    <div class="icon_left_grid">
                                        <span class="far fa-edit" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class=" featured_grid_right_info">
                                    <h4><a class="link-hny" href="#url">Powerful Editor </a></h4>
                                    {/* <!-- <p>Lorem ipsum dolor sit amet elit consec tetur adipisi elit., rem!</p> --> */}
                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-4  feature-gird mb-4">
                            <div class="row features-hny-inner-gd">
                                <div class=" featured_grid_left">
                                    <div class="icon_left_grid">
                                        <span class="fa fa-desktop" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class=" featured_grid_right_info">
                                    <h4><a class="link-hny" href="#url">Creative Design </a></h4>
                                    {/* <!-- <p>Lorem ipsum dolor sit amet elit consec tetur adipisi elit., rem!</p> --> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section class="w3l-content-6 py-5">
                <div class="content-6-mian py-lg-5 py-md-4">
                    <div class="container">
                        <div class="content-info-in row">
                            <div class="content-gd col-lg-5">
                                <h3 class="title-big mb-4">Motivated by the Desire to achieve Success</h3>
                                {/* <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, odit! Perspiciatis et
                                consequuntur non, modi quo mollitia labore laborum voluptas quia officiis fugit soluta molestias
                                quaerat sapiente sunt.
            </p> --> */}
                            </div>
                            <div class="content-gd col-lg-6 offset-lg-1">
                                <div class="progress-info">
                                    <h6 class="progress-tittle">UI/UX Design</h6>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-info">
                                    <h6 class="progress-tittle">Ideas & Technology
              </h6>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "95%"}} aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-info">
                                    <h6 class="progress-tittle">Branding Design</h6>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "55%"}} aria-valuenow="55"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-info mb-0">
                                    <h6 class="progress-tittle">Responsive Web Design</h6>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
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

import React, { useEffect } from 'react'
import './Home.css';
import Services from '../Services/Services';
import MyProjects from '../MyProjects/MyProjects';
import CountUp from 'react-countup';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {

    const texts = ["WebDeveloper", "Freelancer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        var element = document.querySelector('.typed-text')

        if (element) {
            element.textContent = letter;
        }

        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 400);
    })();

    return (
        <div className="home">
            <div className="">
                <div className="row align-items-center">
                    <section className="Intro">
                        <div className="col-lg-12 col-sm-12 mt-lg-0 mt-4 text-center">
                            <span className="title-small">Hello</span>
                            <h1 className="mb-2 title"> <span>I'm</span> Fuad </h1>
                            <h1 className="mb-4 title">a<span className="typed-text">hi</span></h1>
                            <div className="mt-sm-5 mt-4">
                                <Link className="btn btn-primary btn-style mr-2" to="/contact"> Hire Me </Link>
                            </div>
                        </div>
                    </section>

                    <section className="about-container">
                        <div className="container about">
                            <div className="col-lg-8 mt-lg-0 mt-5">
                                <h5 className="title-small mb-2">Who am i?</h5>
                                <h3 className="title-big">I'm Fuad, a Web Developer</h3>
                                <p className="mt-4">Hi My Name Is Fuad, I am Studying In 10th Standard.</p>
                                <Link to="/about" className="btn btn-style btn-primary mt-lg-5 mt-4">Who am i?</Link>
                            </div>
                        </div>
                    </section>

                    <section className="my-resume">
                        <div className="py-1 w3l-resume">
                            <div className="container py-lg-5 py-3">
                                <h5 className="title-small mb-2"> My resume</h5>
                                <h3 className="title-big mb-4">I Would Love to make your Ideas real </h3>
                                <a href="https://docs.google.com/document/d/1qNzkgmWw9wIph51GlPsu1IkD6SGhTZJeX9ECRJYicOo/edit?usp=sharing" target="_blank" className="btn btn-style btn-primary mr-3 mt-2 mb-5 float-right">Download CV</a>
                            </div>
                        </div>
                    </section>

                    <section className="w3l-services services mx-auto pt-5 pb-5">
                        <div className="container">
                            <h5 className="title-small text-center pt-4 pb-4">Services</h5>
                            <h3 className="title-big text-center mb-sm-5 mb-4">What I do for you</h3>

                            <div className="mx-auto pr-2">
                                <div className="owl-two owl-carousel owl-theme">
                                    <Services no="01" title="Web Development" description="Node Js, MongoDB" />
                                    <Services no="02" title="Static Website" description="React Js, HTML, CSS" />
                                    <Services no="03" title="E-Commerce Website" description="React Js, Firebase, Firestore" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-details">
                        <div className="container">
                            <div className="col-md-6 col-lg-3 col-sm-6 col-12 stats_info counter_grid">
                                <img src="./laptop2-icon.png" alt="" />
                                <p className="counter"><CountUp start={0} end={5} duration={7.75} /></p>
                                <h4>Completed projects</h4>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 col-12 stats_info counter_grid1">
                                <img src="./hourglass-icon.png" alt="" />
                                <p className="counter"><CountUp start={0} end={2} duration={7.75} /></p>
                                <h4>In processes</h4>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 col-12 stats_info counter_grid mt-sm-0 mt-5">
                                <img src="./gift-icon.png" alt="" />
                                <p className="counter"><CountUp start={0} end={1} duration={7.75} /></p>
                                <h4>Awards Received</h4>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 col-12 stats_info counter_grid2 mt-sm-0 mt-5">
                                <img src="./smile-icon.png" alt="" />
                                <p className="counter"><CountUp start={0} end={2} duration={7.75} /></p>
                                <h4>Happy Clients</h4>
                            </div>

                            <div className="section-width text-center">
                                <h3 className="title-big">
                                    I can give your business a new creative start right away! Hire me for your Awesome project
                            </h3>
                            </div>

                            <div className="projects">
                                <h5 className="title-small mb-2"> My Projects</h5>
                                <MyProjects img="./project-images/Amazon-Clone/Amazon-Clone1.png" URL="https://clone-9b4a8.web.app/" title="Amazon-Clone" />
                                <MyProjects img="./project-images/Covid-19_Tracker/Covid-19_Tracker1.png" URL="https://covid-19-tracker-cd9d3.web.app/" title="Covid-19_Tracker" />
                                <MyProjects img="./project-images/Classroom-Management-System/Classroom-Management-System1.png" URL="https://classroommanagementsystem.herokuapp.com/" title="Classroom-Management-System" />
                                <MyProjects img="./project-images/Shoping-Cart/Shoping-Cart1.png" URL="https://e-commerce-shoping-cart.herokuapp.com/" title="Shoping-Cart" />
                            </div>
                        </div>
                    </section>

                    <section class="get-in-touch text-center py-5">
                        <div class="container py-3">
                            <h6 class="title-small">Get in touch</h6>
                            <h3 class="title-big mb-md-5 mb-4">Let's start a Project! Hire Me.</h3>
                            <Link to="/contact" class="btn btn-style btn-primary mr-2">Hire Me </Link>
                            <Link to="/contact" class="btn btn-style btn-outline-primary">Get in touch</Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home

import React, { useEffect } from 'react'
import './Home.css';
import Typewritter from 'typewriter-effect';

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
            <div className="fluid-container">
                <div className="row align-items-center">
                    <section className="Intro">
                        <div className="col-lg-12 col-sm-12 mt-lg-0 mt-4 text-center">
                            <span className="title-small">Hello</span>
                            <h1 className="mb-2 title"> <span>I'm</span> Fuad </h1>
                            <h1 className="mb-4 title">a<span className="typed-text">hi</span></h1>
                            <div className="mt-sm-5 mt-4">
                                <a className="btn btn-primary btn-style mr-2" href="contact.html"> Hire Me </a>
                            </div>
                        </div>
                    </section>

                    <section className="about">
                        <div className="col-lg-8 mt-lg-0 mt-5">
                            <h5 className="title-small mb-2">Who am i?</h5>
                            <h3 className="title-big">I'm Fuad, a Web Developer</h3>
                            <p className="mt-4">Hi My Name Is Fuad, I am Studying In 10th Standard.</p>
                            <a href="about.html" className="btn btn-style btn-primary mt-lg-5 mt-4">Who am i?</a>
                        </div>
                    </section>

                    <section className="my-resume">
                        <div class="py-5 w3l-resume">
                            <div class="container py-lg-5 py-3">
                                <h5 class="title-small mb-2"> My resume</h5>
                                <h3 class="title-big mb-4">I Would Love to make your Ideas real </h3>
                                <a href="about.html" className="btn btn-style btn-primary mt-lg-3 mt-2 mb-5 float-right">Download CV</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home

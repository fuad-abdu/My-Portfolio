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

        if(element){
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
            <div className="container">
                <div class="row align-items-center">
                    <div class="Intro col-lg-12 col-sm-12 mt-lg-0 mt-4 text-center">
                        <span class="title-small">Hello</span>
                        <h1 class="mb-2 title"> <span>I'm</span> Fuad </h1>
                        <h1 class="mb-4 title">a<span class="typed-text">hi</span></h1>
                        <div class="mt-sm-5 mt-4">
                            <a class="btn btn-primary btn-style mr-2" href="contact.html"> Hire Me </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import { useParams } from 'react-router'
import "./ProjectImages.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function ProjectImages() {

    const { title } = useParams()

    const slideImages = [
        `../${title}/${title}1.png`,
        `../${title}/${title}2.png`,
        `../${title}/${title}3.png`,
        `../${title}/${title}4.png`,
    ];

    return (
        <section className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-4">
                        <Slide easing="ease">
                            <div className="each-slide">
                                <div className="Border">
                                    <img src={slideImages[0]} alt="" />
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="Border">
                                    <img src={slideImages[1]} alt="" />

                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="Border">
                                    <img src={slideImages[2]} alt="" />

                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="Border">
                                    <img src={slideImages[3]} alt="" />

                                </div>
                            </div>
                        </Slide>
                    </div>

                    <a href="/" className="btn btn-primary mt-3 mb-5">Back to Home</a>
                </div>
            </div>
        </section>
        // <div className="container">
        //     <div className="mySlides">
        //         <div className="numbertext">1 / 6</div>
        //         <img src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} />
        //     </div>
        //     <div className="mySlides">
        //         <div className="numbertext">2 / 6</div>
        //         <img src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} />
        //     </div>
        //     <div className="mySlides">
        //         <div className="numbertext">3 / 6</div>
        //         <img src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} />
        //     </div>
        //     <div className="mySlides">
        //         <div className="numbertext">4 / 6</div>
        //         <img src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} />
        //     </div>
        //     <div className="mySlides">
        //         <div className="numbertext">1 / 6</div>
        //         <img src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} />
        //     </div>
        //     <div className="mySlides">
        //         <div className="numbertext">1 / 6</div>
        //         <img src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} />
        //     </div>

        //     <a className="prev" onclick="plusSlides(-1)">❮</a>
        //     <a className="next" onclick="plusSlides(1)">❯</a>

        //     <div className="caption-container">
        //         <p id="caption"></p>
        //     </div>

        //     <div className="row">
        //         <div className="column">
        //             <img className="demo cursor" src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} onclick="currentSlide(1)" alt="The Woods" />
        //         </div>
        //         <div className="column">
        //             <img className="demo cursor" src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} onclick="currentSlide(1)" alt="The hoods" />
        //         </div>
        //         <div className="column">
        //             <img className="demo cursor" src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} onclick="currentSlide(1)" alt="The Woods" />
        //         </div>
        //         <div className="column">
        //             <img className="demo cursor" src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} onclick="currentSlide(1)" alt="The Woods" />
        //         </div>
        //         <div className="column">
        //             <img className="demo cursor" src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} onclick="currentSlide(1)" alt="The Woods" />
        //         </div>
        //         <div className="column">
        //             <img className="demo cursor" src="../Amazon-Clone/Amazon-Clone1.png" style={{"width":"100%"}} onclick="currentSlide(1)" alt="The Woods" />
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProjectImages

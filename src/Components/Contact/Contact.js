import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gokqvuj', 'template_vpmb5hh', e.target, 'user_HR3S7LN1Udw96E0aVxvn3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <div>
            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">Contact Me</h2>
                        <ul className="breadcrumbs-custom-path mt-2 mr-5">
                            <li className=""><a href="/">Home</a></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> Contact </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="w3l-contact-1 py-5">
                <div class="contacts-9 py-lg-5 py-md-4">
                    <div class="container">
                        <div class="d-grid contact-view">
                            <div class="cont-details">
                                <div class="cont-top">
                                    <div class="cont-left text-center">
                                        <span class="far fa-envelope"></span>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Email Me</h6>
                                        <p><a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdXbMSGBMHxnZmbmVXtkWztgpwVlnJDNBLJLzPDvjBtNLxSPddJsXFQSWZsSqfPcrWDGb" class="mail">fvkfuad@gmail.com</a></p>
                                    </div>
                                </div>
                                <div class="cont-top mt-4">
                                    <div class="cont-left text-center">
                                        <span class="fas fa-map-marker-alt"></span>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Location</h6>
                                        <p>India, Kerala, palakkad</p>
                                    </div>
                                </div>
                            </div>

                            <div class="map-content-9">
                                <form id="gform" onSubmit={sendEmail}>
                                    <div class="twice-two">
                                        <input type="text" class="form-control" name="name" id="w3lName" placeholder="Name" required="" />
                                        <input type="email" class="form-control" name="email" id="w3lSender" placeholder="Email" required="" />
                                    </div>
                                    <div class="twice">
                                        <input type="text" class="form-control" name="subject" id="w3lSubject"
                                            placeholder="Subject" required="" />
                                    </div>
                                    <textarea name="message" class="form-control" id="w3lMessage" placeholder="Message"
                                        required=""></textarea>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-primary btn-style mt-4">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="map-iframe">
                <iframe
                    src="https://maps.google.com/maps?q=kerala,%20chundambatta,%20pappadappadi&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="400" frameborder="0" style={{ border: "0px" }} allowfullscreen=""></iframe>
            </div>
        </div >
    )
}

export default Contact

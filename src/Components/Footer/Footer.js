import React from 'react'
import "./Footer.css"

function Footer() {

    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("movetop").style.display = "block";
        } else {
          document.getElementById("movetop").style.display = "none";
        }
    }

    const moveTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <section className="w3l-footer py-sm-5 py-4">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-lg-8 footer-left">
                            <p className="m-0">Fuad © Copyright 2021.</p>
                        </div>
                        <div className="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
                            <ul className="social m-0 p-0">
                                <li><a href="https://www.facebook.com/fuad.abdu.3348390" target="_blank"><span className="fab fa-facebook-square"></span></a></li>
                                <li><a href="https://www.instagram.com/f_u_a_d_a_b_d_u/" target="_blank"><span className="fab fa-instagram"></span></a></li>
                                <li><a href="https://github.com/fuadabdu123" target="_blank"><span className="fab fa-github"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={moveTop} id="movetop" title="Go to top">
        
                <span className="fas fa-angle-up"></span>
            </button>
            {/* <script>
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction()
      };

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("movetop").style.display = "block";
        } else {
          document.getElementById("movetop").style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    </script>
    <!-- /move top --> */}
        </section>
    )
}

export default Footer

import React, { useState } from 'react';

function Carousel() {

    return (
        <div>
             <div className="container">

              

                <div className="row">
                        <div className="col-lg-7 col-12">
                            <div className="section-head col-sm-12 ">
                                <h4>
                                    <span>About</span> Us
                                </h4>
                                <p className="text-start ">
                                    Welcome to our{" "}
                                    <span style={{ color: "blue", fontWeight: 600 }}>
                                        DR Medical Foundation
                                    </span>
                                    , where we strive to provide high-quality medical imaging services
                                    to our patients at affordable prices. We understand that the cost of
                                    healthcare can be a major concern for many people, and we believe
                                    that everyone deserves access to the best possible care without
                                    breaking the bank.
                                </p>
                                <p className="text-start ">
                                    Our team members are dedicated to ensuring that every patient who
                                    walks through our doors receives{" "}
                                    <span style={{ color: "blue", fontWeight: 500 }}>
                                        the highest level of care and attention
                                    </span>
                                    . We use state-of-the-art technology and equipment to provide
                                    accurate and reliable diagnostic results, including{" "}
                                    <span style={{ color: "rgb(243, 4, 44)", fontWeight: 500 }}>
                                        X-rays, CT scans, MRI scans, ultrasound, and more.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="wrapper col-lg-5 col-10 m-auto rounded-pill">
                            <img
                                className="rounded-pill"
                                src="/images/aboutusimg.cms"
                                alt="About us"
                            />
                        </div>
                        <div className="section-head col-sm-12 ">
                            <p className="text-start">
                                At our diagnostics center, we are committed to making healthcare more
                                accessible and affordable for everyone. Whether you need a routine
                                screening or a more complex diagnostic test, we are here to provide
                                you with the care and support you need to achieve optimal health and
                                wellness.
                            </p>
                            <p className="text-start">
                                Thank you for choosing us as your trusted partner in healthcare. We
                                look forward to serving you and your family for many years to come.
                            </p>
                        </div>
                    </div>
                    <hr />
            </div>

                <div className="container-fluid bg-light ">
                    <div className="container py-3">
                        <div className="row">
                            <div className="wrapper col-lg-5 col-10 rounded-pill m-auto">
                                <img
                                    className="rounded-pill"
                                    src="/images/missionimg.png"
                                    alt="Mission Vission Moto"
                                />
                            </div>
                            <div className="col-lg-7 col-12 py-3">
                                <div className="section-head col-sm-12 ">
                                    <h4>Mission</h4>
                                    <p className="text-start">
                                        Our foundation aims to provide access to affordable and
                                        high-quality medical scans for all patients, regardless of their
                                        financial status. We strive to ensure that no one has to
                                        compromise on their health due to financial constraints.
                                    </p>
                                    <h4>
                                        <span>Vision</span>
                                    </h4>
                                    <p className="text-start">
                                        Our vision is to create a world where every patient has access to
                                        timely and accurate medical scans without having to worry about
                                        the cost. We believe that everyone deserves the right to quality
                                        healthcare, and we are committed to making that a reality for all.
                                    </p>
                                    <h4>Motto</h4>
                                    <p className="text-start">
                                        "Empowering patients through affordable scans."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

 


        </div>
    );
}

export default Carousel;

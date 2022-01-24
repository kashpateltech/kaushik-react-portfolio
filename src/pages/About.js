import React from 'react'


function About() {
    return (
        <>
            <div className="page-section pt-5 fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card-page">
                                <h5 className="fg-dark">About Me</h5>
                                <hr />

                                <div className="row justify-content-center">
                                    <div className="col-lg-8 py-3">
                                        <div className="team-item">
                                                <img className="img-fluid img-thumbnail rounded mx-auto d-block" src="/assets/images/profile.jpeg" alt=""/>
                                        </div>
                                    </div>
                                </div>

                            <p>I am an aspiring web desginer based in Sydney. I like to be creative and think outside the box. I like travelling and meeting new people. I enjoy spending time with my friends and eating out.</p> 
                            <p>I have travelled to many countries however my favourite travelling destination is Dubai. I love to shop and Dubai has one of the biggest shopping malls in the world</p>  
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
};

export default About;
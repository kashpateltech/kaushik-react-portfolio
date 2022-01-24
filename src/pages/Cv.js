import React from 'react'

function Cv() {
    return (
        <>
            <div className="page-section pt-5 fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card-page">
                                <h5 className="fg-dark">Download My CV</h5>
                                <hr />

                                <div className="row justify-content-center">
                                    <div className="col-lg-8 py-3">
                                        <a href="./assets/images/Kash-Resume.pdf" download>
                                            <img className="img-fluid rounded mx-auto d-block" src="./assets/images/Kash-Resume.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cv;
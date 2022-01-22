import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <>
            <div className="bg-light">
                <div className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 my-3 wow fadeInUp">
                                <div className="card-page">
                                    <div className="row row-beam-md">
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-location-outline h3"></i>
                                            <p className="fg-dark fw-medium fs-vlarge">Location</p>
                                            <p className="mb-0">Sydney, Australia</p>
                                        </div>
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-call-outline h3"></i>
                                            <p className="fg-dark fw-medium fs-vlarge">Contact</p>
                                            <p className="mb-1">0433-555-279</p>
                                        </div>
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-mail-open-outline h3"></i>
                                            <p className="fg-dark fw-medium fs-vlarge">Email</p>
                                            <p className="mb-1">kaushikpatel26@yahoo.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid wow fadeInUp">
                                <div className="card-page">
                                    <h3 className="fw-normal">Let's get in touch</h3>
                                    <form method="POST" className="mt-3" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name" className="fw-medium fg-grey">Your Full Name</label>
                                            <input type="text" className="form-control" id="name" onBlur={handleChange} defaultValue={name} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="fw-medium fg-grey">Your Email</label>
                                            <input type="email" name="email" className="form-control" id="email" onBlur={handleChange} defaultValue={email} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message" className="fw-medium fg-grey">Your Message</label>
                                            <textarea rows="6" className="form-control" id="message" name="message" onBlur={handleChange} defaultValue={message}></textarea>
                                        </div>

                                        <p>*Kaushik will not share your information with any third party service.</p>
                                        {errorMessage && (
                                            <div>
                                                <p className="error-text">{errorMessage}</p>
                                            </div>
                                        )}
                                        <div className="form-group mt-4">
                                            <button type="submit" className="btn btn-dark">Send Your Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
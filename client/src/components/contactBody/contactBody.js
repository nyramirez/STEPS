import React, { Component } from "react";
import "./style.css";
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import contactUsImage from "../../images/contactUs.jpg";


class ContactUs extends Component {
    render() {
        return (
                 <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-7 boxShadow">
            <img className="contactImg" src={contactUsImage} alt="slide" />
          </div>
          <div className="col-md-5 userForm">
          <section className="contact">
                    <div className="container bottomWrapper">
                        <h2 className="text-center text-uppercase text-secondary mb-0">Contact Us</h2>
                        <hr className="star-dark mb-5" />
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <form className="contactForm">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input className="form-control name"  type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input className="form-control email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input className="form-control phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea className="form-control message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="success"></div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-xl sendMessageButton">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
          </div>
        </div>
      </div>
               
        );
    }
}
export default ContactUs;
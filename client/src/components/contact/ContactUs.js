import React, { Component } from "react";
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import contactUsImage from "../../images/contactUs.jpg";
import 'jquery';
import "./style.css";


class ContactUs extends Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-7">
                        <img className="contactImg" src={contactUsImage} alt="slide" />
                    </div>
                    <div className="col-md-5">
                        <section className="contact">
                            <div className="container bottomWrapper">
                                <h3 className="text-center text-uppercase text-secondary mb-0">Contact Us</h3>
                                <hr className="star-dark mb-5" />
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <p className="mainLabel">Ask a <strong>STEPS</strong> expert how we can help:</p>
                                                <p className="contactLabel">Steps - Houston</p>
                                                   <p className="contactLabel" > 
                                                   Address: 3030 My Address, Suite 300
                                                            Houston, Texas 77042</p>
                                                   <p className="contactLabel" >     
                                                   Contact : XXX-XXX-XXXX
                                                    </p>
                                                <p className="contactLabel">Email: stepshelpteam@gmail.com</p>
                                            </div>
                                        </div>
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

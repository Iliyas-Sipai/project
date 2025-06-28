import React from 'react'
import "../contact/ContactStyle.css"
 import IframeErrorBoundary from './IframeErrorBoundary';


const ContactCompo = () => {
  return (
    <>
       <div className="contact">
       <div className="container">
           <div className="section-header text-center">
               <h2>Contact For Any Query</h2>
           </div>
           <div className="row align-items-center contact-information">
               <div className="col-md-6 col-lg-3">
                   <div className="contact-info">
                       <div className="contact-icon">
                           <i className="fa fa-map-marker-alt"></i>
                       </div>
                       <div className="contact-text">
                           <h3>Address</h3>
                           <p>Kadi</p>
                       </div>
                   </div>
               </div>
               <div className="col-md-6 col-lg-3">
                   <div className="contact-info">
                       <div className="contact-icon">
                           <i className="fa fa-phone-alt"></i>
                       </div>
                       <div className="contact-text">
                           <h3>Call Us</h3>
                           <p>+91 9316198853</p>
                       </div>
                   </div>
               </div>
               <div className="col-md-6 col-lg-3">
                   <div className="contact-info">
                       <div className="contact-icon">
                           <i className="fa fa-envelope"></i>
                       </div>
                       <div className="contact-text">
                           <h3>Email Us</h3>
                           <p>Iliyassiapi861@gmail.com</p>
                       </div>
                   </div>
               </div>
               <div className="col-md-6 col-lg-3">
                   <div className="contact-info">
                       <div className="contact-icon">
                           <i className="fa fa-share"></i>
                       </div>
                       <div className="contact-text">
                           <h3>Follow Us</h3>
                           <div className="contact-social">
                               <a href=""><i className="fab fa-twitter"></i></a>
                               <a href=""><i className="fab fa-facebook-f"></i></a>
                               <a href=""><i className="fab fa-youtube"></i></a>
                               <a href=""><i className="fab fa-instagram"></i></a>
                               <a href=""><i className="fab fa-linkedin-in"></i></a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="row contact-form">
               <div className="col-md-6">
               <IframeErrorBoundary>
        <iframe
          title="Google Map - Kadi Gujarat"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117275.68937018467!2d72.23012394630284!3d23.29732110479847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c18078321e28f%3A0xdca9292f4989571c!2sKadi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710247202586"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </IframeErrorBoundary>

        </div>
           
               <div className="col-md-6">
                   <div id="success"></div>
                   <form name="sentMessage" id="contactForm" novalidate="novalidate">
                       <div className="control-group">
                           <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                           <p className="help-block text-danger"></p>
                       </div>
                       <div className="control-group">
                           <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                           <p className="help-block text-danger"></p>
                       </div>
                       <div className="control-group">
                           <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                           <p className="help-block text-danger"></p>
                       </div>
                       <div className="control-group">
                           <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                           <p className="help-block text-danger"></p>
                       </div>
                       <div>
                           <button className="btn custom-btn" type="submit" id="sendMessageButton">Send Message</button>
                       </div>
                   </form>
               </div>
           </div>
       </div>
   </div>
    </>
  )
}

export default ContactCompo

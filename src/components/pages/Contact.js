import React, {useRef, useState} from 'react';
import '../../App.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [text, setText] = useState();

    const sendEmail = (e) => {
     e.preventDefault();

     emailjs.sendForm('service_311hp5b', 'template_x1ohnsx', form.current, 'TziTAp_GC8QJyNLnZ')
       .then((result) => {
           console.log(result.text);
           setText("Form submitted successfully");
       }, (error) => {
           console.log(error.text);
           setText(error.text);
       });

       form.current.reset();
    };

    return (
      <>
      <h1 className='contact'>CONTACT</h1>
      <div className="card mb-3 contact-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="images/midnight.jpg"
            alt="Himalayas"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">Contact Me</h2>
            <p className="card-text">
              Want to talk? Use this form to send me a message!
            </p>
            <p className="card-text">
              {text}
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-outline mb-4">
                  <label className="form-label" for="name">Name</label>
                  <input type="text" id="name" className="form-control" name="name" placeholder="Name" required />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="email_address">Email address</label>
                  <input type="email" id="email" className="form-control" name="email_address" placeholder="Email Address" required />
                </div>

                <div className="form-outline mb-4">
                 <label className="form-label" for="message">Message</label>
                  <textarea className="form-control" id="message" rows="4" name="message" placeholder="Message" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4 submit-button">Send</button>
                </form>
          </div>
        </div>
      </div>
      </div>
      </>
    )
}

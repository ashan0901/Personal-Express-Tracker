import React from 'react';
import './contact.css';
import Nav from '../shared/Nav';
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    const handleSubmit1 = (event) => {
        event.preventDefault();

        // Collect input values from the form fields
        const { name, email } = event.target.elements;

        // Send email
    const templateParams = {
        to_email: email.value,
        to_name: name.value,
      };
      emailjs.send(
        "service_d9si9hx",
        "template_99tj63k",
        templateParams,
        "Atan-WV8TWDksltPG"
      ).then((response) => {
        Swal.fire({
          title: "Success!",
          text: "Feedback Recorded",
          icon: "success",
          confirmButtonText: "Great!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/'); // Redirect to the welcome page
          }
        });
      }).catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to send email",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    
      };
    
    return (
        <div>
            <Nav />
            <section className="contact">

                <div className="content">
                    <h2>Contact Us</h2>
                    <p>Have a question, feedback, or need support? We're here to help! Reach out to us using the form below, and we'll get back to you as soon as possible. Your satisfaction is our priority, and we're committed to providing you with the best experience possible with our expense tracker app.</p>
                    <p>Thank you for using our expense tracker app!</p>
                </div>
                <div className="container2">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><img src="https://t4.ftcdn.net/jpg/02/72/89/67/240_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" alt="Address Icon" /></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>University Of Kelaniya,<br /> Sri Lanka .</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon"><img src="https://cdn-icons-png.freepik.com/256/455/455705.png?ga=GA1.1.720587984.1711644121&semt=ais_hybrid" alt="Contact Number Icon" /></div>
                            <div className="text">
                                <h3>Contact Number</h3>
                                <p>0012121212</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><img src="https://cdn-icons-png.freepik.com/256/6129/6129126.png?ga=GA1.1.720587984.1711644121&semt=ais_hybrid" alt="Email Icon" /></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>uok@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form onSubmit={handleSubmit1}>
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="name" required />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="email" name="email" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea name="message" required></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;

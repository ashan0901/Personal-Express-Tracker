import React from "react";
import "./AboutUs.css";

function AboutUs() {
  let message =
    "Greetings from our Personal Expense Tracking app! We offer an easy-to-use application to help you efficiently manage your spending so that we may accompany you on your financial path. You can create budgets, keep tabs on your expenses, and learn a lot about your financial habits using our app. Together, take charge of your money and reach your financial objectives!";

  // Dummy functions to handle icon clicks
  /*const handleSocialClick = (platform) => {
    console.log(`${platform} icon clicked!`); // replace with actual functionality
  }*/

  return (
    <section className="section-white">


      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://media.istockphoto.com/id/1338087997/video/business-person-meeting-together.mp4?s=mp4-640x640-is&k=20&c=9atx4NZTd5tne5IrIroSRIBDPLALb2ghYGpaXFRsiu8=" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">{message}</p>
          </div>
        </div>
        <div className="row" style={{ display: "flex" }}>
          <div className="col-md-4">
            <div className="team-item">
              <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38xBLKoM7n78xMUuL51iKMmpd-Bu3nBzWdyzsaYmm1-U8h7atjRmYerABn5Y4wNgo07Y&usqp=CAU" className="team-img"  />
              <h3 class="a">Our Vision</h3>
              <div className="team-info">
                <p class="main">Our vision for the personal expense tracker is to become the go-to platform for individuals seeking control and clarity in their finances. We envision a future where managing expenses is effortless and insightful, where users can confidently navigate their financial journeys with ease. Our goal is to inspire financial empowerment and transform the way people interact with their money. </p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-item">
              <img alt="" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmasqV6EcwCeFRUFHrKXF_Y5NZMP85OYqY0iCcOh4riYgelBcY" className="team-img"  />
              <h3 class="a">Our Story</h3>
              <div className="team-info">
                <p class="main">Born from passion and frustration, our journey began with a team united to revolutionize personal finance. Through dedication and feedback, we created a solution to democratize financial management: our Personal Expense Tracker app. </p>
                <p class="main">With unwavering commitment, we embark on this journey together, empowering users to seize control of their financial futures. Welcome to a brighter tomorrow, where every dollar counts.</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-item">
              <img alt="" src="https://media.istockphoto.com/id/1196085007/photo/businessman-on-blurred-background-using-3d-rendering-target.jpg?s=612x612&w=0&k=20&c=34STriu0gdJiJ4_UegmU2hHiea-XVLp8bfW9UkacuWM=" className="team-img"  />
              <h3 class="a">Our Mission</h3>
              <div className="team-info">
                <p class="main">Our mission is to revolutionize personal finance management by offering an intuitive expense tracking solution. We aim to empower users to make informed financial decisions, providing tools that promote financial well-being and stability. Through continuous innovation and user-centric design, we strive to simplify the process of managing expenses, enabling users to achieve financial freedom.
</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

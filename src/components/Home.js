import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Navbar shrink function
    const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY > 100) {
            navbarCollapsible.classList.add('navbar-shrink');
        } else {
            navbarCollapsible.classList.remove('navbar-shrink');
        }
    };

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    
    // Cleanup function to remove event listener when component unmounts
    return () => {
        document.removeEventListener('scroll', navbarShrink);
    };
  }, []);
  return (
    <div id="page-top">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top"><img src="assets/img/navbarLogo.png" alt="..." style={{height: "auto", width: "65px", display: "block"}}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/governmentWork">Government Works</Link></li>
                    <li><Link className="dropdown-item" to="/importExport">Import / Export</Link></li>
                    <li><Link className="dropdown-item" to="/internationalTrade">International Trade</Link></li>
                    <li><Link className="dropdown-item" to="/businessConsultancy">Business Consultancy</Link></li>
                </ul>
              </li>
              {/* <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li> */}
              <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container">
                <div className="masthead-heading">Welcome To <span style={{color: "#ffc800"}}>Blue Earth Groups</span></div>
                <div className="masthead-subheading text-uppercase">One Stop Search For A Way To Success!</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#about">Tell Me More</a>
            </div>
        </header>
        {/* <!-- About--> */}
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">At <strong>Blue Earth Groups Of Enterprises</strong>, we are a dynamic conglomerate specializing in consulting services, international trade facilitation, government project management, and import/export operations. With a focus on delivering tailored solutions and fostering mutually beneficial partnerships, we leverage our extensive expertise and global network to drive success for our clients across diverse sectors. Our commitment to excellence, innovation, and ethical practices ensures that we consistently exceed expectations and contribute positively to the growth and development of businesses and communities worldwide</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Vision</h4>
                                {/* <h4 className="subheading">Our Humble Beginnings</h4> */}
                            </div>
                            <div className="timeline-body"><p className="text-muted">Our vision is to be a global leader in innovation, driving positive change and shaping the future of industries we serve. Through our commitment to excellence, integrity, and sustainability, we aim to inspire and empower our employees, exceed customer expectations, and create lasting value for our shareholders and communities worldwide</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Mission</h4>
                                {/* <h4 className="subheading">An Agency is Born</h4> */}
                            </div>
                            <div className="timeline-body"><p className="text-muted">Our mission is to leverage our diverse portfolio of companies to deliver innovative solutions, exceptional value, and sustainable growth to our customers, stakeholders, and communities. Guided by integrity, collaboration, and excellence, we strive to make a positive impact in every market we serve while fostering a culture of continuous improvement and social responsibility.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/* <!-- Services--> */}
        <section className="page-section" id="services">
            <div className="container section-effect">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted"><strong>Blue Earth Groups Of Enterprises</strong> offers a comprehensive suite of services designed to facilitate seamless operations in today's global marketplace. With expertise in Government Works, Import/Export, International Trade, and Business Consultancy, we empower our clients to navigate complex regulatory landscapes, optimize supply chains, and expand their market reach with confidence. Whether it's facilitating cross-border transactions, providing strategic business advice, or streamlining administrative processes, our dedicated team ensures that every aspect of your business operations is efficiently managed and strategically aligned for success on the international stage.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-3">
                        <Link to="/governmentWork" style={{ textDecoration: "none", color: "black" }}>
                        <img src="assets/img/services/government.jpg" alt="..." style={{height: "auto", width: "200px"}} />
                        <h4 className="my-3">Government works</h4>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/importExport" style={{ textDecoration: "none", color: "black" }}>
                        <img src="assets/img/services/import-export.jpg" alt="..." style={{height: "auto", width: "200px"}} />
                        <h4 className="my-3">Import/Export</h4>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/internationalTrade" style={{ textDecoration: "none", color: "black" }}>                       
                        <img src="assets/img/services/internationalTrade.jpg" alt="..." style={{height: "auto", width: "200px"}} />
                        <h4 className="my-3">International Trade</h4>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/businessConsultancy" style={{ textDecoration: "none", color: "black" }}>
                        <img src="assets/img/services/businessConsultancy.jpg" alt="..." style={{height: "auto", width: "200px"}} />
                        <h4 className="my-3">Business Consultancy</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Team--> */}
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    {/* <h3 className="section-subheading text-muted">Blue Earth SP&ZO is the part of Blue Earth Group of Enterprises.</h3> */}
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/4.jpg" alt="..." />
                            <h4>Nitin Rao</h4>
                            <p className="text-muted">Founder</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/5.png" alt="..." />
                            <h4>B Sharat Kumar</h4>
                            <p className="text-muted">Founder</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Our Backbone</p></div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/6.jpeg" alt="..." />
                            <h4>Dariya Brown</h4>
                            <p className="text-muted">Poland Legal Lawyer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpeg" alt="..." />
                            <h4>Harish</h4>
                            <p className="text-muted">Marketing Head</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpeg" alt="..." />
                            <h4>Girish</h4>
                            <p className="text-muted">Authorised Partner</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpeg" alt="..." />
                            <h4>Sai Ram</h4>
                            <p className="text-muted">Marketing Head</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Clients--> */}
        {/* <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Contact--> */}
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-light">infoconsult@blueearthgroups.com</h3>
                </div>
                {/* <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- This form is pre-integrated with SB Forms.-->
                <!-- To make this form functional, sign up at-->
                <!-- https://startbootstrap.com/solution/contact-forms-->
                <!-- to get an API token!--> */}
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                {/* <!-- Name input--> */}
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                                {/* <!-- Email address input--> */}
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                                {/* <!-- Phone number input--> */}
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                {/* <!-- Message input--> */}
                                <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Submit success message--> */}
                    {/* <!----> */}
                    {/* <!-- This is what your users will see when the form--> */}
                    {/* <!-- has successfully submitted--> */}
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    {/* <!-- Submit error message--> */}
                    {/* <!----> */}
                    {/* <!-- This is what your users will see when there is--> */}
                    {/* <!-- an error submitting the form--> */}
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    {/* <!-- Submit Button--> */}
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="footer py-4">
        <hr />
          <div className="container">
            <div className="row align-items-center">
              
                <div className="col-lg-4 text-lg-start">
                  <a className="link-dark text-decoration-none me-4" href="#!">Privacy Policy</a>
                  <a className="link-dark text-decoration-none" href="#!">Terms of Use</a> <br /> <br />
                  Copyright &copy; www.blueearthgroups.com 2024
                </div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="col-lg-4 text-lg-end">
                  +91 9893266756 <img src="assets/img/footer/india-flag-icon.png" alt="" style={{ height: "auto", width: "20px" }}/> LIG - 31, HUDCO AAMDI NAGAR, BHILAI, DIST - DURG (C.G.) 490009 <br /> <br />
                  +48 696854337 <img src="assets/img/footer/poland-flag-icon.png" alt="" style={{ height: "auto", width: "20px" }}/> FIRST FLOOR OFFICE NO. 18 SOKOLOWKA 1001-136 WARSAW POLAND
                </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Home
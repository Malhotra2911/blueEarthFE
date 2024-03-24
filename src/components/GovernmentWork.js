import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const GovernmentWork = () => {
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
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src="assets/img/navbarLogo.png" alt="..." style={{height: "auto", width: "65px", display: "block"}}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/governmentWork">Government Works</Link></li>
                    <li><Link className="dropdown-item" to="/importExport">Import / Export</Link></li>
                    <li><Link className="dropdown-item" to="/internationalTrade">International Trade</Link></li>
                    <li><Link className="dropdown-item" to="/businessConsultancy">Business Consultancy</Link></li>
                </ul>
              </li>
              {/* <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li> */}
              <li className="nav-item"><Link className="nav-link" to="/">Team</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="governmentWork">
        <div className="container">
            {/* <div className="governmentWork-heading">Government Works</div> */}
            <div className="governmentWork-subheading text-uppercase">Government Works</div>
            <Link className="btn btn-primary btn-xl text-uppercase" to="#portfolio">Portfolio</Link>
        </div>
      </header>

      <section className="page-section" id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted"><strong>Blue Earth Groups Of Enterprises</strong> specializes in providing comprehensive Government Work Services, offering a wide range of solutions including supply, construction, and equipment machinery such as JCBs and cranes. With a commitment to excellence and reliability, we deliver top-notch services tailored to meet the diverse needs of government projects. Our extensive experience, coupled with a dedicated team, ensures efficient project execution and satisfaction for our clients. At Blue Earth Groups, we aim to be the trusted partner for all government-related endeavors, striving for excellence in every endeavor we undertake.</h3>
            </div>
        </div>
      </section>

      <section className="page-section mb-4" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/1.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/2.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/3.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/4.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/5.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/6.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/7.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/8.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/9.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 image-effect">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/government/10.jpg" alt="..." style={{ height: "200px", width: "600px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer py-4">
      <hr />
          <div className="container">
            <div className="row align-items-center">
              
                <div className="col-lg-4 text-lg-start">
                  <Link className="link-dark text-decoration-none me-4" to="#!">Privacy Policy</Link>
                  <Link className="link-dark text-decoration-none" to="#!">Terms of Use</Link> <br /> <br />
                  Copyright &copy; www.blueearthgroups.com 2024
                </div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <Link className="btn btn-dark btn-social mx-2" to="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" to="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" to="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
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

export default GovernmentWork
import React from "react";
import './ProductScrollAndrew.css';


const ProductScrollAndrew = () => (
  <div className = "andrewCSS">
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav"> {/* add to class name in final version fixed-top */}
      <div className="container">
        <a className="navbar-brand AR-css" href="#page-top">AR</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/UserAuth">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-auto" href="/login">Login</a>
            </li>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>

    <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>Accessory Research</strong>
            </h1>
            <hr></hr>
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">Maybe in this part try to communicate to the customer / site visitor this issue that the products solve</p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>

    <section className="bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-white">We've got what you need!</h2>
            <hr className="light my-4"></hr>
            <p className="text-faded mb-4">Accessory Research has the products that will resolve the static problems people experience</p>
            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
    
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">At Your Service</h2>
            <hr className="my-4"></hr>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Sturdy Templates</h3>
              <p className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Ready to Ship</h3>
              <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Up to Date</h3>
              <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Made with Love</h3>
              <p className="text-muted mb-0">You have to make your websites with love these days!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="p-0" id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters popup-gallery">
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
              <img className="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt=""></img>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Product Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
              <img className="img-fluid" src="img/portfolio/thumbnails/2.jpg" alt=""></img>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Product Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
              <img className="img-fluid" src="img/portfolio/thumbnails/3.jpg" alt=""></img>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Product Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg">
              <img className="img-fluid" src="img/portfolio/thumbnails/4.jpg" alt=""></img>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Product Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg">
              <img className="img-fluid" src="img/portfolio/thumbnails/5.jpg" alt=""></img>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Product Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg">
              <img className="img-fluid" src="img/portfolio/thumbnails/6.jpg" alt=""></img>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Category
                  </div>
                  <div className="project-name">
                    Product Name
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-dark text-white">
      <div class="container text-center">
        <h2 class="mb-4">Free Download at Start Bootstrap!</h2>
        <a class="btn btn-light btn-xl sr-button" href="http://startbootstrap.com/template-overviews/creative/">Download Now!</a>
      </div>
    </section>

    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading">Let's Get In Touch!</h2>
            <hr className="my-4"></hr>
            <p className="mb-5">Ready to solve your static problems with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
            <p>651-426-4450</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
            <p>
              <a href="mailto:CS@AccessoryResearch.com">CS@AccessoryResearch.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
)


export default ProductScrollAndrew;
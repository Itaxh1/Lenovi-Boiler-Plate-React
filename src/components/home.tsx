import "../../src/assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import Navbar from "./nav";
import Carousel from "react-bootstrap/Carousel";
import heroImage from "../assets/img/hero1.jpg";
import newArrivals from "../assets/img/option1.jpg";
import ourFavorites from "../assets/img/option2.jpg";
import saleBanner from "../assets/img/sale.jpg";
import relaxed from "../assets/img/relaxed.jpg";
import casual from "../assets/img/casual.jpg";
import nightOut from "../assets/img/nightout.jpg";
import newsletterBg from "../assets/img/newsletter.jpg";


const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <Carousel interval={3000} controls={false} indicators={true} className="w-100">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={heroImage}
              alt="New Looks for the Summer"
            />
            <Carousel.Caption className="text-start d-flex flex-column align-items-start">
              <h1 className="display-4 fw-bold">NEW LOOKS FOR THE SUMMER</h1>
              <button className="btn btn-dark btn-lg mt-3">SHOP NOW</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
      {/* Two Cards Section */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              <img src={newArrivals} className="card-img" alt="New Arrivals" />
              <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <h2 className="text fw-bold">NEW ARRIVALS</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              <img src={ourFavorites} className="card-img" alt="Our Favorites" />
              <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <h2 className="text fw-bold">OUR FAVORITES</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Banner */}
      <div className="container my-5">
        <div className="card border-0 shadow-lg">
          <img src={saleBanner} className="card-img" alt="Sale" />
          <div className="card-img-overlay text-end d-flex flex-column justify-content-center pe-5 text">
            <h5>ONLINE ONLY</h5>
            <h1 className="fw-bold">SALE</h1>
            <h3>UP TO 20% OFF</h3>
          </div>
        </div>
      </div>

      {/* Style Guide Carousel */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">STYLE GUIDE FOR YOU</h2>
        <Carousel interval={4000} controls={true} indicators={true} className="w-100">
          <Carousel.Item>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-lg text-center">
                  <img src={relaxed} className="card-img" alt="Relaxed" />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-end">
                    <h4 className="fw-bold text">RELAXED</h4>
                    <button className="btn btn-dark mt-2">SHOP NOW</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-lg text-center">
                  <img src={casual} className="card-img" alt="Casual" />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-end">
                    <h4 className="fw-bold text">CASUAL</h4>
                    <button className="btn btn-dark mt-2">SHOP NOW</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-lg text-center">
                  <img src={nightOut} className="card-img" alt="Night Out" />
                  <div className="card-img-overlay d-flex flex-column align-items-center justify-content-end">
                    <h4 className="fw-bold text">NIGHT OUT</h4>
                    <button className="btn btn-dark mt-2">SHOP NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>



      {/* Newsletter Signup */}
      <div className="container my-5">
        <div className="card border-0 shadow-lg text-center" style={{ background: `url(${newsletterBg}) center/cover no-repeat` }}>
          <div className="card-body py-5">
            <h2 className="fw-bold">Sign up for our newsletter for exclusive offers</h2>
            <div className="input-group mt-4 w-50 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" />
              <button className="btn btn-dark">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
      


      <Footer />
    </>
  );
};

export default Home;

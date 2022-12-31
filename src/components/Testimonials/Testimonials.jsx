import React from "react";
import "../../styles/testimonials.css";
import "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const head_style = {
  display: "grid",
  justifyContent: "center",
  fontSize: "35px",
  letterSpacing: "1.2px",
  color: "#b0923a",
  fontWeight: "600",
};

const p_style = {
  textAlign: "center",
  color: "#9eb9cc",
};

const Testimonials = () => {
  return (
    <div>
      <div>
        <p style={head_style}>What Clients Say</p>
        <p style={p_style} className="p_style">
          We place huge value on strong relationships and have seen the benefit
          they bring to our business. Customer feedback is vital in helping us
          to get it right.
        </p>
      </div>

      <Carousel className="carousel">
        <Carousel.Item>
          <div className="user">
            <h4 className="userName">
              <i class="ri-user-3-line"></i>Natarajan
            </h4>
            <h3 className="place">Coimbatore</h3>
          </div>
          <p className="comments">
            I've been a loyal customer of this cashew business for years, and I
            can honestly say that their products are the best I've ever had.
            Highly recommend!"
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="user">
            <h4 className="userName">
              <i class="ri-user-3-line"></i>Sarojini
            </h4>
            <h3 className="place">Vijayawada</h3>
          </div>
          <p className="comments">
            I was hesitant to try a new brand of cashews, but I'm so glad I took
            the chance on this Anish Cashews. Their customer service is
            top-notch, and the product itself exceeded my expectations. The
            cashews are fresh, flavorful, and a great value for the price.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="user">
            <h4 className="userName">
              <i class="ri-user-3-line"></i>Nagendra
            </h4>
            <h3 className="place">Bangalore</h3>
          </div>
          <p className="comments">
            I'm a big fan of this cashew business! Not only are their products
            delicious, but they also have a great selection of other nuts and
            snacks. Their website is easy to use and the delivery is always
            prompt.
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <div className="user">
            <h4 className="userName">
              <i class="ri-user-3-line"></i>Ramkumar
            </h4>
            <h3 className="place">Chennai</h3>
          </div>
          <p className="comments">
            I recently purchased a bag of cashews from Anish Cashews company as
            a gift, and the recipient was thrilled with the quality. They said
            the cashews were some of the best they've ever tasted, and I was
            impressed with the packaging and presentation
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <div className="user">
            <h4 className="userName">
              <i class="ri-user-3-line"></i>Jesu Patel
            </h4>
            <h3 className="place">Ahmedabad</h3>
          </div>
          <p className="comments">
            I always buy my cashews from Anish Cashews because the quality is
            consistently excellent. The nuts are always fresh and full of
            flavor, and I love that they offer a variety of sizes and packaging
            options to suit my needs. Highly recommend!
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <div className="user">
            <h4 className="userName">
              <i class="ri-user-3-line"></i>Suhas Biswas
            </h4>
            <h3 className="place">Calcutta</h3>
          </div>
          <p className="comments">
            I was skeptical about buying cashews online, but I'm so glad I took
            the chance on Anish cashews. The nuts arrived quickly and were
            packaged beautifully. They are some of the best cashews I've ever
            had super fresh and deliciously creamy. I'll definitely be a
            returning customer!
          </p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;

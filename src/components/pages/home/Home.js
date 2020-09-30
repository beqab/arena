import React from "react";
import Arrows from "../../../assets/imgs/header.png";
import Login from "./login";

import Scroll from "../../../assets/imgs/scroll.png";
import AppStore from "../../../assets/imgs/appl.png";
import GoogleStore from "../../../assets/imgs/app.png";
import Diagram1 from "../../../assets/imgs/1.svg";
import Diagram2 from "../../../assets/imgs/2.svg";
import Diagram3 from "../../../assets/imgs/3.svg";
import Circle from "../../../assets/imgs/yelloCircle.svg";
import Knight1 from "../../../assets/imgs/Knight1-1.svg";
import Knight2 from "../../../assets/imgs/Knight2-2.svg";
import Knight3 from "../../../assets/imgs/Knight3-3.png";
import Knight4 from "../../../assets/imgs/Knight4.svg";
import Facebook from "../../../assets/imgs/Facebook.svg";
import Instagram from "../../../assets/imgs/Instagram.svg";
import Twitter from "../../../assets/imgs/Twitter.svg";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  scrollTop = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  render() {
    const isAuth = localStorage.getItem("token");
    if (isAuth) {
      return <Redirect to="/withdraw" />;
    }

    return (
      <>
        <div className="gradientBg">
          <div className="firsSection">
            <img src={Knight1} alt="Knight1" className="Knight1" />

            <img src={Knight2} alt="Knight2" className="Knight2" />

            <div className="scrollDownArr">
              {/* <img onClick={this.scrollTop} src={Arrows} alt="arr" /> */}

              <div className="round" onClick={this.scrollTop}>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
            <div className="loginForm">
              <ScrollAnimation
                animateIn="animate__backInDown"
                animateOnce={true}
              >
                <h1>ARENA</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__swing" animateOnce={true}>
                <div className="cormContainer">
                  <Login />
                  <div className="resetPassLink text-center ">
                    forgot your password? <a href=""> click here </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="scrollDown text-center">
              <img onClick={this.scrollTop} src={Scroll} />
            </div>
          </div>

          <div className="secondSection">
            <div className="container">
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <div className="left">
                  <h3>ARENA</h3>
                  <p>
                    Check out mobile multiplayer mobile game “ARENA”. where
                    users can earn virtual coins and then withdraw the money in
                    crypto curency.
                  </p>
                  <a href="#">read more</a>

                  <div className="appLinks">
                    <img src={AppStore} alt="AppStore" />
                    <img src={GoogleStore} alt="GoogleStore" />
                  </div>
                </div>
              </ScrollAnimation>
              <div className="rightSection">
                <ScrollAnimation
                  animateIn="animate__zoomIn"
                  delay={200}
                  animateOnce={true}
                >
                  <img src={Diagram1} alt="" />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__zoomIn"
                  delay={400}
                  animateOnce={true}
                >
                  <img src={Diagram2} alt="" />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__zoomIn"
                  delay={600}
                  animateOnce={true}
                >
                  <img src={Diagram3} alt="" />
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="thirdSection">
            <div className="container">
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <div className="textSection left">
                  <h3>ACCOUNT</h3>
                  <p>
                    description description description description description
                  </p>
                  <img src={Circle} alt="" />
                </div>
              </ScrollAnimation>
              <div className="middle d-sm-none">
                <ScrollAnimation
                  animateIn="animate__bounceIn"
                  animateOnce={true}
                >
                  <img alt="Knight3" src={Knight3} />
                </ScrollAnimation>
              </div>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <div className="textSection right">
                  <h3>F.A.Q</h3>
                  <p>
                    description description description description description
                  </p>
                  <img src={Circle} />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="fourthSection">
          <div className="container">
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <div className="left">
                <h3>ARENA BATTLEFIELD</h3>
                <p> Play, win and be the strongest on a battlefield.</p>
              </div>
            </ScrollAnimation>
            <div className="right ">
              <ScrollAnimation animateIn="animate__bounceIn" animateOnce={true}>
                <img src={Knight4} alt="Knight4" />
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <footer>
          <div className="container first">
            <div className="left">
              <form>
                <label>Subscribe to our newsletter</label>
                <div>
                  <input placeholder="your@email.com" />
                  <button>Send</button>
                </div>
              </form>
            </div>
            <div className="right">
              <div className="socialLinks">
                <span>Social networks</span>
                <a href="">
                  <img src={Facebook} alt="" />{" "}
                </a>
                <a href="">
                  <img src={Instagram} alt="" />
                </a>
                <a href="">
                  <img src={Twitter} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="leftSection">
              <ul>
                <li className="title">DISCOVER</li>
                <li>
                  <a href="">ARENA</a>
                </li>
              </ul>
              <ul style={{ marginRight: 0 }}>
                <li className="title"> ABOUT </li>
                <li>
                  <a href="#">About </a>
                </li>
                <li>
                  <a href="#"> F.A.Q</a>
                </li>
                <li>
                  {" "}
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="rightSection">
              {" "}
              <ul>
                <li className="title">CONTACT US</li>
                <li className="grey">E-mail</li>
                <li>
                  <a href="">info@example.com</a>
                </li>
              </ul>
              <ul style={{ marginRight: 0 }}>
                <li style={{ color: "transparent" }} className="title">
                  {" "}
                  .{" "}
                </li>
                <li className="grey">phone</li>
                <li>
                  <a href="#"> 555 636 636</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="copyright">© 2020 ARENA.All rights reserved.</div>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;

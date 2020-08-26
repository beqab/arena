import React from "react";
import Arrows from "../../assets/imgs/header.png";
import Scroll from "../../assets/imgs/scroll.png";
import AppStore from "../../assets/imgs/appl.png";
import GoogleStore from "../../assets/imgs/app.png";
import Diagram1 from "../../assets/imgs/1.svg";
import Diagram2 from "../../assets/imgs/2.svg";
import Diagram3 from "../../assets/imgs/3.svg";
import Circle from "../../assets/imgs/yelloCircle.svg";
import Knight1 from "../../assets/imgs/Knight1-1.svg";
import Knight2 from "../../assets/imgs/Knight2-2.svg";
import Knight3 from "../../assets/imgs/Knight3-3.png";
import Knight4 from "../../assets/imgs/Knight4.svg";
import Facebook from "../../assets/imgs/Facebook.svg";
import Instagram from "../../assets/imgs/Instagram.svg";
import Twitter from "../../assets/imgs/Twitter.svg";

class Home extends React.Component {
    scrollTop = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };
    render() {
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
                            <h1>ARENA</h1>
                            <div className="cormContainer">
                                <form>
                                    <div>
                                        <input placeholder="username" />
                                        <input className="password" placeholder="password" type="password" />
                                    </div>
                                    <button>log in</button>
                                </form>
                                <div className="resetPassLink text-center ">
                                    forgot your password? <a href=""> click here </a>
                                </div>
                            </div>
                        </div>
                        <div className="scrollDown text-center">
                            <img onClick={this.scrollTop} src={Scroll} />
                        </div>
                    </div>

                    <div className="secondSection">
                        <div className="container">
                            <div className="left">
                                <h3>ARENA</h3>
                                <p>
                                    Check out mobile multiplayer mobile game “ARENA”. where users can earn virtual coins
                                    and then withdraw the money in crypto curency.
                                </p>
                                <a href="#">read more</a>

                                <div className="appLinks">
                                    <img src={AppStore} alt="AppStore" />
                                    <img src={GoogleStore} alt="GoogleStore" />
                                </div>
                            </div>
                            <div className="rightSection">
                                <img src={Diagram1} alt="" />
                                <img src={Diagram2} alt="" />
                                <img src={Diagram3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="thirdSection">
                        <div className="container">
                            <div className="textSection left">
                                <h3>ACCOUNT</h3>
                                <p>description description description description description</p>
                                <img src={Circle} alt="" />
                            </div>
                            <div className="middle d-sm-none">
                                <img alt="Knight3" src={Knight3} />
                            </div>
                            <div className="textSection right">
                                <h3>F.A.Q</h3>
                                <p>description description description description description</p>
                                <img src={Circle} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fourthSection">
                    <div className="container">
                        <div className="left">
                            <h3>ARENA BATTLEFIELD</h3>
                            <p> Play, win and be the strongest on a battlefield.</p>
                        </div>
                        <div className="right ">
                            <img src={Knight4} alt="Knight4" />
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
                            <ul style={{marginRight: 0}}>
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
                            <ul style={{marginRight: 0}}>
                                <li style={{color: "transparent"}} className="title">
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

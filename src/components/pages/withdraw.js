import React from "react";
import Knight1 from "../../assets/imgs/Knight1-1.svg";
import Knight2 from "../../assets/imgs/Knight2-2.svg";
import {logOut} from "../../redux/auth/authActions";
import {useDispatch} from "react-redux";

const Withdraw = () => {
    const dispatch = useDispatch();

    return (
        <div className="withdraw">
            <img src={Knight1} alt="Knight1" className="Knight1" />
            <img src={Knight2} alt="Knight2" className="Knight2" />
            <div className="copyright">© 2020 ARENA.All rights reserved.</div>
            <div className="content">
                <h1>ARENA</h1>
                <div className="head">
                    <span>username</span>
                    <button onClick={() => dispatch(logOut())}>log out</button>
                </div>
                <div className="container">
                    <div className="left">
                        <h3>balance</h3>
                        <form>
                            <input />
                            <button>Withdraw</button>
                        </form>
                    </div>
                    <div className="right">
                        <form>
                            <input placeholder="amount USDT" />
                            <input placeholder="USDT wallet address" />
                            <button>confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;

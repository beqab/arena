import React from "react";
import Knight1 from "../../assets/imgs/Knight1-1.svg";
import Knight2 from "../../assets/imgs/Knight2-2.svg";
import { logOut } from "../../redux/auth/authActions";
import { useDispatch } from "react-redux";
import { profile, withdraw } from "../api/api";
import { useForm } from "react-hook-form";
import classnames from "classnames";

const Withdraw = () => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    getValues,
    setValue,
  } = useForm();
  const [serverError, setServerError] = React.useState(null);
  const [loading, setLoadaing] = React.useState(false);
  const [withdrawSuccess, seWithdrawSuccess] = React.useState(false);

  const [userData, setUserData] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await profile();
        if (data.success) {
          setUserData(data.success);
        }
      } catch (e) {
        console.log(e);
      }
    })();

    setUserData("data.success");
  }, []);

  const oninputChange = () => {
    setServerError(null);
    console.log(getValues());
  };

  const onSubmit = async (data) => {
    console.log(data, "onSubmit");
    setLoadaing(true);
    try {
      const res = await withdraw(data);
      setLoadaing(false);
      setValue("amount");
      setValue("withdraw_address");

      seWithdrawSuccess(true);
      setTimeout(() => {
        seWithdrawSuccess(false);
      }, 2000);
    } catch (e) {
      setLoadaing(false);
    }
  };

  return (
    <div className="withdraw">
      <img src={Knight1} alt="Knight1" className="Knight1" />
      <img src={Knight2} alt="Knight2" className="Knight2" />
      <div className="copyright">© 2020 ARENA.All rights reserved.</div>
      <div className="content">
        <h1>ARENA</h1>
        <div className="head">
          <span>{userData && userData.name}</span>
          <button onClick={() => dispatch(logOut())}>log out</button>
        </div>
        <div className="container">
          <div className="left">
            <h3>balance</h3>
            <form>
              <input
                className="text-center"
                value={
                  userData &&
                  userData.main_balance &&
                  userData.main_balance[0].balance + " USDT"
                }
              />
              <button>Withdraw</button>
            </form>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputWrapper">
                <input
                  ref={register({
                    required: true,
                  })}
                  type="number"
                  placeholder="amount USDT"
                  onChange={oninputChange}
                  name="amount"
                  className={classnames("auth_input password", {
                    "auth_input-error": errors.amount,
                  })}
                />
                <label>{errors.amount ? "amount is required" : " "}</label>
              </div>
              {console.log(errors.amount, "errrr")}

              <div className="inputWrapper">
                <label>
                  {errors.withdraw_address
                    ? "USDT wallet address is required"
                    : " "}
                </label>
                <input
                  ref={register({
                    required: true,
                  })}
                  onChange={oninputChange}
                  name="withdraw_address"
                  placeholder="USDT wallet address"
                />
              </div>

              <div className="buttonWrapper">
                {withdrawSuccess && <label>withdraw success</label>}
                <button disabled={loading}>
                  {loading && (
                    <img
                      width="30"
                      src="https://www.voya.ie/Interface/Icons/LoadingBasketContents.gif"
                    />
                  )}
                  confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;

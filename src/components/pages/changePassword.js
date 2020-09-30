import React from "react";
import { useForm } from "react-hook-form";
import { resetPassword } from "../api/api";
import { Link } from "react-router-dom";

const ChangePassword = (props) => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    getValues,
  } = useForm();
  const [serverError, setServerError] = React.useState(null);
  const [serverSuccess, setServerSuccess] = React.useState(null);
  const [loading, setLoadaing] = React.useState(false);

  const oninputChange = () => {
    setServerError(null);
    console.log(getValues());
  };

  const onSubmit = (data) => {
    console.log(data, "onSubmit");
    setLoadaing(true);
    resetPassword({
      token: localStorage.getItem("token"),
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    })
      .then((res) => {
        setLoadaing(false);

        setServerSuccess("password changed successfully");
        setTimeout(() => {
          window.location.href = "/withdraw";
        }, 2500);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status <= 400) {
          setServerError(err.response.data.message || "wrong password");
        } else {
          setServerError("server error :/");
        }

        setLoadaing(false);
      });
  };
  return (
    <div className="ChangePassword">
      <h1>
        <Link to="withdraw">ARENA </Link>
      </h1>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          {serverSuccess && (
            <span className="ErrorMsgs" style={{ color: "green" }}>
              {serverSuccess}
            </span>
          )}
          {serverError && <span className="ErrorMsgs"> {serverError}</span>}
          {(errors.newPassword || errors.confirmPassword) && (
            <span className="ErrorMsgs">
              {errors.newPassword && "Password field is require"} <br />{" "}
              {errors.confirmPassword && "Confirm Password field is require"}
            </span>
          )}
          {/* {errors.confirmPassword && (
            <span className="ErrorMsgs">Confirm Password field is require</span>
          )} */}
          <div>
            <input
              ref={register({
                required: true,
              })}
              placeholder="NEW  PASSWORD"
              type="password"
              onChange={oninputChange}
              name="newPassword"
            />
            <input
              ref={register({
                required: true,
              })}
              placeholder="CONFIRM  PASSWORD"
              onChange={oninputChange}
              name="confirmPassword"
              type="password"
            />
          </div>
          <button disabled={loading}>
            {loading && (
              <img
                width="10"
                src="https://www.voya.ie/Interface/Icons/LoadingBasketContents.gif"
              />
            )}{" "}
            Reset password
          </button>
        </form>
      </div>
      <div className="copyright">© 2020 ARENA.All rights reserved.</div>
    </div>
  );
};

export default ChangePassword;

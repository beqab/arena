import React from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { resetPassword } from "../api/api";

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
      confirmPassword: data.newPassword,
    })
      .then((res) => {
        setLoadaing(false);
      })
      .catch((err) => {
        console.log(err.response);
        setServerError(err.response.data.message || "wrong password");
        setLoadaing(false);
      });
  };
  return (
    <div className="ChangePassword">
      <h1>ARENA</h1>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          {serverError && <span className="serverError"> {serverError}</span>}
          {(errors.newPassword || errors.confirmPassword) && (
            <span className="serverError"> password fields is require</span>
          )}
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
          <button>Reset password</button>
        </form>
      </div>
      <div className="copyright">© 2020 ARENA.All rights reserved.</div>
    </div>
  );
};

export default ChangePassword;

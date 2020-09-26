import React from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import { login } from "../../api/api";
import { setCurrentUser } from "../../../redux/auth/authActions";
import { axios } from "axios";

import { useDispatch, useSelector } from "react-redux";

export default function (props) {
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

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const oninputChange = () => {
    setServerError(null);
    console.log(getValues());
  };

  const onSubmit = (data) => {
    console.log(data, "onSubmit");
    setLoadaing(true);
    login({ email: data.userName, password: data.password })
      .then((res) => {
        setLoadaing(false);
        dispatch(setCurrentUser(res.data.success));
      })
      .catch((err) => {
        console.log(err);
        setServerError("wrong user or password");
        setLoadaing(false);
      });
  };

  if (auth.isAuth) {
    return <Redirect to="/withdraw" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <div className="serverError"> {serverError}</div>}
      {(errors.userName || errors.userName) && (
        <div className="serverError"> name and password is required</div>
      )}

      <div>
        <input
          type="text"
          placeholder="username"
          name="userName"
          className={classnames("auth_input", {
            "auth_input-error": errors.userName,
          })}
          ref={register({
            required: true,
          })}
          onChange={oninputChange}
          id="userName"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className={classnames("auth_input password", {
            "auth_input-error": errors.userName,
          })}
          ref={register({
            minLength: 4,
            required: true,
          })}
          onChange={oninputChange}
          id="password"
        />
      </div>
      <button disabled={loading}>
        {loading && (
          <img src="https://www.voya.ie/Interface/Icons/LoadingBasketContents.gif" />
        )}
        log in
      </button>
    </form>
  );
}

// export default Login;

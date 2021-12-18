import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div
        className="pt-5 container d-flex align-items-center "
        style={{ height: "100vh" }}
      >
        <div className="col-md-6">
          <form className="w-100" onSubmit={handleSubmit(submitHandler)}>
            <input
              className="form-control mb-3"
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "You most enter name",
                },
              })}
              placeholder="Full name"
            />
            <span className="text-danger">{errors?.name?.message}</span>
            <input
              className="form-control mb-3"
              type="email"
              name="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "You most enter email address",
                },
                minLength: {
                  value: 8,
                  message: "This is not long enough to be an email",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "invalid email address",
                },
              })}
              placeholder="Email"
            />
            <span className="text-danger">{errors?.email?.message}</span>

            <input
              className="form-control mb-3"
              type="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "You most enter password",
                },
                minLength: {
                  value: 6,
                  message: "Password lenth is more then 5",
                },
              })}
              placeholder="password"
            />
            <span className="text-danger">{errors?.password?.message}</span>
            <input
              className="form-control mb-3"
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "You most enter confirm Password",
                },
                minLength: {
                  value: 6,
                  message: "confirm Password lenth is more then 5",
                },
              })}
              placeholder="Confirm Password"
            />
            <span className="text-danger">
              {errors?.confirmPassword?.message}
            </span>
            <input
              type="submit"
              className="form-control btn-warning"
              value="Log in now"
            />
            <div className="text-start">
              Already have an account?
              <Link to="/login" className="text-danger">
                Login
              </Link>
            </div>
          </form>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Register;

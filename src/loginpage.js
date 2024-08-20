import React from "react";
import "./loginpage.css";

function LoginPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>University of limpopo</h1>
        </div>
        <div className="loginform col-md-6">
          <h1 className="text-center mt-5">LOGIN</h1>
          <form>
            <div className="mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="username"
              />
            </div>

            <div className="mt-4">
              <input
                type="password"
                className="form-control"
                placeholder="password"
              />
            </div>
            <button className="submit-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      /
    </div>
  );
}

export default LoginPage;

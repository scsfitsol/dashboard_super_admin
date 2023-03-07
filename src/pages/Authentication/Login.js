import PropTypes from "prop-types";
import React, { useState } from "react";

import { Row, Col, Alert, Container } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import { loginUser, apiError, socialLogin } from "../../store/actions";

// import images
import logo from "../../assets/images/logo-sm-dark.png";
import authStorage from "../Utility/API/authStroge";
import CONSTANT from "../Utility/constnt";
import useHttp from "../../components/Hook/Use-http";

const Login = (props) => {
  const API_CALL = useHttp();

  const onUserLogin = (e) => {
    (async () => {
      const payload = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      API_CALL.sendRequest(
        CONSTANT.API.adminLogin,
        onSetLoginData,
        payload,
        "Login Successfully"
      );
    })();
  };

  const onSetLoginData = (res) => {
    authStorage.setAuthDetails(res?.token);
    localStorage.setItem("authUser", res?.token);
    window.history.replaceState(null, null, "/");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50 mb-0">
                      Sign in to continue to Fitsol.
                    </p>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={onUserLogin}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mt-5">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1"></i> Forgot your
                          password?
                        </Link>
                      </div>
                    </AvForm>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { error } = state.Login;
  return { error };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
);

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func,
};

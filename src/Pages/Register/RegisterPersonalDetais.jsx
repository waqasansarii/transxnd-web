import React, { useState, useLayoutEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ColorContext } from "../../Context/Context";
// assets

import pwdopen from "../../Assets/pwdopen.png";
import pwdclose from "../../Assets/Component 37 – 5.png";
import featherMail from "../../Assets/feather-mail.png";
import featherLock from "../../Assets/feather-lock.png";
import userimg from "../../Assets/userimg.png";
import calendaricon from "../../Assets/calendaricon.png";
import locationimg from "../../Assets/locationimg.png";

import SwiperCore, { Pagination } from "swiper";
import RegisterContactDetails from "./RegisterContactDetails";
SwiperCore.use([Pagination]);

const RegisterPersonalDetais = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let history = useHistory();
  const [show, setShow] = useState(true);
  const [pass, setPass] = useState(false);
  const [showComp, setShowComp] = useState(false);

  const showPassword = () => {
    setPass(!pass);
  };

  const { color } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
  };

  return (
    <React.Fragment>
      {/* <div className="main_form"> */}
      {showComp === false ? (
        <div className="login_form">
          <div className="s_form">
            <div className="s_text">
              <h2
                className="mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Register with{" "}
                <strong
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  Transxnd!
                </strong>
              </h2>
            </div>
            <div className="s_para mt-3">
              <p
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Please enter your email address and password to login..
              </p>
            </div>
            <h2
              className="fs-6 mt-5"
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              Personal Details
            </h2>
            <form className="s_form_fields">
              <div className="inline_input">
                <div className="p_input" style={{ width: "48%" }}>
                  <img src={userimg} alt="..." />
                  <input
                    style={{ paddingLeft: "15px" }}
                    placeholder="First Name"
                    type="text"
                    className="half_input"
                  />
                </div>
                <div className="p_input" style={{ width: "48%" }}>
                  <img src={userimg} alt="..." />
                  <input
                    style={{ paddingLeft: "15px" }}
                    placeholder="First Name"
                    type="text"
                    className="half_input"
                  />
                </div>
              </div>
              <div className="p_input">
                <img src={locationimg} alt="..." />
                <input placeholder="Enter Date" type="text" />
                <img src={calendaricon} alt="img" />
              </div>
              <div className="p_input">
                <img src={featherMail} alt="..." />
                <input
                
                  style={{ paddingLeft: "15px" }}
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="p_input">
                <img src={featherLock} alt="..." />
                <input
                  placeholder="Password"
                  type={!pass ? "password" : "text"}
                />
                {!pass ? (
                  <img onClick={showPassword} src={pwdopen} alt="img" />
                ) : (
                  <img onClick={showPassword} src={pwdclose} alt="img" />
                )}
              </div>
              <div className="p_input">
                <img src={featherLock} alt="..." />
                <input
                  placeholder="Confirm Password"
                  type={!pass ? "password" : "text"}
                />
                {!pass ? (
                  <img onClick={showPassword} src={pwdopen} alt="img" />
                ) : (
                  <img onClick={showPassword} src={pwdclose} alt="img" />
                )}
              </div>

              <div className="form_btn mt-5">
                <button
                  onClick={() => {
                    setShowComp(true);
                  }}
                  style={{
                    padding: "8px 50px",
                    border: "none",
                    backgroundColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bgwhite : style.bgblack,
                  }}
                  className="cus_btn1"
                >
                  Next
                </button>
              </div>
              <span
                className="s_label mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Not a member?{" "}
                <Link
                  style={{
                    color: mode === "light" ? style.bgblack : style.bggreen,
                  }}
                  to="/login"
                >
                  &nbsp;Register Now!
                </Link>
              </span>
            </form>
          </div>
        </div>
      ) : (
        <RegisterContactDetails />
      )}
      {/* </div> */}
    </React.Fragment>
  );
};

export default RegisterPersonalDetais;

import React, { useState, useLayoutEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ColorContext } from "../../Context/Context";

import "./Forms.css";
// assets

import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import darkorline from "../../Assets/darkor_line.png";

import pwdopen from "../../Assets/pwdopen.png";
import pwdclose from "../../Assets/Component 37 – 5.png";
import featherMail from "../../Assets/feather-mail.png";
import featherLock from "../../Assets/feather-lock.png";
import smilingafricanwoman from "../../Assets/smiling-african-woman.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination]);

const Login = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let history = useHistory();
  const [show, setShow] = useState(true);
  const [pass, setPass] = useState(false);

  const showPassword = () => {
    setPass(!pass);
  };

  const { color, setColor } = useContext(ColorContext);
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
      <div className="main_form">
        <div className="login_form">
          <div className="s_form">
            <div className="s_text">
              <h2
                className="mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Login to{" "}
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

            <div className="s_social_btn">
              <button style={{ backgroundColor: "#3C66C4" }}>
                <img src={fbIcon} alt="fbicon" />
                <span className="ms-2">Login with Facebook</span>
              </button>
              <button style={{ backgroundColor: "#CF4332" }}>
                <img src={gmailIcon} alt="gmailicon" />
                <span className="ms-2">Login with Google</span>
              </button>
            </div>
            <div className="or_line">
              <img
                style={{ display: mode === "light" ? "block" : "none" }}
                src={orLine}
                alt="img"
              />
              <img
                style={{ display: mode === "light" ? "none" : "block" }}
                src={darkorline}
                alt="img"
              />
            </div>

            <form className="s_form_fields">
              <div className="p_input">
                <img src={featherMail} alt="..." />
                <input
                  style={{
                    paddingLeft: "15px",
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                  }}
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="p_input">
                <img src={featherLock} alt="..." />
                <input
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                  }}
                  placeholder="Password"
                  type={!pass ? "password" : "text"}
                />
                {!pass ? (
                  <img onClick={showPassword} src={pwdopen} alt="img" />
                ) : (
                  <img onClick={showPassword} src={pwdclose} alt="img" />
                )}
              </div>

              <div className="s_checkbox">
                <label className="sc_label ">
                  <input type="checkbox" name="key" value="value" />
                  <span
                    style={{
                      color: mode === "light" ? style.bgblack : style.bgwhite,
                    }}
                  >
                    Remember me
                  </span>
                </label>
                <span
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgdarkgreen,
                  }}
                  className="fp_text"
                  onClick={() => {
                    history.push("/forget");
                  }}
                >
                  Forgot Password?
                </span>
              </div>
              <div className="form_btn">
                <button
                  style={{
                    padding: "8px 80px",
                    border: "none",
                    backgroundColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bgwhite : style.bgblack,
                  }}
                  className="cus_btn1 fw-bold"
                >
                  Login
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
                    color: mode === "light" ? style.bgblack : style.bgdarkgreen,
                  }}
                  to="/register"
                >
                  &nbsp;Register Now!
                </Link>
              </span>
            </form>
          </div>
        </div>

        <div className="login_img_content">
          <div>
            <Swiper pagination spaceBetween={50} slidesPerView={1}>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/*        
        <div className="login_img_content">
          <img className="lgic_1" src={xSmallIcon} alt="img" />
          <img className="lgic_2" src={xMedumIcon} alt="img" />
          <img className="lgic_3" src={polygon1} alt="img" />
          <img className="lgic_4" src={polygon2} alt="img" />
        

          <div className="d-flex justify-content-end">
            <Swiper pagination spaceBetween={50} slidesPerView={1}>
              <SwiperSlide style={{width: "546px", height: "475px" ,marginRight: "50px "}}>
                <img className="s_bgimg1" src={loginBg} alt="img" />
              </SwiperSlide>
              <SwiperSlide style={{width: "546px", height: "475px" ,marginRight: "50px "}}>
                <img className="s_bgimg1" src={loginBg} alt="img" />
              </SwiperSlide>
              <SwiperSlide style={{width: "546px", height: "475px" ,marginRight: "50px "}}>
                <img className="s_bgimg1" src={loginBg} alt="img" />
              </SwiperSlide>
              <SwiperSlide style={{width: "546px", height: "475px" ,marginRight: "50px "}}>
                <img className="s_bgimg1" src={loginBg} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
     
      */}
      </div>
    </React.Fragment>
  );
};

export default Login;

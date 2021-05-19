import React, { useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";
import Fade from "react-reveal/Fade";

import "./Home.css";

import homegirlimg from "../../Assets/homeimg2.png";
import homemap from "../../Assets/homemap.png";
import africanwomanimg from "../../Assets/beautiful-african-woman.png";
import africanwomanimgmob from "../../Assets/beautiful-african-american-mob.png";
import youngafrican2 from "../../Assets/young-african2.png";
import hchip1 from "../../Assets/hchip1.png";
import hchip2 from "../../Assets/hchip2.png";
import hchip3 from "../../Assets/hchip3.png";
import hchip4 from "../../Assets/hchip4.png";
import pchip1 from "../../Assets/pchip1.png";
import pchip2 from "../../Assets/pchip2.png";
import pchip3 from "../../Assets/pchip3.png";
import pchip4 from "../../Assets/pchip4.png";
import whybg from "../../Assets/whybg.png";
import debitcard from "../../Assets/debitcard.png";
import hichip1 from "../../Assets/hichip1.png";
import hichip2 from "../../Assets/hichip2.png";
import hichip3 from "../../Assets/hichip3.png";
import hichip4 from "../../Assets/hichip4.png";
import appstoreicons from "../../Assets/appstoreicons.png";
import handmob from "../../Assets/handmob.png";
import handmob2 from "../../Assets/handmob2.png";
import { Link } from "react-router-dom";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { color, setColor } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bglightblue: "#E9F8F7",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
    bglightgreen: "#0A1716",
  };

  return (
    <React.Fragment>
      <div className="home_section">
        <div className="home_hero">
          <div className="h_left">
            <div className="hl_box">
              <h2
                className="lh-base"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Transfer Money Across{" "}
                <strong
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  Africa{" "}
                </strong>
                In Real Time With the
                <strong
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  {" "}
                  Lowest Fees
                </strong>
              </h2>

              <p
                className="lh-base"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Join all the people who get the best exchange rates with
                Transxnd. We’re cheaper than most leading African Banks. Enjoy
                rapid transfers and the lowest fees. Your friends and family get
                more when you send them money with Transxnd.
              </p>
              <Link to="/register">
                <button
                  style={{
                    marginTop: "0.8rem",
                    backgroundColor: "transparent",
                    border: "1px solid #27BDAD",
                    color: mode === "light" ? style.bgblack : style.bgdarkgreen,
                  }}
                  className="cus_btn1"
                >
                  Sign-up today!
                </button>
              </Link>
            </div>
          </div>
          <div className="h_right">
            <div className="hr_box">
              <img src={homemap} alt="..." />
            </div>
            <div className="hr_box2">
              <img src={homegirlimg} alt="..." />
            </div>
            <div className="hr_box3">
              <Fade right duration={1800} delay={1200}>
                <img src={homegirlimg} alt="..." />
              </Fade>
            </div>
          </div>
        </div>{" "}
        <div
          className="home_tmoney"
          style={{
            backgroundColor:
              mode === "light" ? style.bglightblue : style.bglightgreen,
          }}
        >
          <div className="htm_left">
            <img className="h_mob1" src={africanwomanimg} alt="..." />
            <img className="h_mob2" src={africanwomanimgmob} alt="..." />
          </div>
          <div className="htm_right">
            <img className="hchip1" src={hchip1} alt="..." />
            <img className="hchip2" src={hchip2} alt="..." />
            <img className="hchip3" src={hchip3} alt="..." />
            <img className="hchip4" src={hchip4} alt="..." />
            <div className="hl_box">
              <h2
                className="lh-base"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Transfer Money
                <br />
                in{" "}
                <strong
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  minutes{" "}
                </strong>
                with our
                <br />
                <strong
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  {" "}
                  secure{" "}
                </strong>
                solution
              </h2>

              <p
                className="lh-base"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Join all the people who get the best exchange rates with
                Transxnd. We’re cheaper than most leading African Banks. Enjoy
                rapid transfers and the lowest fees. Your friends and family get
                more when you send them money with Transxnd.
              </p>
              <Link to="/register">
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #27BDAD",
                    color: mode === "light" ? style.bgblack : style.bgdarkgreen,
                  }}
                  className="cus_btn1"
                >
                  Sign-up today!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home_pay">
          <div
            className={mode === "light" ? "pay_bg pay_bg1" : "pay_bg pay_bg2"}
          >
            <div className="p_content">
              <h2
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Pay{" "}
                <strong
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                  }}
                >
                  wherever
                </strong>{" "}
                your want!
              </h2>
              <p
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Transxnd is a rapid money transfer service, designed to provide
                a low cost service within Africa & for Africans in the diaspora.
              </p>
              <p
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Visit our Centers, Use your phone or Go online.
              </p>
            </div>
            <div className="pcard_section">
              <div className="pcard">
                <div
                  className="pcard-img"
                  style={{ border: "1px solid #27BDAD" }}
                >
                  <img src={pchip1} alt="..." />
                </div>
                <span
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  Mobile <br /> Recharge
                </span>
              </div>
              <div className="pcard">
                <div
                  className="pcard-img"
                  style={{ border: "1px solid #27BDAD" }}
                >
                  <img src={pchip1} alt="..." />
                </div>
                <span
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  Mobile <br /> Recharge
                </span>
              </div>
              <div className="pcard">
                <div
                  className="pcard-img"
                  style={{ border: "1px solid #27BDAD" }}
                >
                  <img src={pchip1} alt="..." />
                </div>
                <span
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  Mobile <br /> Recharge
                </span>
              </div>
              <div className="pcard">
                <div
                  className="pcard-img"
                  style={{ border: "1px solid #27BDAD" }}
                >
                  <img src={pchip1} alt="..." />
                </div>
                <span
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  Mobile <br /> Recharge
                </span>
              </div>
            </div>
            <Link to="/register" style={{ textAlign: "center" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #27BDAD",
                  margin: "2rem auto",
                  color: mode === "light" ? style.bgblack : style.bgdarkgreen,
                }}
                className="cus_btn1 mt-5"
              >
                Sign-up today!
              </button>
            </Link>
          </div>
        </div>
        <div
          className="home_why"
          style={{
            backgroundColor:
              mode === "light" ? style.bglightblue : style.bglightgreen,
          }}
        >
          <div
            className="hw_content"
            style={{
              color: mode === "light" ? style.bgblack : style.bgwhite,
            }}
          >
            <h2>Why Transxd?</h2>
            <p>
              Transxnd is a rapid money transfer service, designed to provide a
              low cost service within Africa & for Africans in the diaspora.
            </p>
          </div>
          <div className="hw_img">
            <img src={whybg} alt="..." />
          </div>
        </div>
        <div className="home_paydebit">
          <div className="pd_left">
            <div className="pdl_b">
              <div
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                <img src={debitcard} alt="..." />
                <h2>
                  Pay{" "}
                  <strong
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                  >
                    wherever
                  </strong>{" "}
                  your want! <br />
                  with{" "}
                  <strong
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                  >
                    Debit Card!
                  </strong>
                </h2>
                <p>
                  Shop and pay bills online or in stores wherever our GIM UEMOA
                  Debit cards are accepted.
                </p>
              </div>
              <Link to="/register">
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #27BDAD",
                    color: mode === "light" ? style.bgblack : style.bgdarkgreen,
                  }}
                  className="cus_btn1"
                >
                  Sign-up today!
                </button>
              </Link>
            </div>
          </div>
          <div className="pd_right">
            <img src={youngafrican2} alt="..." />
          </div>
        </div>
        <div
          className="home_instruction"
          style={{
            backgroundColor:
              mode === "light" ? style.bglightblue : style.bglightgreen,
          }}
        >
          <div className="hi_content container">
            <div
              className="row gy-5 justify-content-center"
              style={{
                color: mode === "light" ? style.bggreen : style.bgwhite,
              }}
            >
              <div className="col-12 col-sm-5 col-md-6 col-lg-6">
                <div className="hi_card">
                  <img src={hichip1} alt="..." />
                  <h2>Customer Support</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-5 col-md-6 col-lg-6">
                <div className="hi_card">
                  <img src={hichip2} alt="..." />
                  <h2>Customer Support</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-5 col-md-6 col-lg-6">
                <div className="hi_card">
                  <img src={hichip3} alt="..." />
                  <h2>Customer Support</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-5 col-md-6 col-lg-6">
                <div className="hi_card">
                  <img src={hichip4} alt="..." />
                  <h2>Customer Support</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home_commingsoon">
          <div
            className="hc_box"
            style={{
              backgroundColor:
                mode === "light" ? style.bglightblue : style.bglightgreen,
            }}
          >
            <div className="hcb_left">
              <h2
                className="lh-base"
                style={{
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
              >
                Coming Soon <br />
                on your favorite devices!
              </h2>
              <p
                className="lh-base"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </p>
              <div>
                <span
                  style={{
                    color: mode === "light" ? style.bgblack : style.bgwhite,
                  }}
                >
                  Stay Tuned!
                </span>
                <img src={appstoreicons} alt="..." />
              </div>
            </div>
            <div className="hcb_right">
              <img className="h_mob1" src={handmob} alt="..." />
              <img className="h_mob2" src={handmob2} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

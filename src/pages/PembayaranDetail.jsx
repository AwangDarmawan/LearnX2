import "../styles/PembayaranDetail.css";

import Nav from "../components/Home/Nav";
import master1 from "../assets/mastercard1.svg";
import visa2 from "../assets/visa2.svg";
import amek3 from "../assets/amex3.svg";
import paypal4 from "../assets/paypal4.svg";
import gambar from "../assets/image.png";
import arah from "../assets/carbon.svg";

import NavbarBottom from "../components/Home/NavbarBottom";

import { Link } from "react-router-dom"

const PembayaranDetail = () => {
  return (
    <>
      <Nav />
      
        <div className="container">
          <div className="header-card">
            <div className="body-card my-3">
              <div className="accordion  " id="accordionExample">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-dark collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Bank Transfer
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className=" accordion-body mb-0">
                      <div className="logo d-flex gap-5 justify-content-center ">
                        <img src={master1} alt="" />
                        <img src={visa2} alt="" />
                        <img src={amek3} alt="" />
                        <img src={paypal4} alt="" />
                      </div>

                      <form className="form1">
                      <div className=" cardnumber ">
                        <p>Card number</p>
                        <input
                        type="text"
                        className="rp"
                        placeholder="4480 0000 0000 0000"
                        />
                      </div>
                      <div className="cardnumber ">
                        <p>Card holder name</p>
                      
                        <input
                        type="text"
                        className="rp"
                        placeholder="Jhon Doe"
                        />
                      </div>
                      <div className=" kard d-flex gap-3">
                        <div className="cardnumber2  ">
                          <p>CVV</p>
                          <input
                            type="text"
                            className="rp"
                            placeholder="Jhon Doe"
                        />
                        </div>
                        <div className="cardnumber2">
                          <p>Expiry Date</p>
                          <input 
                          type="text"
                          className="rp"
                          placeholder="Jhon Doe"
                        />
                        </div>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Credit Card
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body mb-0">
                      <div className="logo d-flex gap-5 justify-content-center mt-2 ">
                        <img src={master1} alt="" />
                        <img src={visa2} alt="" />
                        <img src={amek3} alt="" />
                        <img src={paypal4} alt="" />
                      </div>

                      <form className="form1 ">
                      <div className=" cardnumber ">
                        <p>Card number</p>
                        <input
                        type="text"
                        className="rp"
                        placeholder="4480 0000 0000 0000"
                        />
                      </div>
                      <div className="cardnumber ">
                        <p>Card holder name</p>
                      
                        <input
                        type="text"
                        className="rp"
                        placeholder="Jhon Doe"
                        />
                      </div>
                      <div className=" kard d-flex gap-3">
                        <div className="cardnumber2  ">
                          <p>CVV</p>
                          <input
                            type="text"
                            className="rp"
                            placeholder="Jhon Doe"
                        />
                        </div>
                        <div className="cardnumber2">
                          <p>Expiry Date</p>
                          <input 
                          type="text"
                          className="rp"
                          placeholder="Jhon Doe"
                        />
                        </div>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="body-card1 ">
              <div className="kard-body ">
                <div className="body-image ">
                  <p className="texts-bayar">Pembayaran Kelas</p>
                  <div className="x-image">
                    <img src={gambar} alt="" className="gambar" />
                    <p className="text-Ui mb-0 ps-3 pt-2">UI/UX Design</p>
                    <p className="text-Intro ps-3">
                      Intro to Basic of User Interaction Design
                      <p className="text-tengah fw-normal pb-2 ">
                        by Simon Doe
                      </p>
                    </p>
                  </div>
                  <div className="text-body d-flex">
                    <p className="txt-h1">
                      Harga <br />
                      <p className="fw-normal"> Rp 349,000 </p>
                    </p>
                    <p className="txt-h1">
                      PPN 11% <br /> <p className="fw-normal"> Rp 38,390</p>
                    </p>
                    <p className="txt-h1">
                      Total Bayar <br />
                      <p className="fw-normal"> Rp 387,390</p>
                    </p>
                  </div>
                </div>
                <Link to={"/payment-success"}>
                <button className="btn btn-bayar">
                  Bayar dan Ikuti Kelas Selamanya <img src={arah} alt="" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <NavbarBottom />
      
    </>
  );
};

export default PembayaranDetail;

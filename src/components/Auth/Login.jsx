import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import "../../styles/Auth.css";
import { Link } from 'react-router-dom';


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper">
          <div className=" col-md-7 d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
              <h3 className="txtmasuk font-bold">Masuk</h3>
              <form className="fm">
                  <label className="mt-3">ID Karyawan</label>
                  <div className="input-form-user">
                    <input
                      type="email"
                      className="form-control-login"
                      placeholder="5520120121"
                    />
                  </div>
           
                  <label className="mt-3">Password</label>
                  <div className="input-form-user">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control-login"
                      placeholder="Masukan Password"
                    />
                    <i className="icon-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlashFill/> : <EyeFill/>}</i>
                  </div>
                  <Link to="/">
                <div className="d-grid mb-5 mt-2">
                  <button className="btn btn-masuk " type="submit">
                    Masuk
                  </button>
                </div>
                </Link>
              </form>
            </div>
          </div>
          <div className="col-md-5 account-block"></div>
        </div>
      </div>
    </>
  );
};

export default Login;

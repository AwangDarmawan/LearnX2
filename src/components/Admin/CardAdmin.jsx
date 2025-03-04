import "../../styles/CardAdmin.css";

import fiAdmin from "../../assets/icon-card-admin.svg";

const CardAdmin = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 py-3 g-2 card-dashboard">
          <div className="col">
            <div
              className="card card-users d-flex justify-content-center align-items-center"
              style={{ "max-width": "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">10</p>
                  <span className="title"> Karyawan kontrak</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              // className="card card-active d-flex justify-content-center align-items-center"
              // style={{ "max-width": "275px", width: "100%", height: "108px" }}
              className="card card-users d-flex justify-content-center align-items-center"
              style={{ "max-width": "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">5</p>
                  <span className="title">Karyawan tetap</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              // className="card card-premium d-flex justify-content-center align-items-center"
              // style={{ "max-width": "275px", width: "100%", height: "108px" }}
              className="card card-active d-flex justify-content-center align-items-center"
              style={{ "max-width": "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">5</p>
                  <span className="title"> Perhitungan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAdmin;

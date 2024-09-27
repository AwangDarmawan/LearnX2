import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
const SideBarAdmin = () => {
  const [isKaryawanOpen, setIsKaryawanOpen] = useState(false);

  const toggleKaryawan = () => {
    setIsKaryawanOpen(!isKaryawanOpen);
  };

  useEffect(() => {
    if (location.pathname === "/admin" || location.pathname === "/admin/karyawantetap") {
      setIsKaryawanOpen(true);
    }
  }, [location.pathname]);
  

    
  return (
    <>
      <div className="sidebar-admin-wrapper">
        <div className="navbar-brand"></div>
        <div className="sidebar-admin-menu">
          <Link to={"/admin/dashboard"} className="sidebar-admin-item">
            <p className="item" >Dashboard</p>
          </Link>
          <div className="sidebar-admin-item" onClick={toggleKaryawan}>
          <p className="item">Akun</p>
        </div>
        <Link to={"/admin/kelas"} className="sidebar-admin-item" onClick={toggleKaryawan}>
            <p className="item">Karyawan</p>
          </Link>
          <Link to={"/admin/kelas"} className="sidebar-admin-item" onClick={toggleKaryawan}>
            <p className="item">Kriteria</p>
          </Link>
          <Link to={"/admin/kelas"} className="sidebar-admin-item">
            <p className="item">Perhitungan</p>
          </Link>
          
          <Link to={"/admin/login"} className="sidebar-admin-item">
            <p className="item">Keluar</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SideBarAdmin;
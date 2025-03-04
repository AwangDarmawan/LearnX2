import fiHome from "../../assets/iconamoon_home-bold.svg";
import fiNotif from "../../assets/pajamas_notifications.svg";
import fiKelas from "../../assets/Vector.svg";
import fiKursus from "../../assets/cil_list.svg";
import fiAkun from "../../assets/tdesign_user.svg";
import { Link } from "react-router-dom";
import "../../styles/NavbarBottom.css";

const NavbarBottom = () => {
  return (
    <div className="navbar-bottom-wrapper d-flex justify-content-center gap-2 text-center sticky-bottom align-content-center">
      <div className="menu">
        <Link to={"/"} className="text-link">
          <img src={fiHome} alt="Beranda" />
          Beranda
        </Link>
      </div>
      <div className="menu">
        <Link to={"/notifikasi"} className="text-link">
          <img src={fiNotif} alt="Notif" />
          Notifikasi
        </Link>
      </div>
      <div className="menu">
        <Link to={"/kelas-saya"} className="text-link">
          <img src={fiKelas} alt="Kursus" />
          Kelas
        </Link>
      </div>
      <div className="menu">
        <Link to={"/topik-kelas"} className="text-link">
          <img src={fiKursus} alt="Kelas" />
          Kursus
        </Link>
      </div>
      <div className="menu">
        <Link to={"/profil-saya"} className="text-link">
          <img src={fiAkun} alt="Akun" />
          Akun
        </Link>
      </div>
    </div>
  );
};

export default NavbarBottom;

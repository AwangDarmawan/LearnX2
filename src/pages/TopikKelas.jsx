import "../styles/TopikKelas.css";

import { Form, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import SideFilter from "../components/Kelas/SideFilter";
import HorizontalFilterTopik from "../components/Kelas/HorizontalFilterTopik";
import CardTopikKelas from "../components/Kelas/CardTopikKelas";
import Nav from "../components/Home/Nav";
import NavbarBottom from "../components/Home/NavbarBottom";
import FilterKelasOffCanvas from "../components/Kelas/FilterKelasOffCanvas";


const TopikKelas = () => {
  return (
    <>
      <Nav />
      <div className="bg-topik-kelas">
        <div className="container">
          <div className="kelas-header d-flex justify-content-between align-items-center py-4 gap-5">
            <h3 className="text-start m-0 tagline-topik-kelas">Topik Kelas</h3>
            <div className="d-flex">
              <FilterKelasOffCanvas />
              <Form
                inline
                className="d-flex justify-content-end m-0 search-kelas"
              >
                <Row>
                  <Col>
                    <div className="position-relative form">
                      <Form.Control
                        type="text"
                        placeholder="Cari Kelas"
                        className="pl-5 search-form"
                      />
                      <div className="d-flex align-items-center position-absolute top-50 end-0 translate-middle-y px-2">
                        <Search />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>

          <div className="konten-kelas my-5">
            <Row>
              <Col md={4}>
                <SideFilter />
              </Col>

              <Col md={8}>
                <HorizontalFilterTopik />

                {/* Card */}
                <CardTopikKelas />
              </Col>
            </Row>
          </div>
        </div>
        <NavbarBottom />
      </div>
      <FilterKelasOffCanvas />
    </>
  );
};

export default TopikKelas;

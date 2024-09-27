import { useState } from "react";

import "../../styles/TableAdmin.css";

import { Form } from "react-bootstrap";
import { Funnel } from "react-bootstrap-icons";

import addBtn from "../../assets/gala_add.svg";
import ModalTambahKelas from "../Modals/ModalTambahKelas";
import ModalUbahKelas from "../Modals/ModalUbahKelas";

const TableKaryawantetap = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Karyawan Tetap</h3>
          <div className="atribut">
            <button
              className="btn-tambah"
              onClick={() => setModalShowTambah(true)}
            >
              <img src={addBtn} alt="" className="pe-2" />
              Tambah
            </button>
            <div className="position-relative form-admin">
              <Form.Control
                type="text"
                placeholder="Cari Kelas"
                className="pl-5 search-form-admin"
              />
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">Kode Kelas</th>
                <th scope="col">Nama</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Posisi</th>
                <th scope="col">Status</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">X0123</th>
                <td className="text-kategori">Ahmad</td>
                <td className="text-nama">Laki-laki</td>
                <td className="text-level">Logistik</td>
                <td className="text-harga">Tetap</td>

                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">X033</th>
                <td className="text-kategori">faldo</td>
                <td className="text-nama">Laki-laki</td>
                <td className="text-level">Logistik</td>
                <td className="text-harga">Tetap</td>

                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ModalUbahKelas
        show={modalShowUbah}
        onHide={() => setModalShowUbah(false)}
      />
      <ModalTambahKelas
        show={modalShowTambah}
        onHide={() => setModalShowTambah(false)}
      />
    </>
  );
};

export default TableKaryawantetap;

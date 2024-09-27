import CardAdmin from "../components/Admin/CardAdmin";
import NavAdmin from "../components/Admin/NavAdmin";
import SideBarAdmin from "../components/Admin/SideBarAdmin";
import TableAdmin from "../components/Admin/TableKaryawantetap";

import "../styles/Admin.css"

const Karyawantetap = () => {
  return (
    <>
        <div className="dashboard-admin-wrapper">
            <div className="admin-header">
                <SideBarAdmin />
            </div>
            <div className="admin-body">
                <NavAdmin />
                <div className="px-5 pt-5">
                    <CardAdmin/>
                </div>
                <div className="p-5">
                    <TableAdmin/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Karyawantetap;
import "../../styles/LoginAdmin.css";
import { Link } from 'react-router-dom';

const LoginAdmin = () => {
    return (
        <>
            <div className="login-admin-wrapper">
                <div className="login-admin-brand">
                    <div className="navbar-brand"></div>
                </div>
                <div className="login-admin-body">
                    <div className="login-admin-input">
                        <div className="admin-body-header">
                            Login
                        </div>
                        <form className="admin-body-form" action="">
                            <div className="admin-form-item">
                                <label>ID Admin</label>
                                <input type="text" placeholder="ID Admin" />
                            </div>
                            <div className="admin-form-item">
                                <label>Password</label>
                                <input type="password" placeholder="Masukkan password" />
                            </div>
                        </form>
                        <Link to="/admin/dashboard">
                            <button className="btn-login-admin" type="submit">Masuk</button>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin;
import React from 'react';
import { Link } from 'react-router-dom';
import App from '../../App.css';
function Register(props) {
    return (
        <>
            <div className="container">
                <form>
                    <div className="register">
                        <h1>Đăng ký</h1>
                        <p>Vui lòng điền thông tin để đăng ký</p>
                        <div className="form-group">
                            <label for="username"><b>Tên đăng nhập </b><span>*</span></label>
                            <input type="text" placeholder="Enter username" className="form-control" name="username" id="username" />
                        </div>
                        <div className="form-group">
                            <label for="password"><b>Mật khẩu </b><span>*</span></label>
                            <input type="password" placeholder="********" className="form-control" name="password" id="password" />
                        </div>
                        <div className="form-group">
                            <label for="password-repeat"><b>Nhập lại mật khẩu </b><span>*</span></label>
                            <input type="password" placeholder="********" className="form-control" name="password-repeat" id="password-repeat" />
                        </div>
                        <div className="form-group">
                            <label for="email"><b>Email </b><span>*</span></label>
                            <input type="text" placeholder="Enter email" className="form-control" name="email" id="email" />
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <p >Tôi đã đọc và đồng ý các điều kiện 
                                    <Link to="/thoathuan"> Thỏa thuận sử dụng</Link>.</p>
                            </label>
                        </div>
                        <button type="submit" className="submit btn btn-danger btn-block btn-lg">Đăng ký</button>
                    </div>
                </form>
                <div className="register-to-login">
                    <p>Bạn đã có tài khoản rồi? <Link to="/user/login">Đăng nhập</Link>.</p>
                </div>
            </div>
        </>
    );
}

export default Register;
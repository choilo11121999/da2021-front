import './../../css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="login-header">
        <h2 className="text-center w-100 font-weight-bold">
          Đăng Nhập
        </h2>
      </div>
      <div className="login-body my-3">
        <form action="" method="post">
          <div className="form-group my-4">
            <i className="fas fa-user"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required="required"
            />
          </div>
          <div className="form-group my-4">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              required="required"
            />
          </div>
          <div className="form-group my-4">
            <input
              type="submit"
              className="btn btn-danger btn-block btn-lg"
              value="Đăng nhập"
            />
          </div>
        </form>
      </div>
      <div className="login-footer">
        <div>
          <Link to="/user/forgot_password">Quên mật khẩu?</Link>
        </div>
        <div>
          Bạn chưa có tài khoản? <Link to="/user/register">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

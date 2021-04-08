export const Login = () => {
  return (
    <div className="login">
      <div>
        <h4 className="text-center w-100 font-weight-bold">
          Sign in
        </h4>
      </div>
      <div className="">
        <form action="" method="post">
          <div className="form-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              value="Login"
            />
          </div>
        </form>
      </div>
      <div className="">
        <div>
          <a href="#">Forgot Password?</a>
        </div>
        <div>
          Ban chua co tai khoan? <a href="facebook.com">Dang ky</a>
        </div>
      </div>
    </div>
  );
};

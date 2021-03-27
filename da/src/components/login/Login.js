export const Login = () => {
  return (
    <div className="modal fade" id="signinPage" style={{marginTop: '100px'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title text-center w-100 font-weight-bold">
              Sign in
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-lable="close"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form action="/examples/actions/confirmation.php" method="post">
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
          <div className="modal-footer d-flex flex-column">
            <div><a href="#">Forgot Password?</a></div>
            <div>
              Ban chua co tai khoan? <a href="facebook.com">Dang ky</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

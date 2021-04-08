import "./../../css/Header.css";
import imgLogo from "./../../img/cgvlogo.png";
const Header = () => {
  return (
    <>
      <div className="header-language-background p-1 clearfix">
        <div class="navbar navbar-expand-sm navbar-light bg-light float-right p-0">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link p-0" href="#">
                Tin moi & uu dai
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-0" href="#">
                Ve cua toi
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-0" href="#">
                Dang nhap/ Dang ky
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-0" href="#">
                VN/EN
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-page d-flex align-items-center">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <img src={imgLogo} width="150" height="70" alt="logo" />
          </a>
          <div class="navbar mt-4">
            <ul class="navbar-nav">
              <li class="nav-item position-relative show-menu">
                <a class="nav-link text-dark font-weight-bold" href="#">
                  PHIM
                </a>
                <div className="menu">
                  <div className="list-menu d-flex flex-column">
                    <a href="#" class="">
                      Phim dang chieu
                    </a>
                    <a href="#" class="">
                      Phim sap chieu
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item position-relative show-menu">
                <a class="nav-link text-dark font-weight-bold" href="#">
                  RẠP CGV
                </a>
                <div className="menu">
                  <div className="list-menu d-flex flex-column">
                    <a href="#" class="">
                      Tat ca cac rap
                    </a>
                    <a href="#" class="">
                      Rap dac biet
                    </a>
                    <a href="#" class="">
                      Rap sap mo
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item position-relative show-menu">
                <a class="nav-link text-dark font-weight-bold" href="#">
                  THÀNH VIÊN
                </a>
                <div className="menu">
                  <div className="list-menu d-flex flex-column">
                    <a href="#" class="">
                      Tai khoan CGV
                    </a>
                    <a href="#" class="">
                      Quyen loi
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item position-relative show-menu">
                <a class="nav-link text-dark font-weight-bold" href="#">
                  CULTUREPLEX
                </a>
                <div className="menu">
                  <div className="list-menu d-flex flex-column">
                    <a href="#" class="">
                      Quay Online
                    </a>
                    <a href="#" class="">
                      Su kien & ve nhom
                    </a>
                    <a href="#" class="">
                      CGV restaurant
                    </a>
                    <a href="#" class="">
                      The qua tang
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

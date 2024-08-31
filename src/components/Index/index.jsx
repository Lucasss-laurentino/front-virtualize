import { Outlet } from "react-router-dom";
import { MenuLateral } from "../Menu_lateral";
import { Navbar } from "../Navbar";

export const Index = () => {
  return (
    <>
      <Navbar/>
      <div id="layoutSidenav">
        <MenuLateral/>
        <div id="layoutSidenav_content">
          <Outlet/>
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; Your Website 2023</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

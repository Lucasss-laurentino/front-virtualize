import './index.css';

export const Navbar = () => {
  return (
    <>
      <nav class="sb-topnav navbar navbar-expand bg-nav-bar">
        <a class="navbar-brand ps-3" href="/">
          <img src="/imagens/vt.png" class="img-fluid mx-3" width="70%" alt="Responsive image"/>
        </a>
        <button
          class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 text-white"
          id="sidebarToggle"
          href="#!"
        >
          <i class="fas fa-bars"></i>
        </button>
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button class="btn btn-secondary" id="btnNavbarSearch" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user fa-fw"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a class="dropdown-item" href="/login">
                  Entrar
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/criar_usuario">
                  Cadastre-se
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

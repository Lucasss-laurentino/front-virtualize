import "./index.css";

export const Criar_usuario = () => {
  return (
    <>
      <body class="background-login">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div class="container">
                <div class="container d-flex justify-content-center align-items-center pt-1">
                  <a class="navbar-brand ps-3 text-center" href="/">
                    <img
                      src="/imagens/vt.png"
                      class="img-fluid mt-1"
                      width="40%"
                      alt="Responsive image"
                    />
                  </a>
                </div>

                <div class="row justify-content-center">
                  <div class="col-lg-7">
                    <div class="card shadow-lg border-0 rounded-lg mt-1">
                      <div class="card-header">
                        <h3 class="text-center font-weight-light my-1">
                          Criar conta
                        </h3>
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputEmail"
                              type="email"
                              placeholder="name@example.com"
                            />
                            <label for="inputEmail">Email</label>
                          </div>
                          <div class="row mb-3">
                            <div class="col-12">
                              <div class="form-floating">
                                <input
                                  class="form-control"
                                  id="inputLastName"
                                  type="text"
                                  placeholder="Enter your last name"
                                />
                                <label for="inputLastName">
                                  Nome da sua empresa
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="row mb-3">
                            <div class="col-md-6">
                              <div class="form-floating mb-3 mb-md-0">
                                <input
                                  class="form-control"
                                  id="inputPassword"
                                  type="password"
                                  placeholder="Create a password"
                                />
                                <label for="inputPassword">Senha</label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-floating mb-3 mb-md-0">
                                <input
                                  class="form-control"
                                  id="inputPasswordConfirm"
                                  type="password"
                                  placeholder="Confirm password"
                                />
                                <label for="inputPasswordConfirm">
                                  Confirmar senha
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="mt-4 mb-0">
                            <div class="d-grid">
                              <a
                                class="btn btn-dark btn-block"
                                href="login.html"
                              >
                                Criar conta
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="card-footer text-center py-3">
                        <div class="small">
                          <a class="text-dark" href="/login">
                            Já tem uma conta ?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </>
  );
};

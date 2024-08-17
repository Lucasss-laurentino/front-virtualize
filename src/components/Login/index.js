import "./index.css";

export const Login = () => {
  return (
    <>
      <body class="background-login">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div class="container">
                <div class="container d-flex justify-content-center align-items-center pt-2">
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
                  <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg mt-2">
                      <div class="card-header">
                        <h3 class="text-center font-weight-light my-1">
                          Login
                        </h3>
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputEmail"
                              type="email"
                              placeholder="nome@exemplo.com"
                            />
                            <label for="inputEmail">Email</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputPassword"
                              type="password"
                              placeholder="Password"
                            />
                            <label for="inputPassword">Senha</label>
                          </div>
                          <div class="form-check mb-3">
                            <input
                              class="form-check-input"
                              id="inputRememberPassword"
                              type="checkbox"
                              value=""
                            />
                            <label
                              class="form-check-label"
                              for="inputRememberPassword"
                            >
                              Lembrar senha
                            </label>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a class="small text-dark" href="/esqueceu_senha">
                              Esqueceu a senha ?
                            </a>
                            <a class="btn btn-dark" href="index.html">
                              Entrar
                            </a>
                          </div>
                        </form>
                      </div>
                      <div class="card-footer text-center py-3">
                        <div class="small">
                          <a class="text-dark" href="/criar_usuario">
                            Ainda não possui uma conta ?
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

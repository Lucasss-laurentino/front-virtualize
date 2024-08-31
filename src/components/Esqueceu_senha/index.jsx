import "./index.css";

export const Esqueceu_senha = () => {
  return (
    <>
      <body class="background-login">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div class="container">
                <div class="container d-flex justify-content-center align-items-center pt-5">
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
                    <div class="card shadow-lg border-0 rounded-lg mt-1">
                      <div class="card-header">
                        <h3 class="text-center font-weight-light my-1">
                          Recuperar senha
                        </h3>
                      </div>
                      <div class="card-body">
                        <div class="small mb-3 text-muted">
                          Entre com seu email e nós iremos enviar um link pra
                          cadastrar uma nova senha
                        </div>
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
                          <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a class="small text-dark" href="/login">
                              Voltar
                            </a>
                            <a class="btn btn-dark" href="login.html">
                              Recuperar senha
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

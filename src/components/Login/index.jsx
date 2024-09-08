import { useContext } from "react";
import "./index.css";
import { LoginContext } from "../../contexts/LoginContext";

export const Login = () => {

  const { user, setUser, login } = useContext(LoginContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setUser({
      ...user,
      [name]: value
    });

  }

  return (
    <>
      <body className="background-login">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container height-container">
                
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-2">
                      <div className="card-header">
                        <h3 className="text-center font-weight-light my-1">
                          Login
                        </h3>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputEmail"
                              type="email"
                              name="EMAIL"
                              value={user.EMAIL}
                              onChange={(event) => {
                                handleChange(event);
                              }}
                              placeholder="nome@exemplo.com"
                            />
                            <label >Email</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputPassword"
                              type="password"
                              name="PASSWORD"
                              value={user.PASSWORD}
                              placeholder="Password"
                              onChange={(event) => {
                                handleChange(event);
                              }}
                            />
                            <label>Senha</label>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              id="inputRememberPassword"
                              type="checkbox"
                              value=""
                            />
                            <label
                              className="form-check-label"
                            >
                              Lembrar senha
                            </label>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a className="small text-dark" href="/esqueceu_senha">
                              Esqueceu a senha ?
                            </a>
                            <a className="btn btn-dark" onClick={() => {
                              login();
                            }}>
                              Entrar
                            </a>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        <div className="small">
                          <a className="text-dark" href="/criar_usuario">
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

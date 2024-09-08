import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import "./index.css";
import { MutatingDots } from "react-loader-spinner";


export const Criar_usuario = () => {
  const { user, setUser, createUserAndLogin, loader, popup } =
    useContext(LoginContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  
  return (
    <>
      <body className="background-login">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container height-container-create-user">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="card shadow-lg border-0 rounded-lg mt-1">
                      <div className="card-header">
                        <h3 className="text-center font-weight-light my-1">
                          Criar conta
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
                              disabled={loader ? true : false}
                              value={user.EMAIL}
                              onChange={(event) => {
                                handleChange(event);
                              }}
                              placeholder="name@example.com"
                            />
                            <label for="inputEmail">Email</label>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="form-floating">
                                <input
                                  className="form-control"
                                  id="inputLastName"
                                  type="text"
                                  name="NOME_EMPRESA"
                                  disabled={loader ? true : false}
                                  value={user.NOME_EMPRESA}
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  placeholder="Enter your last name"
                                />
                                <label for="inputLastName">
                                  Nome da sua empresa
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row mb-3">
                            <div className="col-md-6">
                              <div className="form-floating mb-3 mb-md-0">
                                <input
                                  className="form-control"
                                  id="inputPassword"
                                  type="password"
                                  placeholder="Create a password"
                                  name="PASSWORD"
                                  value={user.PASSWORD}
                                  disabled={loader ? true : false}
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                />
                                <label for="inputPassword">Senha</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating mb-3 mb-md-0">
                                <input
                                  className="form-control"
                                  id="inputPasswordConfirm"
                                  type="password"
                                  name="CONFIRM_PASSWORD"
                                  disabled={loader ? true : false}
                                  value={user.CONFIRM_PASSWORD}
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  placeholder="Confirm password"
                                />
                                <label for="inputPasswordConfirm">
                                  Confirmar senha
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 mb-0">
                            <div className="d-grid justify-content-center">
                              {loader ? (
                                <MutatingDots
                                  visible={true}
                                  height="100"
                                  width="100"
                                  color="#212529"
                                  secondaryColor="#212529"
                                  radius="12.5"
                                  ariaLabel="mutating-dots-loading"
                                  wrapperStyle={{}}
                                  wrapperClass=""
                                />
                              ) : (
                                <a
                                  className="btn btn-dark btn-block w-100"
                                  onClick={() => {
                                    createUserAndLogin();
                                  }}
                                >
                                  Criar conta
                                </a>
                              )}
                            </div>
                            {
                              popup && <div className="container text-center my-3">
                                <p className="m-0 text-danger">Usuário existente</p>
                              </div>
                            }
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        <div className="small">
                          <a className="text-dark" href="/login">
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

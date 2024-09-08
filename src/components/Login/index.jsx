import { useContext } from "react";
import "./index.css";
import { LoginContext } from "../../contexts/LoginContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../validations/loginValidation";
import { MutatingDots } from "react-loader-spinner";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const { user, setUser, login, erroLogin, loaderLogin } =
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
              <div className="container height-container-login">
                <div className="row height-container-login justify-content-center align-items-center">
                  <div className="col-9">
                    <div className="card shadow-lg border-0 rounded-lg mt-2">
                      <div className="card-header">
                        <h3 className="text-center font-weight-light my-1">
                          Login
                        </h3>
                      </div>
                      <div className="card-body">
                        <form onSubmit={handleSubmit(login)}>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputEmail"
                              type="email"
                              {...register("EMAIL")}
                              value={user.EMAIL}
                              onChange={(event) => {
                                handleChange(event);
                              }}
                              placeholder="nome@exemplo.com"
                            />
                            {errors.EMAIL && (
                              <p className="m-0 my-1 text-danger">
                                {errors.EMAIL.message}
                              </p>
                            )}
                            <label>Email</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputPassword"
                              type="password"
                              {...register("PASSWORD")}
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
                            {errors.PASSWORD && (
                              <p className="m-0 my-1 text-danger">
                                {errors.PASSWORD.message}
                              </p>
                            )}
                            <label className="form-check-label">
                              Lembrar senha
                            </label>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a
                              className="small text-dark"
                              href="/esqueceu_senha"
                            >
                              Esqueceu a senha ?
                            </a>
                            {loaderLogin ? (
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
                              <button type="submit" className="btn btn-dark">
                                Entrar
                              </button>
                            )}
                          </div>
                        </form>
                        <div className="container text-center my-3">
                          <p className="m-0 text-danger">{erroLogin}</p>
                        </div>
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

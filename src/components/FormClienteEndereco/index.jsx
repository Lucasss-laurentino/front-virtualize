import "./index.css";

export const FormClientesEndereco = (props) => {
  const { aba_ativa, form_ativo } = props;
  return (
    <>
      <div className="container-fluid pt-4 border border-dark p-0">
        <div className="d-flex">
          <form action="" className="d-flex flex-column col-12 p-0">
            {/*LINHA 1 FORMULARIO */}
            <div className="container p-0 d-flex">
              <div className="col-3 px-3">
                <div className="col-12 my-3">
                  <span>CEP</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <span class="col-3 border-right-w">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="32"
                        fill="currentColor"
                        class="bi bi-list-ol"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"
                        />
                        <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" />
                      </svg>
                    </span>
                    <input class="col-9 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-3 px-3">
                <div className="col-12 my-3">
                  <span>Estado</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <span class="col-3 border-right-w">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="32"
                        fill="currentColor"
                        class="bi bi-list-ol"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"
                        />
                        <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" />
                      </svg>
                    </span>
                    <input class="col-9 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-6 px-3">
                <div className="col-12 my-3">
                  <span>Cidade</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <span class="col-2 border-right-w">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="32"
                        fill="currentColor"
                        class="bi bi-list-ol"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"
                        />
                        <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" />
                      </svg>
                    </span>
                    <input class="col-9 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
            </div>
            {/*LINHA 2 FORMULARIO */}
            <div className="container p-0 d-flex">
              <div className="col-9 px-3">
                <div className="col-12 my-3">
                  <span>Endereço</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-3 px-3">
                <div className="col-12 my-3">
                  <span>Número</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
            </div>
            {/*LINHA 2 FORMULARIO */}
            <div className="container p-0 d-flex">
              <div className="col-4 px-3">
                <div className="col-12 my-3">
                  <span>Complemento</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-8 px-3">
                <div className="col-12 my-3">
                  <span>Bairro</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
            </div>
            {/*BTN*/}
            <div class="formulario col-11 p-1 mb-1">
              <div class="row justify-content-end">
                <div class="col-lg-1 encapsula-input p-0 m-1">
                  <button class="btn btn-sm bg-btn">Salvar</button>
                </div>
                <div class="col-lg-1 encapsula-input p-0 m-1">
                  <button
                    class="btn btn-sm btn-secondary"
                    type="button"
                    onClick={() => {
                      props.setShow(false);
                    }}
                  >
                    Voltar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

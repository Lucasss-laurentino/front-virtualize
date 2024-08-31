import "./index.css";

export const FormClientesInfo = (props) => {
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
                  <span>Cliente final?</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-4 px-3">
                <div className="col-12 my-3">
                  <span>Indicador de IE</span>
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
              <div className="col-5 px-3">
                <div className="col-12 my-3">
                  <span>Inscrição Estadual</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-9 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
            </div>
            {/*LINHA 2 FORMULARIO */}
            <div className="container p-0 d-flex">
              <div className="col-4 px-3">
                <div className="col-12 my-3">
                  <span>IE Subst. trib.</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-4 px-3">
                <div className="col-12 my-3">
                  <span>Inscrição Municipal</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-4 px-3">
                <div className="col-12 my-3">
                  <span>Suframa</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <h5 className="m-0 mx-1">Outras Informações</h5>
            </div>
            {/*LINHA 3 FORMULARIO */}
            <div className="container p-0 d-flex">
              <div className="col-4 px-3">
                <div className="col-12 my-3">
                  <span>Data nascimento</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <span class="col-2 border-right-w">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="32"
                        fill="currentColor"
                        class="bi bi-calendar3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                    </span>
                    <input class="col-9 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-8 px-3">
                <div className="col-12 my-3">
                  <span>Palavra-chave</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <span class="col-1 border-right-w">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="32"
                        fill="currentColor"
                        class="bi bi-tags-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z" />
                      </svg>
                    </span>
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
            </div>
            {/*LINHA 4 FORMULARIO */}
            <div className="container p-0 d-flex">
              <div className="col-4 px-3">
                <div className="col-12 my-3">
                  <span>Data comemorativa</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <span class="col-2 border-right-w">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="32"
                        fill="currentColor"
                        class="bi bi-calendar3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                    </span>
                    <input class="col-9 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
              <div className="col-8 px-3">
                <div className="col-12 my-3">
                  <span>Descrição curta da comemoração</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <input class="col-11 input-descricao-sem-borda" />
                  </div>
                </div>
              </div>
            </div>
            {/*LINHA 5 FORMULARIO */}
            <div className="container p-0 d-flex">
              <div className="col-4 px-3">
                <div className="col-12 my-3">
                  <span>Bases legais (LGPD)</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <span class="col-2 border-right-w">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
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
            {/*LINHA 6 FORMULARIO */}
            <div className="container p-0 d-flex">
              <div className="col-12 px-3">
                <div className="col-12 my-3">
                  <span>Observações</span>
                  <div class="d-flex justify-content-start encapsula-input-icon">
                    <textarea className="col-12 border border-white" name="" id="" cols="30" rows="5">

                    </textarea>
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

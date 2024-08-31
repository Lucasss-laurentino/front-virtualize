export const FormProdutosDadosFiscais = (props) => {
  const { form_ativo, setShow } = props;

  return (
    <>
      <div className="container-fluid pt-4 border border-dark p-0">
        <div className="d-flex">
          <form action="" className="d-flex col-12 p-0">
            <div className="col-12 mb-3">
              <div className="dados-gerais">
                <div className="p-4">
                  <div className="d-flex col-12">
                    <div className="col-12">
                      <span className="text-white">Origem</span>
                      <div className="encap-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#ffffff"
                          class="bi bi-list-task col-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                          />
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                          <path
                            fill-rule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                          />
                        </svg>
                        <input type="text" className="input-clientes col-11" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex col-12 mt-3">
                    <div className="col-3">
                      <span className="text-white">Referência EAN/GTIN</span>
                      <div className="encap-icon">
                        <input type="text" className="input-clientes col-12" />
                      </div>
                    </div>
                    <div className="col-3">
                      <span className="text-white">
                        Peso unitário liquido (kg)
                      </span>
                      <div className="encap-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#ffffff"
                          class="bi bi-list-task col-2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                          />
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                          <path
                            fill-rule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                          />
                        </svg>
                        <input type="text" className="input-clientes col-10" />
                      </div>
                    </div>
                    <div className="col-3">
                      <span className="text-white">
                        Peso unitário bruto (kg)
                      </span>
                      <div className="encap-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#ffffff"
                          class="bi bi-list-task col-2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                          />
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                          <path
                            fill-rule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                          />
                        </svg>
                        <input type="text" className="input-clientes col-10" />
                      </div>
                    </div>
                    <div className="col-3">
                      <span className="text-white">NCM</span>
                      <div className="encap-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#ffffff"
                          class="bi bi-list-task col-2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                          />
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                          <path
                            fill-rule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                          />
                        </svg>
                        <input type="text" className="input-clientes col-10" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex col-12 mt-3">
                    <div className="col-3">
                      <span className="text-white">Unidade comercial</span>
                      <div className="encap-icon">
                        <input type="text" className="input-clientes col-12" />
                      </div>
                    </div>
                    <div className="col-3">
                      <span className="text-white">Exceção tabela IPI</span>
                      <div className="encap-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#ffffff"
                          class="bi bi-list-task col-2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                          />
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                          <path
                            fill-rule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                          />
                        </svg>
                        <input type="text" className="input-clientes col-10" />
                      </div>
                    </div>
                    <div className="col-3">
                      <span className="text-white">Código CEST</span>
                      <div className="encap-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#ffffff"
                          class="bi bi-list-task col-2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                          />
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                          <path
                            fill-rule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                          />
                        </svg>
                        <input type="text" className="input-clientes col-10" />
                      </div>
                    </div>
                    <div className="col-3">
                      <span className="text-white">
                        Código Benef. Fiscal na UF
                      </span>
                      <div className="encap-icon">
                        <input type="text" className="input-clientes col-12" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex col-12 mt-3">
                    <div className="col-6">
                      <span className="text-white">
                        Unidade tributada diferente
                      </span>
                      <div className="encap-icon">
                        <input type="text" className="input-clientes col-12" />
                      </div>
                    </div>
                    <div className="col-6">
                      <span className="text-white">
                        Ignorar trib no preço compra/venda
                      </span>
                      <div className="encap-icon">
                        <input type="text" className="input-clientes col-12" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex col-12 mt-2">
                    <div className="col-12">
                      <span className="text-white">
                        Anotações para Nota Fiscal eletrônica
                      </span>
                      <div className="encap-icon">
                        <input type="text" className="input-clientes col-12" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mt-3 col-12">
                    <div className="col-12 d-flex justify-content-end">
                      <button class="btn btn-sm mx-2 bg-white">Salvar</button>
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

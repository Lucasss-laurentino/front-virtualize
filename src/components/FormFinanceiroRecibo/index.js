import "./index.css";
import Modal from "react-bootstrap/Modal";

export const FormFinanceiroRecibo = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        fullscreen={props.fullscreen}
        onHide={() => props.setShow(false)}
      >
        <Modal.Body className="p-0 d-flex">
          <div class="form-show">
            <div class="formulario-header">
              <h5 class="titulo-formulario-header-financeiro">Novo recibo</h5>
              <button
                type="button"
                class="btn-close-form"
                onClick={() => {
                  props.setShow(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </button>
            </div>
            <div class="encapsula-formulario mb-5">
              <div class="container-fluid mx-2">
                <div class="row justify-content-center">
                  <form class="formulario col-11 p-5">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 encapsula-input my-1">
                        <label class="label-form">Quem emite o recibo</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              class="bi bi-card-list"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                      <div class="col-lg-8 encapsula-input my-1">
                        <label class="label-form">Vias a imprimir</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              class="bi bi-card-list"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-lg-4 encapsula-input my-1">
                        <label class="label-form">Recebi de</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                      <div class="col-lg-4 encapsula-input my-1">
                        <label class="label-form">CPF ou CNPJ</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-vcard-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                      <div class="col-lg-4 encapsula-input my-1">
                        <label class="label-form">O valor de</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-currency-dollar"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-lg-4 encapsula-input my-1">
                        <label class="label-form">Na data</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-calendar3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                      <div class="col-lg-8 encapsula-input my-1">
                        <label class="label-form">Referente a</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                    </div>
                    <hr class="my-4" />
                    <div class="row justify-content-end">
                      <div class="col-lg-1 encapsula-input p-0 m-1">
                        <button class="btn btn-sm bg-btn">Salvar</button>
                      </div>
                      <div class="col-lg-1 encapsula-input p-0 m-1">
                        <button
                          class="btn btn-sm btn-secondary"
                          type="button"
                          onClick={() => {
                            window.location.href = "/financeiro_recibo";
                          }}
                        >
                          Voltar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

import { useEffect, useState } from "react";
import "./index.css";
import Modal from "react-bootstrap/Modal";

export const FormFinanceiro = (props) => {
  const [form_hiden, setForm_hiden] = useState("form-hiden");

  useEffect(() => {
    setForm_hiden("form-show");
  });

  return (
    <>
      <Modal
        show={props.show}
        fullscreen={props.fullscreen}
        onHide={() => props.setShow(false)}
      >
        <Modal.Body className="p-0">
          <div class="form-show">
            <div class="formulario-header">
              <h5 class="titulo-formulario-header-financeiro">
                Conta a receber
              </h5>
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
                      <div class="col-12 encapsula-input my-1">
                        <label class="label-form">Descrição</label>
                        <input class="col-12 input-descricao" autoFocus />
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-lg-4 encapsula-input my-1">
                        <label class="label-form">Valor</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
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
                      <div class="col-lg-2 encapsula-input my-1">
                        <label class="label-form">Receber agora</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <input class="col-11 input-descricao-sem-borda input-invisivel" />
                        </div>
                      </div>
                      <div class="col-lg-3 encapsula-input my-1">
                        <label class="label-form">Data vencimento</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              class="bi bi-calendar2-week"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                      <div class="col-lg-3 encapsula-input my-1">
                        <label class="label-form">
                          Data crédito (previsão)
                        </label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              class="bi bi-calendar2-week"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-12 encapsula-input my-1">
                        <label class="label-form">Recebido de</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right-sm">
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
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-lg-6 encapsula-input my-1">
                        <label class="label-form">Categoria</label>
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
                      <div class="col-lg-6 encapsula-input my-1">
                        <label class="label-form">Palavra-chave</label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              class="bi bi-tags-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                              <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z" />
                            </svg>
                          </span>
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
                            window.location.href = "/financeiro";
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

import Modal from "react-bootstrap/Modal";
import { FormClientesDados } from "../FormClientesDados";
import { useEffect, useState } from "react";
import "./index.css";
import { FormClientesEndereco } from "../FormClienteEndereco";
import { FormClientesInfo } from "../FormCLientesInfo";

export const FormClientes = (props) => {
  const [aba_ativa, setAba_ativa] = useState(1);
  const [form_ativo, setForm_ativo] = useState(1);

  return (
    <>
      <Modal
        show={props.show}
        ll
        fullscreen={props.fullscreen}
        onHide={() => props.setShow(false)}
      >
        <Modal.Body className="p-0 d-flex">
          <div class="form-show">
            <div class="formulario-header">
              <h5 class="titulo-formulario-header-financeiro">Nova Compra</h5>
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
                  <div class="formulario col-11 p-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-4 position-relative">
                          <button
                            className={
                              aba_ativa === 1
                                ? "aba-ativa-clientes"
                                : "col-12 bg-btn-cliente"
                            }
                            onClick={() => {
                              setAba_ativa(1);
                            }}
                          >
                            DADOS
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            className={
                              aba_ativa === 2
                                ? "aba-ativa-clientes"
                                : "col-12 bg-btn-cliente"
                            }
                            onClick={() => {
                              setAba_ativa(2);
                            }}
                          >
                            ENDEREÇO
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            className={
                              aba_ativa === 3
                                ? "aba-ativa-clientes"
                                : "col-12 bg-btn-cliente"
                            }
                            onClick={() => {
                              setAba_ativa(3);
                            }}
                          >
                            INFORMAÇÕES ADICIONAIS
                          </button>
                        </div>
                      </div>
                    </div>
                    {aba_ativa === 1 && (
                      <FormClientesDados
                        aba_ativa={aba_ativa}
                        form_ativo={form_ativo}
                      />
                    )}
                    {aba_ativa === 2 && (
                      <FormClientesEndereco
                        aba_ativa={aba_ativa}
                        form_ativo={form_ativo}
                      />
                    )}
                    {aba_ativa === 3 && (
                      <FormClientesInfo
                        aba_ativa={aba_ativa}
                        form_ativo={form_ativo}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

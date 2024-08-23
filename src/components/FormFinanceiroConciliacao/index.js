import Modal from "react-bootstrap/Modal";

export const FormFinanceiroConciliacao = (props) => {
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
                Enviar arquivo bancário
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
                      <div class="col-lg-6 encapsula-input my-1">
                        <label class="label-form">
                          Arquivo OFX (obtido no seu banco online)
                        </label>
                        <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                          <span class="border-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-cloud-arrow-up-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z" />
                            </svg>
                          </span>
                          <input class="col-10 input-descricao-sem-borda" />
                        </div>
                      </div>
                      <div class="col-lg-6 encapsula-input my-1">
                        <label class="label-form">Conta relacionada</label>
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
                            window.location.href = "/financeiro_conciliacao";
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

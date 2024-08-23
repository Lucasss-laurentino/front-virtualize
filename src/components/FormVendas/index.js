import "./index.css";
import Modal from "react-bootstrap/Modal";

export const FormVendas = (props) => {
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
              <h5 class="titulo-formulario-header-financeiro">Nova venda</h5>
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
                  <form class="form-vendas">
                    <div class="formulario col-11 p-5">
                      <div class="row justify-content-center">
                        <div class="col-4 encapsula-input my-1">
                          <label class="label-form">Nome do cliente</label>
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
                        <div class="col-4 encapsula-input my-1">
                          <label class="label-form">Venda ou orçamento?</label>
                          <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                            <span class="border-right ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-cart-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                              </svg>
                            </span>
                            <input class="col-10 input-descricao-sem-borda" />
                          </div>
                        </div>
                        <div class="col-4 encapsula-input my-1">
                          <label class="label-form">Data</label>
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
                            <input class="col-9 input-descricao-sem-borda" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="formulario col-11 p-4 mt-3">
                      <div className="d-flex justify-content-start align-items-center">
                        <h5>Produtos</h5>
                      </div>
                      <div className="row">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Produto ou serviço</th>
                              <th scope="col">Preço de venda</th>
                              <th scope="col">Quantidade</th>
                              <th scope="col">Desconto</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="col-9">
                                  <div className="field-table-form-produto col-12">
                                    <div className="col-4 px-1 d-flex align-items-center bg-input-table-vendas">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-boxes mx-1"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                                      </svg>
                                      Produto
                                    </div>
                                    <input
                                      type="text"
                                      className="col-6 border border-white outline-input"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>Otto</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>@mdo</td>
                            </tr>
                          </tbody>
                        </table>
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

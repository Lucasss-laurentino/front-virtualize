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
        <Modal.Body className="p-0 d-flex">
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
                              <th scope="col" className="text-center">
                                Produto ou serviço
                              </th>
                              <th scope="col" className="text-center">
                                Preço de venda
                              </th>
                              <th scope="col" className="text-center">
                                Quantidade
                              </th>
                              <th scope="col" className="text-center">
                                Desconto
                              </th>
                              <th scope="col" className="text-center">
                                Total
                              </th>
                              <th scope="col" className="text-center">
                                Apagar
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="col-4">
                                <div className="col-12">
                                  <div className="field-table-form-produto">
                                    <div className="col-md-4 col-xl-3 px-1 d-flex align-items-center bg-input-table-vendas">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-boxes mx-1 col-2"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                                      </svg>
                                      <p className="m-0 col-10">Produto</p>
                                    </div>
                                    <input
                                      type="text"
                                      className="col-8 border border-white outline-input"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="col-2">
                                <div className="col-12">
                                  <div className="field-table-form-produto">
                                    <div className="col-md-3 col-xl-2 px-1 d-flex align-items-center bg-input-table-vendas">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-currency-dollar col-12"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                                      </svg>
                                    </div>
                                    <input
                                      type="text"
                                      className="col-8 border border-white outline-input"
                                      placeholder="R$ 0,00"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="col-2">
                                <div className="col-12">
                                  <div className="field-table-form-produto">
                                    <div className="col-md-3 col-xl-2 px-1 d-flex align-items-center bg-input-table-vendas">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
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
                                    </div>
                                    <input
                                      type="text"
                                      className="col-8 border border-white outline-input"
                                      placeholder="0"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="col-1">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                  <div className="field-table-form-produto">
                                    <input
                                      type="text"
                                      className="col-12 border border-white outline-input"
                                      placeholder="R$ 0,00"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="col-1">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                  <p className="m-0 col-12 text-center">
                                    R$ 0,00
                                  </p>
                                </div>
                              </td>
                              <td className="col-1">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                  <button className="btn btn-sm btn-danger">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="19"
                                      height="19"
                                      fill="currentColor"
                                      class="bi bi-trash3-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot className="position-relative">
                            <div className="position-absolute height-table-footer col-12 ">
                              <div className="col-3">
                                <h6>Total</h6>
                              </div>
                              <div className="col-2">
                                <h6>R$ 0,00</h6>
                              </div>
                            </div>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    {/* BTN */}
                    <div class="formulario col-11 p-3 mb-5 mt-3">
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

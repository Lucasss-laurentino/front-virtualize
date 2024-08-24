import Modal from "react-bootstrap/Modal";

export const FormFornecedores = (props) => {
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
                                    <form class="form-vendas">
                                        <div class="formulario col-11 p-5">
                                            <div class="row justify-content-center">
                                                <div class="col-9 encapsula-input my-1">
                                                    <label class="label-form">Informe o códigode venda para buscar dados</label>
                                                    <div class="my-1 d-flex justify-content-start encapsula-input-icon">
                                                        <span class="border-right">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                                                                <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" />
                                                            </svg>
                                                        </span>
                                                        <input class="col-9 input-descricao-sem-borda" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row justify-content-end mt-3">
                                                <div class="col-lg-1 encapsula-input p-0 m-1">
                                                    <button class="btn btn-sm bg-btn">Buscar</button>
                                                </div>
                                                <div class="col-lg-1 encapsula-input p-0 m-1">
                                                    <button
                                                        class="btn btn-sm btn-secondary"
                                                        type="button"
                                                        onClick={() => {
                                                            props.setShow(false)
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
    )
}
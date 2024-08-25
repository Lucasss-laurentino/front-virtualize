import './index.css';

export const FormClientesDados = (props) => {
    const { aba_ativa, form_ativo } = props
    return (
        <>
            <div className="container-fluid pt-4 border border-dark p-0">
                <div className="d-flex">
                    <form action="" className="d-flex col-12 p-0">
                        <div className="col-3 person-dv">
                            <div className="d-flex mt-4 justify-content-center align-items-center">
                                <h6 className='m-0'>Tipo de contato</h6>
                            </div>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <ul className='p-0 m-0 col-12 list-style-none'>
                                    <li className='text-start my-2 '>
                                        <input type="checkbox" checked={form_ativo === 1 && true} className='mx-2' />
                                        <span>Cliente</span>
                                    </li>
                                    <li className='text-start my-2'>
                                        <input type="checkbox" checked={form_ativo === 2 && true} className='mx-2' />
                                        <span>Fornecedor</span>
                                    </li>
                                    <li className='text-start my-2'>
                                        <input type="checkbox" checked={form_ativo === 3 && true} className='mx-2' />
                                        <span>Transportador</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-9 ">
                            <div className="dados-gerais">
                                <div className="p-4">
                                    <h6 className='text-white'>Dados gerais</h6>
                                    <div className="d-flex flex-column col-12">
                                        <span className='text-white'>Nome / Razão social</span>
                                        <input type="text" className="input-descricao" />
                                    </div>
                                    <div className="d-flex mt-3 col-12">
                                        <div className="col-6">
                                            <span className='text-white'>CPF / CNPJ</span>
                                            <div className="encap-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-credit-card col-2" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                                </svg>
                                                <input type="text" className="input-clientes col-10" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <span className='text-white'>Nome fantasia</span>
                                            <div className="encap-icon">
                                                <input type="text" className="input-clientes col-12" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3 col-12">
                                        <div className="col-6">
                                            <span className='text-white'>Nome do contato</span>
                                            <div className="encap-icon">
                                                <input type="text" className="input-clientes col-12" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <span className='text-white'>Telefone</span>
                                            <div className="encap-icon">
                                                <input type="text" className="input-clientes col-10" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-telephone-outbound-fill col-2" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3 col-12">
                                        <div className="col-12">
                                            <span className='text-white'>Email</span>
                                            <div className="encap-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-envelope-at-fill col-2" viewBox="0 0 16 16">
                                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                                                </svg>
                                                <input type="text" className="input-clientes col-10" />
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
                                                    props.setShow(false)
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
}
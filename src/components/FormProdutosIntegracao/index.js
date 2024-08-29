export const FormProdutosIntegracao = (props) => {
   const { form_ativo, setShow } = props;

    return (
    <>
      <>
        <div className="container-fluid pt-4 border border-dark p-0">
          <div className="d-flex">
            <form action="" className="d-flex col-12 p-0">
              <div className="col-12 mb-3">
                <div className="dados-gerais">
                    <div className="p-4">
                      <h5 className="text-white">Fotos produtos</h5>
                    <div className="d-flex col-12">
                      <div className="col-8">
                        <span className="text-white">Nome</span>
                        <div className="encap-icon">
                          <input
                            type="text"
                            className="input-clientes col-12"
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <span className="text-white">Código próprio</span>
                        <div className="encap-icon">
                          <input
                            type="text"
                            className="input-clientes col-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

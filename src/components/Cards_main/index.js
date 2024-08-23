export const Cards_main = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card text-success border border-success mb-4">
            <div className="card-body">Contas a receber <h6>Total: 0</h6></div>
            <div className="card-footer bg-success d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                Ver mais detalhes..
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card text-danger border border-danger mb-4">
            <div className="card-body">Contas a pagar <h6>Total: 0</h6></div>
            <div className="card-footer bg-danger d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                Ver mais detalhes..
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card text-success border border-success mb-4">
            <div className="card-body">Vendas do dia <h6>Total: 0</h6></div>
            <div className="card-footer bg-success d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                Ver mais detalhes..
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card text-danger border border-danger mb-4">
            <div className="card-body">Compras do dia <h6>Total: 0</h6></div>
            <div className="card-footer bg-danger d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="#">
                Ver mais detalhes..
              </a>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

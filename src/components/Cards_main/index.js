export const Cards_main = () => {
  return (
    <>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="card text-success border border-success mb-4">
            <div class="card-body">Contas a receber <h6>Total: 0</h6></div>
            <div class="card-footer bg-success d-flex align-items-center justify-content-between">
              <a class="small text-white stretched-link" href="#">
                Ver mais detalhes..
              </a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card text-danger border border-danger mb-4">
            <div class="card-body">Contas a pagar <h6>Total: 0</h6></div>
            <div class="card-footer bg-danger d-flex align-items-center justify-content-between">
              <a class="small text-white stretched-link" href="#">
                Ver mais detalhes..
              </a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card text-success border border-success mb-4">
            <div class="card-body">Vendas do dia <h6>Total: 0</h6></div>
            <div class="card-footer bg-success d-flex align-items-center justify-content-between">
              <a class="small text-white stretched-link" href="#">
                Ver mais detalhes..
              </a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card text-danger border border-danger mb-4">
            <div class="card-body">Compras do dia <h6>Total: 0</h6></div>
            <div class="card-footer bg-danger d-flex align-items-center justify-content-between">
              <a class="small text-white stretched-link" href="#">
                Ver mais detalhes..
              </a>
              <div class="small text-white">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

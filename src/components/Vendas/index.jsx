import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { FormVendas } from "../FormVendas";
import { ListCaminho } from "../ComponentesComuns/ListCaminho";
import { FormButtons } from "../ComponentesComuns/FormButtons";
import { Table } from "../ComponentesComuns/TableExemplo";

export const Venda = () => {
  const [loader, setLoader] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <FormVendas show={show} fullscreen={fullscreen} setShow={setShow} />
      <main>
        {loader && (
          <div class="encapsula-loader">
            <ThreeCircles
              visible={true}
              height="30"
              width="30"
              color="#212425"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        <div class="container-fluid px-4">
          <h1 class="mt-4">Vendas</h1>
          <ListCaminho paginaAtual="Vendas" />
          <div class="container d-flex justify-content-start align-items-center p-0">
            <div class="aba-active padd">
              <div class="d-flex justify-content-center align-items-center">
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
                <h6 class="m-1">Vendas</h6>
              </div>
            </div>
            <div
              class="aba-default mx-1"
              onClick={() => {
                setLoader(true);
                setTimeout(() => {
                  window.location.href = "/devolucao";
                }, 250);
              }}
            >
              <div class="d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-up-left-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm8.096 10.803L6 6.707v2.768a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5h3.975a.5.5 0 1 1 0 1H6.707l4.096 4.096a.5.5 0 1 1-.707.707" />
                </svg>
                <h6 class="m-1">Devoluções</h6>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <FormButtons setShow={setShow} />
            <div class="card-body p-0">
              <Table />
              <nav aria-label="...">
                <ul class="pagination justify-content-end mx-3">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      Anterior
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link teste" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2 <span class="sr-only">(atual)</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Próximo
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>{" "}
    </>
  );
};

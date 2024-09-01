import { useState } from "react";
import { FormCompras } from "../FormCompras";
import { ListCaminho } from '../ComponentesComuns/ListCaminho';
import { FormButtons } from "../ComponentesComuns/FormButtons";
import { Table } from "../ComponentesComuns/TableExemplo";

export const Compras = () => {

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
    <FormCompras show={show} setShow={setShow} fullscreen={fullscreen} />
      <main>
        <div class="container-fluid px-4">
          <h1 class="mt-4">Compras</h1>
          <ListCaminho paginaAtual="Compras" />
          <div class="container d-flex justify-content-start align-items-center p-0">
            <div class="aba-active padd">
              <div class="d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                <h6 class="m-1">Compras</h6>
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

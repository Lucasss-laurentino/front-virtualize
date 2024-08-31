import "./index.css";
import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { FormFinanceiro } from "../FormFinanceiro";
import { NavBar } from "../ComponentesComuns/Financeiro/NavBar";
import { Table } from "./Table";
import { BotoesNavegacaoTabela } from "../ComponentesComuns/Financeiro/BotoesNavegacaoTabela";
import { FormButtons } from "./FormButtons";

export const Financeiro = () => {

  const [loader, setLoader] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
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
        <FormFinanceiro show={show} fullscreen={fullscreen} setShow={setShow} />
        <div class="container-fluid px-4">
          <h1 class="mt-4">Financeiro</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item">
              <a href="/">Pagina inicial</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/financeiro">Financeiro</a>
            </li>
            <li class="breadcrumb-item active">Recebimento</li>{" "}
          </ol>
          <NavBar setLoader={setLoader} paginaAtual="recebimentos" />
          <div class="card mb-4">
            <FormButtons setShow={setShow} />
            <div class="card-body p-0">
              <Table />
              <nav aria-label="...">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 class="total-listado-tables">TOTAL LISTADO (0)</h6>
                  <p className="valor-paragrafo">R$ 0,00</p>
                </div>
                <hr />
                <BotoesNavegacaoTabela />
              </nav>
            </div>
          </div>
        </div>
      </main>{" "}
    </>
  );
};

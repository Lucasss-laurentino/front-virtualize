import { useState } from "react";
import "./index.css";
import { ThreeCircles } from "react-loader-spinner";
import { FormFinanceiroPagamento } from "../FormFinanceiroPagamento";
import { NavBar } from "../ComponentesComuns/Financeiro/NavBar";
import { BotoesNavegacaoTabela } from '../ComponentesComuns/Financeiro/BotoesNavegacaoTabela'
import { ListCaminho } from "../ComponentesComuns/ListCaminho";
import { FormButtons } from "../ComponentesComuns/FormButtons";
import { Table } from "../ComponentesComuns/TableExemplo";

export const FinanceiroPagamento = () => {
  const [loader, setLoader] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <FormFinanceiroPagamento show={show} fullscreen={fullscreen} setShow={setShow} />
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
          <h1 class="mt-4">Financeiro</h1>
          <ListCaminho paginaAtual="Pagamentos" />
          <NavBar setLoader={setLoader} paginaAtual="pagamentos" />
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

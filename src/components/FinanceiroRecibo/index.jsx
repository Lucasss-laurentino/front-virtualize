import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { FormFinanceiroRecibo } from "../FormFinanceiroRecibo";
import { NavBar } from "../ComponentesComuns/Financeiro/NavBar";
import { BotoesNavegacaoTabela } from '../ComponentesComuns/Financeiro/BotoesNavegacaoTabela'
import { ListCaminho } from "../ComponentesComuns/ListCaminho";
import { FormButtons } from "../ComponentesComuns/FormButtons";
import { Table } from "../ComponentesComuns/TableExemplo";
import { ListagemTabela } from "../ComponentesComuns/ListagemTabela";

export const FinanceiroRecibo = () => {
  const [loader, setLoader] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <FormFinanceiroRecibo show={show} fullscreen={fullscreen} setShow={setShow} />
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
          <ListCaminho paginaAtual="Recibos" />
          <NavBar setLoader={setLoader} paginaAtual="recibos" />
          <div class="card mb-4">
            <FormButtons setShow={setShow} />
            <div class="card-body p-0">
              <Table />
              <nav aria-label="...">
                <ListagemTabela />
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

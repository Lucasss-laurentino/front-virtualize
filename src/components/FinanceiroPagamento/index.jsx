import { useState } from "react";
import "./index.css";
import { ThreeCircles } from "react-loader-spinner";

import { ListCaminho, FormButtons, ListagemTabela, ContainerInfo } from "../ComponentesComuns/Index";

import { FormFinanceiroPagamento } from "../FormFinanceiroPagamento";
import { NavBar } from "../ComponentesComuns/Financeiro/NavBar";
import { BotoesNavegacaoTabela } from '../ComponentesComuns/Financeiro/BotoesNavegacaoTabela'
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
        <ContainerInfo paginaAtual="Financeiro">
          <ListCaminho paginaAtual="Pagamentos" />
          <NavBar setLoader={setLoader} paginaAtual="pagamentos" />
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
        </ContainerInfo>
      </main>{" "}
    </>
  );
};

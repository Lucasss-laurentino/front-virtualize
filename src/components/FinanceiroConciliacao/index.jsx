import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { ListCaminho, NavBar, FormButtons, 
  ListagemTabela, ContainerInfo, BotoesNavegacaoTabela } from "../ComponentesComuns/Index";

import { navButtons } from "../../financeiroButtons";

import { FormFinanceiroConciliacao } from "../FormFinanceiroConciliacao";
import { Table } from "../ComponentesComuns/TableExemplo";

export const FinanceiroConciliacao = () => {
  const [loader, setLoader] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <FormFinanceiroConciliacao show={show} fullscreen={fullscreen} setShow={setShow} />
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
          <ListCaminho paginaAtual="Conciliação" />
          <NavBar setLoader={setLoader} buttons={navButtons} />
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

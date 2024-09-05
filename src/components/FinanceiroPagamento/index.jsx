import { useState } from "react";
import "./index.css";
import { ThreeCircles } from "react-loader-spinner";

import {
  ListCaminho, NavBar, FormButtons,
  ListagemTabela, ContainerInfo, BotoesNavegacaoTabela,
  InfoCard,
  InfoCardBody
} from "../ComponentesComuns/Index";

import { navButtons } from "../../financeiroButtons";

import { FormFinanceiroPagamento } from "../FormFinanceiroPagamento";
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
          <NavBar setLoader={setLoader} buttons={navButtons} />
          <InfoCard>
            <FormButtons setShow={setShow} />
            <InfoCardBody>
              <Table />
              <nav aria-label="...">
                <ListagemTabela />
                <hr />
                <BotoesNavegacaoTabela />
              </nav>
            </InfoCardBody>
          </InfoCard>
        </ContainerInfo>
      </main>{" "}
    </>
  );
};

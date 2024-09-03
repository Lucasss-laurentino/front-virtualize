import "./index.css";
import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { ListCaminho, FormButtons, ListagemTabela, ContainerInfo, BotoesNavegacaoTabela } from "../ComponentesComuns/Index";

import { FormFinanceiro } from "../FormFinanceiro";
import { NavBar } from "../ComponentesComuns/Financeiro/NavBar";
import { Table } from "../ComponentesComuns/TableExemplo";

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
        <ContainerInfo paginaAtual="Financeiro">
          <ListCaminho paginaAtual="Recebimentos" />
          <NavBar setLoader={setLoader} paginaAtual="recebimentos" />
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

import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { ListCaminho, FormButtons, BotoesNavegacaoTabela, NavBar, InfoCard, InfoCardBody } from "../ComponentesComuns/Index";

import { navButtons } from "../../vendasButtons";

import { FormVendas } from "../FormVendas";
import { FormDevolucao } from "../FormDevolucoes";
import { Table } from "../ComponentesComuns/TableExemplo";

export const Devolucao = () => {
  const [loader, setLoader] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <main>
        <FormDevolucao show={show} setShow={setShow} fullscreen={fullscreen} />
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
          <h1 class="mt-4">Devoluções</h1>
          <ListCaminho paginaAtual="Devoluções" />
          <NavBar setLoader={setLoader} buttons={navButtons} />
          <InfoCard>
            <FormButtons setShow={setShow} />
            <InfoCardBody>
              <Table />
              <nav aria-label="...">
                <BotoesNavegacaoTabela />
              </nav>
            </InfoCardBody>
          </InfoCard>
        </div>
      </main>{" "}
    </>
  );
};

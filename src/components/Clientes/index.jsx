import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { ListCaminho, FormButtons, BotoesNavegacaoTabela, NavBar, InfoCard, InfoCardBody } from "../ComponentesComuns/Index";

import { navButtons } from "../../clientesButtons";

import { FormClientes } from "../FormClientes";
import { Table } from "../ComponentesComuns/TableExemplo";

export const Clientes = () => {
  const [loader, setLoader] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <main>
        <FormClientes show={show} setShow={setShow} fullscreen={fullscreen} />
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
          <h1 class="mt-4">Clientes</h1>
          <ListCaminho paginaAtual="Clientes" />
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
      </main>
    </>
  );
};

import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { ListCaminho, FormButtons, BotoesNavegacaoTabela, NavBar } from "../ComponentesComuns/Index";

import { navButtons } from "../../clientesButtons";

import { FormTransportadores } from "../FormTransportadores";
import { Table } from "../ComponentesComuns/TableExemplo";

export const Transportadores = () => {
  const [loader, setLoader] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <main>
        <FormTransportadores show={show} setShow={setShow} fullscreen={fullscreen} />
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
          <h1 class="mt-4">Transportadores</h1>
          <ListCaminho paginaAtual="Transportadores" />
          <NavBar setLoader={setLoader} buttons={navButtons} />
          <div class="card mb-4">
            <FormButtons setShow={setShow} />
            <div class="card-body p-0">
              <Table />
              <nav aria-label="...">
                <BotoesNavegacaoTabela />
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

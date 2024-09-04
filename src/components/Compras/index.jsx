import { useState } from "react";

import { ListCaminho, FormButtons, BotoesNavegacaoTabela, NavBar } from "../ComponentesComuns/Index";

import { FormCompras } from "../FormCompras";
import { Table } from "../ComponentesComuns/TableExemplo";

export const Compras = () => {

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);

  return (
    <>
    <FormCompras show={show} setShow={setShow} fullscreen={fullscreen} />
      <main>
        <div class="container-fluid px-4">
          <h1 class="mt-4">Compras</h1>
          <ListCaminho paginaAtual="Compras" />
          <NavBar setLoader={setLoader} buttons={[["/compras", "Compras"]]} />
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
      </main>{" "}
    </>
  );
};

import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { ListCaminho, FormButtons, BotoesNavegacaoTabela, NavBar, InfoCard, InfoCardBody } from "../ComponentesComuns/Index";

import { navButtons } from "../../produtosButtons";

import { Table } from "../ComponentesComuns/TableExemplo";

export const AjusteEstoque = () => {
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <main>
        {loader && (
          <div className="encapsula-loader">
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
          <h1 class="mt-4">Produtos</h1>
          <ListCaminho paginaAtual="Ajuste de Estoque" />
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

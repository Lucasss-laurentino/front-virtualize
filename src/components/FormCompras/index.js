import { useEffect, useState } from "react";

export const FormCompras = () => {
    const [form_hiden, setForm_hiden] = useState("form-hiden");

    useEffect(() => {
      setForm_hiden("form-show");
    });
  
    return (
      <>
        <div class={form_hiden}>
          <div class="formulario-header">
            <h5 class="titulo-formulario-header-financeiro">Nova venda</h5>
            <button
              type="button"
              class="btn-close-form"
              onClick={() => {
                setForm_hiden("form-hiden");
                window.location.href = "/vendas";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
          <div class="encapsula-formulario mb-5">
            <div class="container-fluid mx-2">
              <div class="row justify-content-center">
                <form class="formulario col-11 p-5">
                  <div class="row justify-content-center">
                    <div class="col-12 encapsula-input my-1">
                      <label class="label-form">Descrição</label>
                      <input class="col-12 input-descricao"/>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-4 encapsula-input my-1">
                      <label class="label-form">Valor</label>
                      <input class="col-12 input-descricao"/>
                    </div>
                    <div class="col-lg-2 encapsula-input my-1">
                      <label class="label-form">Receber agora</label>
                      <input class="col-12 input-descricao"/>
                    </div>
                    <div class="col-lg-3 encapsula-input my-1">
                      <label class="label-form">Data vencimento</label>
                      <input class="col-12 input-descricao"/>
                    </div>
                    <div class="col-lg-3 encapsula-input my-1">
                      <label class="label-form">Data crédito (previsão)</label>
                      <input class="col-12 input-descricao"/>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-12 encapsula-input my-1">
                      <label class="label-form">Recebido de</label>
                      <input class="col-12 input-descricao"/>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6 encapsula-input my-1">
                      <label class="label-form">Categoria</label>
                      <input class="col-12 input-descricao"/>
                    </div>
                    <div class="col-lg-6 encapsula-input my-1">
                      <label class="label-form">Palavra-chave</label>
                      <input class="col-12 input-descricao"/>
                    </div>
                  </div>
                  <hr class="my-4"/>
                  <div class="row justify-content-end">
                    <div class="col-lg-1 encapsula-input p-0 m-1">
                      <button class="btn btn-sm btn-dark">Salvar</button>
                    </div>
                    <div class="col-lg-1 encapsula-input p-0 m-1">
                      <button class="btn btn-sm btn-secondary">Voltar</button>
                    </div>
                  </div>                
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
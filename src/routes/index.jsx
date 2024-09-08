import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from '../components/Index';
import { Main } from '../components/Main';
import { Financeiro } from '../components/Financeiro';
import { Venda } from '../components/Vendas';
import { Compras } from '../components/Compras';
import { Produtos } from '../components/Produtos';
import { Clientes } from '../components/Clientes';
import { Login } from '../components/Login';
import { Criar_usuario } from '../components/Criar_usuario';
import { Esqueceu_senha } from '../components/Esqueceu_senha';
import { FormFinanceiro } from '../components/FormFinanceiro';
import { FormVendas } from '../components/FormVendas';
import { FormCompras } from '../components/FormCompras';
import { FinanceiroPagamento } from '../components/FinanceiroPagamento';
import { FinanceiroRecibo } from '../components/FinanceiroRecibo';
import { FinanceiroConciliacao } from '../components/FinanceiroConciliacao';
import { FormFinanceiroPagamento } from '../components/FormFinanceiroPagamento';
import { FormFinanceiroRecibo } from '../components/FormFinanceiroRecibo';
import { FormFinanceiroConciliacao } from '../components/FormFinanceiroConciliacao';
import { Devolucao } from '../components/Devolucao';
import { Fornecedores } from '../components/Fornecedores';
import { Transportadores } from '../components/Transportadores';
import { Servicos } from '../components/Servicos';
import { AjusteEstoque } from '../components/AjusteEstoque';
import { LoginProvider } from '../contexts/LoginContext';

export default function appRouter() {
    return (
      <LoginProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/" element={<Main />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/vendas" element={<Venda />} />
            <Route path="/compras" element={<Compras />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route
              path="/financeiro_pagamento"
              element={<FinanceiroPagamento />}
            />
            <Route path="/financeiro_recibo" element={<FinanceiroRecibo />} />
            <Route
              path="/financeiro_conciliacao"
              element={<FinanceiroConciliacao />}
            />
            <Route path="/devolucao" element={<Devolucao />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/transportadores" element={<Transportadores />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/ajuste_estoque" element={<AjusteEstoque />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/criar_usuario" element={<Criar_usuario />} />
          <Route path="/esqueceu_senha" element={<Esqueceu_senha />} />
          <Route path="/form_financeiro" element={<FormFinanceiro />} />
          <Route path="/form_vendas" element={<FormVendas />} />
          <Route path="/form_compras" element={<FormCompras />} />

          <Route
            path="/form_financeiro_pagamento"
            element={<FormFinanceiroPagamento />}
          />
          <Route
            path="/form_financeiro_recibo"
            element={<FormFinanceiroRecibo />}
          />
          <Route
            path="/form_financeiro_conciliacao"
            element={<FormFinanceiroConciliacao />}
          />
        </Routes>
      </Router>
      </LoginProvider>

    );
}
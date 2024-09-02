const ListCaminho = ({ paginaAtual }) => {
  return (
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item">
        <a href="/">Pagina inicial</a>
      </li>
      <li class="breadcrumb-item active">{paginaAtual}</li>{" "}
    </ol>
  )
}

export default ListCaminho
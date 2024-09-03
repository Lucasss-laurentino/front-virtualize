const ContainerInfo = ({ paginaAtual, children }) => {
    return (
        <div class="container-fluid px-4">
            <h1 class="mt-4">{paginaAtual}</h1>
            {children}
        </div>
    )
}

export default ContainerInfo
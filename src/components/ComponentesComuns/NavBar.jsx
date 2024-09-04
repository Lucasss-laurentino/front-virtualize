const NavBar = ({ setLoader, buttons }) => {

    const mudarPagina = (pagina) => {
        setLoader(true);
        setTimeout(() => {
            window.location.href = pagina;
        }, 250);
    }

    const definirCorBotao = (paginaAtual) => {
        if (paginaAtual === window.location.pathname) {
            return "aba-active";
        } else {
            return "aba-default";
        }
    }

    return (
        <div class="container d-flex justify-content-start align-items-center p-0">
            {buttons.map(button => {
                return (
                    <button className={`${definirCorBotao(button[0])} mx-1`} onClick={() => {
                        mudarPagina(button[0])
                    }}>
                        <h6 className="m-1">{button[1]}</h6>
                    </button>
                )
            })}
        </div>
    )

}

export default NavBar
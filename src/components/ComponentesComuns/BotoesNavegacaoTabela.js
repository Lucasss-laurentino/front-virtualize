export const BotoesNavegacaoTabela = () => {
    return (
        <ul class="pagination justify-content-end mx-3">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                    Anterior
                </a>
            </li>
            <li class="page-item">
                <a class="page-link teste" href="#">
                    1
                </a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">
                    2 <span class="sr-only">(atual)</span>
                </a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">
                    3
                </a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">
                    Próximo
                </a>
            </li>
        </ul>
    )
}
export const NavBarSvg = ({ className, children }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class={className}
            viewBox="0 0 16 16"
        >{children}</svg>
    )

}
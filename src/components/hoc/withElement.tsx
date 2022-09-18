import { FC, ReactNode } from 'react'

import { IElement } from "../types"
import { NavLink } from "react-router-dom";

interface IWithElementProps {
    className?: string,
    href?: string,
    element: IElement,
    children: ReactNode
}

export const WithElement: FC<IWithElementProps> = (props: IWithElementProps) => {
    switch (props.element) {
        case "div": return <div className={props.className}>
            {props.children}
        </div>
        case "header": return <header className={props.className}>
            {props.children}
        </header>
        case "main": return <main className={props.className}>
            {props.children}
        </main>
        case "footer": return <footer className={props.className}>
            {props.children}
        </footer>
        case "li": return <li className={props.className}>
            {props.children}
        </li>
        case "h1": return <h1 className={props.className}>
            {props.children}
        </h1>
        case "h2": return <h2 className={props.className}>
            {props.children}
        </h2>
        case "h3": return <h3 className={props.className}>
            {props.children}
        </h3>
        case "a": return <a href={props.href} target={'_blank'} className={props.className}>
            {props.children}
        </a>
        case "navLink": return <NavLink to={`${props.href}`} className={props.className}>
            {props.children}
        </NavLink>
        case "p": return <h2 className={props.className}>
            {props.children}
        </h2>
        case "span": return <span className={props.className}>
            {props.children}
        </span>
    }
}

WithElement.defaultProps = {
}
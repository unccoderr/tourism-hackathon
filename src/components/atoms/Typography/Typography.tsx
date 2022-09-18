import { FC } from 'react'

import { getClassname, IDefaultProps, IElement } from "../../index"
import './style.css'
import { WithElement } from "../../hoc";

type ITypographyVariant = 'h1' | 'h2' | 'p'
interface ITypographyProps extends IDefaultProps {
    element: IElement,
    variant: ITypographyVariant,
    href?: string,
}

const getVariantClassname = (element: ITypographyVariant) => {
    switch (element) {
        case "h1": return 'a__typography_h1'
        case "h2": return 'a__typography_h2'
        case "p": return 'a__typography_p'
    }
}

export const Typography: FC<ITypographyProps> = (props: ITypographyProps) => {
    const className = getClassname('a__typography', [
        getVariantClassname(props.variant)
    ], props.className)

    return <WithElement href={props.href} element={props.element} className={className}>
        {props.children}
    </WithElement>
}

Typography.defaultProps = {
    className: ''
}
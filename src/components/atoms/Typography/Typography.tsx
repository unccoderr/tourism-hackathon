import { FC } from 'react'

import { getClassname, DefaultProps, IElement } from "../../index"
import './style.css'

interface ITypographyProps extends DefaultProps {
    element: IElement
}

export const Typography: FC<ITypographyProps> = (props: ITypographyProps) => {
    const className = getClassname('', [], props.className)

    return <div className={className}>
        {props.children}
    </div>
}

Typography.defaultProps = {
    className: ''
}
import { FC } from 'react'

import { getClassname, IDefaultProps, IElement, WithElement } from "../../"
import './style.css'

interface IGridProps extends IDefaultProps {
    element?: IElement,
}

export const Grid: FC<IGridProps> = (props: IGridProps) => {
    const className = getClassname('a__grid', [], props.className)

    return <WithElement element={props.element!} className={className}>
        {props.children}
    </WithElement>
}

Grid.defaultProps = {
    className: '',
    element: 'div'
}
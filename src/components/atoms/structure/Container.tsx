import { FC } from 'react'

import { getClassname, IDefaultProps, IElement, WithElement } from "../../"
import './style.css'

interface IContainerProps extends IDefaultProps {
    element?: IElement
}

export const Container: FC<IContainerProps> = (props: IContainerProps) => {
    const className = getClassname('a__container', [], props.className)

    return <WithElement element={props.element!} className={className}>
		{props.children}
    </WithElement>
}

Container.defaultProps = {
    className: '',
    element: 'div'
}



import { FC } from 'react'

import { getClassname, DefaultProps } from "../../"
import './style.css'

interface IContainerProps extends DefaultProps {

}

export const Container: FC<IContainerProps> = (props: IContainerProps) => {
    const className = getClassname('a__container', [], props.className)

    return <div className={className}>
		{props.children}
    </div>
}

Container.defaultProps = {
    className: ''
}



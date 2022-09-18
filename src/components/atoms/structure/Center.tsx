import { FC } from 'react'

import { getClassname, IDefaultProps } from "../../"
import './style.css'

interface ICenterProps extends IDefaultProps {

}

export const Center: FC<ICenterProps> = (props: ICenterProps) => {
    const className = getClassname('a__center', [], props.className)

    return <div className={className}>
        {props.children}
    </div>
}

Center.defaultProps = {
    className: ''
}
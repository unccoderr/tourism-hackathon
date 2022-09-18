import { FC } from 'react'

import { Container, getClassname, IDefaultProps } from "../../"
import './style.css'

interface ILocationListPageProps extends IDefaultProps {

}

export const LocationListPage: FC<ILocationListPageProps> = (props: ILocationListPageProps) => {
    const className = getClassname('p__locationsList', [], props.className)

    return <Container element={'main'} className={className}>

    </Container>
}

LocationListPage.defaultProps = {
    className: ''
}



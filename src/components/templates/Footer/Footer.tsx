import { FC } from 'react'

import { Container, getClassname, IDefaultProps, Typography } from "../../"
import './style.css'

import { logoConstants, routingConstants } from "../../../constants"

interface IFooterProps extends IDefaultProps {

}

export const Footer: FC<IFooterProps> = (props: IFooterProps) => {
    const className = getClassname('t__footer', [], props.className)

    return <footer className={className}>
        <Container className={'t__footerWrapper'}>
            <Typography
                className={'t__footerWrapper__logo'}
                variant={'h1'}
                element={'h1'}
            >
                {logoConstants.name}
            </Typography>
            <div className={'t__footerWrapper__column'}>
                <Typography
                    className={'t__footerWrapper__columnHeader'}
                    variant={'h2'}
                    element={'h3'}
                >
                    навигация
                </Typography>
                <ul className={'t__footerWrapper__columnList'}>
                    <Typography
                        variant={'p'}
                        element={'li'}
                    >
                        <Typography
                            href={routingConstants.trail.baseUrl}
                            variant={'p'}
                            element={'navLink'}
                        >
                            маршруты
                        </Typography>
                    </Typography>
                    <Typography
                        variant={'p'}
                        element={'li'}
                    >
                        <Typography
                            href={routingConstants.location.baseUrl}
                            variant={'p'}
                            element={'navLink'}
                        >
                            локации
                        </Typography>
                    </Typography>
                    <Typography
                        variant={'p'}
                        element={'li'}
                    >
                        <Typography
                            href={routingConstants.blog.baseUrl}
                            variant={'p'}
                            element={'navLink'}
                        >
                            блог
                        </Typography>
                    </Typography>
                </ul>
            </div>
            <div className={'t__footerWrapper__column'}>
                <Typography
                    className={'t__footerWrapper__columnHeader'}
                    variant={'h2'}
                    element={'h3'}
                >
                    контакты
                </Typography>
                <ul className={'t__footerWrapper__columnList'}>
                    <Typography
                        variant={'p'}
                        element={'li'}
                    >
                        <Typography
                            href={'mailto:3dacademy@mail.ru'}
                            variant={'p'}
                            element={'a'}
                        >
                            3dacademy@mail.ru
                        </Typography>
                    </Typography>
                    <Typography
                        variant={'p'}
                        element={'li'}
                    >
                        <Typography
                            href={'tel:89163650336'}
                            variant={'p'}
                            element={'a'}
                        >
                            8 916 365 03 36
                        </Typography>
                    </Typography>
                </ul>
            </div>
        </Container>
    </footer>
}

Footer.defaultProps = {
    className: ''
}
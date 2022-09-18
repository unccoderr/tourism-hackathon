import { FC } from 'react'
import { NavLink } from "react-router-dom"

import { Container, getClassname, IDefaultProps, Typography } from "../../"
import './style.css'

import { logoConstants, routingConstants } from "../../../constants"

interface IHeaderProps extends IDefaultProps {

}

export const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
    const className = getClassname('t__header', [], props.className)

	return <header className={className}>
		<Container className={'t__headerWrapper'}>
			<Typography variant={'h1'} element={'navLink'} href={'/'}>
				<Typography variant={'h1'} element={'span'}>
					{logoConstants.name}
				</Typography>
			</Typography>
			<nav className={'t__headerWrapper__navbar'}>
				<ul className={'t__headerWrapper__navbarWrapper'}>
					<Typography variant={'h2'} element={'li'}>
						<Typography
							variant={'h2'}
							element={'navLink'}
							href={`/${routingConstants.trail.baseUrl}`}
						>
							Маршруты
						</Typography>
					</Typography>
					<Typography variant={'h2'} element={'li'}>
						<Typography
							variant={'h2'}
							element={'navLink'}
							href={`/${routingConstants.location.baseUrl}`}
						>
							Локации
						</Typography>
					</Typography>
					<Typography variant={'h2'} element={'li'}>
						<Typography
							variant={'h2'}
							element={'navLink'}
							href={`/${routingConstants.blog.baseUrl}`}
						>
							Блог
						</Typography>
					</Typography>
					<Typography variant={'h2'} element={'li'}>
						<Typography
							variant={'h2'}
							element={'navLink'}
							href={`/${routingConstants.contacts.baseUrl}`}
						>
							Контакты
						</Typography>
					</Typography>
				</ul>
			</nav>
		</Container>

	</header>;
}

Header.defaultProps = {
    className: ''
}




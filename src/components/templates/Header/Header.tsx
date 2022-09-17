import { FC } from 'react'

import { Container, getClassname, IDefaultProps } from "../../"

import { logoConstants } from "../../../constants"

interface IHeaderProps extends IDefaultProps {

}

export const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
    const className = getClassname('o__header', [], props.className)

	return <header className={className}>
		<Container>
			<h2>{logoConstants.name}</h2>
			<ul>
				<li>

				</li>
			</ul>
		</Container>

	</header>;
}

Header.defaultProps = {
    className: ''
}




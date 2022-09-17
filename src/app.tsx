import { FC } from 'react'
import { Route, Routes } from "react-router-dom"

import { Footer, Header, LandingPage, Container } from "./components"
import './styles/index.css'

interface IAppProps {
	mode: 'dev' | 'prod'
}

export const App: FC<IAppProps> = (props: IAppProps) => {

    return <>
		<Header />
        <Container>
			<Routes>
				<Route path={'/'} element={<LandingPage />} />
			</Routes>
		</Container>
		<Footer />
    </>
}

App.defaultProps = {
    mode: 'dev'
}



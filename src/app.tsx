import { FC } from 'react'

import { Footer, Header } from "./components"
import './styles/index.css'

import { IndexRouting } from "./routing";

interface IAppProps {
	mode: 'dev' | 'prod'
}

export const App: FC<IAppProps> = (props: IAppProps) => {
    return <>
		<Header />
		<IndexRouting />
		<Footer />
    </>
}

App.defaultProps = {
    mode: 'dev'
}



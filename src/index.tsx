import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from "./app"

const rootContainer = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootContainer)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App mode={'dev'} />
		</BrowserRouter>
	</React.StrictMode>
)



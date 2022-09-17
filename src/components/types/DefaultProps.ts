import { ReactNode } from "react"

export interface DefaultProps {
	children?: ReactNode,
	className?: string
}

export type IElement = 'div' | 'header' | 'main' | 'footer' | 'li'
	| 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'a'
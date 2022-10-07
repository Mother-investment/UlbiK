import { classNames } from 'shared'
import cls from './Portal.module.scss'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
	children: ReactNode
	element?: HTMLElement
}

export const Portal:React.FC<PortalProps> = (props) => {
	const {
		children,
		element = document.getElementById('root'),
		...otherProps
	} = props

	return createPortal(children, element)
}
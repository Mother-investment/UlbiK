import { classNames, Portal } from 'shared'
import cls from './Modal.module.scss'

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
	className?: string
	children: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal:React.FC<ModalProps> = (props) => {
	const { className, children, isOpen, onClose, lazy, ...otherProps } = props

	const [isClosing, setIsClosing] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const { theme } = useTheme()

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])
	const onkeydown = useCallback((e:KeyboardEvent) => {
		if(e.key === 'Escape'){
			closeHandler()
		}
	}, [closeHandler])
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onkeydown)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onkeydown)
		}
	}, [isOpen, onkeydown])

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	}

	if (lazy && !isMounted) {
		return null
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])} onMouseDown={closeHandler}>
				<div className={cls.overlay}>
					<div className={cls.content} onMouseDown={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
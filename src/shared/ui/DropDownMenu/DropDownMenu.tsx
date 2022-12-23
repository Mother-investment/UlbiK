import cls from './DropDownMenu.module.scss'
import { memo, MutableRefObject, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

interface DropDownMenuProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

const ANIMATION_DELAY = 400

export const DropDownMenu:React.FC<DropDownMenuProps> = memo((props) => {
	const { className, children, isOpen, onClose, ...otherProps } = props

	const menuRef = useRef() as MutableRefObject<HTMLDivElement>
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
	const [open, setOpen] = useState(false)
	const [isClosing, setIsClosing] = useState(false)
	const [isOpening, setIsOpening] = useState(false)

	const closeHandler = useCallback(() => {
		setIsClosing(true)
		timerRef.current = setTimeout(() => {
			onClose()
			setIsClosing(false)
		}, ANIMATION_DELAY)
	}, [onClose])

	const openHandler = useCallback(() => {
		setIsOpening(true)
		timerRef.current = setTimeout(() => {
			setOpen(true)
			setIsOpening(false)
		}, ANIMATION_DELAY)
	}, [])

	const onkeydown = useCallback((e:KeyboardEvent) => {
		if(e.key === 'Escape'){
			closeHandler()
		}
	}, [closeHandler])

	useEffect(() => {
		if(isOpen)openHandler()
	}, [isOpen, openHandler])

	useEffect(() => {
		openHandler()
		const handler = ({ target }: MouseEvent) => {
			if(menuRef.current && !menuRef.current?.contains(target as Node)) {
				closeHandler()
			}
		}
		const onkeydown = (e:KeyboardEvent) => {
			if(e.key === 'Escape'){
				closeHandler()
			}
		}

		window.addEventListener('keydown', onkeydown)
		document.addEventListener('mouseup', handler)
		return () => {
			clearTimeout(timerRef.current)
			document.removeEventListener('mouseup', handler)
			window.removeEventListener('keydown', onkeydown)
		}
	}, [closeHandler, onkeydown, openHandler])

	const mods: Mods = {
		[cls.opened]: open,
		[cls.isClosing]: isClosing,
		[cls.isOpening]: isOpening
	}

	return (
		<div className={classNames(cls.DropDownMenu, mods, [className])} {...otherProps} ref={menuRef}>
			{children}
		</div>
	)
})
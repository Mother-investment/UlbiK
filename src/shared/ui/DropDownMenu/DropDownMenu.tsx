import cls from './DropDownMenu.module.scss'
import { memo, MutableRefObject, SyntheticEvent, useEffect, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

export enum DropDownMenuDirection {
	TOP = 'directionTop',
	RIGHT = 'directionRight',
	BOTTOM = 'directionBottom',
	LEFT = 'directionLeft'
}

interface DropDownMenuProps {
	className?: string
	direction: DropDownMenuDirection
	isOpen: boolean
	onClose: () => void
}

export const DropDownMenu:React.FC<DropDownMenuProps> = memo((props) => {
	const { className, children, direction, isOpen, onClose, ...otherProps } = props

	const menuRef = useRef() as MutableRefObject<HTMLDivElement>

	useEffect(() => {
		const handler = ({ target }: MouseEvent) => {
			if(menuRef.current && !menuRef.current?.contains(target as Node)) {
				setTimeout(onClose, 1)
			}
		}

		document.addEventListener('mouseup', handler)
		return () => document.removeEventListener('mouseup', handler)
	})

	return (
		<div className={classNames(cls.DropDownMenu, { [cls.opened]: isOpen }, [className, cls[direction]])} {...otherProps} ref={menuRef}>
			{children}
		</div>
	)
})
import cls from './DropDownMenu.module.scss'
import { memo } from 'react'
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
	onClose?: () => void
}

export const DropDownMenu:React.FC<DropDownMenuProps> = memo((props) => {
	const { className, children, direction, isOpen, onClose, ...otherProps } = props

	return (
		<div className={classNames(cls.DropDownMenu, { [cls.opened]: isOpen }, [className, cls[direction]])} {...otherProps}>
			{children}
		</div>
	)
})
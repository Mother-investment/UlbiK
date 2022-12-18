import cls from './DropDownMenu.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

export enum DropDownMenuDirection {
	TOP = 'directionTop',
	RIGHT = 'directionTop',
	BOTTOM = 'directionTop',
	LEFT = 'directionTop'
}

interface DropDownMenuProps {
	className?: string
	direction: DropDownMenuDirection
}

export const DropDownMenu:React.FC<DropDownMenuProps> = memo((props) => {
	const { className, children, direction } = props

	return (
		<div className={classNames(cls.DropDownMenu, {}, [className, cls[direction]])}>
			{children}
		</div>
	)
})
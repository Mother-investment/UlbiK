import { classNames } from 'shared'
import cls from './Avatar.module.scss'
import { memo } from 'react'

export enum AvatarSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface AvatarProps {
	className?: string
	size: AvatarSize
	avatarLink?: string
	onClick?: () => void
}


export const Avatar:React.FC<AvatarProps> = memo((props) => {
	const {
		className,
		size,
		avatarLink = '',
		onClick
	} = props

	return (
		<img onClick={onClick} className={classNames(cls.Avatar, {}, [className, cls[size]])} src={avatarLink} />
	)
})
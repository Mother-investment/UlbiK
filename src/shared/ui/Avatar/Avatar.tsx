import cls from './Avatar.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AvatarSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface AvatarProps {
	className?: string
	size?: AvatarSize
	radius?: boolean
	src?: string
	onClick?: () => void
}


export const Avatar:React.FC<AvatarProps> = memo((props) => {
	const {
		className,
		size = AvatarSize.L,
		radius,
		src,
		onClick
	} = props

	return (
		<img onClick={onClick} className={classNames(cls.Avatar, { [cls.radius]: radius }, [className, cls[size]])} src={src || 'https://media.steampowered.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg'} />
	)
})
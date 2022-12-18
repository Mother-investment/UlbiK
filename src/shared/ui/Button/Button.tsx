import { ButtonHTMLAttributes } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
}

export enum ButtonColor {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	ATTN = 'attn'
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string
	theme?: ButtonTheme
	color?: ButtonColor;
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export const Button:React.FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		color = ButtonColor.SECONDARY,
		theme = ButtonTheme.CLEAR,
		square,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled
	}

	return (
		<button className={classNames(cls.Button, mods, [className, cls[size], cls[theme], cls[color]])} disabled={disabled} {...otherProps}>
			{children}
		</button>
	)
}
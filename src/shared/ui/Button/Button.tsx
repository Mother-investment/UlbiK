import { ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared'
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
	OUTLINE = 'outline',
	OUTLINE_INVERTED = 'outlineInverted',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export const Button:React.FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props

	const mods: Record<string, boolean> = {
		[cls[theme]]: true,
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]: disabled
	}

	return (
		<button className={classNames(cls.Button, mods, [className])} disabled={disabled} {...otherProps}>
			{children}
		</button>
	)
}
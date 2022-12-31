import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	ATTN = 'attn'
}

export enum TextAling {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center'
}
interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	aling?: TextAling
	link?: boolean
	spacing?: boolean
	onClick?: () => void
}

export const Text:React.FC<TextProps> = (props) => {
	const { className, title, text, theme = TextTheme.SECONDARY, aling = TextAling.LEFT, onClick, link, spacing } = props

	const mods: Mods = {
		[cls.link]: !!onClick || link,
		[cls.spacing]: spacing
	}

	return (
		<div className={classNames(cls.Text, mods, [className, cls[theme], cls[aling]])} onClick={onClick}>
			{title && <h3 className={cls.title}>{title}</h3>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}
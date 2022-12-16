import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	ERROR = 'error'
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
}

export const Text:React.FC<TextProps> = (props) => {
	const { className, title, text, theme = TextTheme.PRIMARY, aling = TextAling.LEFT } = props


	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme], cls[aling]])}>
			{title && <h3 className={cls.title}>{title}</h3>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}
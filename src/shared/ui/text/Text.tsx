import { classNames } from 'shared'
import cls from './Text.module.scss'

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error'
}

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
}

export const Text:React.FC<TextProps> = (props) => {
	const { className, title, text, theme = TextTheme.PRIMARY, ...otherProps } = props

	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme]])}>
			{title && <h3 className={cls.title}>{title}</h3>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}
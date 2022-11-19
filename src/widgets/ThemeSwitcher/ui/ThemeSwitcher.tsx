import { useTheme } from 'app/providers/ThemeProvider'
import cls from './ThemeSwitcher.module.scss'
import Icon from 'shared/assets/icons/themeIcon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher:React.FC<ThemeSwitcherProps> = (props) => {
	const { className } = props
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames(cls.container, {}, [className])} onClick={toggleTheme}>
			<Icon className={classNames(cls.ThemeSwitcher, {}, [])} />
		</div>
	)
}
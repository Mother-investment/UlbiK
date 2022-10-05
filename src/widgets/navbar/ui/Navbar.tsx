import { useTranslation } from 'react-i18next'
import { classNames } from 'shared'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation('common')

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.switchers}>
				<ThemeSwitcher className={cls.switchersItem} />
				<LangSwitcher className={cls.switchersItem} />
			</div>
			<nav className={cls.navigation}>
			</nav>
		</div>
	)
}

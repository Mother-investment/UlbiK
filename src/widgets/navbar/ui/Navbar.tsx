import { useTranslation } from 'react-i18next'
import { AppLink, classNames } from 'shared'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
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
				<AppLink className={cls.navigationItem} theme={AppLinkTheme.SECONDARY} to='/'>
					{t('Главная страница')}
				</AppLink>
				<AppLink className={cls.navigationItem} theme={AppLinkTheme.SECONDARY} to='/about'>
					{t('О странице')}
				</AppLink>
			</nav>
		</div>
	)
}

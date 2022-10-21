import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink, Button, classNames } from 'shared'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation()

	const [collapsed, setCollapsed] = useState(false)
	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button data-testid='sidebar-toggle' theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.collapseBtn} onClick={onToggle} square size={ButtonSize.L}>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				<AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
					<MainIcon className={cls.icon} />
					<span className={cls.link} >{t('Главная страница')}</span>
				</AppLink>
				<AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>{t('О странице')}</span>
				</AppLink>
			</div>
		</div>
	)
}

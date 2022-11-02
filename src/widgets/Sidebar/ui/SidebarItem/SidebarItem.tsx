import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from '../../module/items'

interface SidebarItemProps {
	item?: SidebarItemType
}

export const SidebarItem:React.FC<SidebarItemProps> = (props) => {
	const { ...otherProps } = props
	const { t } = useTranslation()

	return (
		<AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
			<MainIcon className={cls.icon} />
			<span className={cls.link} >{t('Главная страница')}</span>
		</AppLink>
	)
}
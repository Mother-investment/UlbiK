import { useTranslation } from 'react-i18next'
import { AppLink, classNames } from 'shared'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from '../../module/items'
import { memo } from 'react'

interface SidebarItemProps {
	item?: SidebarItemType
	collapsed: boolean
}

export const SidebarItem:React.FC<SidebarItemProps> = memo((props) => {
	const { item, collapsed } = props
	const { t } = useTranslation()

	return (
		<AppLink className={classNames(cls.item, { [cls.collapsed]: collapsed })} theme={AppLinkTheme.SECONDARY} to={item.path}>
			<item.Icon className={cls.icon} />
			<span className={cls.link} >{t(item.text)}</span>
		</AppLink>
	)
})
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './NavbarItem.module.scss'
import { NavbarItemType } from '../../module/items'
import { memo } from 'react'

interface NavbarItemProps {
	item: NavbarItemType
}

export const NavbarItem:React.FC<NavbarItemProps> = memo((props) => {
	const { item } = props
	const { t } = useTranslation()

	return (
		<AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={item.path}>
			<item.Icon className={cls.icon} />
			<span className={cls.link} >{t(item.text)}</span>
		</AppLink>
	)
})
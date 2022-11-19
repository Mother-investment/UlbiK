import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from '../../module/items'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'
import { Text } from 'shared/ui/Text/Text'

interface SidebarItemProps {
	item: SidebarItemType
	collapsed: boolean
}

export const SidebarItem:React.FC<SidebarItemProps> = memo((props) => {
	const { item, collapsed } = props
	const { t } = useTranslation()

	return (
		<LuminousContainer className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed })} >
			<Link className={cls.link} to={item.path}>
				<item.Icon className={cls.icon} />
				{ collapsed && <Text className={cls.link} >{t(item.text)}</Text>}
			</Link>
		</LuminousContainer>
	)
})
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
}

export const SidebarItem:React.FC<SidebarItemProps> = memo((props) => {
	const { item } = props
	const { t } = useTranslation()

	return (
		<LuminousContainer className={cls.SidebarItem} hover >
			<Link className={cls.link} to={item.path}>
				<div className={cls.icon}><item.Icon /></div>
				<Text className={cls.text} text={t(item.text)} />
			</Link>
		</LuminousContainer>
	)
})
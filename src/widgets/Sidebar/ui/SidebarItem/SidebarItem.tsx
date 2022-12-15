import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from '../../module/items'
import { memo, useCallback, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

interface SidebarItemProps {
	item: SidebarItemType
}

export const SidebarItem:React.FC<SidebarItemProps> = memo((props) => {
	const { item } = props
	const { t } = useTranslation()

	const [description, setDescription] = useState(false)
	const ontoggleDescription = useCallback(() => {
		setDescription(!description)
	}, [description])
	return (
		<LuminousContainer className={cls.SidebarItem} hover >
			<Link className={cls.link} to={item.path} onMouseEnter={ontoggleDescription} onMouseLeave={ontoggleDescription}>
				<div className={cls.icon}><item.Icon /></div>
				<Text className={classNames(cls.text, { [cls.opened]: description }, [])} text={t(item.text)} theme={TextTheme.SECONDARY}/>
			</Link>
		</LuminousContainer>
	)
})
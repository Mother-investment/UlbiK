import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { SidebarItemType } from 'widgets/Sidebar/module/items'

interface SidebarItemProps {
	item: SidebarItemType
}

export const SidebarItem:React.FC<SidebarItemProps> = memo((props) => {
	const { item } = props
	const { t } = useTranslation()
	const [description, setDescription] = useState(false)
	const isAuth = useSelector(getUserAuthData)

	const showDescription = useCallback(() => {
		setDescription(true)
	}, [])
	const hideDescription = useCallback(() => {
		setDescription(false)
	}, [])

	if (item.authOnly && !isAuth) {
		return null
	}

	return (
		<Link className={cls.link} to={item.path} onMouseEnter={showDescription} onMouseLeave={hideDescription}>
			<LuminousContainer className={cls.SidebarItem} background hover >
				<div className={cls.icon}><item.Icon /></div>
				<Text className={classNames(cls.text, { [cls.opened]: description }, [])} text={t(item.text)} theme={TextTheme.WHITE}/>
			</LuminousContainer>
		</Link>
	)
})
import { memo, useState } from 'react'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItemList } from '../../module/items'
import { classNames } from 'shared/lib/classNames/classNames'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
	const { className } = props

	return (
		<div data-testid='sidebar' className={classNames(cls.Sidebar, {}, [className])}>
			{SidebarItemList.map((item) => (
				<SidebarItem key={item.path} item={item} />
			))}
		</div>
	)
})

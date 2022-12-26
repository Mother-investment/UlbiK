import { memo, useMemo } from 'react'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { classNames } from 'shared/lib/classNames/classNames'
import { SidebarItemsList } from '../../module/items'

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
	const { className } = props

	const itemsList = useMemo(() => SidebarItemsList.map((item) => (
		<SidebarItem
			key={item.path}
			item={item}
		/>
	)), [])

	return (
		<div data-testid='sidebar' className={classNames(cls.Sidebar, {}, [className])}>
			{itemsList}
		</div>
	)
})

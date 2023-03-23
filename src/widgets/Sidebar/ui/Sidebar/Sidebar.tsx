import { memo, useMemo } from 'react'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../module/selectors/getSidebarItems'

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
	const { className } = props
	const sidebarItemsList = useSelector(getSidebarItems)

	const itemsList = useMemo(() => sidebarItemsList.map((item) => (
		<SidebarItem
			key={item.path}
			item={item}
		/>
	)), [sidebarItemsList])

	return (
		<aside data-testid='sidebar' className={classNames(cls.Sidebar, {}, [className])}>
			{itemsList}
		</aside>
	)
})

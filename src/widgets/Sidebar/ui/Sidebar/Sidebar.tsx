import { memo, useState } from 'react'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItemList } from '../../module/items'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
	const { className } = props

	const [collapsed, setCollapsed] = useState(false)
	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			{/* <Button data-testid='sidebar-toggle' theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.collapseBtn} onClick={onToggle} square size={ButtonSize.L}>
				{collapsed ? '>' : '<'}
			</Button> */}
			<div className={cls.container}>
				{SidebarItemList.map((item) => (
					<SidebarItem key={item.path} item={item} collapsed={collapsed} />
				))}
			</div>
		</div>
	)
})

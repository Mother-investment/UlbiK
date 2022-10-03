import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, classNames } from 'shared'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'

interface SidebarProps {
className?: string
}

export const Sidebar:React.FC<SidebarProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation('common')

	const [collapsed, setCollapsed] = useState(false)
	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button data-testid="sidebar-toggle" theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.collapseBtn} onClick={onToggle} square size={ButtonSize.L}>{collapsed ? '>' : '<'}</Button>
		</div>
	)
}
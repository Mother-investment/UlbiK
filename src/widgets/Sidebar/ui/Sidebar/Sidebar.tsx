import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared'
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
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>{t('Переключить')}</button>
		</div>
	)
}
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, classNames } from 'shared'
import { ThemeButton } from 'shared/ui/Button/Button'
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
			<Button data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} className={classNames(cls.button, {}, [className])} onClick={onToggle}>{t('Переключить')}</Button>
		</div>
	)
}
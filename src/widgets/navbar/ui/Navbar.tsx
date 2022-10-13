import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, classNames } from 'shared'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation('common')

	const [isOpen, setIsOpen] = useState(false)

	const onCloseModal = useCallback(() => {
		setIsOpen(false)
	}, [])
	const onShowModal = useCallback(() => {
		setIsOpen(true)
	}, [])

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.switchers}>
				<ThemeSwitcher className={cls.switchersItem} />
				<LangSwitcher className={cls.switchersItem} />
			</div>
			<nav className={cls.navigation}>
				<Button onClick={onShowModal}>{t('О странице')}</Button>
			</nav>
			<LoginModal isOpen={isOpen} onClose={onCloseModal} />
		</div>
	)
}

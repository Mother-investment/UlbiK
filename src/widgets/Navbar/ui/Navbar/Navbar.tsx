import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, classNames } from 'shared'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Navbar.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { NavbarItemList } from '../../module/items'
import { NavbarItem } from '../NavbarItem/NavbarItem'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)
	const authData = useSelector(getUserAuthData)


	const onCloseModal = useCallback(() => {
		setIsOpen(false)
	}, [])
	const onShowModal = useCallback(() => {
		setIsOpen(true)
	}, [])
	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.switchers}>
				<ThemeSwitcher className={cls.switchersItem} />
				<LangSwitcher className={cls.switchersItem} />
			</div>
			<nav className={cls.navigation}>
				<Button className={cls.item} onClick={authData ? onLogout : onShowModal}>{authData ? t('Выйти') : t('Войти')}</Button>
			</nav>
			<div className={cls.items}>
				{NavbarItemList.map((item) => (
					<NavbarItem key={item.path} item={item} />
				))}
			</div>
			{isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
		</div>
	)
}

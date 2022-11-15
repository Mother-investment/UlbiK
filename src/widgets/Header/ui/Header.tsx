import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Header.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getUserAvatar, userActions } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface HeaderProps {
    className?: string
}

export const Header: React.FC<HeaderProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)
	const avatarLink = useSelector(getUserAvatar)

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
		<header className={classNames(cls.Header, {}, [className])}>
			<nav className={cls.switchers}>
				<ThemeSwitcher className={cls.switchersItem} />
				<LangSwitcher className={cls.switchersItem} />
			</nav>
			<div className={cls.headerLogin}>
				<Avatar />
				{/* <Button className={cls.item} onClick={authData ? onLogout : onShowModal}>{authData ? t('Выйти') : t('Войти')}</Button> */}
			</div>
			{isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
		</header>
	)
}

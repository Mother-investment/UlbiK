import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Header.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getUserAvatar, getUserUsername, userActions } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'features/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'

interface HeaderProps {
    className?: string
}

export const Header: React.FC<HeaderProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)
	const avatarLink = useSelector(getUserAvatar)
	const Username = useSelector(getUserUsername)

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
				<LuminousContainer className={cls.switchersItem} skew hover>
					<ThemeSwitcher className={cls.switchersElement}/>
				</LuminousContainer>
				<LuminousContainer className={cls.switchersItem} skew hover>
					<LangSwitcher className={cls.switchersElement}/>
				</LuminousContainer>

			</nav>
			<div className={cls.loginMenu}>
				<div className={cls.login}>
					<LuminousContainer defaultGlow hover>
						<Avatar src={avatarLink} className={cls.avatar} onClick={Username ? onLogout : onShowModal} />
					</LuminousContainer>
					{/* <Button className={cls.item} onClick={authData ? onLogout : onShowModal}>{authData ? t('Выйти') : t('Войти')}</Button> */}
				</div>
			</div>
			{isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
		</header>
	)
}

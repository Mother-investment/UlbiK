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
import { DropDownMenu, DropDownMenuDirection } from 'shared/ui/DropDownMenu/DropDownMenu'

interface HeaderProps {
    className?: string
}

export const Header: React.FC<HeaderProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [isOpenOptions, setIsOpenOptions] = useState(false)
	const avatarLink = useSelector(getUserAvatar)
	const Username = useSelector(getUserUsername)

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false)
	}, [])
	const onShowModal = useCallback(() => {
		setIsOpenModal(true)
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
				<DropDownMenu className={cls.dropDownMenu} direction={DropDownMenuDirection.TOP}>

				</DropDownMenu>
			</div>
			{isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />}
		</header>
	)
}

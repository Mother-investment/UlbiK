import { LoginModal } from 'features/AuthByUsername'
import { MutableRefObject, useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'features/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { DropDownMenu } from 'shared/ui/DropDownMenu/DropDownMenu'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { Link } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [isOpenOptions, setIsOpenOptions] = useState(false)
	const userData = useSelector(getUserAuthData)

	const onShowModal = useCallback(() => setIsOpenModal(true), [])
	const onCloseModal = useCallback(() => setIsOpenModal(false), [])

	const onShowOptions = useCallback(() => setIsOpenOptions(true), [])
	const onCloseOptions = useCallback(() => setIsOpenOptions(false), [])

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
		setIsOpenOptions(false)
	}, [dispatch])

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
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
						<Avatar src={userData?.avatar} className={cls.avatar} onClick={userData?.username ? onShowOptions : onShowModal}/>
					</LuminousContainer>
				</div>
				{isOpenOptions && <DropDownMenu isOpen={isOpenOptions} className={cls.dropDownMenu} onClose={onCloseOptions}>
					<Link className={cls.menuItem} to={RoutePath.profile}>
						<Text className={cls.menuItem} text={t('Профиль')} theme={TextTheme.PRIMARY} aling={TextAling.CENTER} link={true}/>
					</Link>
					<Text className={cls.menuItem} text={t('Выйти')} theme={TextTheme.ATTN} onClick={onLogout} aling={TextAling.CENTER}/>
				</DropDownMenu>}
			</div>
			{isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />}
		</header>
	)
}

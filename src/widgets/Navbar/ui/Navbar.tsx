import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserId, userActions } from 'entities/User'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'features/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { DropDownMenu } from 'shared/ui/DropDownMenu/DropDownMenu'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { Link } from 'react-router-dom'
import { AuthByUsername } from 'features/AuthByUsername/ui/AuthByUsername/AuthByUsername'
import { getRouteProfile } from 'shared/const/router'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const [isOpenOptions, setIsOpenOptions] = useState(false)
	const dispatch = useDispatch()

	const userId = useSelector(getUserId)

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
						<AuthByUsername className={cls.avatar} onClick={onShowOptions} />
					</LuminousContainer>
				</div>

				{isOpenOptions &&
					<DropDownMenu isOpen={isOpenOptions} className={cls.dropDownMenu} onClose={onCloseOptions}>
						<Link className={cls.menuItem} to={getRouteProfile(userId)} onClick={onCloseOptions}>
							<Text className={cls.menuItem} theme={TextTheme.PRIMARY} aling={TextAling.CENTER} link spacing
								text={t('Профиль')}
							/>
						</Link>
						<Text className={cls.menuItem} onClick={onLogout} theme={TextTheme.ATTN} aling={TextAling.CENTER} spacing
							text={t('Выйти')}
						/>
					</DropDownMenu>
				}
			</div>
		</header>
	)
}

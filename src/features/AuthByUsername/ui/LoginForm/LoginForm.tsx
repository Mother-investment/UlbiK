import { Button, classNames, Text } from 'shared'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getUsername } from '../../model/selectors/getLoginState/getUsername'
import { getPassword } from '../../model/selectors/getLoginState/getPassword'
import { getErrorAndIsLoading } from '../../model/selectors/getLoginState/getErrorAndIsLoading'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { TextTheme } from 'shared/ui/text/Text'
import { getUserAuthData } from 'entities/User'

export interface LoginFormProps {
	className?: string
	onClose: () => void
}

const LoginForm:React.FC<LoginFormProps> = memo((props) => {
	const { className, onClose, ...otherProps } = props
	const username = useSelector(getUsername)
	const password = useSelector(getPassword)
	const { error, isLoading } = useSelector(getErrorAndIsLoading)
	const authData = useSelector(getUserAuthData)

	const { t } = useTranslation()
	const dispatch = useDispatch()

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])
	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])
	const onClickLogin = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [dispatch, password, username])

	useEffect(() => {
		if(authData){onClose()}
	},[authData, onClose])

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t('Авторизация')}/>
			{error && <Text theme={TextTheme.ERROR} text={t('Вы ввели неверный логин или пароль')} />}
			<div className={cls.item}>
				<p className={cls.text}>{t('Логин')}</p>
				<Input className={cls.input} type='text' onChange={onChangeUsername} value={username} />
			</div>
			<div className={cls.item}>
				<p className={cls.text}>{t('Пароль')}</p>
				<Input className={cls.input} type='password' onChange={onChangePassword} value={password} />
			</div>
			<Button disabled={isLoading} theme={ButtonTheme.OUTLINE_INVERTED} className={cls.loginBtn} onClick={onClickLogin} >{t('Войти')}</Button>
		</div>
	)
})

export default LoginForm
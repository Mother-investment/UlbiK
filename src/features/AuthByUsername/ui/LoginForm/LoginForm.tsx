import { Button, classNames, Text, useAppDispatch } from 'shared'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getUsername } from '../../model/selectors/getLoginState/getUsername/getUsername'
import { getPassword } from '../../model/selectors/getLoginState/getPassword/getPassword'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { TextTheme } from 'shared/ui/text/Text'
import { getError } from '../../model/selectors/getLoginState/getError/getError'
import { getIsLoading } from '../../model/selectors/getLoginState/getIsLoading/getIsLoading'
import { DynamicModuleLoader, ReducersList } from 'shared'

export interface LoginFormProps {
	className?: string
	onClose: () => void
}

const initialReducers: ReducersList = {
	loginForm: loginReducer
}

const LoginForm:React.FC<LoginFormProps> = memo((props) => {
	const { className, onClose, ...otherProps } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	const username = useSelector(getUsername)
	const password = useSelector(getPassword)
	const isLoading = useSelector(getIsLoading)
	const error = useSelector(getError)

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])
	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])
	const onClickLogin = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }))
		if(result.meta.requestStatus === 'fulfilled'){
			onClose()
			onChangeUsername('')
			onChangePassword('')
		}
	}, [dispatch, onChangePassword, onChangeUsername, onClose, password, username])

	return (
		<DynamicModuleLoader reducers={initialReducers}>
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
		</DynamicModuleLoader>
	)
})

export default LoginForm
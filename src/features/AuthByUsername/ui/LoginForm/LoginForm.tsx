import { Button, classNames, Text } from 'shared'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getUsername } from '../../model/selectors/getLoginState/getUsername'
import { getPassword } from '../../model/selectors/getLoginState/getPassword'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { TextTheme } from 'shared/ui/text/Text'
import { getUserAuthData } from 'entities/User'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { getError } from '../../model/selectors/getLoginState/getError'
import { getIsLoading } from '../../model/selectors/getLoginState/getIsLoading'

export interface LoginFormProps {
	className?: string
	onClose: () => void
}

const LoginForm:React.FC<LoginFormProps> = memo((props) => {
	const { className, onClose, ...otherProps } = props
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const store = useStore() as ReduxStoreWithManager

	const username = useSelector(getUsername)
	const password = useSelector(getPassword)
	const isLoading = useSelector(getIsLoading)
	const error = useSelector(getError)
	const authData = useSelector(getUserAuthData)

	useEffect(() =>{
		store.reducerManager.add('loginForm', loginReducer)
		dispatch({ type:'@INIT loginForm redicer' })

		return () => {
			store.reducerManager.remove('loginForm')
			dispatch({ type:'@DESTROY loginForm redicer' })
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	useEffect(() => {
		if(authData){onClose()}
	},[authData, onClose])

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])
	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])
	const onClickLogin = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [dispatch, password, username])

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
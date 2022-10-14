import { Button, classNames } from 'shared'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
className?: string
}

export const LoginForm:React.FC<LoginFormProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input className={cls.input} type='text' />
			<Input className={cls.input} type='password' />
			<Button className={cls.loginBtn} >{t('Войти')}</Button>
		</div>
	)
}
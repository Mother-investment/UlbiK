import { Button, classNames } from 'shared'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'

interface LoginFormProps {
className?: string
}

export const LoginForm:React.FC<LoginFormProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<input type='text' />
			<input type='password' />
			<Button>{t('Войти')}</Button>
		</div>
	)
}
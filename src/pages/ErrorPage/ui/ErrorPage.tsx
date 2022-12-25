import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
	className?: string
}

const ErrorPage:React.FC<ErrorPageProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()

	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.ErrorPage, {}, [className])}>
			<p>{t('Произошла ошибка')}</p>
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	)
}

export default ErrorPage
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
className?: string
}

export const PageError:React.FC<PageErrorProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation()

	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>{t('Произошла ошибка')}</p>
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	)
}
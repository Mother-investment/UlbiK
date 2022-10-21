import { useTranslation } from 'react-i18next'
import { classNames } from 'shared'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
className?: string
}

export const NotFoundPage:React.FC<NotFoundPageProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			{t('Страница не найдена')}
		</div>
	)
}
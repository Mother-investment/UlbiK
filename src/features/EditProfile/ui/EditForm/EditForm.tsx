import { useTranslation } from 'react-i18next'
import cls from './EditForm.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'

interface EditFormProps {
	className?: string
}

export const EditForm:React.FC<EditFormProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.EditForm, {}, [className])}>
			<Text title={t('Редактировать профиль')} />
			
		</div>
	)
})
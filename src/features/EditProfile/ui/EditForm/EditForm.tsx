import { useTranslation } from 'react-i18next'
import cls from './EditForm.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'

interface EditFormProps {
	className?: string
}

export const EditForm:React.FC<EditFormProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()

	return (
		<form className={classNames(cls.EditForm, {}, [className])}>
			<Text title={t('Редактировать профиль')} />
			<div className={cls.item}>
				<Text text={t('Имя')} />
				<Input />
			</div>
			<div className={cls.item}>
				<Text text={t('Фамилия')} />
				<Input />
			</div>
			<div className={cls.item}>
				<Text text={t('День рождения')} />
				<Input type='date'/>
			</div>
			<div className={cls.item}>
				<Text text={t('Страна')} />
				<select>
					<option>{t('Россия')}</option>
					<option>{t('США')}</option>
				</select>
			</div>
			<div className={cls.item}>
				<Text text={t('Город')} />
				<select>
					<option>{t('Новосибирск')}</option>
					<option>{t('Москва')}</option>
				</select>
			</div>
		</form>
	)
})
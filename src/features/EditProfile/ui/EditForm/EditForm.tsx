import { useTranslation } from 'react-i18next'
import cls from './EditForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'

interface EditFormProps {
	className?: string
}

type FormValues = {
	firstName: string;
	lastName: string;
  }

export const EditForm:React.FC<EditFormProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()
	const { register, handleSubmit } = useForm<FormValues>()
	const onSubmit: SubmitHandler<FormValues> = data => console.log(data)

	return (
		<form className={classNames(cls.EditForm, {}, [className])} onSubmit={handleSubmit(onSubmit)}>
			<Text title={t('Редактировать профиль')} />
			<div className={cls.item}>
				<Text text={t('Имя')} />
				<input {...register('firstName')} />
			</div>
			<div className={cls.item}>
				<Text text={t('Фамилия')} />
				<input {...register('lastName')} />
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
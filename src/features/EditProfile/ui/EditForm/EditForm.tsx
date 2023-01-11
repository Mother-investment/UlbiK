import { useTranslation } from 'react-i18next'
import cls from './EditForm.module.scss'
import { Resolver, SubmitHandler, useForm } from 'react-hook-form'
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

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.firstName ? values : {},
		errors: !values.firstName
			? {
				firstName: {
					type: 'required',
					message: 'This is required.'
				}
			}
			: {}
	}
}

export const EditForm:React.FC<EditFormProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver })
	const onSubmit: SubmitHandler<FormValues> = data => console.log(data)

	return (
		<form className={classNames(cls.EditForm, {}, [className])} onSubmit={handleSubmit(onSubmit)}>
			<Text title={t('Редактировать профиль')} />
			<div className={cls.item}>
				<Text text={t('Имя')} />
				<Input register={register('firstName')} />
				{errors?.firstName && <p>{errors.firstName.message}</p>}
			</div>
			<div className={cls.item}>
				<Text text={t('Фамилия')} />
				<Input register={register('lastName')} />
			</div>
			<div className={cls.item}>
				<Text text={t('День рождения')} />
				<Input type='date'/>
			</div>
			<div className={cls.item}>
				<Text text={t('Страна')} />
				<select {...register('country')} options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" },
              { label: "Other", value: "other" }
				]}>
					<option value="russia">{t('Россия')}</option>
					<option value="usa">{t('США')}</option>
				</select>
				<select>
					<option></option>
					<option></option>
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
import { useTranslation } from 'react-i18next'
import cls from './EditForm.module.scss'
import { Resolver, SubmitHandler, useForm } from 'react-hook-form'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Select } from 'shared/ui/Select/Select'

interface EditFormProps {
	className?: string
}

type FormValues = {
	firstName: string
	lastName: string
	birthday: number
	country: string
	city: string
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
				{errors?.lastName && <p>{errors.lastName.message}</p>}
			</div>
			<div className={cls.item}>
				<Text text={t('День рождения')} />
				<Input type='date' register={register('birthday')} />
				{errors?.birthday && <p>{errors.birthday.message}</p>}
			</div>
			<div className={cls.item}>
				<Text text={t('Страна')} />
				<Select {...register('country')} options={[
					{ label: t('Россия'), value: 'russia' },
					{ label: t('США'), value: 'usa' }
				]} />
			</div>
			<div className={cls.item}>
				<Text text={t('Город')} />
				<Select {...register('city')} options={[
					{ label: t('Новосибирск'), value: 'novosibirsk' },
					{ label: t('Москва'), value: 'Moscow' }
				]} />
			</div>
		</form>
	)
})
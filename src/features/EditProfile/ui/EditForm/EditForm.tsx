import { useTranslation } from 'react-i18next'
import cls from './EditForm.module.scss'
import { Controller, Resolver, SubmitHandler, useForm } from 'react-hook-form'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Select } from 'shared/ui/Select/Select'
import { OptionName, OptionsItems } from './OptionsItems'

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
	const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver })
	const onSubmit: SubmitHandler<FormValues> = data => console.log(data)

	return (
		<form className={classNames(cls.EditForm, {}, [className])} onSubmit={handleSubmit(onSubmit)}>
			<Text title={t('Редактировать профиль')} />
			<div className={cls.item}>
				<Text text={t('Имя')} />
				<Input register={register('firstName')} />
				{errors?.firstName && <Text text={errors.firstName.message} theme={TextTheme.ATTN} />}
			</div>
			<div className={cls.item}>
				<Text text={t('Фамилия')} />
				<Input register={register('lastName')} />
				{errors?.lastName && <Text text={errors.lastName.message} theme={TextTheme.ATTN} />}
			</div>
			<div className={cls.item}>
				<Text text={t('День рождения')} />
				<Input type='date' register={register('birthday')} />
				{errors?.birthday && <Text text={errors.birthday.message} theme={TextTheme.ATTN} />}
			</div>
			<div className={cls.item}>
				<Text text={t('Страна')} />
				<Controller
					name='country'
					control={control}
					rules={{
						required: 'Поле обязательное'
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => <>
						<Select
							value={value}
							options={OptionsItems(OptionName.COUNTRY)}
							onChange={onChange}
						/>
						{error && <Text text={error.message} theme={TextTheme.ATTN} />}
					</>
					}
				/>
			</div>
			{/* <div className={cls.item}>
				<Text text={t('Город')} />
				<Controller
					name='city'
					control={control}
					rules={{
						required: 'Поле обязательное'
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => <>
						<Select
							value={t('Москва')}
							options={OptionsItems(OptionName.CITY)}
							onChange={onChange}
						/>
						{error && <Text text={error.message} theme={TextTheme.ATTN} />}
					</>
					}
				/>
			</div> */}
			<input type="submit" />
		</form>
	)
})

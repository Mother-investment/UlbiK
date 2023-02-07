import { useTranslation } from 'react-i18next'
import cls from './EditForm.module.scss'
import { Controller, Resolver, SubmitHandler, useForm, useFormState, useWatch } from 'react-hook-form'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { IOption, Select } from 'shared/ui/Select/Select'
import { OptionName, OptionsItems } from './OptionsItems'
import { useSelector } from 'react-redux'
import { getOptionsCountries } from './../../model/getOptionsCountries/getOptionsCountries'
import { getOptionsСities, IСitiesInTheCountry } from 'features/EditProfile/model/getOptionsСities/getOptionsСities'
import { Loader } from 'shared/ui/Loader/Loader'
import { Status } from 'shared/const/common'
import { getAddressesStatus } from 'entities/Addresses'
import { useBirthDateCreator } from 'shared/lib/hooks/useBirthDateCreator/useBirthDateCreator'

interface EditFormProps {
	className?: string
}

interface FormValues {
	firstName: string
	lastName: string
	dayBirth: string
	monthBirth: string
	yearBirth: string
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

	const [cities, setCities] = useState<IOption[]>([])
	const [dayBirth, setDayBirth] = useState<IOption[]>([])
	const [birthDate, getDaysBirthDate] = useBirthDateCreator()

	const status: Status | undefined = useSelector(getAddressesStatus)
	const countries: IOption[] | undefined = useSelector(getOptionsCountries)
	const сitiesInit: IСitiesInTheCountry[] | undefined = useSelector(getOptionsСities)


	const { register, watch, resetField, control, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver })
	const onSubmit: SubmitHandler<FormValues> = data => console.log(data)
	const birthDatValues = watch(['monthBirth', 'yearBirth'])
	const dayBirthValue = watch('dayBirth')
	const countryValue = watch('country')


	if(status === 'loading' || countries == undefined || сitiesInit == undefined) {
		return (
			<div className={classNames(cls.EditForm, {}, [className, cls.loading])}><Loader /></div>
		)
	}

	if(status === 'error' || undefined) {
		return (
			<div className={classNames(cls.EditForm, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ATTN}
					aling={TextAling.CENTER}
					title={t('Произошла ошибка при загрузке настроек')}
					text={t('Попробуйте обновить страницу')}
				/>
			</div>
		)
	}

	if(birthDatValues) {
		getDaysBirthDate(...birthDatValues)
	}
	if(birthDate.days.length !== dayBirth.length) {
		setDayBirth(birthDate.days)
	}
	if(+dayBirthValue > dayBirth.length) {
		resetField('dayBirth')
	}
	if(сitiesInit && countryValue) {
		const newCities = сitiesInit.find(item => item.country === countryValue)?.сities || []
		if(cities != newCities) {
			setCities(newCities)
			resetField('city')
		}
	}

	return (
		<form className={classNames(cls.EditForm, {}, [className])} onSubmit={handleSubmit(onSubmit)}>
			<Text title={t('Редактировать профиль')} />

			<div className={cls.formItem}>
				<Text text={t('Имя')} />
				<Input register={register('firstName')} />
				{errors?.firstName && <Text text={errors.firstName.message} theme={TextTheme.ATTN} />}
			</div>

			<div className={cls.formItem}>
				<Text text={t('Фамилия')} />
				<Input register={register('lastName')} />
				{errors?.lastName && <Text text={errors.lastName.message} theme={TextTheme.ATTN} />}
			</div>

			<div className={cls.formItem}>
				<Text text={t('День рождения')} />
				<div className={cls.birthday}>
					<Controller
						name='dayBirth'
						control={control}
						rules={{
							required: 'Поле обязательное'
						}}
						render={({ field: { onChange, value }, fieldState: { error } }) => <>
							<Select
								className={cls.birthdayItem}
								value={value}
								searchOff
								options={dayBirth}
								onChange={onChange}

							/>
						</>
						}
					/>
					<Controller
						name='monthBirth'
						control={control}
						rules={{
							required: 'Поле обязательное'
						}}
						render={({ field: { onChange, value }, fieldState: { error } }) => <>
							<Select
								className={cls.birthdayItem}
								value={value}
								searchOff
								options={birthDate.months}
								onChange={onChange}

							/>
						</>
						}
					/>
					<Controller
						name='yearBirth'
						control={control}
						rules={{
							required: 'Поле обязательное'
						}}
						render={({ field: { onChange, value }, fieldState: { error } }) => <>
							<Select
								className={cls.birthdayItem}
								value={value}
								searchOff
								options={birthDate.years}
								onChange={onChange}

							/>
						</>
						}
					/>
				</div>
			</div>

			<div className={cls.formItem}>
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
							options={countries}
							onChange={onChange}
						/>
						{error && <Text text={error.message} theme={TextTheme.ATTN} />}
					</>
					}
				/>
			</div>

			<div className={cls.formItem}>
				<Text text={t('Город')} />
				<Controller
					name='city'
					control={control}
					rules={{
						required: 'Поле обязательное'
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => <>
						<Select
							value={value}
							options={cities}
							onChange={onChange}
							isDisabled={!countryValue}
						/>
						{error && <Text text={error.message} theme={TextTheme.ATTN} />}
					</>
					}
				/>
			</div>

			<input type="submit" />
		</form>
	)
})

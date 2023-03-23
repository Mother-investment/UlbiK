import { useTranslation } from 'react-i18next'
import cls from './EditForm.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { IOption, Select } from 'shared/ui/Select/Select'
import { useSelector } from 'react-redux'
import { getOptionsCountries } from '../../model/selectors/getOptionsCountries/getOptionsCountries'
import { getOptionsСities } from 'features/EditProfile/model/selectors/getOptionsСities/getOptionsСities'
import { Loader } from 'shared/ui/Loader/Loader'
import { useBirthDateCreator } from 'shared/lib/hooks/useBirthDateCreator/useBirthDateCreator'
import { Button, ButtonColor, ButtonTheme } from 'shared/ui/Button/Button'
import { getAddressesStatus } from 'entities/Addresses'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { FormValues } from '../../model/types/EditProfileTypes'

interface EditFormProps {
	className?: string
}

export const EditForm:React.FC<EditFormProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()

	const dispatch = useAppDispatch()

	const [cities, setCities] = useState<IOption[]>([])
	const [dayBirth, setDayBirth] = useState<IOption[]>([])
	const [birthDate, getDaysBirthDate] = useBirthDateCreator()

	const status = useSelector(getAddressesStatus)
	const countries = useSelector(getOptionsCountries)
	const сitiesInit = useSelector(getOptionsСities)


	const {
		register,
		watch,
		resetField,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<FormValues> = data => dispatch(updateProfileData(data))

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
				<Input
					className={errors.firstName ? cls.errorField : t('Тут будет ошибка')}
					placeholder={t('Введите имя')}
					register={register(
						'firstName',
						{ required: true, maxLength: 50, pattern: /^[a-zа-яё\s]+$/i }
					)}
				/>
				{<Text
					hidden={!errors.firstName}
					text={
						errors.firstName?.type === 'required' ? t('Заполните поле') :
							errors.firstName?.type === 'pattern' ? t('Поле заполнено не верно') :
								errors.firstName?.type === 'maxLength' ? t('Превышено допустимое количество символов') : t('Тут будет ошибка')
					}
					theme={TextTheme.ATTN}
				/>}
			</div>

			<div className={cls.formItem}>
				<Text text={t('Фамилия')} />
				<Input
					className={errors.lastName ? cls.errorField : t('Тут будет ошибка')}
					placeholder={t('Ведите фамилию')}
					register={register(
						'lastName',
						{ required: true, maxLength: 50, pattern: /^[a-zа-яё\s]+$/i }
					)}
				/>
				{<Text
					hidden={!errors.lastName}
					text={
						errors.lastName?.type === 'required' ? t('Заполните поле') :
							errors.lastName?.type === 'pattern' ? t('Поле заполнено не верно') :
								errors.lastName?.type === 'maxLength' ? t('Превышено допустимое количество символов') : t('Тут будет ошибка')
					}
					theme={TextTheme.ATTN}
				/>}
			</div>

			<div className={cls.formItem}>
				<Text text={t('День рождения')} />
				<div className={cls.birthday}>
					<Controller
						name='dayBirth'
						control={control}
						rules={{
							required: t('Поле обязательное')
						}}
						render={({ field: { onChange, value } }) => (
							<Select
								placeholder={t('День')}
								className={cls.birthdayItem}
								value={value}
								searchOff
								options={dayBirth}
								onChange={onChange}

							/>
						)}
					/>
					<Controller
						name='monthBirth'
						control={control}
						rules={{
							required: t('Поле обязательное')
						}}
						render={({ field: { onChange, value } }) => (
							<Select
								placeholder={t('Месяц')}
								className={cls.birthdayItem}
								value={value}
								searchOff
								options={birthDate.months}
								onChange={onChange}

							/>
						)}
					/>
					<Controller
						name='yearBirth'
						control={control}
						rules={{
							required: t('Поле обязательное')
						}}
						render={({ field: { onChange, value } }) => (
							<Select
								placeholder={t('Год')}
								className={cls.birthdayItem}
								value={value}
								searchOff
								options={birthDate.years}
								onChange={onChange}

							/>
						)}
					/>
				</div>
				{<Text
					hidden={
						!(errors.dayBirth?.type === 'required' ||
						errors.monthBirth?.type === 'required' ||
						errors.yearBirth?.type === 'required')
					}
					text={
						(
							errors.dayBirth?.type === 'required' ||
							errors.monthBirth?.type === 'required' ||
							errors.yearBirth?.type === 'required'
						) ? t('Поле обязательное') : t('Тут будет ошибка')
					}
					theme={TextTheme.ATTN}
				/>}
			</div>

			<div className={cls.formItem}>
				<Text text={t('Страна')} />
				<Controller
					name='country'
					control={control}
					rules={{
						required: t('Поле обязательное')
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<div>
							<Select
								placeholder={t('Выберите страну')}
								value={value}
								options={countries}
								onChange={onChange}
							/>
							{<Text
								hidden={!error}
								text={error?.message || t('Тут будет ошибка')}
								theme={TextTheme.ATTN}
							/>}
						</div>
					)}
				/>
			</div>

			<div className={cls.formItem}>
				<Text text={t('Город')} />
				<Controller
					name='city'
					control={control}
					rules={{
						required: t('Поле обязательное')
					}}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<div>
							<Select
								placeholder={t('Выберите город')}
								value={value}
								options={cities}
								onChange={onChange}
								isDisabled={!countryValue}
							/>
							{<Text
								hidden={!error}
								text={error?.message || t('Тут будет ошибка')}
								theme={TextTheme.ATTN}
							/>}
						</div>
					)}
				/>
			</div>

			<Button type='submit' theme={ButtonTheme.OUTLINE} color={ButtonColor.SECONDARY}>{t('Сохранить')}</Button>
		</form>
	)
})

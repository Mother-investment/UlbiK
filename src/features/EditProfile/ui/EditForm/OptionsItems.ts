import { useTranslation } from 'react-i18next'
import { IOption } from 'shared/ui/Select/Select'

export enum OptionName {
    COUNTRY = 'country',
	CITY = 'city'
}

interface IOptions {
	country: IOption[]
	city: IOption[]
}

export const OptionsItems = (name : OptionName) => {
	const { t } = useTranslation()

	const options: IOptions = {
		country: [
			{ label: t('Россия'), value: 'россия' },
			{ label: t('США'), value: 'сша' }
		],
		city: [
			{ label: t('Новосибирск'), value: 'новосибирск' },
			{ label: t('Москва'), value: 'москва' }
		]
	}

	return options[name]
}


export const getValue = (value: string, name: OptionName) => {
	return value ? OptionsItems(name).find((option) => option.value === value) : ''
}
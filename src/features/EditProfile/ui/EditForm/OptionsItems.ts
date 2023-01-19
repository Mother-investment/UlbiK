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
			{ label: t('Россия'), value: 'russia' },
			{ label: t('США'), value: 'usa' }
		],
		city: [
			{ label: t('Новосибирск'), value: 'novosibirsk' },
			{ label: t('Москва'), value: 'Moscow' }
		]
	}

	return options[name]
}


export const getValue = (value: string, name: OptionName) => {
	return value ? OptionsItems(name).find((option) => option.value === value) : ''
}
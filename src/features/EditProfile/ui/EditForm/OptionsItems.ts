import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { IOption } from 'shared/ui/Select/Select'

interface IOptionsItems {
	value: IOption
	name: string
}

export const OptionsItems = memo((props: IOptionsItems) => {
	const [value, name] = props
	const { t } = useTranslation()

	const options = {
		country: [
			{ label: t('Россия'), value: 'russia' },
			{ label: t('США'), value: 'usa' }
		]
	}
	return 123


})
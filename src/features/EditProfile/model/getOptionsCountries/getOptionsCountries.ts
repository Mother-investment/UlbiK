import { createSelector } from '@reduxjs/toolkit'
import { getAddresses } from 'entities/Addresses'
import { useTranslation } from 'react-i18next'
import { regOnlyLowerLetters } from 'shared/const/regularExpressions'
import { IOption } from 'shared/ui/Select/Select'

export const getOptionsCountries = createSelector(
	getAddresses,
	(addresses) => {
		if(addresses) {
			const { t } = useTranslation()
			const countries: IOption[] = addresses.map(address => (
				{
					label: t(address.country),
					value: address.country.replace(regOnlyLowerLetters, '')
				}
			))

			return countries
		}
	},
)